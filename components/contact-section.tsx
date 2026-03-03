"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"
import { personalInfo } from "@/lib/data"

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/Hedriel",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "hernan-gonzalezma",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <SectionHeading label="// get in touch" title="Contact" />

        <motion.p
          variants={fadeInUp}
          className="mb-8 text-pretty leading-relaxed text-muted-foreground"
        >
          {"I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to collaborate or just say hello."}
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={fadeInUp}
              whileHover={{ y: -2 }}
              href={link.href}
              target={link.label === "GitHub" || link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "GitHub" || link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="flex min-w-0 flex-col items-center gap-3 overflow-hidden rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
            >
              <link.icon className="text-primary" size={22} />
              <div className="w-full min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {link.label}
                </p>
                <p className="mt-1 break-all font-mono text-xs text-muted-foreground">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
