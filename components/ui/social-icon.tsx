import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import type { SocialLinkId } from "@/lib/content";

const icons: Record<SocialLinkId, LucideIcon> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

interface SocialIconProps {
  id: SocialLinkId;
  size?: number;
  className?: string;
}

export function SocialIcon({ id, size = 18, className }: SocialIconProps) {
  const Icon = icons[id];
  return <Icon size={size} className={className} />;
}
