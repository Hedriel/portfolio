"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { education } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeading label="// education" title="Education" />

      <div className="flex flex-col gap-6">
        {education.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {item.period}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
