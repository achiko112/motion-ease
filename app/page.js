import Image from "next/image";

const EMAIL = "contact@studiomotionease.com";
const FB_URL = "https://www.facebook.com/profile.php?id=61588563495145";
const IG_URL = "https://www.instagram.com/motion_ease/";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-cream">
      {/* ── Decorative motion-design line art (cream area) ── */}
      <LineArtCream />

      {/* ── Logo (exact brand artwork) ── */}
      <header className="relative z-10 flex justify-center px-6 pt-10 sm:pt-14">
        <Image
          src="/logo.png"
          alt="Motion Ease — მოუშენ იზი"
          width={1735}
          height={427}
          priority
          className="h-auto w-[clamp(220px,42vw,440px)]"
        />
      </header>

      {/* ── Blue wave section ── */}
      <section className="relative flex flex-1 flex-col items-center justify-center bg-blue px-6 pb-16 pt-10 text-center">
        {/* Wavy top edge of the blue block */}
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-[7vw] max-h-20 min-h-10 w-full -translate-y-[99%]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#446bd8"
            d="M0,52 C180,10 360,8 540,42 C720,76 900,82 1080,52 C1260,24 1380,30 1440,46 L1440,100 L0,100 Z"
          />
        </svg>

        {/* Decorative motion-design line art (blue area) */}
        <LineArtBlue />

        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
          <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl">
            საიტი მალე განახლდება
          </h1>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-9 inline-flex items-center rounded-full bg-cream px-7 py-3 text-sm font-medium text-blue-dark shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md sm:text-base"
          >
            Contact@studiomotionease.com
          </a>

          <div className="mt-7 flex items-center gap-4">
            <SocialLink href={FB_URL} label="Facebook">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
            </SocialLink>
            <SocialLink href={IG_URL} label="Instagram">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
            </SocialLink>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Social icon button ── */
function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-blue transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

/* ── Motion-design line art over the cream header area ── */
function LineArtCream() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 text-blue-dark"
      aria-hidden="true"
    >
      {/* Easing / bezier curve, top-left */}
      <svg
        className="drift absolute -left-4 top-4 hidden w-40 opacity-[0.10] sm:block lg:w-52"
        viewBox="0 0 200 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M10,110 C60,110 80,10 190,10" strokeLinecap="round" />
        <line x1="10" y1="110" x2="70" y2="70" strokeDasharray="3 5" />
        <line x1="190" y1="10" x2="130" y2="40" strokeDasharray="3 5" />
        <circle cx="10" cy="110" r="5" fill="currentColor" stroke="none" />
        <circle cx="190" cy="10" r="5" fill="currentColor" stroke="none" />
        <circle cx="70" cy="70" r="4" />
        <circle cx="130" cy="40" r="4" />
      </svg>

      {/* Concentric motion arcs, top-right */}
      <svg
        className="drift-slow absolute -right-6 top-6 hidden w-40 opacity-[0.10] sm:block lg:w-48"
        viewBox="0 0 160 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M40,120 A60,60 0 0 1 120,40" />
        <path d="M55,128 A80,80 0 0 1 128,55" opacity="0.7" />
        <path d="M70,136 A100,100 0 0 1 136,70" opacity="0.45" />
        <circle cx="120" cy="40" r="5" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}

/* ── Motion-design line art over the blue area ── */
function LineArtBlue() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 text-cream"
      aria-hidden="true"
    >
      {/* Keyframe timeline, left */}
      <svg
        className="drift absolute left-2 top-1/2 hidden w-28 -translate-y-1/2 opacity-[0.16] md:block lg:left-8 lg:w-36"
        viewBox="0 0 120 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="4" y1="30" x2="116" y2="30" />
        <rect x="20" y="22" width="14" height="14" transform="rotate(45 27 30)" fill="currentColor" stroke="none" />
        <rect x="55" y="23" width="13" height="13" transform="rotate(45 61.5 30)" />
        <rect x="92" y="22" width="14" height="14" transform="rotate(45 99 30)" />
      </svg>

      {/* Dashed motion path with a node, right */}
      <svg
        className="drift-slow absolute right-2 top-[42%] hidden w-32 opacity-[0.18] md:block lg:right-10 lg:w-44"
        viewBox="0 0 160 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path className="dash-march" d="M8,100 C50,100 60,20 150,20" />
        <circle cx="8" cy="100" r="5" fill="currentColor" stroke="none" />
        <path d="M150,20 l-12,-5 l4,9 Z" fill="currentColor" stroke="none" />
      </svg>

      {/* Play glyph, bottom-left */}
      <svg
        className="drift absolute bottom-10 left-6 hidden w-20 opacity-[0.14] lg:block"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="40" cy="40" r="34" />
        <path d="M33,28 L55,40 L33,52 Z" fill="currentColor" stroke="none" />
      </svg>

      {/* Onion-skin frames, bottom-right */}
      <svg
        className="drift-slow absolute bottom-10 right-8 hidden w-28 opacity-[0.13] lg:block"
        viewBox="0 0 120 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <rect x="8" y="20" width="70" height="48" rx="6" opacity="0.5" />
        <rect x="24" y="14" width="70" height="48" rx="6" opacity="0.75" />
        <rect x="40" y="8" width="70" height="48" rx="6" />
      </svg>
    </div>
  );
}
