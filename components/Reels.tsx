"use client";

import { PlayCircle, Instagram, Heart } from "lucide-react";
import { REELS } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

export default function Reels() {
  return (
    <section id="reels" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Reels & Content"
          title="The Build, Documented"
          description="Short-form content breaking down builds, tools, and lessons from the field."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((reel, i) => (
            <Reveal key={reel.id} delay={(i % 3) * 0.1}>
              <TiltCard className="flex h-full flex-col p-0 overflow-hidden">
                {/* Video/thumbnail placeholder */}
                <div
                  className={`relative flex aspect-[9/13] items-center justify-center bg-gradient-to-br ${reel.thumbnailGradient} border-b border-obsidian-border`}
                >
                  <PlayCircle
                    className="h-14 w-14 text-white/80 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="absolute left-3 top-3 rounded-full glass border border-obsidian-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-200">
                    {reel.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-white">
                    {reel.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-400">
                    {reel.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {reel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={reel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-obsidian-border bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-200"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    Watch on Instagram
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a
            href="https://www.instagram.com/buildweth_abhinavk7852"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-300 hover:text-cyan-200"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            See every reel on @buildweth_abhinavk7852
          </a>
        </Reveal>
      </div>
    </section>
  );
}
