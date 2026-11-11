
"use client";

import { motion } from "framer-motion";
import {
  
  ExternalLink,
  Code2,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CampusNest",
    category: "Full-Stack Web Application",
    description:
      "A full-stack web application developed with separate frontend and backend repositories. Built to deliver a structured and user-friendly web experience.",
    technologies: ["React.js", "JavaScript", "PostgreSQL", "REST API"],
    frontend: "https://github.com/jakaria53/CampusNest-Frontend",
    backend: "https://github.com/jakaria53/CampusNest-Backend",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Color The Page",
    category: "Frontend Web Project",
    description:
      "A frontend project focused on creating an interactive and visually engaging user interface using modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    frontend: "https://github.com/jakaria53",
    backend: null,
    icon: Code2,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070E21] px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A selection of projects where I turn ideas into
            practical digital experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                {/* Project Visual */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#10264A] via-[#101B3B] to-[#080D20]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)]" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan-300/30 bg-white/5 shadow-[0_0_70px_rgba(34,211,238,0.15)] backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={55} className="text-cyan-300" />
                  </div>

                  <span className="absolute left-7 top-7 text-sm font-bold tracking-widest text-cyan-400">
                    PROJECT {project.number}
                  </span>

                  <ArrowUpRight
                    className="absolute right-7 top-7 text-slate-500 transition group-hover:text-cyan-400"
                    size={24}
                  />
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Repository Links */}
                  <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6">
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-400"
                    >
                      <Code2 size={18} />
                      {project.title === "CampusNest" ? "Frontend" : "GitHub"}
                      <ExternalLink size={14} />
                    </a>

                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-400"
                      >
                        <Code2 size={18} />
                        Backend
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
