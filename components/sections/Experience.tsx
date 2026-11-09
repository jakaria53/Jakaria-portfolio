
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  MapPin,
  Code2,
} from "lucide-react";

const experiences = [
  {
    type: "experience",
    title: "Frontend Developer Intern",
    organization: "Luminar Technology",
    duration: "October 2025 – January 2026",
    location: "Remote",
    description:
      "Worked with the frontend development team on Banglareels web and mobile applications, contributing to responsive interfaces and reusable UI components.",
    responsibilities: [
      "Developed user interfaces using React.js and Tailwind CSS.",
      "Worked with DaisyUI to build reusable UI components.",
      "Integrated backend APIs into frontend applications.",
      "Participated in debugging and code review sessions.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "American International University-Bangladesh (AIUB)",
    duration: "Undergraduate Studies",
    location: "Bangladesh",
    description:
      "Pursuing a degree in Computer Science with an interest in software development, programming and modern web technologies.",
    responsibilities: [
      "Learning software engineering and programming concepts.",
      "Working on academic and practical software projects.",
      "Developing problem-solving and technical skills.",
    ],
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050B1C] px-6 py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Experience <span className="text-cyan-400">&</span> Education
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My academic background and professional experience
            that continue to shape my development journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500/50 before:to-transparent md:before:left-1/2">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex pl-14 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto md:justify-end md:pr-12"
                    : "md:ml-auto md:justify-start md:pl-12"
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-[#07152B] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] md:left-auto md:right-[-20px]">
                  {index % 2 === 1 && (
                    <span className="hidden md:block" />
                  )}
                  <Icon size={19} />
                </div>

                <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-cyan-400">
                    <CalendarDays size={14} />
                    {item.duration}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-semibold text-cyan-300">
                    {item.organization}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={14} />
                    {item.location}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <div
                        key={responsibility}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >
                        <Code2
                          size={16}
                          className="mt-1 shrink-0 text-cyan-400"
                        />
                        <span>{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
