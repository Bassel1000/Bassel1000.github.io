import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Phoenix } from "@/sections/Phoenix";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Credentials } from "@/sections/Credentials";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 antialiased">
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

export default App;
