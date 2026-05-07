import styles from "./Hero.module.css";

export default function CodeCard() {
  return (
    <div className={styles.codeCard}>
      <div className={styles.codeHeader}>
        <div className={styles.trafficLights}>
          <div className={`${styles.tl} ${styles.tlR}`} />
          <div className={`${styles.tl} ${styles.tlY}`} />
          <div className={`${styles.tl} ${styles.tlG}`} />
        </div>
        <div className={styles.codeFilename}>Ramon.tsx</div>
      </div>
      <div className={styles.codeBody}>
        <Line n={1}>
          <span className={styles.cm}>{"// Software Engineer"}</span>
        </Line>
        <Line n={2}>
          <span className={styles.kw}>import</span>
          <span className={styles.pn}>{" { "}</span>
          <span className={styles.fn}>Engineer</span>
          <span className={styles.pn}>{" } "}</span>
          <span className={styles.kw}>from</span>{" "}
          <span className={styles.str}>{"'./universe'"}</span>
        </Line>
        <Line n={3}>
          <span />
        </Line>
        <Line n={4}>
          <span className={styles.kw}>export const</span>{" "}
          <span className={styles.fn}>Ramon</span>{" "}
          <span className={styles.nb}>=</span>{" "}
          <span className={styles.pn}>{"() => ("}</span>
        </Line>
        <Line n={5}>
          {"  "}
          <span className={styles.pn}>&lt;</span>
          <span className={styles.ac}>Engineer</span>
        </Line>
        <Line n={6}>
          {"    "}
          <span className={styles.fn}>name</span>
          <span className={styles.pn}>=</span>
          <span className={styles.str}>{'"Ramon Seugling"'}</span>
        </Line>
        <Line n={7}>
          {"    "}
          <span className={styles.fn}>role</span>
          <span className={styles.pn}>=</span>
          <span className={styles.str}>{'"Software Engineer"'}</span>
        </Line>
        <Line n={8}>
          {"    "}
          <span className={styles.fn}>stack</span>
          <span className={styles.pn}>={"{["}</span>
          <span className={styles.str}>{'"React"'}</span>
          <span className={styles.pn}>, </span>
          <span className={styles.str}>{'"TS"'}</span>
          <span className={styles.pn}>, </span>
          <span className={styles.str}>{'"Next"'}</span>
          <span className={styles.pn}>{"]}"}</span>
        </Line>
        <Line n={9}>
          {"    "}
          <span className={styles.fn}>impact</span>
          <span className={styles.pn}>=</span>
          <span className={styles.str}>{'"GMV +6.5% 🇧🇷"'}</span>
        </Line>
        <Line n={10}>
          {"  "}
          <span className={styles.pn}>/&gt;</span>
        </Line>
        <Line n={11}>
          <span className={styles.pn}>{")"}</span>{" "}
          <span className={styles.codeCursor} />
        </Line>
      </div>
    </div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className={styles.codeLine}>
      <span className={styles.ln}>{n}</span>
      <span className={styles.codeContent}>{children}</span>
    </div>
  );
}
