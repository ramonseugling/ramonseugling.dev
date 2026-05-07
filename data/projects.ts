import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Rememberly",
    screenshotLabel: "🔔 Rememberly\nscreenshot",
    screenshot: "/projects/rememberly.png",
    description:
      "Full-stack app for tracking annual dates (birthdays, anniversaries) with automated email reminders and group sharing. Daily cron job dispatches emails on or before each date; Google OAuth + email OTP authentication.",
    liveUrl: "https://www.rememberly.com.br",
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
      { label: "Resend" },
      { label: "Cron jobs" },
      { label: "Axiom" },
      { label: "Vercel" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ramonseugling/rememberly",
        icon: "github",
        ghost: true,
      },
      {
        label: "Live demo",
        href: "https://www.rememberly.com.br",
        icon: "external",
      },
    ],
  },
];
