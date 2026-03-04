export const personalInfo = {
  name: "Hernan Gonzalez",
  title: "Front-End Developer",
  email: "hernan.gonzalez.magliano@gmail.com",
  phone: "(+54) 1156912983",
  location: "Buenos Aires, Argentina",
  github: "https://github.com/Hedriel",
  linkedin: "https://www.linkedin.com/in/hernan-gonzalezma/",
  about:
    "I am a passionate frontend developer with experience working on various projects for companies like MercadoLibre, Globant, and Nodus. I thrive in fast-paced, dynamic environments and enjoy tackling complex challenges to create seamless user experiences.",
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "tools"
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
]

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    id: "mercadolibre",
    role: "Front-End Developer",
    company: "Mercado Libre",
    location: "Buenos Aires, Argentina",
    period: "APR 2024 - SEP 2025",
    description:
      "Part of the restyling of the Activities tab on MercadoPago, working on both the detail page and the listing page. Redesigned all frontend components from scratch using React and SASS, delivering a completely renewed user experience.",
    technologies: ["React", "SASS", "JavaScript"],
  },
  {
    id: "nodus-fe",
    role: "Junior Front-End Developer",
    company: "Nodus Company",
    location: "Buenos Aires, Argentina",
    period: "MAR 2023 - APR 2024",
    description:
      "Deployed multiple deliverables and landing pages with Next.js, delivering dynamic interfaces with the use of Framer Motion and GSAP. Specialized in SASS, React, and Tailwind to ship high-quality projects in fast-paced work environments.",
    technologies: ["React", "Next.js", "SASS", "Tailwind", "Framer Motion", "GSAP"],
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
]

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
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
]

export interface Recommendation {
  id: string
  name: string
  text: string
  relationship: string
}

export const recommendations: Recommendation[] = [
  {
    id: "agustin",
    name: "Agustin Lopez",
    relationship: "Colleague at Mercado Libre",
    text: "Tuve el placer de trabajar con Hernan en Mercado Libre, y desde el primer momento demostro ser un profesional altamente capaz en lo tecnico. Se adapto muy rapido al equipo y, en muy poco tiempo, ya estaba tomando tareas con grandes responsabilidades, las cuales cumplio mas que con creces. Siempre mantuvo una actitud muy positiva. Ademas de su talento, es una excelente persona y un gran companero de trabajo.",
  },
  {
    id: "daiana",
    name: "Daiana Ortiz",
    relationship: "Buddy at Mercado Libre",
    text: "Tuve el placer de ser la buddy de Herni en su llegada a Mercado Libre y desde el dia uno demostro una gran capacidad tecnica y una rapidez para adaptarse increible. Entendio enseguida como funcionaba todo, tanto lo tecnico como el negocio, y eso le permitio empezar a aportar valor al equipo rapidamente. Con el tiempo fue asumiendo tareas cada vez mas complejas, y siempre las entregaba en tiempo con una autonomia impresionante. Pero mas alla de su talento, lo que mas destaco es la gran persona que es. No tengo ninguna duda de que Herni va a aportar muchisimo valor donde sea que trabaje. Sin pensarlo dos veces, volveria a trabajar con el.",
  },
]

export const languages = [
  { name: "English", level: "Advanced" },
  { name: "Spanish", level: "Native" },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]
