
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050B1C] px-6 pt-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
          >
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm text-cyan-300">
              Welcome to my universe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jakaria
              <br className="hidden sm:block" />
              Chowdhury
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl font-semibold text-slate-300 sm:text-2xl"
          >
            Frontend Developer
            <span className="text-cyan-400"> & </span>
            Creative Thinker
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-8 text-slate-400"
          >
            I build modern, responsive and user-friendly web experiences
            using React, Next.js and modern frontend technologies.
            Turning creative ideas into meaningful digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-[#050B1C] transition hover:bg-cyan-300"
            >
              Explore My Work
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/jakaria53"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <Linkedin size={22} />
            </a>

            <span className="h-px w-20 bg-white/20" />

            <span className="text-sm text-slate-500">
              Let's create something great.
            </span>
          </div>
        </div>

        {/* Right Cosmic Planet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center"
        >
          {/* Outer Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px] sm:h-96 sm:w-96" />

          {/* Orbital Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute h-[85%] w-[85%] rounded-full border border-cyan-300/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-[105%] w-[65%] rotate-45 rounded-[50%] border border-blue-400/30"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute h-[65%] w-[105%] rotate-[-25deg] rounded-[50%] border border-purple-400/20"
          />

          {/* Planet */}
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-300 via-blue-700 to-[#080D25] shadow-[0_0_80px_rgba(34,211,238,0.3)] sm:h-72 sm:w-72">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7),transparent_12%,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_30%,rgba(34,211,238,0.2)_45%,transparent_65%)]" />
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#020617] to-transparent" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-0 top-12 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-2"
          >
            <p className="text-xs text-slate-400">Building</p>
            <p className="font-semibold text-cyan-300">Digital Experiences</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-12 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs text-slate-400">Specialization</p>
            <p className="font-semibold text-white">Frontend Development</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-400 md:flex"
      >
        <span className="text-xs tracking-widest">SCROLL DOWN</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
