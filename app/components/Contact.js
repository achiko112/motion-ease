"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-0 rotate-180" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Let&apos;s make something <span className="gradient-text">move</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted">
            Have a project in mind? Tell us about it — we&apos;d love to hear
            from you.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.a
            href="mailto:hello@motionease.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-block rounded-full bg-foreground px-8 py-4 text-lg font-medium text-background"
          >
            hello@motionease.com
          </motion.a>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <span className="opacity-30">·</span>
            <a href="#" className="transition-colors hover:text-foreground">
              Behance
            </a>
            <span className="opacity-30">·</span>
            <a href="#" className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
