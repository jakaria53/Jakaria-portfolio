"use client";

import {
  Code2,
  Globe,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-400/15 bg-[#050B1C] px-6 py-14">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 transition duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
              <Sparkles
                size={23}
                className="text-violet-300 transition duration-300 group-hover:rotate-12 group-hover:text-cyan-300"
              />
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-white">
              Jakaria
              <span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-7 gap-y-4"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-400 transition duration-300 hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

        <a
  href="https://github.com/jakaria53"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
>
  <FaGithub size={26} />
</a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaLinkedinIn size={26} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">
              Jakaria Chowdhury.
            </span>{" "}
            All rights reserved.
          </p>

          <p className="text-lg text-slate-500">
            Crafted with{" "}
            <span className="text-pink-400">♥</span>{" "}
            and built with{" "}
            <span className="font-semibold text-cyan-300">
              Next.js
            </span>
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/5 text-violet-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#050B1C] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            <ArrowUp
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>
    </footer>
  );
}
