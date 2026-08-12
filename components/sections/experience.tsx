"use client";

import { experiences } from "@/lib/content";
import { ExperienceCard } from "@/components/ui/experience-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading label="// work history" title="Experience" />

      <div className="ml-1">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
