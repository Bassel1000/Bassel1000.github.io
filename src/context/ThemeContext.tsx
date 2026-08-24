import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio_theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }
      // If system prefers light, return light, else default to dark
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    }
    return "dark";
  });

  const applyThemeToDOM = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("portfolio_theme", newTheme);
  }, []);

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme, applyThemeToDOM]);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      const nextTheme: Theme = theme === "dark" ? "light" : "dark";

      // Check if View Transition API is supported and user doesn't prefer reduced motion
      const isReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Type augmentation for document.startViewTransition
      const doc = document as Document & {
        startViewTransition?: (callback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      if (!doc.startViewTransition || isReducedMotion) {
        setThemeState(nextTheme);
        return;
      }

      // Calculate origin coordinates for ripple from click or screen center
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      if (event) {
        x = event.clientX;
        y = event.clientY;
      }

      // Calculate distance to the farthest corner
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = doc.startViewTransition(() => {
        setThemeState(nextTheme);
        applyThemeToDOM(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [theme, applyThemeToDOM]
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
    },
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
