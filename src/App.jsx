import { useState, useEffect, lazy, Suspense } from "react";
import "./index.css";

const TargetCursor = lazy(() => import("./components/TargetCursor"));
const Beams = lazy(() => import("./components/Beams"));
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GradualBlur from "./components/GradualBlur";

export default function App() {
  const [active, setActive] = useState("Home");
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState("en");
  const [deferredReady, setDeferredReady] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // Defer heavy components (TargetCursor + Beams) until after first paint + idle
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setDeferredReady(true), { timeout: 1500 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setDeferredReady(true), 200);
      return () => clearTimeout(id);
    }
  }, []);

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

      {deferredReady && (
        <Suspense fallback={null}>
          <TargetCursor spinDuration={2} hoverDuration={0.2} hideDefaultCursor parallaxOn />
        </Suspense>
      )}

      {/* Beams background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "#000000ff", overflow: "hidden",
        opacity: isDark ? 1 : 0,
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }}>
        {deferredReady && (
          <Suspense fallback={null}>
            <Beams beamWidth={1} beamHeight={30} beamNumber={30}
              lightColor="#ff0000ff" speed={2} noiseIntensity={4} scale={0.31} rotation={87.5} />
          </Suspense>
        )}
      </div>

      {/* Fixed bottom blur */}
      <GradualBlur
        target="page"
        position="bottom"
        height="5rem"
        strength={2.5}
        divCount={4}
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

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills isDark={isDark} lang={lang} />
        <Contact lang={lang} />
      </main>

    </div>
  );
}