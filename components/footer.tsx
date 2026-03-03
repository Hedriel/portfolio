"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

export function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="border-t border-border px-6 py-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {`{ built with Next.js & Framer Motion }`}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Hernan Gonzalez`}
        </p>
      </div>
    </motion.footer>
  )
}
