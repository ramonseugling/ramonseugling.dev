import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label reveal">{"// 01. experience"}</div>
      <h2 className="section-title reveal">Where I&apos;ve worked</h2>
      <div className={styles.expList}>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  );
}
