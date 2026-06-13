import Image from "next/image";
import FeatureCarousel from "./components/FeatureCarousel";

const EMAIL = "contact@studiomotionease.com";
// Opens Gmail's compose window with the address pre-filled.
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const FB_URL = "https://www.facebook.com/profile.php?id=61588563495145";
const IG_URL = "https://www.instagram.com/motion_ease/";

// Placeholder works — swap the src paths with real renders/photos later.
const WORKS = [
  { src: "/portfolio/work-1.svg", alt: "Motion Ease ნამუშევარი 1" },
  { src: "/portfolio/work-2.svg", alt: "Motion Ease ნამუშევარი 2" },
  { src: "/portfolio/work-3.svg", alt: "Motion Ease ნამუშევარი 3" },
  { src: "/portfolio/work-4.svg", alt: "Motion Ease ნამუშევარი 4" },
  { src: "/portfolio/work-5.svg", alt: "Motion Ease ნამუშევარი 5" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-cream px-[clamp(1.5rem,6vw,6rem)] py-[clamp(1.5rem,4.5vh,3rem)] text-blue-dark">
      {/* ── Logo (exact brand artwork) — centered on mobile, left on desktop ── */}
      <header className="relative z-10 flex justify-center lg:block">
        <Image
          src="/logo.png"
          alt="Motion Ease — მოუშენ იზი"
          width={1735}
          height={427}
          priority
          className="h-auto w-[clamp(130px,16vw,200px)]"
        />
      </header>

      {/* ── Two columns: copy on the left, photo carousel on the right ── */}
      <section className="relative z-10 grid flex-1 items-center gap-10 py-10 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div>
          {/* Written in Mtavruli (Georgian all-caps, uniform height).
              CSS text-transform doesn't map mkhedruli→mtavruli, so the
              capital glyphs are used directly. */}
          <h1 className="text-center text-[clamp(2.5rem,8.5vw,6.5rem)] font-extrabold leading-[1.25] tracking-tight lg:text-left">
            ᲛᲐᲚᲔ
            <br />
            ᲓᲐᲕᲘᲬᲧᲔᲑᲗ
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
        </div>

        {/* Right: photo carousel */}
        <div className="flex items-center justify-center">
          <FeatureCarousel images={WORKS} />
        </div>
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
