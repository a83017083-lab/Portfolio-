"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import AmbientBackground from "./ui/AmbientBackground";
import MagneticButton from "./ui/MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <AmbientBackground />

      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute left-[8%] top-[22%] h-16 w-16 rounded-2xl border border-cyan-400/30 bg-cyan-400/5"
          animate={{ y: [0, -22, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-[30%] h-24 w-24 rounded-full border border-violet-400/30 bg-violet-400/5"
          animate={{ y: [0, 26, 0], x: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[18%] left-[16%] h-12 w-12 rotate-45 border border-purple-400/30 bg-purple-400/5"
          animate={{ y: [0, -16, 0], rotate: [45, 70, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-obsidian-border bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300"
        >
          Available for select builds
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building in Public &{" "}
          <span className="gradient-text">Crafting Next-Gen</span> Web
          Experiences
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-sm uppercase tracking-[0.15em] text-zinc-400 sm:text-base"
        >
          Full-Stack Builder <span className="text-cyan-400">/</span> Tech
          Content Creator <span className="text-violet-400">/</span> UI/UX
          Enthusiast
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg"
        >
          Converting ideas into scalable web applications and sharing the
          journey through engaging tech content and reels.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#projects">
            Explore Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
          <MagneticButton href="#reels" variant="secondary">
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            Watch Content
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-cyan-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
