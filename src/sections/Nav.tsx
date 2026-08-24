import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";
import phoenixFireImg from "@/assets/phoenix_logo_fire.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Phoenix", href: "#phoenix" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#070b14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/70 shadow-sm dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Top-Left Brand Logo & Name */}
        <a
          href="#top"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
          className="flex items-center gap-3 group select-none py-1"
        >
          {/* Phoenix Micro-Emblem Badge */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Ambient Flame Ring Aura */}
            <motion.div
              animate={{
                scale: isLogoHovered ? [1.1, 1.25, 1.1] : [1, 1.08, 1],
                opacity: isLogoHovered ? [0.7, 0.9, 0.7] : [0.35, 0.5, 0.35],
                rotate: isLogoHovered ? [0, 180, 360] : [0, 45, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: isLogoHovered ? 2.5 : 5,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 blur-sm pointer-events-none"
            />

            {/* Emblem Container */}
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-white to-amber-50 dark:from-[#0f172a] dark:to-[#070b14] border border-amber-400/50 dark:border-amber-500/40 p-1 flex items-center justify-center shadow-md shadow-orange-500/10 overflow-hidden">
              <motion.img
                src={phoenixFireImg}
                alt="Phoenix Mark"
                className="w-6 h-6 object-contain"
                animate={{
                  scale: isLogoHovered ? 1.12 : 1,
                  y: isLogoHovered ? -0.5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{
                  filter: isLogoHovered
                    ? "drop-shadow(0 0 6px rgba(251, 191, 36, 0.9)) drop-shadow(0 0 12px rgba(249, 115, 22, 0.7))"
                    : "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
                }}
              />

              {/* Rising Sparks on Hover */}
              {isLogoHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <motion.span
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: -16, opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: "easeOut" }}
                    className="absolute left-1.5 bottom-0 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_4px_#fbbf24]"
                  />
                  <motion.span
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: -18, opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.1, delay: 0.25, ease: "easeOut" }}
                    className="absolute right-1.5 bottom-0 w-1 h-1 rounded-full bg-orange-400 shadow-[0_0_4px_#f97316]"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Name & Micro Subtitle */}
          <div className="flex flex-col">
            <span className="font-display text-[15px] font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors leading-tight">
              Bassel Elbahnasy
            </span>
            <span className="font-mono2 text-[10.5px] text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-1.5 leading-none mt-0.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Computer Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                item.label === "Phoenix"
                  ? "text-amber-600 dark:text-amber-400/90 hover:text-amber-500 dark:hover:text-amber-300 font-medium flex items-center gap-1"
                  : "text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300"
              }`}
            >
              {item.label === "Phoenix" && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              )}
              {item.label}
            </a>
          ))}

          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 text-slate-950 hover:opacity-90 transition-opacity shadow-md shadow-orange-500/20"
          >
            Hire me
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-slate-700 dark:text-slate-300 p-1.5 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/70 px-6 py-4 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-amber-600 dark:text-amber-400"
          >
            Hire me on Upwork →
          </a>
        </div>
      )}
    </header>
  );
}
