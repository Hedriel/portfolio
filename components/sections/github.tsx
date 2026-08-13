"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { featuredProjects, personalInfo } from "@/lib/content";
import { GitHubHeatmap } from "@/components/ui/github-heatmap";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function GitHubSection() {
  return (
    <Section id="github">
      <SectionHeading label="// open source" title="GitHub Activity" />
      <GitHubHeatmap username={personalInfo.github.username} />

      <motion.h3
        variants={fadeInUp}
        className="mt-16 mb-6 font-mono text-sm tracking-widest text-primary"
      >
        Featured projects
      </motion.h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
