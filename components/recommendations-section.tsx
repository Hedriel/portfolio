"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"
import { recommendations } from "@/lib/data"

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <SectionHeading
          label="// recommendations"
          title="What People Say"
        />

        <div className="flex flex-col gap-6">
          {recommendations.map((rec) => (
            <motion.div
              key={rec.id}
              variants={fadeInUp}
              className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Quote size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {rec.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {rec.relationship}
                  </p>
                </div>
              </div>

              <blockquote className="relative pl-4 border-l-2 border-primary/20">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  {'"'}{rec.text}{'"'}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
