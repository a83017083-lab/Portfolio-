"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";
import { SectionHeading, Reveal } from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Products, platforms, and automations shipped end-to-end."
        />

        {/* Category filters */}
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-200 shadow-glow-cyan"
                  : "border-obsidian-border bg-white/5 text-zinc-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="flex h-full flex-col">
                  <div
                    className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${project.gradient}`}
                  />
                  <span className="mb-2 font-mono text-[11px] uppercase tracking-wider text-cyan-300">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-obsidian-border bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="inline-flex items-center justify-center rounded-full border border-obsidian-border bg-white/5 p-2.5 text-white transition-colors duration-300 hover:border-cyan-400/50"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
