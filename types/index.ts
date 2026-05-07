import type { ReactNode } from "react";

export interface Experience {
  logo: string;
  logoAlt?: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: ReactNode[];
  tags: { label: string; neutral?: boolean }[];
}

export interface Project {
  name: string;
  screenshotLabel: string;
  screenshot?: string;
  description: string;
  liveUrl?: string;
  tags: { label: string; neutral?: boolean }[];
  links: { label: string; href: string; icon?: "github" | "external"; ghost?: boolean }[];
}

export interface StackCategory {
  key: string;
  label: string;
  items: {
    name: string;
    dot: "green" | "yellow" | "blue" | "red" | "purple";
    icon?: string;
  }[];
}

export interface Education {
  icon: string;
  iconAlt?: string;
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  icon: string;
  name: string;
  issuer: string;
}
