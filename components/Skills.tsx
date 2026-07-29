"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack & Skills"
          title="Tools of the Trade"
          description="What I reach for when building products and content."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((cat, catIndex) => {
            const CatIcon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              cat.icon
            ];
            return (
              <Reveal key={cat.category} delay={catIndex * 0.1}>
                <div className="glass h-full rounded-2xl border border-obsidian-border p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                      {CatIcon && (
                        <CatIcon className="h-5 w-5 text-violet-300" aria-hidden="true" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => {
                      const SkillIcon = (
                        Icons as unknown as Record<string, Icons.LucideIcon>
                      )[skill.icon];
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -4 }}
                          className="glow-border group flex items-center gap-2 rounded-xl border border-obsidian-border bg-white/5 px-4 py-2.5 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                        >
                          {SkillIcon && (
                            <SkillIcon
                              className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                              aria-hidden="true"
                            />
                          )}
                          <span className="text-sm font-medium text-zinc-200">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
