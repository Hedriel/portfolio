"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const desktop =
    project.images.find((image) => image.frame === "desktop") ??
    project.images[0];
  const mobile = project.images.find((image) => image.frame === "mobile");

  return (
    <motion.article
      variants={fadeInUp}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden bg-muted"
        aria-label={`Open live site for ${project.title}`}
      >
        <div className="relative aspect-video">
          <Image
            src={desktop.src}
            alt={desktop.alt}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        {mobile && (
          <div className="pointer-events-none absolute right-2 bottom-2 w-[26%] min-w-[72px] max-w-[110px] overflow-hidden rounded-[0.9rem] border border-border bg-background shadow-2xl sm:right-3 sm:bottom-3 md:w-[23.4%] md:min-w-[65px] md:max-w-[99px]">
            <div className="relative aspect-[9/19]">
              <Image
                src={mobile.src}
                alt={mobile.alt}
                fill
                sizes="(min-width: 768px) 99px, 110px"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-semibold text-foreground">
            {project.title}
          </h3>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={14} />
            Code
          </a>
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 min-w-0 truncate font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          {project.liveUrl}
        </a>

        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[10px] text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
