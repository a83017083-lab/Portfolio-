"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui/Reveal";

export default function SocialHub() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Find Me Everywhere"
          description="Follow the build, check the code, or send a message directly."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {SOCIAL_LINKS.map((social, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              social.icon
            ];
            return (
              <Reveal key={social.name} delay={i * 0.08}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="glow-border glass group flex items-center gap-5 rounded-2xl border border-obsidian-border p-6 transition-shadow duration-500 hover:shadow-glow"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-purple-500/20">
                    {Icon && (
                      <Icon
                        className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {social.name}
                    </h3>
                    <p className="truncate font-mono text-sm text-cyan-300">
                      {social.handle}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      {social.description}
                    </p>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
