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
  llm: (className?: string) => (
    <svg viewBox="0 0 640 640" fill="currentColor" className={className}>
      <path d="M164.4 404.5L265.1 348L266.8 343.1L265.1 340.4L260.2 340.4L243.4 339.4L185.9 337.8L136 335.7L87.7 333.1L75.5 330.5L64.1 315.5L65.3 308L75.5 301.1L90.2 302.4C109.1 303.7 136.1 305.5 171.2 308L206.4 310.1L258.6 315.5L266.9 315.5L268.1 312.1L265.3 310L263.1 307.9L212.8 273.8L158.4 237.8L129.9 217.1L114.5 206.6L106.7 196.8L103.3 175.3L117.3 159.9L136.1 161.2L140.9 162.5L159.9 177.2L200.6 208.7L253.7 247.8L261.5 254.3L264.6 252.1L265 250.5L261.5 244.7L232.6 192.5L201.8 139.4L188.1 117.4L184.5 104.2C183.2 98.8 182.3 94.2 182.3 88.7L198.2 67.1L207 64.3L228.2 67.1L237.1 74.9L250.3 105.1L271.7 152.6L304.9 217.2L314.6 236.4L319.8 254.2L321.7 259.6L325.1 259.6L325.1 256.5L327.8 220.1L332.8 175.4L337.7 117.9L339.4 101.7L347.4 82.3L363.3 71.8L375.7 77.7L385.9 92.4L384.5 101.9L378.4 141.4L366.5 203.3L358.7 244.8L363.2 244.8L368.4 239.6L389.4 211.8L424.6 167.7L440.1 150.2L458.2 130.9L469.8 121.7L491.8 121.7L508 145.8L500.7 170.7L478 199.4L459.2 223.8L432.2 260.1L415.4 289.1L417 291.4L421 291L481.9 278L514.8 272.1L554.1 265.4L571.9 273.7L573.8 282.1L566.8 299.3L524.8 309.7L475.6 319.5L402.3 336.8L401.4 337.5L402.4 338.8L435.4 341.9L449.5 342.7L484.1 342.7L548.5 347.5L565.3 358.6L575.4 372.2L573.7 382.6L547.8 395.8C532.3 392.1 493.4 382.9 431.2 368.1L403.2 361.1L399.3 361.1L399.3 363.4L422.6 386.2L465.3 424.8L518.8 474.6L521.5 486.9L514.6 496.6L507.3 495.6L460.3 460.2L442.2 444.3L401.1 409.7L398.4 409.7L398.4 413.3L407.9 427.2L457.9 502.4L460.5 525.4L456.9 532.9L443.9 537.4L429.7 534.8L400.4 493.7L370.2 447.4L345.8 405.9L342.8 407.6L328.4 562.4L321.7 570.3L306.2 576.2L293.2 566.4L286.3 550.5L293.2 519L301.5 477.9L308.2 445.2L314.3 404.6L317.9 391.1L317.7 390.2L314.7 390.6L284.1 432.6L237.6 495.5L200.8 534.9L192 538.4L176.7 530.5L178.1 516.4L186.6 503.8L237.5 439L268.2 398.8L288 375.6L287.9 372.2L286.7 372.2L151.4 460L127.3 463.1L116.9 453.4L118.2 437.5L123.1 432.3L163.8 404.3L163.7 404.4L163.7 404.5z" />
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
