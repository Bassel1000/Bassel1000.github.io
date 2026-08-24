import { ThemeProvider } from "@/context/ThemeContext";
import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Phoenix } from "@/sections/Phoenix";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Credentials } from "@/sections/Credentials";
import { Contact } from "@/sections/Contact";
import { HieroglyphicSideRails } from "@/components/HieroglyphicSideRails";

function AppContent() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300 overflow-x-hidden">
      <HieroglyphicSideRails />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Phoenix />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
