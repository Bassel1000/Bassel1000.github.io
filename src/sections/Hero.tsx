import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { links } from "@/data/content";
import heroImg from "@/assets/hero.webp";

const socials = [
  { icon: Github, href: links.github, label: "GitHub" },
  { icon: Linkedin, href: links.linkedin, label: "LinkedIn" },
  { icon: Mail, href: "mailto:basselashraftmd@gmail.com", label: "Email" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* glow effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-48 w-[38rem] h-[38rem] rounded-full bg-orange-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-28 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-wide mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Available for freelance & full-time opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-50 leading-[1.05]">
            Bassel
            <br />
            <span className="text-gradient">Elbahnasy</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-medium">
            Computer Engineer —{" "}
            <span className="text-slate-100">Data Science · Robotics · Cybersecurity</span>
          </p>

          <p className="mt-4 max-w-xl text-slate-400 leading-relaxed">
            Computer Engineering student at King Salman International University, Class of 2026.
            I build things that turn data into decisions — from ML pipelines on Azure to{" "}
            <a href="#phoenix" className="text-amber-400 hover:text-amber-300 underline decoration-amber-500/40 underline-offset-4 transition-colors">
              Phoenix
            </a>
            , an autonomous fire-fighting robot.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-orange-600/20"
            >
              View my work
            </a>
            <a
              href={links.upwork}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-semibold text-sm hover:border-amber-500/50 hover:text-amber-300 transition-colors"
            >
              Hire me on Upwork
            </a>
            <div className="flex items-center gap-1 ml-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full text-slate-400 hover:text-amber-300 hover:bg-slate-800/60 transition-colors"
                >
                  <s.icon size={19} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { v: "3.513", l: "GPA / 4.0" },
              { v: "25+", l: "Certifications" },
              { v: "18+", l: "Public projects" },
              { v: "3+", l: "Years in AI data work" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-slate-100">{s.v}</div>
                <div className="text-xs text-slate-500 mt-0.5 tracking-wide uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-400/30 via-orange-600/20 to-transparent blur-xl" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/50">
            <img
              src={heroImg}
              alt="Bassel Elbahnasy"
              className="w-full h-[540px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 card-dark rounded-xl px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-100">King Salman International University</div>
                <div className="text-xs text-slate-400">B.Sc. Computer Engineering · 2026</div>
              </div>
              <GraduationCap size={22} className="text-amber-400 shrink-0" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-amber-300 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
