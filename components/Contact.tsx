"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, Instagram, Linkedin } from "lucide-react";
import { SITE } from "@/lib/data";
import { SectionHeading, Reveal } from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

type FormState = "idle" | "loading" | "success" | "error";

// Use an env var on the client (NEXT_PUBLIC_) with a safe fallback to the current key.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "10522f2c-f920-42f9-9f03-e23ecf6eb8a2";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;

    setFormState("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: values.name,
          email: values.email,
          message: values.message,
          subject: `New portfolio message from ${values.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFormState("success");
        setTimeout(() => {
          setFormState("idle");
          setValues({ name: "", email: "", message: "" });
        }, 2600);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 2600);
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 2600);
    }
  }

  const fields: {
    key: keyof typeof values;
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    { key: "name", label: "Name", type: "text", placeholder: "Your Name" },
    { key: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  ];

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          description="Have a project, collab, or idea in mind? Send it over."
        />

        <Reveal>
          <div className="glass rounded-3xl border border-obsidian-border p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.key} className="relative">
                    <label
                      htmlFor={field.key}
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.key}
                      type={field.type}
                      required
                      value={values[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      onFocus={() => setFocused(field.key)}
                      onBlur={() => setFocused(null)}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-obsidian-border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 transition-all duration-300 focus:outline-none"
                      style={{
                        boxShadow:
                          focused === field.key
                            ? "0 0 0 2px rgba(34,211,238,0.5), 0 0 30px -5px rgba(139,92,246,0.4)"
                            : "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-xl border border-obsidian-border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 transition-all duration-300 focus:outline-none"
                  style={{
                    boxShadow:
                      focused === "message"
                        ? "0 0 0 2px rgba(34,211,238,0.5), 0 0 30px -5px rgba(139,92,246,0.4)"
                        : "none",
                  }}
                />
              </div>

              <MagneticButton type="submit" disabled={formState !== "idle"} className="w-full sm:w-auto">
                <AnimatePresence mode="wait">
                  {formState === "idle" && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send Message
                    </motion.span>
                  )}

                  {formState === "loading" && (
                    <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <motion.span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black" animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }} />
                      Sending...
                    </motion.span>
                  )}

                  {formState === "success" && (
                    <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      Message Sent!
                    </motion.span>
                  )}

                  {formState === "error" && (
                    <motion.span key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Failed — Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </MagneticButton>
            </form>

            <div className="mt-10 grid gap-3 border-t border-obsidian-border pt-8 sm:grid-cols-3">
              <a href={`mailto:${SITE.email}`} className="flex items-center justify-center gap-2 rounded-xl border border-obsidian-border bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-400/50">
                <Mail className="h-4 w-4" aria-hidden="true" /> Send Email
              </a>

              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-obsidian-border bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-pink-400/50">
                <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram DM
              </a>

              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-obsidian-border bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-violet-400/50">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn Connect
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
