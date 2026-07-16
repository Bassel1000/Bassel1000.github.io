import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { useState, type ComponentType } from "react";
import { links, emails } from "@/data/content";

const profiles: { name: string; handle: string; href: string; icon: ComponentType<{ size?: number }>; color: string }[] = [
  { name: "GitHub", handle: "@Bassel1000", href: links.github, icon: Github, color: "hover:border-slate-400/50" },
  { name: "LinkedIn", handle: "bassel-elbahnasy", href: links.linkedin, icon: Linkedin, color: "hover:border-sky-400/50" },
  { name: "Kaggle", handle: "basselashraf", href: links.kaggle, icon: () => <span className="font-display font-bold text-sm">K</span>, color: "hover:border-cyan-400/50" },
  { name: "Credly", handle: "bassel-el-bahnasy", href: links.credly, icon: () => <span className="font-display font-bold text-sm">C</span>, color: "hover:border-orange-400/50" },
  { name: "Upwork", handle: "Freelance services", href: links.upwork, icon: () => <span className="font-display font-bold text-sm">U</span>, color: "hover:border-emerald-400/50" },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (addr: string) => {
    navigator.clipboard?.writeText(addr).catch(() => {});
    setCopied(addr);
    setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[70rem] h-[20rem] bg-gradient-to-t from-orange-600/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono2 text-sm text-amber-400 tracking-widest uppercase mb-3">// Get in touch</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-50">
            The future is data-driven.
            <br />
            <span className="text-gradient">And it starts today.</span>
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            Whether it's a data project, an ML problem, a robotics build, or a freelance engagement —
            my inbox is open. I usually reply within a day.
          </p>
        </motion.div>

        {/* emails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-12 max-w-2xl mx-auto space-y-3"
        >
          {emails.map((e) => (
            <div
              key={e.address}
              className={`card-dark rounded-xl px-5 py-3.5 flex items-center justify-between gap-3 ${
                e.primary ? "border-amber-500/40" : ""
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Mail size={17} className={e.primary ? "text-amber-400" : "text-slate-500"} />
                <span className="text-sm text-slate-200 truncate">{e.address}</span>
                {e.primary && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0">
                    Primary
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copy(e.address)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-amber-300 hover:bg-slate-800/70 transition-colors"
                  aria-label={`Copy ${e.address}`}
                >
                  {copied === e.address ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
                <a
                  href={`mailto:${e.address}`}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-amber-300 hover:bg-slate-800/70 transition-colors"
                  aria-label={`Email ${e.address}`}
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto"
        >
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={`card-dark rounded-xl px-4 py-5 text-center transition-colors border border-slate-800 ${p.color} group`}
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-amber-300 transition-colors">
                <p.icon size={18} />
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-100">{p.name}</div>
              <div className="mt-0.5 text-[11px] text-slate-500 truncate">{p.handle}</div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* footer */}
      <footer className="relative mt-20 border-t border-slate-800/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-display font-bold text-slate-950 text-xs">
              BE
            </span>
            <span className="text-sm text-slate-400">
              © {new Date().getFullYear()} Bassel Elbahnasy · Built with React & Tailwind
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href={[links.github, links.linkedin, "mailto:basselashraftmd@gmail.com"][i]}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-slate-500 hover:text-amber-300 hover:bg-slate-800/60 transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
