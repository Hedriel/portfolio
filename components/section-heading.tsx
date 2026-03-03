"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface SectionHeadingProps {
  label: string
  title: string
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeInUp} className="mb-12">
      <p className="mb-2 font-mono text-sm tracking-widest text-primary">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-primary/40" />
    </motion.div>
  )
}
