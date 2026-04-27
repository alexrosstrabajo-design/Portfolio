import { useState, useEffect } from "react";
import "./index.css";

import TargetCursor from "./components/TargetCursor";
import Beams        from "./components/Beams";
import Nav          from "./components/Nav";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Projects     from "./components/Projects";
import Skills       from "./components/Skills";
import Contact      from "./components/Contact";
import GradualBlur  from "./components/GradualBlur";

export default function App() {
  const [active, setActive] = useState("Home");
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang]     = useState("en");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

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

      <TargetCursor spinDuration={2} hoverDuration={0.2} hideDefaultCursor parallaxOn />

      {/* Beams background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "#ff0000ff", overflow: "hidden",
        opacity: isDark ? 1 : 0,
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }}>
        <Beams beamWidth={1} beamHeight={30} beamNumber={30}
          lightColor="#ffffff" speed={2} noiseIntensity={4} scale={0.31} rotation={87.5} />
      </div>

      {/* Fixed bottom blur — elements fade in as user scrolls up */}
      <GradualBlur
        target="page"
        position="bottom"
        height="5rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
        style={{ zIndex: 50 }}
      />

      <Nav
        active={active} setActive={setActive}
        isDark={isDark} setIsDark={setIsDark}
        lang={lang} setLang={setLang}
      />

      <Hero     lang={lang} />
      <About    lang={lang} />
      <Projects lang={lang} />
      <Skills   isDark={isDark} lang={lang} />
      <Contact  lang={lang} />

    </div>
  );
}