"use client";

import { motion } from "framer-motion";

/**
 * Ambient animated gradient blobs + subtle grid pattern. Purely decorative
 * (aria-hidden) -- sits behind section content to create the cinematic
 * soft-lighting atmosphere.
 */
export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_30%,transparent_100%)]" />

      <motion.div
        className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
