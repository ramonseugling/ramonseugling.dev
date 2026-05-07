"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const phrases = [
  "Software Engineer",
  "React + TypeScript engineer",
  "Micro-frontend engineer",
  "AI-augmented engineer",
  "Shipping at scale",
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const pi = useRef(0);
  const ci = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const phrase = phrases[pi.current];
      if (!deleting.current) {
        ci.current++;
        setText(phrase.slice(0, ci.current));
        if (ci.current === phrase.length) {
          deleting.current = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        ci.current--;
        setText(phrase.slice(0, ci.current));
        if (ci.current === 0) {
          deleting.current = false;
          pi.current = (pi.current + 1) % phrases.length;
          timer = setTimeout(tick, 400);
          return;
        }
      }
      timer = setTimeout(tick, deleting.current ? 45 : 70);
    }

    timer = setTimeout(tick, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.heroRole}>
      <span>{text}</span>
      <span className={styles.typingCursor} />
    </div>
  );
}
