"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

/**
 * A button/link that gently follows the cursor within its bounds ("magnetic"
 * hover) and emits a soft ripple on click. Renders as a single <a> or
 * <button> element -- no nested interactive elements.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  function spawnRipple(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  function handleClick(e: MouseEvent) {
    spawnRipple(e);
    onClick?.();
  }

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none";

  const variantStyles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500 text-black shadow-glow hover:shadow-glow-cyan"
      : "glass text-white hover:border-cyan-400/50";

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      className="pointer-events-none absolute rounded-full bg-white/40"
      style={{
        left: r.x,
        top: r.y,
        width: 10,
        height: 10,
        transform: "translate(-50%, -50%)",
        animation: "ripple-expand 0.65s ease-out forwards",
      }}
    />
  ));

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
        className={cn(baseStyles, variantStyles, className)}
      >
        {children}
        {rippleNodes}
        <RippleKeyframes />
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn(baseStyles, variantStyles, disabled && "opacity-50 pointer-events-none", className)}
    >
      {children}
      {rippleNodes}
      <RippleKeyframes />
    </motion.button>
  );
}

function RippleKeyframes() {
  return (
    <style jsx>{`
      @keyframes ripple-expand {
        0% {
          width: 10px;
          height: 10px;
          opacity: 0.5;
        }
        100% {
          width: 260px;
          height: 260px;
          opacity: 0;
        }
      }
    `}</style>
  );
}
