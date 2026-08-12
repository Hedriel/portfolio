"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { recommendations } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function RecommendationsSection() {
  return (
    <Section id="recommendations">
      <SectionHeading label="// recommendations" title="What People Say" />

      <div className="flex flex-col gap-6">
        {recommendations.map((recommendation) => (
          <motion.div
            key={recommendation.id}
            variants={fadeInUp}
            className="relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Quote size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {recommendation.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {recommendation.relationship}
                </p>
              </div>
            </div>

            <blockquote className="relative border-l-2 border-primary/20 pl-4">
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{recommendation.text}&rdquo;
              </p>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
