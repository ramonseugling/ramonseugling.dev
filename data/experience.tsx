import type { Experience } from "@/types";

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="exp-highlight">{children}</span>
);

export const experiences: Experience[] = [
  {
    logo: "/logos/meli.webp",
    logoAlt: "Mercado Libre",
    role: "Software Engineer",
    company: "Mercado Libre — Florianópolis, Brazil (Hybrid)",
    period: "Oct 2024 – Present",
    current: true,
    bullets: [
      <>
        Led frontend development of the <H>Supermarket Store Selector</H> —
        drove{" "}
        <H>
          +6.5% GMV (Gross Merchandise Value) / +1.2% new buyers in Brazil
        </H>{" "}
        and <H>+12.3% GMV / +14.3% new buyers in Mexico</H> in Mercado Libre
        {"'"}s supermarket vertical, one of LATAM{"'"}s highest-traffic
        e-commerce surfaces.
      </>,
      <>
        Eliminated <H>9M+ unnecessary daily API requests</H> through frontend
        optimization, reducing infrastructure costs and alert noise.
      </>,
      <>
        Built the Cart Awareness feature contributing to{" "}
        <H>
          +0.94% NMV (Net Merchandise Value) / +2.03% new buyers in Chile
        </H>{" "}
        and <H>+0.93% NMV / +0.73% new buyers in Mexico</H>.
      </>,
      <>
        Built Datadog dashboards and monitors that reduced{" "}
        <H>critical incident detection time by ~60%</H> — adopted into the team
        {"'"}s on-call workflow.
      </>,
      <>
        Shipped features across <H>12+ frontend projects</H> spanning
        micro-frontends, design systems, and shared UI libraries; operate
        AI-augmented workflows daily (Cursor, Claude, Codex) as a core part of
        delivery.
      </>,
      <>
        Mentor junior engineers through pair programming and PR reviews; lead
        internal tech talks and frontend knowledge-sharing sessions.
      </>,
    ],
    tags: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Next.js" },
      { label: "Node.js" },
      { label: "BFFs" },
      { label: "Micro-frontends" },
      { label: "Server-Driven UI" },
      { label: "SSR" },
      { label: "Lerna" },
      { label: "Jenkins" },
      { label: "Playwright" },
      { label: "Datadog" },
      { label: "New Relic" },
      { label: "Cursor / Claude / Codex" },
    ],
  },
  {
    logo: "/logos/bry.jpg",
    logoAlt: "BRy Technology",
    role: "Software Engineer",
    company: "BRy Technology — Florianópolis, Brazil",
    period: "Sep 2020 – Sep 2024",
    bullets: [
      <>
        <H>Easy Sign</H>: Frontend lead on a new electronic-signature REST API
        product. Built React/Next.js/TypeScript interfaces with Material UI and
        an iframe integration for client embedding;{" "}
        <H>reduced PDF document loading time by ~45%</H> for high-volume
        signature flows.
      </>,
      <>
        <H>BRy Signer</H>: Full-stack engineer on a white-label e-signature
        platform. Migrated scheduled jobs from node-cron to Kubernetes CronJobs
        (improved observability + automated alerting); integrated third-party
        WhatsApp API for signature-flow notifications.
      </>,
      <>
        <H>Digital Certificate Issuing</H>: Frontend lead on flagship product
        issuing <H>100K+ certificates/month</H>. Implemented biometric
        validation (face-api.js, fingerprint scanners) and embedded Jitsi Meet
        video conferencing for Brazilian PKI compliance. Spearheaded MVP from
        concept to production with Docker, Kubernetes, and GitLab CI.
      </>,
    ],
    tags: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Next.js" },
      { label: "Node.js" },
      { label: "Express" },
      { label: "MobX" },
      { label: "Material UI" },
      { label: "Ant Design" },
      { label: "Jest" },
      { label: "React Testing Library" },
      { label: "Playwright" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "GitLab CI/CD" },
      { label: "PostgreSQL", neutral: true },
      { label: "PHP", neutral: true },
      { label: "Laravel", neutral: true },
    ],
  },
  {
    logo: "/logos/feesc.jpg",
    logoAlt: "FEESC",
    role: "Software Engineer Intern",
    company:
      "FEESC — Santa Catarina State Telemedicine System, Florianópolis, Brazil",
    period: "Apr 2019 – May 2020",
    bullets: [
      <>
        Contributed to one of{" "}
        <H>Latin America{"'"}s largest public telemedicine platforms</H> —
        serving <H>300+ municipalities</H> with tele-education,
        teleconsultation, second opinion, and telediagnosis services. Delivered
        features and bug fixes across web systems.
      </>,
    ],
    tags: [
      { label: "JavaScript" },
      { label: "PHP", neutral: true },
      { label: "jQuery", neutral: true },
      { label: "PostgreSQL", neutral: true },
      { label: "Zend Framework", neutral: true },
    ],
  },
];
