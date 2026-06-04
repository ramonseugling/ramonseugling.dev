import Image from "next/image";
import type { Experience } from "@/types";
import styles from "./Experience.module.css";

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function calcCurrentDuration(period: string): string {
  const startStr = period.split("–")[0].trim();
  const [mon, yr] = startStr.split(" ");
  const start = { year: parseInt(yr), month: MONTH_NAMES.indexOf(mon) };
  const now = new Date();
  const total = (now.getFullYear() - start.year) * 12 + (now.getMonth() - start.month);
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  if (yrs === 0) return `${mos} mo${mos !== 1 ? "s" : ""}`;
  if (mos === 0) return `${yrs} yr${yrs !== 1 ? "s" : ""}`;
  return `${yrs} yr${yrs !== 1 ? "s" : ""} ${mos} mo${mos !== 1 ? "s" : ""}`;
}

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const duration = exp.current ? calcCurrentDuration(exp.period) : exp.duration;
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
          <div className={styles.expPeriod}>
            {exp.period}
            {duration && <span className={styles.expDuration}> · {duration}</span>}
          </div>
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
