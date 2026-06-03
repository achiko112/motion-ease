"use client";

import Reveal from "./Reveal";

const steps = [
  {
    step: "01",
    title: "Brief",
    desc: "We dig into your goals, audience and brand to define the direction.",
  },
  {
    step: "02",
    title: "Concept",
    desc: "Style frames, storyboards and a clear creative concept to align on.",
  },
  {
    step: "03",
    title: "Animate",
    desc: "We bring it to life — animation, sound and the details that matter.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Final files, optimized for every platform you need them on.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">
          Process
        </p>
        <h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          How we work
        </h2>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.1}>
            <div className="relative">
              <span className="gradient-text text-5xl font-semibold">
                {s.step}
              </span>
              <h3 className="mt-5 text-xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
