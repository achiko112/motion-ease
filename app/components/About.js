"use client";

import Reveal from "./Reveal";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Happy clients" },
  { value: "5", label: "Years of motion" },
];

export default function About() {
  return (
    <section id="about" className="border-y border-border bg-white/[0.01]">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:grid-cols-2">
        <Reveal>
          <p className="mb-2 text-sm uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A small studio with a big love for motion.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            [placeholder] Motion Ease is a motion design studio. We partner with
            brands and teams to turn static ideas into motion that feels
            effortless. Tell your story here — who you are and what makes you
            different.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-8">
                <div className="gradient-text text-4xl font-semibold sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </div>
            ))}
            <div className="flex items-center justify-center bg-background p-8 text-sm text-muted">
              [ your photo / logo ]
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
