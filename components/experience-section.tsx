"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"
import { ExperienceCard } from "./experience-card"
import { experiences } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <SectionHeading label="// work history" title="Experience" />

        <div className="ml-1">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
