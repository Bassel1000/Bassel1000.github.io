import { motion } from "framer-motion";
import { Flame, Github, Eye, Navigation, ShieldCheck, Cpu, Radio, MonitorSmartphone } from "lucide-react";
import { phoenix } from "@/data/content";

const highlightIcons = [Eye, Navigation, ShieldCheck, Radio, Cpu, MonitorSmartphone];

export function Phoenix() {
  return (
    <section id="phoenix" className="relative py-24 sm:py-32 overflow-hidden">
      {/* ambient fire glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[24rem] bg-gradient-to-b from-orange-600/10 via-amber-500/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-mono2 text-sm text-amber-400 tracking-widest uppercase mb-3">// Graduation project</p>
          <div className="flex items-center justify-center gap-3">
            <Flame className="text-orange-500" size={34} />
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-50">
              Meet <span className="text-gradient">Phoenix</span>
            </h2>
          </div>
          <p className="mt-3 text-lg text-slate-300 font-medium">{phoenix.title}</p>
          <p className="mt-4 text-slate-400 leading-relaxed">{phoenix.description}</p>
          <a
            href={phoenix.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium text-slate-200 hover:border-amber-500/50 hover:text-amber-300 transition-colors"
          >
            <Github size={16} /> Explore the repository
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {phoenix.stats.map((s) => (
            <div key={s.label} className="card-dark rounded-2xl px-5 py-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* mission flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <h3 className="font-display text-xl font-semibold text-slate-100 mb-6 text-center">How a mission works</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phoenix.mission.map((m, i) => (
              <div key={m.step} className="relative card-dark card-dark-hover rounded-2xl p-5">
                <div className="font-mono2 text-amber-500/70 text-sm">{m.step}</div>
                <div className="mt-2 font-display font-semibold text-slate-100">{m.title}</div>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{m.text}</p>
                {i < phoenix.mission.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3.5 text-amber-500/60 text-lg">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* highlights */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <Icon size={19} className="text-amber-400" />
                </div>
                <h4 className="font-display font-semibold text-slate-100">{h.title}</h4>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{h.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {phoenix.stack.map((t) => (
            <span
              key={t}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 border border-slate-700/70 text-slate-300"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
