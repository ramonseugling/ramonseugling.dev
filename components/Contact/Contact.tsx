import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className={`${styles.contactWrapper} reveal`}>
        <div className="section-label" style={{ justifyContent: "center", display: "flex", marginBottom: 16 }}>
          {"// 05. contact"}
        </div>
        <h2 className={styles.title}>
          Let&apos;s connect.
        </h2>
        <p className={styles.sub}>
          Always happy to talk frontend engineering, system design, or anything
          tech-adjacent. Drop me a line.
        </p>
        <a href="mailto:ramonseugling@gmail.com" className={styles.email}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          ramonseugling@gmail.com
        </a>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/ramon-seugling" className="btn-ghost" target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a href="https://github.com/ramonseugling" className="btn-ghost" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
