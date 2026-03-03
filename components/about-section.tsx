"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"
import { personalInfo, languages } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <SectionHeading label="// about me" title="About" />

        <motion.p
          variants={fadeInUp}
          className="text-pretty leading-relaxed text-muted-foreground"
        >
          {personalInfo.about}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8">
          <h3 className="mb-4 font-mono text-sm tracking-widest text-primary">
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
              >
                {lang.name}{" "}
                <span className="text-muted-foreground">({lang.level})</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
