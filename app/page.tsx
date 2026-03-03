import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { GitHubSection } from "@/components/github-section";
import { EducationSection } from "@/components/education-section";
import { RecommendationsSection } from "@/components/recommendations-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

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
