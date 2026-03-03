"use client"

import { motion } from "framer-motion"
import { Github, Mail, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 font-mono text-sm tracking-widest text-primary"
        >
          {"// hello world"}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xl text-muted-foreground sm:text-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          {personalInfo.about}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={18} />
            <span>{personalInfo.location}</span>
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <span>scroll down</span>
            <motion.svg
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
