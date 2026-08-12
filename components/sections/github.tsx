"use client";

import { personalInfo } from "@/lib/content";
import { GitHubHeatmap } from "@/components/ui/github-heatmap";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function GitHubSection() {
  return (
    <Section id="github">
      <SectionHeading label="// open source" title="GitHub Activity" />
      <GitHubHeatmap username={personalInfo.github.username} />
    </Section>
  );
}
