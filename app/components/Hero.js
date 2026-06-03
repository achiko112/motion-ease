"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow — placeholder for showreel video */}
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-1/2 h-[320px] w-[320px] rounded-full bg-accent-2/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6 pt-24"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Motion Design Studio
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          We make brands <span className="gradient-text">move</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          Motion Ease is a design studio crafting animation, motion graphics and
          3D that bring ideas to life. [placeholder tagline]
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-foreground px-7 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="rounded-full border border-border px-7 py-3 font-medium text-foreground transition-colors hover:bg-card"
          >
            View work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="inline-block"
        >
          ↓ Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
