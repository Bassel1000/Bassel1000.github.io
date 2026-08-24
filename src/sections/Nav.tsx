import { useEffect, useState } from "react";
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
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-display font-bold text-slate-950 text-sm shadow-md shadow-orange-500/20">
            BE
          </span>
          <span className="font-display font-semibold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
            Bassel Elbahnasy
          </span>
        </a>

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
