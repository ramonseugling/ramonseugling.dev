import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Designed and built by Ramon Seugling</span>
      {" · 2026 · "}
      <span className={styles.accent}>ramonseugling.dev</span>
    </footer>
  );
}
