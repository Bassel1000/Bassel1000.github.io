import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { projects, moreProjects, links } from "@/data/content";

const categoryColors: Record<string, string> = {
  "Machine Learning": "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
  Hardware: "text-orange-300 bg-orange-500/10 border-orange-500/25",
  "Data Engineering": "text-violet-300 bg-violet-500/10 border-violet-500/25",
  Systems: "text-emerald-300 bg-emerald-500/10 border-emerald-500/25",
  Software: "text-sky-300 bg-sky-500/10 border-sky-500/25",
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono2 text-sm text-amber-400 tracking-widest uppercase mb-3">// Selected work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Projects that solve real problems
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            From post-quantum cryptography hardware to Kaggle machine learning and high-performance
            computing — every project is public on GitHub with full documentation.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group card-dark card-dark-hover rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${categoryColors[p.category]}`}
                >
                  {p.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-slate-100 group-hover:text-amber-200 transition-colors">
                {p.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{p.tagline}</p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">{p.description}</p>

              {p.highlight && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-300">
                  <Star size={13} className="fill-amber-400 text-amber-400" /> {p.highlight}
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-slate-800/80 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 card-dark rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-display font-semibold text-slate-100">More on GitHub</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
            {moreProjects.map((m) => (
              <a
                key={m.name}
                href={m.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-2"
              >
                <span className="text-amber-500/70">▸</span> {m.name}
              </a>
            ))}
          </div>
          <a
            href={`${links.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Github size={16} /> Browse all repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
