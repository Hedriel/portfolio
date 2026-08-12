"use client";

import { motion } from "framer-motion";
import { skillsByCategory } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillIcon } from "@/components/ui/skill-icon";

const columnContainer = (columnIndex: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: columnIndex * 0.3,
      staggerChildren: 0.08,
    },
  },
});

const itemCascade = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const labelVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading label="// tech stack" title="Skills" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillsByCategory.map(({ category, label, items }, columnIndex) => (
          <motion.div
            key={category}
            variants={columnContainer(columnIndex)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={labelVariant}
              className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase"
            >
              {label}
            </motion.h3>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-none">
              {items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemCascade}
                  whileHover={{ x: 4 }}
                  className="group flex cursor-default items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <SkillIcon
                    name={skill.name}
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  />
                  <span className="font-mono text-xs text-secondary-foreground transition-colors group-hover:text-primary">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
