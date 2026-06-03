"use client";

import Reveal from "./Reveal";

const services = [
  {
    title: "Logo Animation",
    desc: "Bring your brand mark to life with crisp, memorable motion.",
    num: "01",
  },
  {
    title: "Explainer Videos",
    desc: "Turn complex ideas into clear, engaging animated stories.",
    num: "02",
  },
  {
    title: "3D & Motion Graphics",
    desc: "High-end 3D visuals and dynamic graphics that stand out.",
    num: "03",
  },
  {
    title: "Social Content",
    desc: "Scroll-stopping animated content built for every platform.",
    num: "04",
  },
  {
    title: "UI / Product Motion",
    desc: "Micro-interactions and transitions that make products feel alive.",
    num: "05",
  },
  {
    title: "Art Direction",
    desc: "End-to-end visual direction for your motion identity.",
    num: "06",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-border bg-white/[0.01]">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-2 text-sm uppercase tracking-widest text-accent">
            Services
          </p>
          <h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            What we do
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-card">
                <span className="font-mono text-sm text-muted">{s.num}</span>
                <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
