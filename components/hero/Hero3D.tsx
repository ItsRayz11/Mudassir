"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy-load the WebGL scene on the client only — keeps it out of the SSR/initial bundle.
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <Fallback />,
});

function Fallback() {
  // Lightweight CSS stand-in shown before the 3D scene mounts (and for reduced motion).
  return (
    <div
      aria-hidden="true"
      className="h-full w-full animate-floaty rounded-full bg-gradient-to-br from-caramel via-walnut to-espresso opacity-80 blur-2xl"
    />
  );
}

export default function Hero3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Skip WebGL entirely for reduced-motion users; show the calm CSS fallback.
    if (!prefersReduced) setEnabled(true);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {enabled ? <Scene /> : <Fallback />}
    </div>
  );
}
