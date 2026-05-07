import Image from "next/image";
import type { Experience } from "@/types";
import styles from "./Experience.module.css";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const isImage = exp.logo.startsWith("/");
  return (
    <div className={`${styles.expCard} reveal`}>
      <div className={styles.expHeader}>
        <div className={styles.companyLogo}>
          {isImage ? (
            <Image
              src={exp.logo}
              alt={exp.logoAlt ?? exp.company}
              width={48}
              height={48}
            />
          ) : (
            exp.logo
          )}
        </div>
        <div className={styles.expMeta}>
          <div className={styles.expRole}>{exp.role}</div>
          <div className={styles.expCompany}>{exp.company}</div>
          <div className={styles.expPeriod}>{exp.period}</div>
          {exp.current && (
            <div className={styles.expCurrent}>
              <div className={styles.expCurrentDot} /> Current role
            </div>
          )}
        </div>
      </div>
      <ul className={styles.expBullets}>
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className={styles.tagList}>
        {exp.tags.map((t) => (
          <span key={t.label} className={`tag ${t.neutral ? "tag-neutral" : ""}`}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
