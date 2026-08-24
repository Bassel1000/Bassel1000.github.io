import { ThemeProvider } from "@/context/ThemeContext";
import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Phoenix } from "@/sections/Phoenix";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Credentials } from "@/sections/Credentials";
import { Contact } from "@/sections/Contact";

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300">
      <Nav />
      <main>
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
