import Image from "next/image";
import styles from "./Hero.module.css";

const rows = [
  { label: "Experience", value: "6+ years" },
  { label: "Location", value: "Florianópolis, Brazil 🇧🇷" },
  { label: "Languages", value: "EN · PT · ES" },
  { label: "Degree", value: "B.Sc. Information Systems" },
];

export default function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePhoto}>
        <Image
          src="/profile.png"
          alt="Ramon Seugling"
          width={90}
          height={90}
          priority
        />
      </div>
      <div className={styles.profileName}>Ramon Seugling</div>
      <div className={styles.profileTitle}>Software Engineer</div>
      <div className={styles.profileDivider} />
      <div className={styles.profileRows}>
        {rows.map((r) => (
          <div key={r.label} className={styles.profileRow}>
            <span className={styles.profileRowLabel}>{r.label}</span>
            <span className={styles.profileRowValue}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
