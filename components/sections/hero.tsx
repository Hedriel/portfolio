"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo, socialLinks } from "@/lib/content";
import { SocialIcon } from "@/components/ui/social-icon";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div
        className="pointer-events-none absolute inset-0 rounded-full border-foreground opacity-[0.03]"
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
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <SocialIcon id={link.id} />
              <span>{link.label}</span>
            </a>
          ))}
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
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
