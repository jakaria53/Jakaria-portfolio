"use client";

import { useEffect, useId, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
  type Variants,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe,
  Sparkles,
} from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const roles = [
  "Frontend Developer",
  "React & Next.js Builder",
  "Creative Thinker",
];

const techChips = ["React", "Next.js", "Tailwind", "Framer Motion"];

// Fixed star positions (no Math.random, so server and client always match)
const stars = Array.from({ length: 50 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: (i % 3) + 1,
  delay: (i % 8) * 0.4,
  duration: 2.5 + (i % 5) * 0.7,
}));

const constellation = [
  { x: 20, y: 200 },
  { x: 90, y: 140 },
  { x: 170, y: 170 },
  { x: 250, y: 90 },
  { x: 330, y: 120 },
  { x: 380, y: 40 },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const wordReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease } },
};

/* ------------------------------------------------------------------ */
/*  Butterfly (fills the width of its parent)                          */
/* ------------------------------------------------------------------ */
function Butterfly({
  from = "#22d3ee",
  to = "#a855f7",
  flapSpeed = 0.7,
  glow = "rgba(34,211,238,0.5)",
}: {
  from?: string;
  to?: string;
  flapSpeed?: number;
  glow?: string;
}) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const gradTop = `wingTop-${uid}`;
  const gradBottom = `wingBottom-${uid}`;

  const flap = reduce ? undefined : { scaleX: [1, 0.18, 1] };
  const flapTransition = {
    duration: flapSpeed,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: flapSpeed, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 200 160"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `drop-shadow(0 0 14px ${glow})` }}
      >
        <defs>
          <linearGradient id={gradTop} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <linearGradient id={gradBottom} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={to} />
            <stop offset="100%" stopColor={from} />
          </linearGradient>
        </defs>

        <motion.g
          style={{ originX: 1, originY: 0.5 }}
          animate={flap}
          transition={flapTransition}
        >
          <path
            d="M100 75 C70 20, 20 5, 10 40 C5 65, 50 85, 100 80 Z"
            fill={`url(#${gradTop})`}
            fillOpacity="0.9"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          <path
            d="M100 82 C60 90, 25 100, 35 130 C45 155, 85 140, 100 95 Z"
            fill={`url(#${gradBottom})`}
            fillOpacity="0.85"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          <circle cx="42" cy="42" r="7" fill="white" fillOpacity="0.35" />
          <circle cx="62" cy="62" r="4" fill="white" fillOpacity="0.3" />
          <circle cx="55" cy="120" r="5" fill="white" fillOpacity="0.3" />
        </motion.g>

        <motion.g
          style={{ originX: 0, originY: 0.5 }}
          animate={flap}
          transition={flapTransition}
        >
          <path
            d="M100 75 C130 20, 180 5, 190 40 C195 65, 150 85, 100 80 Z"
            fill={`url(#${gradTop})`}
            fillOpacity="0.9"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          <path
            d="M100 82 C140 90, 175 100, 165 130 C155 155, 115 140, 100 95 Z"
            fill={`url(#${gradBottom})`}
            fillOpacity="0.85"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          <circle cx="158" cy="42" r="7" fill="white" fillOpacity="0.35" />
          <circle cx="138" cy="62" r="4" fill="white" fillOpacity="0.3" />
          <circle cx="145" cy="120" r="5" fill="white" fillOpacity="0.3" />
        </motion.g>

        <ellipse cx="100" cy="85" rx="4.5" ry="28" fill="#0b1226" />
        <circle cx="100" cy="53" r="5.5" fill="#0b1226" />
        <path
          d="M98 49 Q90 32 80 27"
          stroke="#0b1226"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M102 49 Q110 32 120 27"
          stroke="#0b1226"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="79" cy="26" r="2" fill="#0b1226" />
        <circle cx="121" cy="26" r="2" fill="#0b1226" />
      </svg>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Heading word with mask reveal (+ optional moving gradient)         */
/* ------------------------------------------------------------------ */
function Word({
  children,
  gradient = false,
}: {
  children: React.ReactNode;
  gradient?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <span className="inline-block overflow-hidden pb-2 align-bottom">
      <motion.span variants={wordReveal} className="inline-block">
        {gradient ? (
          <motion.span
            animate={
              reduce ? undefined : { backgroundPosition: ["0% 50%", "100% 50%"] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#67e8f9,#60a5fa,#c084fc,#67e8f9)",
              backgroundSize: "200% 100%",
            }}
          >
            {children}
          </motion.span>
        ) : (
          children
        )}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const reduce = useReducedMotion();

  // Mouse tracking
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [active, setActive] = useState(false);

  // Slow spring for the light, quicker spring for the butterfly
  const slowX = useSpring(mx, { stiffness: 40, damping: 20 });
  const slowY = useSpring(my, { stiffness: 40, damping: 20 });
  const fx = useSpring(mx, { stiffness: 70, damping: 14, mass: 0.8 });
  const fy = useSpring(my, { stiffness: 70, damping: 14, mass: 0.8 });

  const spotX = useTransform(slowX, (v) => v - 200);
  const spotY = useTransform(slowY, (v) => v - 200);

  // Butterfly follows the cursor and tilts toward its direction of travel
  const followX = useTransform(fx, (v) => v + 20);
  const followY = useTransform(fy, (v) => v + 20);
  const velocityX = useVelocity(fx);
  const tilt = useTransform(velocityX, [-1200, 1200], [-28, 28]);
  const followRotate = useSpring(tilt, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    if (!active) setActive(true);
  };

  // Rotating role text
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;

    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);

    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActive(false)}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050B1C] px-6 pt-24"
    >
      {/* ---------------- Background ---------------- */}
      <div className="pointer-events-none absolute inset-0">
        {/* Drifting aurora */}
        <motion.div
          animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, -70, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -50, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-purple-600/10 blur-[120px]"
        />

        {/* Grid, faded at the edges */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Twinkling stars */}
        {stars.map((star, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
            }}
            initial={{ opacity: 0.15 }}
            animate={reduce ? { opacity: 0.4 } : { opacity: [0.1, 0.9, 0.1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Constellation that draws itself */}
        <svg
          viewBox="0 0 400 260"
          className="absolute right-6 top-24 hidden w-[420px] opacity-60 lg:block"
          fill="none"
        >
          <motion.path
            d={`M${constellation.map((p) => `${p.x} ${p.y}`).join(" L")}`}
            stroke="rgba(103,232,249,0.35)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
          />
          {constellation.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="3.5"
              fill="#67e8f9"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.5, duration: 0.5 }}
            />
          ))}
        </svg>

        {/* Cursor spotlight */}
        <motion.div
          style={{ x: spotX, y: spotY }}
          className={`absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[90px] transition-opacity duration-700 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Two butterflies that wander on their own (works on phones too) */}
        {!reduce && (
          <>
            <motion.div
              className="absolute left-[6%] top-[58%] w-14 sm:w-20"
              animate={{
                x: ["0vw", "22vw", "40vw", "14vw", "-4vw", "0vw"],
                y: ["0vh", "-12vh", "6vh", "-20vh", "-8vh", "0vh"],
                rotate: [0, 14, -8, 12, -14, 0],
              }}
              transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            >
              <Butterfly />
            </motion.div>

            <motion.div
              className="absolute right-[8%] top-[18%] w-10 sm:w-14"
              animate={{
                x: ["0vw", "-18vw", "-6vw", "-26vw", "0vw"],
                y: ["0vh", "14vh", "34vh", "20vh", "0vh"],
                rotate: [0, -16, 10, -12, 0],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            >
              <Butterfly
                from="#f472b6"
                to="#fbbf24"
                glow="rgba(244,114,182,0.5)"
                flapSpeed={0.55}
              />
            </motion.div>
          </>
        )}
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur"
          >
            <motion.span
              animate={reduce ? undefined : { rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex"
            >
              <Sparkles size={16} className="text-cyan-400" />
            </motion.span>
            <span className="text-sm text-cyan-300">
              Welcome to my universe
            </span>
          </motion.div>

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <Word>Hi,</Word> <Word>I&apos;m</Word>
            <br />
            <Word gradient>Jakaria</Word>
            <br className="hidden sm:block" />{" "}
            <Word gradient>Chowdhury</Word>
          </h1>

          {/* Rotating role */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-3 text-xl font-semibold sm:text-2xl"
          >
            <span className="text-slate-400">I&apos;m a</span>

            <span className="relative inline-flex h-9 min-w-[260px] items-center overflow-hidden sm:h-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -28, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease }}
                  className="absolute left-0 whitespace-nowrap text-cyan-300"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-8 text-slate-400"
          >
            I build modern, responsive and user-friendly web experiences
            using React, Next.js and modern frontend technologies.
            Turning creative ideas into meaningful digital experiences.
          </motion.p>

          {/* Tech chips */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {techChips.map((chip) => (
              <motion.span
                key={chip}
                whileHover={{ y: -3 }}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-[#050B1C] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-colors hover:bg-cyan-300"
            >
              Explore My Work
              <ArrowUpRight
                size={19}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-5"
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="https://github.com/jakaria53"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-cyan-400"
            >
              <Code2 size={22} />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-cyan-400"
            >
              <Globe size={22} />
            </motion.a>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 1.2, ease }}
              style={{ originX: 0 }}
              className="h-px w-20 bg-white/20"
            />

            <span className="text-sm text-slate-500">
              Let&apos;s create something great.
            </span>
          </motion.div>
        </motion.div>

        {/* Right: cosmic orb with a butterfly perched on it */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease }}
          className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-full w-full items-center justify-center"
          >
            {/* Breathing glow */}
            <motion.div
              animate={
                reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px] sm:h-96 sm:w-96"
            />

            {/* Orbital rings + moon */}
            <motion.div
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute h-[85%] w-[85%] rounded-full border border-cyan-300/20"
            >
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(34,211,238,0.6)]" />
            </motion.div>

            <motion.div
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute h-[105%] w-[65%] rotate-45 rounded-[50%] border border-blue-400/30"
            />

            <motion.div
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute h-[65%] w-[105%] rotate-[-25deg] rounded-[50%] border border-purple-400/20"
            />

            {/* Planet */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border border-cyan-300/30 bg-gradient-to-br from-[#0f415e] via-blue-700 to-[#080D25] shadow-[0_0_80px_rgba(34,211,238,0.3)] sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7),transparent_12%,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
              <motion.div
                animate={reduce ? undefined : { x: ["-120%", "120%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.5,
                }}
                className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(34,211,238,0.28)_50%,transparent_65%)]"
              />
              <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#020617] to-transparent" />
            </div>

            {/* Butterfly hovering above the planet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.9, ease }}
              className="absolute right-[10%] top-[10%] w-24 rotate-[18deg] sm:w-32"
            >
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -10, 0], rotate: [0, 6, -4, 0] }
                }
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Butterfly
                  from="#67e8f9"
                  to="#c084fc"
                  flapSpeed={0.9}
                  glow="rgba(192,132,252,0.55)"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="absolute bottom-0 right-0 sm:bottom-12 sm:right-2"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-400">Building</p>
              <p className="font-semibold text-cyan-300">Digital Experiences</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
            className="absolute bottom-12 left-0"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-400">Specialization</p>
              <p className="font-semibold text-white">Frontend Development</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Butterfly that follows the mouse (desktop only; appears on first move) */}
      {!reduce && (
        <motion.div
          style={{ x: followX, y: followY, rotate: followRotate }}
          className={`pointer-events-none absolute left-0 top-0 z-30 w-12 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Butterfly
            from="#fde68a"
            to="#f472b6"
            flapSpeed={0.45}
            glow="rgba(253,230,138,0.6)"
          />
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400 md:flex"
      >
        <span className="text-xs tracking-widest">SCROLL DOWN</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}