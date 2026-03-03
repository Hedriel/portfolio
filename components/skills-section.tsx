"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { SkillIcon } from "./skill-icon";
import { skills } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

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
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  const categories = Object.entries(grouped);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          }}
        >
          <SectionHeading label="// tech stack" title="Skills" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], colIndex) => (
            <motion.div
              key={category}
              variants={columnContainer(colIndex)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              <motion.h3
                variants={labelVariant}
                className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
              >
                {categoryLabels[category]}
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
      </div>
    </section>
  );
}
