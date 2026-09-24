import { motion } from "framer-motion";
import {
  Github,
  Flame,
  ShieldAlert,
  Navigation,
  Cpu,
  Droplets,
  MonitorSmartphone,
  Play,
  Sparkles,
} from "lucide-react";
import { phoenix } from "@/data/content";
import { PhoenixFlameLogo } from "@/components/PhoenixFlameLogo";
import { PhoenixVideoShowcase } from "@/components/PhoenixVideoShowcase";
import { PhoenixDynamicsGraph } from "@/components/PhoenixDynamicsGraph";

const highlightIcons = [Flame, ShieldAlert, Navigation, Cpu, Droplets, MonitorSmartphone];

export function Phoenix() {
  return (
    <section id="phoenix" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient fire glow background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70rem] h-[34rem] bg-gradient-to-b from-orange-500/10 dark:from-orange-600/15 via-amber-500/10 to-transparent blur-3xl animate-flame-pulse" />
      <div className="pointer-events-none absolute top-36 left-1/2 -translate-x-1/2 w-[50rem] h-[24rem] bg-gradient-to-r from-orange-500/10 via-red-500/5 dark:via-red-500/10 to-amber-500/10 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Animated Phoenix Logo with Vector SVG and Ember Particles */}
          <div className="mb-4 relative flex flex-col items-center">
            <PhoenixFlameLogo size="lg" interactive={true} showParticles={true} />
          </div>

          <p className="font-mono2 text-xs sm:text-sm text-amber-600 dark:text-amber-400 tracking-widest uppercase mb-3">
            // SENIOR GRADUATION CAPSTONE PROJECT · KSIU
          </p>
          <div className="flex items-center justify-center gap-3">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Meet <span className="text-gradient">Phoenix</span>
            </h2>
          </div>
          <p className="mt-3 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium">
            {phoenix.title}
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            {phoenix.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={phoenix.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-300 transition-colors bg-white/70 dark:bg-slate-900/60 shadow-sm"
            >
              <Github size={16} /> Explore Repository
            </a>

            <a
              href="#phoenix-video"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-sm font-semibold text-white hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20"
            >
              <Play size={15} fill="currentColor" /> Watch Mission Demo
            </a>

            <a
              href="#phoenix-dynamics"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-medium text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <Sparkles size={15} /> System Dynamics & Telemetry
            </a>
          </div>
        </motion.div>

        {/* Video Showcase Section */}
        <motion.div
          id="phoenix-video"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PhoenixVideoShowcase />
        </motion.div>

        {/* Dynamic Graphic Graphs Section (Kinematics, 3-Node Topology, 2-DOF Standoff Radar) */}
        <motion.div
          id="phoenix-dynamics"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PhoenixDynamicsGraph />
        </motion.div>

        {/* Key System Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5"
        >
          {phoenix.stats.map((s) => (
            <div key={s.label} className="card-dark rounded-2xl px-4 py-5 text-center flex flex-col justify-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 6-Stage Mission Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono2 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
              // Turnkey Autonomous Sequence
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              6-Stage Mission Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">
              From overhead AI hazard identification to standoff lock and targeted water cannon discharge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phoenix.mission.map((m, i) => (
              <div
                key={m.step}
                className="relative card-dark card-dark-hover rounded-2xl p-5 border border-slate-200 dark:border-slate-800 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono2 text-amber-600 dark:text-amber-400 text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                    STAGE {m.step}
                  </span>
                  <span className="text-[11px] font-mono2 text-slate-400 dark:text-slate-500">
                    0{i + 1} / 06
                  </span>
                </div>
                <div className="font-display font-semibold text-base text-slate-900 dark:text-slate-100">
                  {m.title}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Capabilities Highlights */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono2 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
              // Engineering Highlights
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Key Capabilities & System Innovations
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phoenix.highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="card-dark card-dark-hover rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-600/20 border border-amber-500/25 flex items-center justify-center mb-4">
                    <Icon size={19} className="text-amber-500 dark:text-amber-400" />
                  </div>
                  <h4 className="font-display font-semibold text-base text-slate-900 dark:text-slate-100">
                    {h.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {h.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Software & Hardware Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="text-xs font-mono2 text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
            Hardware, Firmware & Neural Frameworks
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {phoenix.stack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
