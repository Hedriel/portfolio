export const personalInfo = {
  name: "Hernan Gonzalez",
  initials: "HG",
  title: "Front-End Developer",
  email: "hernan.gonzalez.magliano@gmail.com",
  location: "Buenos Aires, Argentina",
  github: {
    username: "Hedriel",
    url: "https://github.com/Hedriel",
  },
  linkedin: {
    handle: "hernan-gonzalezma",
    url: "https://www.linkedin.com/in/hernan-gonzalezma/",
  },
  about:
    "I am a passionate frontend developer with experience working on various projects for companies like MercadoLibre, Globant, and Nodus. I thrive in fast-paced, dynamic environments and enjoy tackling complex challenges to create seamless user experiences.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Education", href: "#education" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    id: "email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: `github.com/${personalInfo.github.username}`,
    href: personalInfo.github.url,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: personalInfo.linkedin.handle,
    href: personalInfo.linkedin.url,
    external: true,
  },
] as const;

export type SocialLinkId = (typeof socialLinks)[number]["id"];

export const SKILL_CATEGORIES = ["frontend", "backend", "tools"] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "SASS", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "OAuth", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "JIRA", category: "tools" },
  { name: "LLM", category: "tools" },
];

export const skillCategoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

export const skillsByCategory = SKILL_CATEGORIES.map((category) => ({
  category,
  label: skillCategoryLabels[category],
  items: skills.filter((skill) => skill.category === category),
}));

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "glofy",
    role: "Full Stack Developer",
    company: "Glofy",
    location: "Buenos Aires, Argentina",
    period: "MAR 2026 - PRESENT",
    description:
      "Responsible for optimizing and improving site performance, rebuilding workflows and components using clean architecture principles. Replacing legacy structures with modular, maintainable components.",
    technologies: ["React", "Next.js", "Tailwind", "Node.js", "Express"],
  },
  {
    id: "mercadolibre",
    role: "Front End Developer",
    company: "Mercado Libre",
    location: "Buenos Aires, Argentina",
    period: "APR 2024 - SEP 2025",
    description:
      "Part of the restyling of the Activities tab on MercadoPago, working on both the detail page and the listing page. Redesigned all frontend components from scratch using React and SASS, delivering a completely renewed user experience.",
    technologies: ["React", "SASS", "JavaScript", "Node.js"],
  },
  {
    id: "nodus-fe",
    role: "Junior Front End Developer",
    company: "Nodus Company",
    location: "Buenos Aires, Argentina",
    period: "MAR 2023 - APR 2024",
    description:
      "Deployed multiple deliverables and landing pages with Next.js, delivering dynamic interfaces with the use of Framer Motion and GSAP. Specialized in SASS, React, and Tailwind to ship high-quality projects in fast-paced work environments.",
    technologies: [
      "React",
      "Next.js",
      "SASS",
      "Tailwind",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    id: "nodus-qa",
    role: "QA Analyst",
    company: "Nodus Company",
    location: "Buenos Aires, Argentina",
    period: "JUN 2022 - MAR 2023",
    description:
      "Quality assurance and control for weekly deliverable features.",
    technologies: ["QA", "Testing"],
  },
  {
    id: "globant",
    role: "Software Engineer",
    company: "Globant",
    location: "Buenos Aires, Argentina",
    period: "NOV 2020 - JUN 2022",
    description:
      "Software Engineer working with the Guidewire development team in Mississauga, Canada. Automated tests and maintained content using technologies like Java, Selenium, and Bash. Implemented patches and quick fixes.",
    technologies: ["Java", "Selenium", "Bash"],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const education: Education[] = [
  {
    id: "davinci",
    degree: "Systems Analyst",
    institution: "Escuela Da Vinci",
    period: "2019 - 2024",
  },
  {
    id: "coderhouse",
    degree: "Backend Developer",
    institution: "Coderhouse",
    period: "2022 - 2023",
  },
];

export interface Recommendation {
  id: string;
  name: string;
  text: string;
  relationship: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "agustin",
    name: "Agustin Lopez",
    relationship: "Colleague at Mercado Libre",
    text: "Tuve el placer de trabajar con Hernán en Mercado Libre, y desde el primer momento demostró ser un profesional altamente capaz en lo técnico. Se adaptó muy rápido al equipo y, en muy poco tiempo, ya estaba tomando tareas con grandes responsabilidades, las cuales cumplió más que con creces. Siempre mantuvo una actitud muy positiva. Además de su talento, es una excelente persona y un gran compañero de trabajo.",
  },
  {
    id: "daiana",
    name: "Daiana Ortiz",
    relationship: "Buddy at Mercado Libre",
    text: "Tuve el placer de ser la buddy de Herni en su llegada a Mercado Libre y desde el día uno demostró una gran capacidad técnica y una rapidez para adaptarse increíble. Entendió enseguida cómo funcionaba todo, tanto lo técnico como el negocio, y eso le permitió empezar a aportar valor al equipo rápidamente. Con el tiempo fue asumiendo tareas cada vez más complejas, y siempre las entregaba en tiempo con una autonomía impresionante. Pero más allá de su talento, lo que más destaco es la gran persona que es. No tengo ninguna duda de que Herni va a aportar muchísimo valor donde sea que trabaje. Sin pensarlo dos veces, volvería a trabajar con él.",
  },
];

export const languages = [
  { name: "English", level: "Advanced" },
  { name: "Spanish", level: "Native" },
];

export interface ProjectImage {
  src: string;
  alt: string;
  frame: "desktop" | "mobile";
}

export interface Project {
  id: string;
  title: string;
  repo: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  images: ProjectImage[];
}

export const featuredProjects: Project[] = [
  {
    id: "keffir-landing",
    title: "¡Qué Kéfir!",
    repo: "keffir-landing",
    description:
      "Landing page for a fermented water kefir brand — product story, catalog, and a conversion-focused layout for a gluten-free probiotic drink with nationwide retail reach.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Hedriel/keffir-landing",
    liveUrl: "https://quekefir.com/",
    images: [
      {
        src: "/projects/keffir-hero.webp",
        alt: "¡Qué Kéfir! landing page hero with the product bottle and brand headline",
        frame: "desktop",
      },
      {
        src: "/projects/keffir-products.webp",
        alt: "¡Qué Kéfir! mobile product catalog showing Neutro, Frutos Rojos, and Mango Maracuyá",
        frame: "mobile",
      },
    ],
  },
  {
    id: "mati-castro-dj-portfolio",
    title: "Mati Castro DJ",
    repo: "mati-castro-dj-portfolio",
    description:
      "Cinematic portfolio for DJ and producer Mati Castro — corporate events, brand launches, and private parties — with motion, a music player, and booking CTAs.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/Hedriel/mati-castro-dj-portfolio",
    liveUrl: "https://maticastro.com.ar/",
    images: [
      {
        src: "/projects/mati-castro-dj.webp",
        alt: "Mati Castro DJ portfolio with music player, events, gallery, and contact sections",
        frame: "desktop",
      },
    ],
  },
];
