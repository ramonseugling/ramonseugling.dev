"use client";

import { useEffect, useRef, useState } from "react";

type AccentColor = "purple" | "blue" | "teal";

interface Tweaks {
  accentColor: AccentColor;
  particlesEnabled: boolean;
}

const DEFAULTS: Tweaks = { accentColor: "blue", particlesEnabled: true };

const accents: Record<AccentColor, { accent: string; accent2: string; dim: string }> = {
  purple: { accent: "oklch(62% 0.2 280)", accent2: "oklch(62% 0.2 310)", dim: "oklch(62% 0.12 280)" },
  blue:   { accent: "oklch(60% 0.2 240)", accent2: "oklch(60% 0.2 210)", dim: "oklch(60% 0.12 240)" },
  teal:   { accent: "oklch(62% 0.18 180)", accent2: "oklch(62% 0.18 160)", dim: "oklch(62% 0.1 180)" },
};

export default function TweaksPanel() {
  const [visible, setVisible] = useState(false);
  const tweaks = useRef<Tweaks>({ ...DEFAULTS });

  function apply() {
    const root = document.documentElement;
    const a = accents[tweaks.current.accentColor];
    root.style.setProperty("--accent", a.accent);
    root.style.setProperty("--accent2", a.accent2);
    root.style.setProperty("--accent-dim", a.dim);
    const canvas = document.querySelector("canvas");
    if (canvas) canvas.style.opacity = tweaks.current.particlesEnabled ? "0.5" : "0";
  }

  useEffect(() => {
    apply();

    function onMessage(e: MessageEvent) {
      if (e.data?.type === "__activate_edit_mode") setVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setVisible(false);
    }

    window.addEventListener("message", onMessage);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMessage);
  }, []);

  function setColor(c: AccentColor) {
    tweaks.current.accentColor = c;
    apply();
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: tweaks.current }, "*");
  }

  function setParticles(on: boolean) {
    tweaks.current.particlesEnabled = on;
    apply();
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: tweaks.current }, "*");
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 9999,
        background: "#141420", border: "1px solid #252538", borderRadius: 16,
        padding: 20, width: 240, display: "flex", flexDirection: "column", gap: 16,
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)", fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#e8e8f0" }}>Tweaks</span>
        <button
          onClick={() => {
            setVisible(false);
            window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
          }}
          style={{ background: "none", border: "none", color: "#5a5a72", cursor: "pointer", fontSize: 18, lineHeight: 1 }}
        >
          ✕
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#5a5a72", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Accent Color
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["purple", "blue", "teal"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{
                flex: 1, padding: 8, borderRadius: 8,
                border: `2px solid ${accents[c].accent}`,
                background: `color-mix(in srgb, ${accents[c].accent} 20%, transparent)`,
                color: "#e8e8f0", fontSize: 11, cursor: "pointer", fontFamily: "inherit",
              }}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
        <span style={{ fontSize: 13, color: "#9090a8" }}>Particles</span>
        <input
          type="checkbox"
          defaultChecked
          onChange={(e) => setParticles(e.target.checked)}
          style={{ width: 16, height: 16, accentColor: "oklch(62% 0.2 280)", cursor: "pointer" }}
        />
      </label>
    </div>
  );
}
