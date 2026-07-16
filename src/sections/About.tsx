import { motion } from "framer-motion";
import { MapPin, Languages, GraduationCap, Trophy } from "lucide-react";
import aboutImg from "@/assets/about.webp";
import { education } from "@/data/content";

const facts = [
  { icon: MapPin, label: "Based in", value: "Giza, Egypt" },
  { icon: GraduationCap, label: "Studying at", value: "KSIU · GPA 3.513" },
  { icon: Languages, label: "Languages", value: "Arabic (native) · English (C1)" },
  { icon: Trophy, label: "Competitions", value: "ICPC contestant" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center"
        >
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-cyan-500/15 via-transparent to-amber-500/15 blur-xl" />
            <img
              src={aboutImg}
              alt="Bassel Elbahnasy at KSIU"
              className="relative w-full max-w-md mx-auto rounded-[1.75rem] border border-slate-700/60 object-cover h-[520px] object-top shadow-2xl shadow-black/50"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-mono2 text-sm text-amber-400 tracking-widest uppercase mb-3">// About me</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
              The future is data-driven.
              <br />
              <span className="text-slate-400">I'm building it.</span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a Computer Engineering student at{" "}
                <span className="text-slate-200 font-medium">King Salman International University</span>,
                graduating in 2026, working across data science, robotics, and cybersecurity.
                I'm driven by a simple habit: find a hard problem, learn the tools, and build something
                that makes the process smarter.
              </p>
              <p>
                As a <span className="text-slate-200 font-medium">Google-certified Data Analyst</span> and{" "}
                <span className="text-slate-200 font-medium">Microsoft-track Data Engineer</span>, I turn raw
                data into actionable insight with SQL, Python, R, Tableau, and Azure. On the hardware side, my
                graduation project <a href="#phoenix" className="text-amber-400 hover:text-amber-300 underline decoration-amber-500/40 underline-offset-4">Phoenix</a> —
                an autonomous fire-detection and suppression robot — brought together ROS 2, computer vision,
                and embedded systems into one real, working machine.
              </p>
              <p>
                Since 2023 I've also contributed to large-scale AI model training as a freelance data trainer
                and annotator, and I compete in ICPC-style competitive programming. Numbers don't lie — and
                neither does well-engineered work.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="card-dark rounded-xl px-4 py-3.5 flex items-center gap-3">
                  <f.icon size={18} className="text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500">{f.label}</div>
                    <div className="text-sm text-slate-200 font-medium">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500">
              {education.degree} · {education.school} · {education.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
