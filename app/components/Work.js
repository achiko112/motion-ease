"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Placeholder projects — replace with real videos/thumbnails later.
const projects = [
  { title: "Project One", type: "Logo Animation", gradient: "from-violet-500/40 to-fuchsia-500/20" },
  { title: "Project Two", type: "Explainer Video", gradient: "from-sky-500/40 to-indigo-500/20" },
  { title: "Project Three", type: "3D Motion", gradient: "from-rose-500/40 to-orange-500/20" },
  { title: "Project Four", type: "Social Content", gradient: "from-emerald-500/40 to-teal-500/20" },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-accent">
              Selected Work
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Things we&apos;ve made move
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden text-sm text-muted transition-colors hover:text-foreground md:block"
          >
            See all →
          </a>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.a
              href="#contact"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group block overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Media placeholder — swap for <video> later */}
              <div
                className={`relative aspect-video w-full bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-sm text-foreground/40">
                  [ video preview ]
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <div className="flex items-center justify-between p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <span className="text-sm text-muted">{p.type}</span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
