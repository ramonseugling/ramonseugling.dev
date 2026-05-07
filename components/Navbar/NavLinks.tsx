"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function NavLinks() {
  const [activeId, setActiveId] = useState("about");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.35 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.current!.observe(s));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <ul className={styles.navLinks}>
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            className={activeId === l.href.slice(1) ? styles.active : undefined}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
