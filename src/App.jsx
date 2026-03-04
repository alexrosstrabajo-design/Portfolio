import { useState, useEffect } from "react";
import "./index.css";

// Components
import TargetCursor from "./components/TargetCursor";
import Beams   from "./components/Beams";
import Nav     from "./components/Nav";
import Hero    from "./components/Hero";
import About   from "./components/About";
import Projects from "./components/Projects";
import Skills  from "./components/Skills";
import Contact from "./components/Contact";
/**
 * App — root component.
 *
 * Structure:
 *   - Fixed Beams background (z-index: 0)
 *   - Fixed Nav            (z-index: 100)
 *   - Scrollable sections  (z-index: 1)
 *       Hero → About → Projects → Skills → Contact
 *
 * Active nav link is tracked via IntersectionObserver.
 */
export default function App() {
  const [active, setActive] = useState("Home");

  // Sync nav highlight with scroll position
  useEffect(() => {
    const ids = ["home", "about", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      
      {/* ── TargetCursor ── */}
      <TargetCursor spinDuration={2} hoverDuration={0.2} hideDefaultCursor parallaxOn />

      {/* ── Beams background (fixed, behind everything) ── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "#000000", overflow: "hidden" }}>
        <Beams
        beamWidth={1}
        beamHeight={30}
        beamNumber={30}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={0}
        scale={0.31}
        rotation={87.5}
        />
      </div>

      {/* ── Navigation ── */}
      <Nav active={active} setActive={setActive} />

      {/* ── Page sections ── */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
}
