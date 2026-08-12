"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { languages, personalInfo } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <Section id="about">
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
    </Section>
  );
}
