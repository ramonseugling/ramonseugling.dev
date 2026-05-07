"use client";

import { useState } from "react";
import CodeCard from "./CodeCard";
import ProfileCard from "./ProfileCard";
import styles from "./Hero.module.css";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <div
        className={`${styles.flipScene} ${flipped ? styles.flipped : ""}`}
        onClick={() => setFlipped((f) => !f)}
        title="Hey, it's me!"
      >
        <div className={styles.flipInner}>
          <div className={styles.flipFace}>
            <CodeCard />
          </div>
          <div className={styles.flipBack}>
            <ProfileCard />
          </div>
        </div>
      </div>
      <div className={styles.flipHint}>
        <svg viewBox="0 0 24 24">
          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
        </svg>
        Click to flip
      </div>
    </>
  );
}
