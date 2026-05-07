import Image from "next/image";
import { education, certifications } from "@/data/education";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education">
      <div className="section-label reveal">{"// 04. education"}</div>
      <h2 className="section-title reveal">Education &amp; certifications</h2>

      <div className={styles.eduList}>
        {education.map((e) => {
          const isImage = e.icon.startsWith("/");
          return (
            <div key={e.degree} className={`${styles.eduCard} reveal`}>
              <div className={styles.eduIcon}>
                {isImage ? (
                  <Image
                    src={e.icon}
                    alt={e.iconAlt ?? e.school}
                    width={48}
                    height={48}
                  />
                ) : (
                  e.icon
                )}
              </div>
              <div>
                <div className={styles.eduDegree}>{e.degree}</div>
                <div className={styles.eduSchool}>{e.school}</div>
                <div className={styles.eduPeriod}>{e.period}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40 }}>
        <div className="section-label reveal" style={{ marginBottom: 16 }}>
          {"// certifications"}
        </div>
        <div className={styles.certsGrid}>
          {certifications.map((c) => {
            const isImage = c.icon.startsWith("/");
            return (
              <div key={c.name} className={`${styles.certCard} reveal`}>
                <div className={styles.certIcon}>
                  {isImage ? (
                    <Image
                      src={c.icon}
                      alt={c.name}
                      width={28}
                      height={28}
                    />
                  ) : (
                    c.icon
                  )}
                </div>
                <div>
                  <div className={styles.certName}>{c.name}</div>
                  <div className={styles.certIssuer}>{c.issuer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
