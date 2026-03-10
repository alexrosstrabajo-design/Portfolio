import { useState, useEffect } from "react";
import t from "../translations";

const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Divider = () => (
  <span style={{
    width: "1px", height: "16px",
    background: "var(--nav-divider)",
    margin: "0 4px", flexShrink: 0,
  }} />
);

const Nav = ({ active, setActive, isDark, setIsDark, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredToggle, setHoveredToggle] = useState(false);
  const [hoveredLang, setHoveredLang] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links    = t[lang].nav.links;
  const sections = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav style={{
      position: "fixed", top: "18px", left: "50%",
      transform: "translateX(-50%)", zIndex: 100,
      display: "flex", alignItems: "center", gap: "4px",
      background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
      border: "1px solid var(--nav-border)",
      borderRadius: "50px",
      padding: "8px 18px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      whiteSpace: "nowrap",
      boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
      transition: "background 0.4s ease",
    }}>

      {/* Logo */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        color: "var(--fg)", fontWeight: 700,
        fontSize: "14px", marginRight: "14px", letterSpacing: "1px",
      }}>
        AR
      </span>

      {/* Nav links */}
      {links.map((l, i) => (
        <a
          key={l}
          href={`#${sections[i]}`}
          onClick={() => setActive(l)}
          className="cursor-target"
          style={{
            color: active === links[i] || active === t.en.nav.links[i]
              ? "var(--fg)" : "var(--fg-muted)",
            fontFamily: "'Space Mono', monospace", fontSize: "11px",
            textDecoration: "none", padding: "6px 13px", borderRadius: "50px",
            background: active === links[i] || active === t.en.nav.links[i]
              ? "var(--nav-active-bg)" : "transparent",
            transition: "all 0.2s ease", letterSpacing: "0.5px",
          }}
        >
          {l}
        </a>
      ))}

      <Divider />

      {/* Language toggle */}
      <button
        onClick={() => setLang(prev => prev === "en" ? "es" : "en")}
        onMouseEnter={() => setHoveredLang(true)}
        onMouseLeave={() => setHoveredLang(false)}
        className="cursor-target"
        title={lang === "en" ? "Cambiar a español" : "Switch to English"}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hoveredLang ? "var(--fg)" : "var(--fg-muted)",
          background: "transparent",
          border: "none", cursor: "pointer",
          padding: "6px 10px", borderRadius: "50px",
          transition: "all 0.2s ease",
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px", fontWeight: 700,
          letterSpacing: "0.5px",
        }}
      >
        {lang === "en" ? "ES" : "EN"}
      </button>

      <Divider />

      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(prev => !prev)}
        onMouseEnter={() => setHoveredToggle(true)}
        onMouseLeave={() => setHoveredToggle(false)}
        className="cursor-target"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hoveredToggle ? "var(--fg)" : "var(--fg-muted)",
          background: !isDark ? "var(--nav-active-bg)" : "transparent",
          border: "none", cursor: "pointer",
          padding: "6px 10px", borderRadius: "50px",
          transition: "all 0.2s ease",
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default Nav;