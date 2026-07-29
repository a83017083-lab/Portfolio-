"use client";

import * as Icons from "lucide-react";
import { FOCUS_AREAS, STATS } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui/Reveal";
import StatCounter from "./ui/StatCounter";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Builder. Creator. Entrepreneur."
          description="The story behind the screen."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-2xl border border-obsidian-border p-8">
              <p className="text-zinc-300">
                I&apos;m Abhinav — a full-stack builder who splits time
                between shipping production web applications and documenting
                the process for a growing developer audience. What started as
                curiosity about how modern products get built turned into a
                habit of building in public: a new automation, a client
                project, an experiment with AI tools, all shared as it
                happens.
              </p>
              <p className="mt-4 text-zinc-300">
                As an entrepreneur, I care about outcomes as much as code —
                whether that&apos;s a workflow that saves a business hours
                every week, or a piece of content that helps another builder
                skip a mistake I already made. The throughline across
                everything I make is the same: solve something real, explain
                it clearly, and make it feel good to use.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {FOCUS_AREAS.map((area, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
                area.icon
              ];
              return (
                <Reveal key={area.title} delay={i * 0.08}>
                  <div className="glow-border glass group h-full rounded-2xl border border-obsidian-border p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                      {Icon && (
                        <Icon
                          className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
