import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Authentic Egyptian Hieroglyphs with their names and meanings
const leftHieroglyphs = [
  { char: "𓋹", name: "Ankh", meaning: "Life & Vitality" },
  { char: "𓁹", name: "Wedjat", meaning: "Eye of Horus · Protection" },
  { char: "𓆣", name: "Khepri", meaning: "Scarab · Creation & Evolution" },
  { char: "𓇳", name: "Ra", meaning: "Sun Disc · Energy & Light" },
  { char: "𓊽", name: "Djed", meaning: "Pillar of Stability" },
  { char: "𓆃", name: "Horus Wings", meaning: "Elevation & Vision" },
  { char: "𓏛", name: "Sesh", meaning: "Scroll · Knowledge & Data" },
  { char: "𓍯", name: "Shen", meaning: "Eternity & Protection" },
  { char: "𓎛", name: "Heh", meaning: "Infinity" },
  { char: "𓄿", name: "Vulture", meaning: "Wisdom" },
];

const rightHieroglyphs = [
  { char: "𓇳", name: "Aten", meaning: "Radiant Light" },
  { char: "𓆃", name: "Nekhbet", meaning: "Ascension" },
  { char: "𓊹", name: "Netjer", meaning: "Divine Spirit" },
  { char: "𓋹", name: "Ankh", meaning: "Key of Life" },
  { char: "𓌃", name: "Medu", meaning: "Sacred Code" },
  { char: "𓏏", name: "Ta", meaning: "Earth & Foundations" },
  { char: "𓁹", name: "Horus", meaning: "Clear Vision" },
  { char: "𓊖", name: "Niwet", meaning: "Civilization & City" },
  { char: "𓃭", name: "Mai", meaning: "Lion · Strength & Courage" },
  { char: "𓆣", name: "Khepri", meaning: "Transformation" },
];

export function HieroglyphicSideRails() {
  const { scrollYProgress } = useScroll();

  // Smooth out scroll parallax physics with spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Parallax translation transforms for left and right columns
  const yLeft = useTransform(smoothProgress, [0, 1], ["0%", "-35%"]);
  const yRight = useTransform(smoothProgress, [0, 1], ["-15%", "20%"]);

  return (
    <aside
      aria-hidden="true"
      className="hidden xl:block pointer-events-none fixed inset-y-0 inset-x-0 z-20 overflow-hidden select-none"
    >
      {/* LEFT RAIL */}
      <div className="absolute left-4 2xl:left-8 top-0 bottom-0 w-10 flex flex-col items-center justify-center">
        {/* Subtle Vertical Golden Rail Line */}
        <div className="absolute top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />

        <motion.div
          style={{ y: yLeft }}
          className="flex flex-col items-center gap-10 py-20 pointer-events-auto"
        >
          {leftHieroglyphs.map((glyph, idx) => (
            <motion.div
              key={`left-${idx}-${glyph.char}`}
              whileHover={{ scale: 1.35, rotate: [0, -5, 5, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              title={`${glyph.name} — ${glyph.meaning}`}
              className="group relative flex items-center justify-center cursor-default"
            >
              {/* Subtle hover glow ring */}
              <div className="absolute -inset-2 rounded-full bg-amber-400/0 group-hover:bg-amber-400/20 blur-md transition-all duration-300 pointer-events-none" />

              <span
                style={{
                  fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif",
                }}
                className="text-2xl 2xl:text-3xl text-amber-500/30 dark:text-amber-400/25 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]"
              >
                {glyph.char}
              </span>

              {/* Tooltip on hover */}
              <div className="absolute left-full ml-3 px-2 py-1 rounded bg-slate-900/90 dark:bg-slate-800/95 border border-amber-500/30 text-[11px] font-mono2 text-amber-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-50">
                <span className="font-semibold">{glyph.name}</span> · {glyph.meaning}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT RAIL */}
      <div className="absolute right-4 2xl:right-8 top-0 bottom-0 w-10 flex flex-col items-center justify-center">
        {/* Subtle Vertical Golden Rail Line */}
        <div className="absolute top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />

        <motion.div
          style={{ y: yRight }}
          className="flex flex-col items-center gap-10 py-20 pointer-events-auto"
        >
          {rightHieroglyphs.map((glyph, idx) => (
            <motion.div
              key={`right-${idx}-${glyph.char}`}
              whileHover={{ scale: 1.35, rotate: [0, 5, -5, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              title={`${glyph.name} — ${glyph.meaning}`}
              className="group relative flex items-center justify-center cursor-default"
            >
              {/* Subtle hover glow ring */}
              <div className="absolute -inset-2 rounded-full bg-amber-400/0 group-hover:bg-amber-400/20 blur-md transition-all duration-300 pointer-events-none" />

              <span
                style={{
                  fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif",
                }}
                className="text-2xl 2xl:text-3xl text-amber-500/30 dark:text-amber-400/25 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]"
              >
                {glyph.char}
              </span>

              {/* Tooltip on hover */}
              <div className="absolute right-full mr-3 px-2 py-1 rounded bg-slate-900/90 dark:bg-slate-800/95 border border-amber-500/30 text-[11px] font-mono2 text-amber-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-50">
                <span className="font-semibold">{glyph.name}</span> · {glyph.meaning}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}
