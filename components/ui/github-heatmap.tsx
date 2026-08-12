"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeInUp } from "@/lib/animations";
import { personalInfo } from "@/lib/content";
import {
  fetchContributionHeatmap,
  HEATMAP_CELL_SIZE,
  HEATMAP_GAP,
  HEATMAP_STEP,
  LEVEL_COLORS,
  WEEKDAY_LABELS,
  type ContributionHeatmap,
  type HeatmapCell,
} from "@/lib/github";

interface GitHubHeatmapProps {
  username: string;
}

export function GitHubHeatmap({ username }: GitHubHeatmapProps) {
  const [heatmap, setHeatmap] = useState<ContributionHeatmap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const data = await fetchContributionHeatmap(username, controller.signal);
        setHeatmap(data);
      } catch {
        if (controller.signal.aborted) return;
        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();
    return () => controller.abort();
  }, [username]);

  useEffect(() => {
    if (!gridRef.current || !heatmap?.weeks.length) return;
    requestAnimationFrame(() => {
      if (gridRef.current) {
        gridRef.current.scrollLeft = gridRef.current.scrollWidth;
      }
    });
  }, [heatmap]);

  if (loading) {
    return (
      <motion.div variants={fadeInUp}>
        <div className="flex items-center justify-center rounded-lg border border-border bg-card py-8">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      </motion.div>
    );
  }

  if (error || !heatmap || heatmap.weeks.length === 0) {
    return (
      <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
        Could not load the contribution graph.{" "}
        <a
          href={personalInfo.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          View GitHub profile
        </a>
      </motion.p>
    );
  }

  return (
    <motion.div variants={fadeInUp}>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`${personalInfo.github.url}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          View Repositories →
        </a>
        <span className="font-mono text-xs text-muted-foreground">
          {heatmap.totalLastYear.toLocaleString()} contributions in the last year
        </span>
      </div>

      <div
        ref={gridRef}
        className="no-scrollbar overflow-x-auto rounded-lg border border-border bg-card p-4"
      >
        <div className="min-w-fit">
          <div className="relative mb-1 h-4" style={{ marginLeft: "28px" }}>
            {heatmap.monthLabels.map((month, index) => (
              <span
                key={`${month.label}-${index}`}
                className="absolute font-mono text-[10px] text-muted-foreground"
                style={{ left: `${month.colIndex * HEATMAP_STEP}px` }}
              >
                {month.label}
              </span>
            ))}
          </div>

          <div className="flex gap-0.5">
            <div className="flex flex-col pr-1" style={{ gap: `${HEATMAP_GAP}px` }}>
              {WEEKDAY_LABELS.map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className="font-mono text-[10px] text-muted-foreground"
                  style={{
                    height: `${HEATMAP_CELL_SIZE}px`,
                    lineHeight: `${HEATMAP_CELL_SIZE}px`,
                    visibility: index % 2 === 0 ? "hidden" : "visible",
                  }}
                >
                  {day}
                </span>
              ))}
            </div>

            {heatmap.weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex flex-col"
                style={{ gap: `${HEATMAP_GAP}px` }}
              >
                {week.map((day, dayIndex) => (
                  <HeatmapCellSquare
                    key={day?.date ?? `pad-${weekIndex}-${dayIndex}`}
                    day={day}
                    weekIndex={weekIndex}
                    dayIndex={dayIndex}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-end gap-1.5">
            <span className="font-mono text-[10px] text-muted-foreground">
              Less
            </span>
            {([0, 1, 2, 3, 4] as const).map((level) => (
              <div
                key={level}
                className={`rounded-[2px] ${LEVEL_COLORS[level]}`}
                style={{
                  width: `${HEATMAP_CELL_SIZE}px`,
                  height: `${HEATMAP_CELL_SIZE}px`,
                }}
              />
            ))}
            <span className="font-mono text-[10px] text-muted-foreground">
              More
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeatmapCellSquare({
  day,
  weekIndex,
  dayIndex,
}: {
  day: HeatmapCell;
  weekIndex: number;
  dayIndex: number;
}) {
  const size = {
    width: `${HEATMAP_CELL_SIZE}px`,
    height: `${HEATMAP_CELL_SIZE}px`,
  };

  if (!day) {
    return <div style={size} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: weekIndex * 0.005 + dayIndex * 0.008,
        duration: 0.15,
      }}
      title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
      className={`cursor-default rounded-[2px] ${LEVEL_COLORS[day.level]} transition-colors hover:ring-1 hover:ring-foreground/20`}
      style={size}
    />
  );
}
