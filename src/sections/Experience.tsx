import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono2 text-sm text-amber-400 tracking-widest uppercase mb-3">// Career</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Experience
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A mix of industry internships, national programs, and freelance AI work —
            spanning banking, cloud data engineering, and large-scale model training.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/50 via-slate-700/60 to-transparent" />
          <div className="space-y-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-[#0b1120] border border-amber-500/30 flex items-center justify-center">
                  <Briefcase size={17} className="text-amber-400" />
                </div>
                <div className="card-dark card-dark-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-slate-100">{e.role}</h3>
                    <span className="font-mono2 text-xs text-amber-400/90">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400 font-medium">{e.org}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="text-sm text-slate-400 leading-relaxed flex gap-2.5">
                        <span className="text-amber-500/80 mt-0.5 shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
