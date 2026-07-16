import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Wrench, ArrowUpRight } from "lucide-react";
import { education, specializations, certifications, training, skillGroups, links } from "@/data/content";

export function Credentials() {
  return (
    <section id="credentials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono2 text-sm text-amber-400 tracking-widest uppercase mb-3">// Credentials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Education, skills & certifications
          </h2>
        </motion.div>

        {/* education + specializations */}
        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="card-dark rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-600/20 border border-amber-500/25 flex items-center justify-center">
                <GraduationCap size={19} className="text-amber-400" />
              </div>
              <h3 className="font-display font-semibold text-slate-100">Education</h3>
            </div>
            <div className="font-display text-xl font-semibold text-slate-50">{education.degree}</div>
            <div className="mt-1 text-slate-300">{education.school}</div>
            <div className="mt-1 text-sm text-amber-300 font-medium">{education.detail}</div>
            <div className="mt-1 text-sm text-slate-500">{education.location}</div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">Specializations</div>
              <div className="space-y-3">
                {specializations.map((s) => (
                  <div key={s.name}>
                    <div className="text-sm font-medium text-slate-200">{s.name}</div>
                    <div className="text-xs text-slate-500">
                      {s.issuer} — {s.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="card-dark rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/15 to-cyan-600/15 border border-cyan-500/25 flex items-center justify-center">
                <Wrench size={18} className="text-cyan-300" />
              </div>
              <h3 className="font-display font-semibold text-slate-100">Technical skills</h3>
            </div>
            <div className="space-y-5">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">{g.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-5 card-dark rounded-2xl p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-600/20 border border-amber-500/25 flex items-center justify-center">
                <BadgeCheck size={19} className="text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-slate-100">Certifications</h3>
                <p className="text-xs text-slate-500">A selection — 25+ in total, all verified on Credly</p>
              </div>
            </div>
            <a
              href={links.credly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              View all on Credly <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 hover:border-amber-500/30 transition-colors"
              >
                <div className="text-sm font-medium text-slate-200 leading-snug">{c.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {c.issuer} · {c.date}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-5 grid sm:grid-cols-2 gap-4"
        >
          {training.map((t) => (
            <div key={t.name} className="card-dark card-dark-hover rounded-2xl px-5 py-4">
              <div className="text-sm font-semibold text-slate-200">{t.name}</div>
              <div className="mt-1 text-xs text-slate-500 leading-relaxed">{t.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
