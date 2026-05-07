import styles from "./Hero.module.css";

const stats = [
  { number: "6", suffix: "+", label: "Years experience" },
  { number: "400", suffix: "M", label: "Monthly users" },
  { number: "9", suffix: "M+", label: "Daily API calls saved" },
];

export default function StatsRow() {
  return (
    <div className={styles.statsRow}>
      {stats.map((s) => (
        <div key={s.label} className={styles.statCard}>
          <div className={styles.statNumber}>
            {s.number}<span>{s.suffix}</span>
          </div>
          <div className={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
