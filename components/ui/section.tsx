"use client";

import { motion } from "framer-motion";
import { sectionViewport, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("px-6 py-12 md:py-24", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="mx-auto max-w-3xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
