"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, SITE } from "@/lib/data";

export default function Footer() {
  function scrollToTop() {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-obsidian-border px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-lg font-semibold text-white">
            {SITE.name}
            <span className="text-cyan-300">.dev</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Building in public. One product, one reel, one automation at a
            time.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
                social.icon
              ];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-obsidian-border bg-white/5 text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Quick Links
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-obsidian-border pt-8 sm:flex-row">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          aria-label="Back to top"
          className="flex items-center gap-2 rounded-full border border-obsidian-border bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-white"
        >
          Back to Top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </motion.button>
      </div>
    </footer>
  );
}
