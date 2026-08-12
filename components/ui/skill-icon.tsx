"use client";

import type { ComponentType, SVGProps } from "react";
import {
  SiCss,
  SiGit,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Database, KeyRound, Sparkles } from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
}

type BrandIcon = ComponentType<
  SVGProps<SVGSVGElement> & { color?: string; size?: number }
>;

const brandIcons: Record<string, BrandIcon> = {
  typescript: SiTypescript,
  react: SiReact,
  "next.js": SiNextdotjs,
  css: SiCss,
  sass: SiSass,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  "node.js": SiNodedotjs,
  supabase: SiSupabase,
  python: SiPython,
  git: SiGit,
  postman: SiPostman,
  jira: SiJira,
};

function FramerMotionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

const extraIcons: Record<string, ComponentType<{ className?: string }>> = {
  "framer motion": FramerMotionIcon,
  sql: Database,
  llm: Sparkles,
  oauth: KeyRound,
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const key = name.toLowerCase();
  const BrandIcon = brandIcons[key];

  if (BrandIcon) {
    return <BrandIcon color="currentColor" size={20} className={className} />;
  }

  const ExtraIcon = extraIcons[key];
  if (ExtraIcon) {
    return <ExtraIcon className={className} />;
  }

  return <Sparkles className={className} />;
}
