"use client";

import React from "react";

// Coverflow-style photo carousel (auto-advancing) adapted to plain JS.
// Pass `images` as [{ src, alt }]. Replace the placeholder works with real ones.
export default function FeatureCarousel({ images, className = "" }) {
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(images.length / 2)
  );

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % images.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  // Auto-advance. The timer resets on every index change (manual or auto),
  // so clicking an arrow never triggers an extra automatic jump right after.
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 4000);
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

          return (
            <div
              key={index}
              className="absolute flex aspect-[4/5] w-52 items-center justify-center transition-all duration-500 ease-in-out md:w-72"
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
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-3xl border-2 border-blue-dark/10 object-cover shadow-2xl"
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handlePrev}
        aria-label="წინა"
        className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-dark/25 bg-cream/70 text-blue-dark backdrop-blur-sm transition-colors hover:bg-cream sm:left-2"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="შემდეგი"
        className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-dark/25 bg-cream/70 text-blue-dark backdrop-blur-sm transition-colors hover:bg-cream sm:right-2"
      >
        <Chevron dir="right" />
      </button>
    </div>
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
