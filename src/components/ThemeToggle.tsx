import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, SunMedium, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [burstParticles, setBurstParticles] = useState<Particle[]>([]);
  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Generate radial spark burst particles on click
    const count = 10;
    const colors = isDark
      ? ["#f59e0b", "#fbbf24", "#f97316", "#ef4444", "#ffffff"]
      : ["#fbbf24", "#f59e0b", "#38bdf8", "#60a5fa", "#ffffff"];

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.5;
      const distance = 22 + Math.random() * 20;
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 2.5 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setBurstParticles(newParticles);
    setTimeout(() => setBurstParticles([]), 700);

    toggleTheme(e);
  };

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <motion.button
        type="button"
        onClick={handleToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isDark ? "Switch to light mode (Solar Flare)" : "Switch to dark mode (Phoenix Ember)"}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className={`relative group p-2 rounded-xl transition-all duration-300 flex items-center justify-center overflow-visible ${
          isDark
            ? "bg-slate-900/80 hover:bg-slate-800/90 text-amber-400 border border-amber-500/30 hover:border-amber-400/60 shadow-lg shadow-orange-950/40"
            : "bg-white/90 hover:bg-amber-50/90 text-amber-600 border border-amber-300/60 hover:border-amber-500/80 shadow-md shadow-amber-500/10"
        }`}
      >
        {/* Ambient Glow Aura */}
        <div
          className={`absolute -inset-1 rounded-xl opacity-40 group-hover:opacity-80 blur-md transition-opacity duration-300 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-orange-600/30 via-amber-500/30 to-red-600/20"
              : "bg-gradient-to-r from-amber-400/40 via-yellow-400/30 to-orange-400/30"
          }`}
        />

        {/* Ambient Idle Micro-Sparks (Rising ember in dark mode, radiant glints in light mode) */}
        {isDark ? (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            <motion.span
              animate={{
                y: [0, -10, -18],
                x: [0, 2, -1],
                opacity: [0, 0.9, 0],
                scale: [0.6, 1, 0.4],
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
              className="absolute bottom-1 left-2 w-1 h-1 rounded-full bg-amber-300"
            />
            <motion.span
              animate={{
                y: [0, -12, -22],
                x: [0, -3, 1],
                opacity: [0, 0.8, 0],
                scale: [0.5, 0.9, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.6, ease: "easeOut" }}
              className="absolute bottom-1 right-2 w-1 h-1 rounded-full bg-orange-400"
            />
          </div>
        ) : (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            <motion.span
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 45, 90],
              }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
              className="absolute top-1 right-1"
            >
              <Sparkles size={8} className="text-amber-400" />
            </motion.span>
          </div>
        )}

        {/* Morphing Animated Center Icon */}
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark-ember"
              initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 0.96, 1],
                  filter: [
                    "drop-shadow(0 0 3px rgba(251, 191, 36, 0.6))",
                    "drop-shadow(0 0 8px rgba(249, 115, 22, 0.9))",
                    "drop-shadow(0 0 4px rgba(251, 191, 36, 0.7))",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <Flame size={19} className="text-amber-400 fill-amber-400/30 stroke-[2.2]" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="light-sun"
              initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="relative"
              >
                <SunMedium size={19} className="text-amber-600 stroke-[2.2] fill-amber-300/30" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explosive Micro-Particles on Click */}
        <AnimatePresence>
          {burstParticles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: 0,
                scale: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{
                backgroundColor: p.color,
                width: p.size,
                height: p.size,
                boxShadow: `0 0 6px ${p.color}`,
              }}
              className="absolute rounded-full pointer-events-none"
            />
          ))}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
