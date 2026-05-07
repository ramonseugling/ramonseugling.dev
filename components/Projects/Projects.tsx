import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label reveal">{"// 02. projects"}</div>
      <h2 className="section-title reveal">Things I&apos;ve built</h2>
      <div className={styles.projectsGrid}>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
