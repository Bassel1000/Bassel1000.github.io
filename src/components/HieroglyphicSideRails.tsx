import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Authentic Egyptian Hieroglyphs
const leftHieroglyphs = ["𓋹", "𓁹", "𓆣", "𓇳", "𓊽", "𓆃", "𓏛", "𓍯", "𓎛", "𓄿"];
const rightHieroglyphs = ["𓇳", "𓆃", "𓊹", "𓋹", "𓌃", "𓏏", "𓁹", "𓊖", "𓃭", "𓆣"];

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
        <motion.div
          style={{ y: yLeft }}
          className="flex flex-col items-center gap-10 py-20 pointer-events-auto"
        >
          {leftHieroglyphs.map((char, idx) => (
            <motion.div
              key={`left-${idx}-${char}`}
              whileHover={{ scale: 1.35, rotate: [0, -5, 5, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group relative flex items-center justify-center cursor-default"
            >
              {/* Subtle hover glow ring */}
              <div className="absolute -inset-2 rounded-full bg-amber-400/0 group-hover:bg-amber-400/20 blur-md transition-all duration-300 pointer-events-none" />

              <span
                style={{
                  fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif",
                }}
                className="text-2xl 2xl:text-3xl text-amber-500/30 dark:text-amber-400/25 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
              >
                {char}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT RAIL */}
      <div className="absolute right-4 2xl:right-8 top-0 bottom-0 w-10 flex flex-col items-center justify-center">
        <motion.div
          style={{ y: yRight }}
          className="flex flex-col items-center gap-10 py-20 pointer-events-auto"
        >
          {rightHieroglyphs.map((char, idx) => (
            <motion.div
              key={`right-${idx}-${char}`}
              whileHover={{ scale: 1.35, rotate: [0, 5, -5, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group relative flex items-center justify-center cursor-default"
            >
              {/* Subtle hover glow ring */}
              <div className="absolute -inset-2 rounded-full bg-amber-400/0 group-hover:bg-amber-400/20 blur-md transition-all duration-300 pointer-events-none" />

              <span
                style={{
                  fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif",
                }}
                className="text-2xl 2xl:text-3xl text-amber-500/30 dark:text-amber-400/25 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
              >
                {char}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}
