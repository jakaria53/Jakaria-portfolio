
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "B.Sc. in Computer Science",
    detail: "American International University-Bangladesh",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experience",
    subtitle: "Frontend Developer Intern",
    detail: "Luminar Technology",
  },
  {
    icon: Code2,
    title: "Development",
    subtitle: "Frontend & Full Stack",
    detail: "React.js, Next.js and modern web technologies",
  },
  {
    icon: Rocket,
    title: "Goal",
    subtitle: "Continuous Learning",
    detail: "Building meaningful digital experiences",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070E21] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get To Know Me
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A little introduction about my background, experience
            and passion for technology.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <Code2 size={16} className="text-cyan-400" />
              <span className="text-sm text-cyan-300">
                Developer Journey
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-snug text-white sm:text-4xl">
              Passionate About
              <span className="text-cyan-400"> Creating </span>
              Digital Solutions
            </h3>

            <p className="mt-7 leading-8 text-slate-400">
              I'm Jakaria Chowdhury, a Computer Science student at
              American International University-Bangladesh (AIUB),
              passionate about frontend development and modern web
              technologies.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              During my internship at Luminar Technology, I worked
              with the frontend development team on web and mobile
              applications. I gained practical experience with
              React.js, Tailwind CSS, DaisyUI and API integration.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I enjoy learning new technologies, solving problems
              and building responsive, user-friendly applications.
              My goal is to grow as a developer and create impactful
              digital products.
            </p>

            <a
              href="#projects"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Explore My Projects
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Right Side - Highlight Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-[#050B1C]">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-sm font-medium text-slate-400">
                    {item.title}
                  </h4>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {item.subtitle}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
