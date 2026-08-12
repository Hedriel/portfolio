import { Footer, Navbar } from "@/components/layout";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  GitHubSection,
  Hero,
  RecommendationsSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <GitHubSection />
      <EducationSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
