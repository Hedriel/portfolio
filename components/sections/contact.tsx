"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { socialLinks } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icon";

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeading label="// get in touch" title="Contact" />

      <motion.p
        variants={fadeInUp}
        className="mb-8 text-pretty leading-relaxed text-muted-foreground"
      >
        I&apos;m always open to new opportunities and interesting projects. Feel
        free to reach out if you&apos;d like to collaborate or just say hello.
      </motion.p>

      <div className="grid gap-4 sm:grid-cols-3">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="flex min-w-0 flex-col items-center gap-3 overflow-hidden rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
          >
            <SocialIcon id={link.id} size={22} className="text-primary" />
            <div className="w-full min-w-0">
              <p className="text-sm font-medium text-foreground">{link.label}</p>
              <p className="mt-1 font-mono text-xs break-all text-muted-foreground">
                {link.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
