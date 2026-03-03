"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import type { Experience } from "@/lib/data"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Content */}
      <div className="pb-12">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h3 className="font-semibold text-foreground">
            {experience.role}
          </h3>
          <span className="text-muted-foreground">{"at"}</span>
          <span className="font-medium text-primary">
            {experience.company}
          </span>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <span>{experience.period}</span>
          <span className="hidden sm:inline">{"/"}</span>
          <span>{experience.location}</span>
        </div>

        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[10px] text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
