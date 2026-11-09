
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jakaria53",
    href: "https://github.com/jakaria53",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070E21] px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea or an opportunity?
            I'd love to hear from you. Let's create something great.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="max-w-md leading-7 text-slate-400">
              I'm always interested in discussing new projects,
              creative ideas and opportunities to grow.
            </p>

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-[#050B1C]">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 truncate font-semibold text-white">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-500 transition group-hover:text-cyan-400"
                  />
                </a>
              );
            })}

            <div className="flex items-center gap-3 pt-3 text-sm text-slate-400">
              <MapPin size={18} className="text-cyan-400" />
              Bangladesh
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const data = new FormData(form);

              const name = String(data.get("name") || "");
              const email = String(data.get("email") || "");
              const subject = String(data.get("subject") || "");
              const message = String(data.get("message") || "");

              const mailto = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
              )}`;

              window.location.href = mailto;
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
          >
            <h3 className="mb-7 text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#050B1C]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#050B1C]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-white/10 bg-[#050B1C]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#050B1C]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-[#050B1C] transition hover:bg-cyan-300"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
