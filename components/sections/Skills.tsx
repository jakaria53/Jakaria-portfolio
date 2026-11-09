
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
  GitBranch,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive and interactive interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    description: "Creating modern and user-friendly designs.",
    skills: ["Tailwind CSS", "DaisyUI", "Responsive Design"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    description: "Working with APIs and database technologies.",
    skills: ["PostgreSQL", "REST API Integration"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description: "Tools used in my development workflow.",
    skills: ["VS Code", "Postman", "Jira"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    description: "Managing and collaborating on projects.",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Building modern web application experiences.",
    skills: ["Frontend Development", "API Integration"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050B1C] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Expertise
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Technologies and tools I use to build modern,
            responsive and user-friendly applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-[#050B1C]">
                  <Icon size={27} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {group.description}
                </p>

                {/* Skill Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
