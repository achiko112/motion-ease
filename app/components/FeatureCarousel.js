"use client";

import React from "react";

// Coverflow carousel. Videos render only for the visible cards (center + the
// two neighbours = max 3 decoders, so it stays light and doesn't crash); cards
// further out are static last-frame images. The centre plays; a neighbour is
// paused IN PLACE, so a card leaving the centre freezes on the exact frame it
// had at that moment. A card that hasn't played yet shows its last frame
// (poster) until it reaches the centre.
const isVideo = (src) => /\.(mp4|webm|mov|m4v|ogv)$/i.test(src);
const stripExt = (src) => src.replace(/\.[^.]+$/, "");

export default function FeatureCarousel({ images, className = "" }) {
  // Start on the first item so the sequence always runs 1 → N in order.
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => setCurrentIndex((i) => (i + 1) % images.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  // Auto-advance; timer resets on every index change (manual or auto).
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <div
      className={`relative flex h-[360px] w-full items-center justify-center md:h-[520px] ${className}`}
    >
      <div className="relative flex h-full w-full items-center justify-center [perspective:1000px]">
        {images.map((image, index) => {
          const offset = index - currentIndex;
          const total = images.length;
          let pos = (offset + total) % total;
          if (pos > Math.floor(total / 2)) pos = pos - total;

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;
          const nearCenter = Math.abs(pos) <= 1; // these render as <video>

          return (
            <div
              key={index}
              className="absolute flex aspect-[4/5] w-52 items-center justify-center transition-all duration-1000 ease-in-out md:w-72"
              style={{
                transform: `translateX(${pos * 45}%) scale(${
                  isCenter ? 1 : isAdjacent ? 0.85 : 0.7
                }) rotateY(${pos * -10}deg)`,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
            >
              <Slide media={image} active={isCenter} nearCenter={nearCenter} />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handlePrev}
        aria-label="წინა"
        className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-blue-dark/25 bg-cream/70 text-blue-dark backdrop-blur-sm transition duration-200 hover:scale-110 hover:bg-blue-dark hover:text-cream active:scale-90 sm:left-2"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="შემდეგი"
        className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-blue-dark/25 bg-cream/70 text-blue-dark backdrop-blur-sm transition duration-200 hover:scale-110 hover:bg-blue-dark hover:text-cream active:scale-90 sm:right-2"
      >
        <Chevron dir="right" />
      </button>
    </div>
  );
}

function Slide({ media, active, nearCenter }) {
  const videoRef = React.useRef(null);
  // iOS only autoplays inline videos whose `muted` is a real property at load
  // time; React doesn't always set it, so we force it via the ref.
  const attachVideo = React.useCallback((el) => {
    videoRef.current = el;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
    }
  }, []);
  const video = isVideo(media.src);
  const renderVideo = video && nearCenter;
  const base = stripExt(media.src);
  const lastFrame = `${base}-last.jpg`;

  // Centre plays; a neighbour pauses in place (freezing its current frame).
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!active) {
      v.pause();
      return;
    }
    // play() also kicks off buffering; if it's rejected (called before data
    // is ready), retry once the video can play.
    v.muted = true;
    let retry;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        retry = () => {
          v.play().catch(() => {});
        };
        v.addEventListener("canplay", retry, { once: true });
      });
    }
    return () => {
      if (retry) v.removeEventListener("canplay", retry);
    };
  }, [active, renderVideo]);

  // bg keeps the card brand-coloured if a frame hasn't painted yet (no flash).
  const cls =
    "h-full w-full rounded-3xl border border-blue-dark/10 bg-blue-dark object-cover shadow-2xl";

  if (renderVideo) {
    return (
      <video
        ref={attachVideo}
        className={cls}
        src={media.src}
        poster={lastFrame}
        autoPlay={active}
        muted
        loop
        playsInline
        preload={active ? "auto" : "metadata"}
        aria-label={media.alt}
      />
    );
  }

  // Far cards (and any non-video item): a static last-frame image.
  return (
    <img src={video ? lastFrame : media.src} alt={media.alt} className={cls} />
  );
}

function Chevron({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}
