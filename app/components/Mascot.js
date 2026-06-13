"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

// Brand colors (from the Motion Ease logo)
const DARK = "#1349A8";
const LIGHT = "#4A6FE8";
const INK = "#08080a";

// Eyes set wide apart
const EYES = {
  l: { cx: 47, cy: 37 },
  r: { cx: 63, cy: 37 },
};

export default function Mascot() {
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  const excitedRef = useRef(false);
  const celebrateRef = useRef(() => {});

  const [pupils, setPupils] = useState({ l: { x: 0, y: 0 }, r: { x: 0, y: 0 } });
  const [blink, setBlink] = useState(false);
  const [excited, setExcited] = useState(false);
  const [emotion, setEmotion] = useState("idle"); // idle | happy | angry | surprised

  const body = useAnimationControls();
  const leftArm = useAnimationControls();
  const rightArm = useAnimationControls();

  // --- Pupils follow the mouse across the page ---
  useEffect(() => {
    const maxTravel = 2.4;
    const aim = (el, mx, my) => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const angle = Math.atan2(my - cy, mx - cx);
      const dist = Math.min(maxTravel, Math.hypot(mx - cx, my - cy) / 45);
      return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
    };
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setPupils({
          l: aim(leftEye.current, e.clientX, e.clientY),
          r: aim(rightEye.current, e.clientX, e.clientY),
        })
      );
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // --- Blinking (only in neutral idle face) ---
  useEffect(() => {
    const id = setInterval(() => {
      if (excitedRef.current) return;
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  // --- Entrance + random mood/gesture cycle ---
  useEffect(() => {
    let alive = true;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const happy = async () => {
      setEmotion("happy");
      await Promise.all([
        body.start({ y: [0, -12, 0, -8, 0], transition: { duration: 1 } }),
        leftArm.start({
          rotate: [0, -45, -15, -45, 0],
          transition: { duration: 1 },
        }),
      ]);
      setEmotion("idle");
    };

    const angry = async () => {
      setEmotion("angry");
      await body.start({
        rotate: [0, -6, 6, -6, 6, -4, 0],
        x: [0, -3, 3, -3, 3, 0, 0],
        transition: { duration: 0.85 },
      });
      await sleep(400);
      setEmotion("idle");
    };

    const surprised = async () => {
      setEmotion("surprised");
      leftArm.start({ rotate: -110, transition: { duration: 0.15 } });
      rightArm.start({ rotate: 110, transition: { duration: 0.15 } });
      await body.start({
        y: [0, -22, 0],
        scale: [1, 1.12, 1],
        transition: { duration: 0.6 },
      });
      await sleep(350);
      leftArm.start({ rotate: 0, transition: { duration: 0.25 } });
      rightArm.start({ rotate: 0, transition: { duration: 0.25 } });
      setEmotion("idle");
    };

    const wave = () =>
      leftArm.start({
        rotate: [0, -45, -15, -45, 0],
        transition: { duration: 1.1, ease: "easeInOut" },
      });

    const hop = () =>
      body.start({ y: [0, -14, 0], transition: { duration: 0.6 } });

    const routines = [happy, angry, surprised, wave, hop];

    const run = async () => {
      await body.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 18, delay: 1.2 },
      });
      while (alive) {
        await sleep(3000 + Math.random() * 2500);
        if (!alive || excitedRef.current) continue;
        await routines[Math.floor(Math.random() * routines.length)]();
      }
    };
    run();

    return () => {
      alive = false;
    };
  }, [body, leftArm, rightArm]);

  // --- Celebration on any button/link click (or clicking the mascot) ---
  useEffect(() => {
    celebrateRef.current = async () => {
      if (excitedRef.current) return;
      excitedRef.current = true;
      setExcited(true);

      leftArm.start({ rotate: -130, transition: { duration: 0.2 } });
      rightArm.start({ rotate: 130, transition: { duration: 0.2 } });

      await body.start({
        x: [0, -16, 14, -8, 0],
        y: [0, -32, -6, -20, 0],
        rotate: [0, -8, 8, -5, 0],
        transition: { duration: 1.3, ease: "easeInOut" },
      });

      leftArm.start({ rotate: 0, transition: { duration: 0.3 } });
      rightArm.start({ rotate: 0, transition: { duration: 0.3 } });
      setExcited(false);
      excitedRef.current = false;
    };
  });

  useEffect(() => {
    const onClick = (e) => {
      const t = e.target;
      if (t instanceof Element && t.closest("button, a, [role='button']")) {
        celebrateRef.current();
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  // --- Derive facial state ---
  const wideEyes = excited || emotion === "surprised";
  const happyEyes = !excited && emotion === "happy";
  const angryEyes = emotion === "angry";

  const baseRy = wideEyes ? 7.2 : angryEyes ? 3.8 : 5;
  const ry = !wideEyes && !angryEyes && blink ? 0.6 : baseRy;
  const rx = wideEyes ? 6 : 5;

  const mouth = excited
    ? "laugh"
    : emotion === "happy"
    ? "laugh"
    : emotion === "angry"
    ? "frown"
    : emotion === "surprised"
    ? "o"
    : "smile";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={body}
      onClick={() => celebrateRef.current()}
      className="fixed bottom-5 right-5 z-40 w-32 cursor-pointer select-none sm:bottom-8 sm:right-8 sm:w-40"
      aria-label="Motion Ease mascot"
    >
      {/* gentle continuous float */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 110 120" className="h-auto w-full overflow-visible">
          <defs>
            <linearGradient id="me-body" x1="0" y1="0" x2="1" y2="0">
              <stop offset="50%" stopColor={DARK} />
              <stop offset="50%" stopColor={LIGHT} />
            </linearGradient>
          </defs>

          {/* legs — thin black stripes */}
          <g>
            <path d="M49 82 L49 97" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
            <path d="M61 82 L61 97" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="48.5" cy="98.5" r="1.9" fill={INK} />
            <circle cx="61.5" cy="98.5" r="1.9" fill={INK} />
          </g>

          {/* left arm — thin black stripe (rotates at shoulder) */}
          <motion.g
            animate={leftArm}
            style={{ transformBox: "view-box", transformOrigin: "45px 66px" }}
          >
            <path d="M45 66 L29 73" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="28.5" cy="73.5" r="1.9" fill={INK} />
          </motion.g>

          {/* right arm */}
          <motion.g
            animate={rightArm}
            style={{ transformBox: "view-box", transformOrigin: "65px 66px" }}
          >
            <path d="M65 66 L81 73" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="81.5" cy="73.5" r="1.9" fill={INK} />
          </motion.g>

          {/* body — the logo hourglass shape */}
          <path
            d="M35 28 L75 28 L58 55 L75 82 L35 82 L52 55 Z"
            fill="url(#me-body)"
            stroke="url(#me-body)"
            strokeWidth="9"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* eyes */}
          {[
            { ref: leftEye, e: EYES.l, p: pupils.l },
            { ref: rightEye, e: EYES.r, p: pupils.r },
          ].map((eye, i) => (
            <g key={i}>
              {happyEyes ? (
                <path
                  d={`M${eye.e.cx - 5} ${eye.e.cy + 1} Q ${eye.e.cx} ${
                    eye.e.cy - 5
                  } ${eye.e.cx + 5} ${eye.e.cy + 1}`}
                  stroke={INK}
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <motion.ellipse
                    ref={eye.ref}
                    cx={eye.e.cx}
                    cy={eye.e.cy}
                    initial={{ rx: 5, ry: 5 }}
                    animate={{ rx, ry }}
                    transition={{ duration: 0.12 }}
                    fill="#ffffff"
                  />
                  <circle
                    cx={eye.e.cx + eye.p.x}
                    cy={eye.e.cy + eye.p.y}
                    r={wideEyes ? 2.2 : 2.6}
                    fill={INK}
                    opacity={!wideEyes && !angryEyes && blink ? 0 : 1}
                  />
                </>
              )}
            </g>
          ))}

          {/* angry eyebrows */}
          {angryEyes && (
            <g stroke={INK} strokeWidth="2.4" strokeLinecap="round">
              <path d="M42 31 L51 34.5" />
              <path d="M68 31 L59 34.5" />
            </g>
          )}

          {/* mouth — narrower */}
          {mouth === "laugh" ? (
            <motion.ellipse
              cx="55"
              cy="47"
              rx="3.4"
              fill={INK}
              animate={{ ry: [3, 5, 3] }}
              transition={{ repeat: Infinity, duration: 0.32 }}
            />
          ) : mouth === "frown" ? (
            <path
              d="M52.5 47.5 Q55 44.8 57.5 47.5"
              stroke={INK}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          ) : mouth === "o" ? (
            <ellipse cx="55" cy="46.5" rx="2.3" ry="3" fill={INK} />
          ) : (
            <path
              d="M53 45.8 Q55 47.8 57 45.8"
              stroke={INK}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
}
