import ThemeToggle from "@/components/ThemeToggle";
import { email, experience, intro, links, projects } from "@/data/site";

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <a href="#top" className="brand">
          Ramon Seugling
        </a>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <section id="top" className="intro">
        <h1>{intro.headline}</h1>
        <p className="muted">{intro.text}</p>
        <div className="links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link"
              {...(l.download
                ? { download: true }
                : { target: "_blank", rel: "noopener" })}
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="label">Projects</h2>
        <div className="list">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="row"
              target="_blank"
              rel="noopener"
            >
              <div className="row-main">
                <div className="row-title">{p.name} ↗</div>
                <div className="row-desc">{p.description}</div>
              </div>
              <div className="row-meta">{p.meta}</div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience">
        <h2 className="label">Experience</h2>
        <div className="list">
          {experience.map((e) => (
            <a
              key={e.company}
              href={e.href}
              className="row"
              target="_blank"
              rel="noopener"
            >
              <div className="row-main">
                <div className="row-title">{e.company} ↗</div>
                <div className="row-desc">{e.description}</div>
              </div>
              <div className="row-meta">{e.period}</div>
            </a>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <a href={`mailto:${email}`} className="link">
          {email}
        </a>
        <span className="muted">© {new Date().getFullYear()} Ramon Seugling</span>
      </footer>
    </main>
  );
}
