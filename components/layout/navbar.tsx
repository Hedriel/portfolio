"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";
import { navLinks, personalInfo } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isScrolled = useScrolled();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (media.matches) setIsMobileOpen(false);
    };

    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-primary"
        >
          {`{${personalInfo.initials}}`}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          <NavItems />
        </ul>

        <button
          type="button"
          className="text-foreground lg:hidden"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              <NavItems onSelect={() => setIsMobileOpen(false)} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavItems({ onSelect }: { onSelect?: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onSelect}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        </li>
      ))}
    </>
  );
}
