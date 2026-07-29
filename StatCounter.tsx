"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

/** Counts up from 0 to `value` once the card scrolls into view. */
export default function StatCounter({ value, suffix, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="glow-border glass rounded-2xl border border-obsidian-border px-6 py-8 text-center"
    >
      <p className="text-4xl font-bold sm:text-5xl">
        <span className="gradient-text">
          {display}
          {suffix}
        </span>
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}
