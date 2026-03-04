"use client";

import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiSupabase,
  SiPython,
  SiGit,
  SiPostman,
  SiJira,
} from "@icons-pack/react-simple-icons";

interface SkillIconProps {
  name: string;
  className?: string;
}

// Mapping de skills a componentes de react-simple-icons
const iconMap: Record<
  string,
  React.ComponentType<{ color: string; size: number }>
> = {
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

// SVG fallback para skills que no están en react-simple-icons
const fallbackIcons: Record<string, (className?: string) => React.ReactNode> = {
  zustand: (className?: string) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  "framer motion": (className?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  ),
  sql: (className?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fill="currentColor"
        d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 9.26C7.53 10.06 9.65 10.5 12 10.5s4.47-.44 6-1.24V12c0 .5-2.13 2-6 2s-6-1.5-6-2V9.26zm0 5C7.53 15.06 9.65 15.5 12 15.5s4.47-.44 6-1.24V17c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.74z"
      />
    </svg>
  ),
  oauth: (className?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.57-3.77-1.21-7-5.74-7-10.57V6.3l7-3.12zm-1 4.32v2h2v-2h-2zm0 4v6h2v-6h-2z" />
    </svg>
  ),
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const key = name.toLowerCase();
  const IconComponent = iconMap[key];

  if (IconComponent) {
    // Renderizar el componente de react-simple-icons dentro de un span
    // que recibe el className de Tailwind para heredar los estilos de color
    return (
      <span className={className} style={{ display: "inline-block" }}>
        <IconComponent color="currentColor" size={20} />
      </span>
    );
  }

  // Usar fallback si existe
  const fallback = fallbackIcons[key];
  if (fallback) {
    return <>{fallback(className)}</>;
  }

  // Fallback genérico como último recurso
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}
