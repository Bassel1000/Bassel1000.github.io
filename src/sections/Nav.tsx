import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

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
        {/* Top-Left Brand Logo & Name (Option B: Metallic Glass Monogram) */}
        <a
          href="#top"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
          className="flex items-center gap-3 group select-none py-1"
        >
          {/* BE Monogram Squircle Badge with Shimmer Sweep */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Ambient Gold Glow Aura */}
            <motion.div
              animate={{
                scale: isLogoHovered ? [1.1, 1.25, 1.1] : [1, 1.06, 1],
                opacity: isLogoHovered ? [0.75, 0.95, 0.75] : [0.3, 0.45, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: isLogoHovered ? 2 : 4,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 blur-sm pointer-events-none"
            />

            {/* Glass Badge Container */}
            <div className="relative w-full h-full rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-amber-400/50 dark:border-amber-500/40 flex items-center justify-center shadow-md shadow-amber-500/10 overflow-hidden group-hover:border-amber-400 transition-colors">
              {/* Shimmer Light Reflection Sweep */}
              <motion.div
                animate={{
                  x: isLogoHovered ? ["-100%", "200%"] : ["-100%", "200%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: isLogoHovered ? 1.2 : 3.5,
                  ease: "easeInOut",
                  repeatDelay: isLogoHovered ? 0.3 : 2,
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent -skew-x-12 pointer-events-none"
              />

              {/* BE Monogram Typography */}
              <span className="font-display font-black text-sm tracking-tighter bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-orange-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                BE
              </span>
            </div>
          </div>

          {/* Name & Title */}
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
