"use client";

import { useState } from "react";
import { stackCategories } from "@/data/techStack";
import styles from "./TechStack.module.css";

const dotClass: Record<string, string> = {
  green: styles.dotGreen,
  yellow: styles.dotYellow,
  blue: styles.dotBlue,
  red: styles.dotRed,
  purple: styles.dotPurple,
};

const filters = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "testing", label: "Testing" },
  { key: "infra", label: "Infra & Cloud" },
  { key: "ai", label: "AI" },
  { key: "tools", label: "Tools" },
];

export default function StackFilter() {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className={`${styles.stackFilter} reveal`}>
        {filters.map((f) => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${active === f.key ? styles.filterBtnActive : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.stackCategories}>
        {stackCategories.map((cat) => (
          <div
            key={cat.key}
            className="reveal"
            style={{
              display: active === "all" || active === cat.key ? undefined : "none",
            }}
          >
            <div className={styles.stackCatLabel}>{cat.label}</div>
            <div className={styles.stackItems}>
              {cat.items.map((item) => (
                <div key={item.name} className={styles.stackItem}>
                  {item.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className={styles.stackIcon}
                    />
                  ) : (
                    <span className={`${styles.stackDot} ${dotClass[item.dot]}`} />
                  )}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
