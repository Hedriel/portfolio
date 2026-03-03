"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"
import { GitHubActivity } from "./github-activity"

export function GitHubSection() {
  return (
    <section id="github" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <SectionHeading label="// open source" title="GitHub Activity" />
        <GitHubActivity username="Hedriel" />
      </motion.div>
    </section>
  )
}
