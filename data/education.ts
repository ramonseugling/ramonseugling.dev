import type { Education, Certification } from "@/types";

export const education: Education[] = [
  {
    icon: "/logos/ufsc.png",
    iconAlt: "UFSC",
    degree: "B.Sc. in Information Systems",
    school:
      "Federal University of Santa Catarina (UFSC) — Florianópolis, Brazil",
    period: "2018 – 2023",
  },
];

export const certifications: Certification[] = [
  {
    icon: "/tech/aws.svg",
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
  },
  {
    icon: "/tech/react.svg",
    name: "Ignite ReactJS",
    issuer: "Rocketseat — Brazilian dev school",
  },
  {
    icon: "/tech/nodejs.svg",
    name: "Ignite Node.js",
    issuer: "Rocketseat — Brazilian dev school",
  },
];
