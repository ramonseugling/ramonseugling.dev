import { socialLinks } from "@/data/socialLinks";
import TypingEffect from "./TypingEffect";
import FlipCard from "./FlipCard";
import StatsRow from "./StatsRow";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.greeting}>{"// Hello, world!"}</div>

        <h1 className={styles.heroName}>
          I&apos;m <span className={styles.accent}>Ramon</span>
          <br />
          Seugling
        </h1>

        <TypingEffect />

        <p className={styles.heroDesc}>
          Software Engineer shipping high-traffic features at Mercado Libre —
          Latin America&apos;s largest e-commerce platform (400M+ monthly
          users). Specialized in React, TypeScript, and micro-frontend
          architectures. Focused on code quality, user experience, and
          measurable impact.
        </p>

        <div className={styles.heroActions}>
          <a href="/Ramon-Seugling_Resume.pdf" download className="btn-primary">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path d="M8 1a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 8.293V1.5A.5.5 0 0 1 8 1z" />
              <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
            </svg>
            Download resume
          </a>
          <a href="#projects" className="btn-ghost">
            View my work →
          </a>
        </div>

        <div className={styles.heroSocials}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-icon"
              title={link.label}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener"}
            >
              <svg viewBox="0 0 24 24">
                <path d={link.svgPath} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.heroRight}>
        <FlipCard />
        <StatsRow />
      </div>
    </section>
  );
}
