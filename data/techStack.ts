import type { StackCategory } from "@/types";

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const simpleicon = (slug: string, color = "FFFFFF") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const stackCategories: StackCategory[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React", dot: "green", icon: devicon("react") },
      { name: "TypeScript", dot: "green", icon: devicon("typescript") },
      { name: "Next.js", dot: "green", icon: simpleicon("nextdotjs") },
      { name: "JavaScript", dot: "green", icon: devicon("javascript") },
      { name: "Styled Components", dot: "blue", icon: devicon("styledcomponents") },
      { name: "Material UI", dot: "blue", icon: devicon("materialui") },
      { name: "Ant Design", dot: "blue", icon: devicon("antdesign") },
      { name: "MobX", dot: "blue", icon: simpleicon("mobx", "FF9955") },
      { name: "Context API", dot: "blue" },
      { name: "HTML5 / CSS3", dot: "blue", icon: devicon("html5") },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", dot: "yellow", icon: devicon("nodejs") },
      { name: "Express", dot: "yellow", icon: simpleicon("express") },
      { name: "REST APIs", dot: "yellow" },
      { name: "PostgreSQL", dot: "yellow", icon: devicon("postgresql") },
      { name: "MySQL", dot: "yellow", icon: devicon("mysql") },
      { name: "MongoDB", dot: "yellow", icon: devicon("mongodb") },
      { name: "Redis", dot: "yellow", icon: devicon("redis") },
    ],
  },
  {
    key: "testing",
    label: "Testing",
    items: [
      { name: "Jest", dot: "yellow", icon: devicon("jest") },
      { name: "React Testing Library", dot: "yellow", icon: simpleicon("testinglibrary", "E33332") },
      { name: "Cucumber", dot: "yellow", icon: simpleicon("cucumber", "23D96C") },
      { name: "Playwright", dot: "yellow", icon: devicon("playwright") },
    ],
  },
  {
    key: "infra",
    label: "Infra & Cloud",
    items: [
      { name: "Docker", dot: "red", icon: devicon("docker") },
      { name: "Kubernetes", dot: "red", icon: devicon("kubernetes") },
      { name: "AWS (S3, EC2, Lambda)", dot: "red", icon: "/tech/aws.svg" },
      { name: "GitLab CI/CD", dot: "red", icon: devicon("gitlab") },
      { name: "Jenkins", dot: "red", icon: devicon("jenkins") },
      { name: "Datadog", dot: "red", icon: simpleicon("datadog", "632CA6") },
      { name: "New Relic", dot: "red", icon: simpleicon("newrelic") },
      { name: "Grafana", dot: "red", icon: simpleicon("grafana", "F46800") },
      { name: "Kibana", dot: "red", icon: simpleicon("kibana", "005571") },
    ],
  },
  {
    key: "ai",
    label: "AI",
    items: [
      { name: "Cursor", dot: "purple", icon: simpleicon("cursor") },
      { name: "Claude", dot: "purple", icon: simpleicon("claude", "D97757") },
      { name: "Claude Code", dot: "purple" },
      { name: "Codex", dot: "purple" },
      { name: "MCPs", dot: "purple" },
      { name: "Claude Skills", dot: "purple" },
      { name: "Claude Plugins", dot: "purple" },
      { name: "n8n", dot: "purple", icon: simpleicon("n8n", "EA4B71") },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    items: [
      { name: "Micro-frontends", dot: "blue" },
      { name: "Jira / Scrum", dot: "blue", icon: devicon("jira") },
      { name: "Git", dot: "blue", icon: devicon("git") },
    ],
  },
];
