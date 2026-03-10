import { useState, useEffect } from "react";

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

const Nav = ({ active, setActive }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.style.setProperty("--bg", isDark ? "#000" : "#f5f5f5");
    document.documentElement.style.setProperty("--fg", isDark ? "#fff" : "#000");
  }, [isDark]);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: "18px", left: "50%",
      transform: "translateX(-50%)", zIndex: 100,
      display: "flex", alignItems: "center", gap: "4px",
      background: scrolled ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50px",
      padding: "8px 18px", backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)", whiteSpace: "nowrap",
      boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
      transition: "background 0.4s ease",
    }}>
      {/* Logo */}
      <span style={{
        fontFamily: "'Space Mono', monospace", color: "#fff",
        fontWeight: 700, fontSize: "14px", marginRight: "14px", letterSpacing: "1px",
      }}>
        AR
      </span>

      {/* Nav links */}
      {links.map((l) => (
        <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setActive(l)}
          className="cursor-target"
          style={{
            color: active === l ? "#fff" : "rgba(255,255,255,0.4)",
            fontFamily: "'Space Mono', monospace", fontSize: "11px",
            textDecoration: "none", padding: "6px 13px", borderRadius: "50px",
            background: active === l ? "rgba(255,255,255,0.12)" : "transparent",
            transition: "all 0.2s ease", letterSpacing: "0.5px",
          }}>
          {l}
        </a>
      ))}

      {/* Divider */}
      <span style={{
        width: "1px", height: "16px",
        background: "rgba(255,255,255,0.15)",
        margin: "0 6px", flexShrink: 0,
      }} />

      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(prev => !prev)}
        className="cursor-target"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isDark ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)",
          background: isDark ? "transparent" : "rgba(255,255,255,0.12)",
          border: "none", cursor: "pointer",
          padding: "6px 10px", borderRadius: "50px",
          transition: "all 0.2s ease",
          fontFamily: "'Space Mono', monospace",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
        onMouseLeave={e => e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)"}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default Nav;