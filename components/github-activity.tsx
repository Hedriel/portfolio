"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeInUp } from "@/lib/animations"

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

const LEVEL_COLORS: Record<number, string> = {
  0: "bg-secondary",
  1: "bg-primary/20",
  2: "bg-primary/40",
  3: "bg-primary/70",
  4: "bg-primary",
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

function groupIntoWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = []
  let currentWeek: ContributionDay[] = []

  for (const day of days) {
    const dayOfWeek = new Date(day.date + "T00:00:00").getUTCDay()
    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek)
      currentWeek = []
    }
    currentWeek.push(day)
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  return weeks
}

function getMonthLabels(weeks: ContributionDay[][]) {
  const labels: { label: string; colIndex: number }[] = []
  let lastMonth = -1

  weeks.forEach((week, i) => {
    if (week.length === 0) return
    const month = new Date(week[0].date + "T00:00:00").getUTCMonth()
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], colIndex: i })
      lastMonth = month
    }
  })

  return labels
}

interface GitHubActivityProps {
  username: string
}

export function GitHubActivity({ username }: GitHubActivityProps) {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([])
  const [totalContributions, setTotalContributions] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        )
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()

        const days: ContributionDay[] = (data.contributions || []).map(
          (d: { date: string; count: number; level: number }) => ({
            date: d.date,
            count: d.count,
            level: d.level as 0 | 1 | 2 | 3 | 4,
          })
        )

        const grouped = groupIntoWeeks(days)
        setWeeks(grouped)
        setTotalContributions(data.total?.lastYear ?? 0)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  if (loading) {
    return (
      <motion.div variants={fadeInUp} className="mt-10">
        <h3 className="mb-4 font-mono text-sm tracking-widest text-primary">
          GitHub Activity
        </h3>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-center py-8">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        </div>
      </motion.div>
    )
  }

  if (error || weeks.length === 0) {
    return null
  }

  const monthLabels = getMonthLabels(weeks)
  const cellSize = 11
  const gap = 2
  const step = cellSize + gap

  return (
    <motion.div variants={fadeInUp} className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-mono text-sm tracking-widest text-primary">
          GitHub Activity
        </h3>
        <span className="font-mono text-xs text-muted-foreground">
          {totalContributions.toLocaleString()} contributions in the last year
        </span>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border bg-card p-4">
        <div className="min-w-fit">
          {/* Month labels */}
          <div className="relative mb-1 h-4" style={{ marginLeft: "28px" }}>
            {monthLabels.map((m, i) => (
              <span
                key={`${m.label}-${i}`}
                className="absolute font-mono text-[10px] text-muted-foreground"
                style={{ left: `${m.colIndex * step}px` }}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-0.5">
            {/* Day labels */}
            <div className="flex flex-col pr-1" style={{ gap: `${gap}px` }}>
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] text-muted-foreground"
                  style={{
                    height: `${cellSize}px`,
                    lineHeight: `${cellSize}px`,
                    visibility: i % 2 === 0 ? "hidden" : "visible",
                  }}
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Contribution squares */}
            {weeks.map((week, wi) => {
              const firstDayOfWeek = new Date(week[0].date + "T00:00:00").getUTCDay()

              return (
                <div key={wi} className="flex flex-col" style={{ gap: `${gap}px` }}>
                  {/* Pad empty cells for the first week if it doesn't start on Sunday */}
                  {Array.from({ length: firstDayOfWeek }).map((_, pi) => (
                    <div
                      key={`pad-${pi}`}
                      style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                    />
                  ))}
                  {week.map((day, di) => (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: wi * 0.005 + di * 0.008,
                        duration: 0.15,
                      }}
                      title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                      className={`rounded-[2px] ${LEVEL_COLORS[day.level]} cursor-default transition-colors hover:ring-1 hover:ring-foreground/20`}
                      style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                    />
                  ))}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-3 flex items-center justify-end gap-1.5">
            <span className="font-mono text-[10px] text-muted-foreground">
              Less
            </span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`rounded-[2px] ${LEVEL_COLORS[level]}`}
                style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
              />
            ))}
            <span className="font-mono text-[10px] text-muted-foreground">
              More
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
