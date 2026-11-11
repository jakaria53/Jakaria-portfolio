
"use client";

import {
  Code2,
  Globe,
  ArrowUp,
  Sparkles,
} from "lucide-react";

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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050B1C] px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={25} />
            <span className="text-2xl font-bold text-white">
              Jakaria<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jakaria53"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Code2 size={19} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Globe size={19} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-9 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Jakaria Chowdhury.
            All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed with <span className="text-cyan-400">♥</span> and built with Next.js
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-400 transition hover:bg-cyan-400 hover:text-[#050B1C]"
          >
            <ArrowUp size={19} />
          </a>
        </div>

      </div>
    </footer>
  );
}
