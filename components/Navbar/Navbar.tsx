import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#about" className={styles.navLogo}>
        <span className={styles.bracket}>&lt;</span>
        <span className={styles.name}>Ramon</span>
        {" "}
        <span className={styles.slash}>/&gt;</span>
      </a>
      <NavLinks />
    </nav>
  );
}
