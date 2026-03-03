"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"
import { education } from "@/lib/data"

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <SectionHeading label="// education" title="Education" />

        <div className="flex flex-col gap-6">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {edu.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
