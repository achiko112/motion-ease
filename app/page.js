import Image from "next/image";

const EMAIL = "contact@studiomotionease.com";
// Opens Gmail's compose window with the address pre-filled.
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const FB_URL = "https://www.facebook.com/profile.php?id=61588563495145";
const IG_URL = "https://www.instagram.com/motion_ease/";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-cream px-[clamp(1.5rem,6vw,6rem)] py-[clamp(1.5rem,4.5vh,3rem)] text-blue-dark">
      {/* Subtle motion-design line art filling the empty right side */}
      <LineArt />

      {/* ── Logo (exact brand artwork), top-left ── */}
      <header className="relative z-10">
        <Image
          src="/logo.png"
          alt="Motion Ease — მოუშენ იზი"
          width={1735}
          height={427}
          priority
          className="h-auto w-[clamp(130px,16vw,200px)]"
        />
      </header>

      {/* ── Main copy, left-aligned, vertically centered ── */}
      <section className="relative z-10 flex flex-1 flex-col justify-center py-10">
        <h1 className="text-[clamp(2.75rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-tight">
          მალე
          <br />
          დავიწყებთ
        </h1>

        <p className="mt-7 max-w-md text-[clamp(0.95rem,1.4vw,1.125rem)] leading-relaxed">
          რეკლამაში ჩადებული თანხა ინვესტიციაა, რომელიც სწორ ვიზუალს საჭიროებს.
          Motion Ease ქმნის მოძრავ კონტენტს, რომელიც არა მხოლოდ ლამაზია, არამედ
          მომხმარებლის ყურადღებას წამებში იპყრობს.
        </p>

        <a
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex w-fit items-center rounded-full border-[1.5px] border-blue-dark px-8 py-3 text-sm font-medium text-blue-dark transition-colors duration-200 hover:bg-blue-dark hover:text-cream sm:text-base"
        >
          დაგვიკავშირდი
        </a>
      </section>

      {/* ── Social links, bottom-left ── */}
      <footer className="relative z-10 flex items-center gap-4">
        <span className="text-sm font-medium tracking-wide sm:text-base">
          სოც. ქსელები
        </span>
        <span aria-hidden className="h-px w-12 bg-blue-dark/70 sm:w-16" />
        <a
          href={FB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-dark transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="currentColor" />
            <path
              fill="#f8f3f0"
              d="M13.4 21v-7h2.3l.34-2.7h-2.64V9.58c0-.78.22-1.31 1.34-1.31h1.42V5.86c-.25-.03-1.09-.1-2.06-.1-2.04 0-3.44 1.25-3.44 3.54v1.98H8.4V14h2.3v7h2.7Z"
            />
          </svg>
        </a>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-blue-dark transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </footer>
    </main>
  );
}

/* ── Subtle motion-design line art on the empty right area ── */
function LineArt() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 text-blue-dark"
      aria-hidden="true"
    >
      {/* Easing / bezier curve, upper-right */}
      <svg
        className="drift absolute right-[6%] top-[14%] hidden w-44 opacity-[0.10] lg:block xl:w-56"
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

      {/* Concentric motion arcs, mid-right */}
      <svg
        className="drift-slow absolute right-[10%] top-1/2 hidden w-48 opacity-[0.09] lg:block xl:w-60"
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

      {/* Dashed motion path with a node, lower-right */}
      <svg
        className="drift absolute bottom-[16%] right-[8%] hidden w-44 opacity-[0.10] lg:block xl:w-52"
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
    </div>
  );
}
