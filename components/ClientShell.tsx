"use client";

import dynamic from "next/dynamic";

const ParticlesCanvas = dynamic(() => import("@/components/ParticlesCanvas"), {
  ssr: false,
});

const TweaksPanel = dynamic(() => import("@/components/TweaksPanel"), {
  ssr: false,
});

export default function ClientShell() {
  return (
    <>
      <ParticlesCanvas />
      <TweaksPanel />
    </>
  );
}
