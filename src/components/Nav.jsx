import { useState, useEffect } from "react";

const Nav = ({ active, setActive }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
      <span style={{
        fontFamily: "'Space Mono', monospace", color: "#fff",
        fontWeight: 700, fontSize: "14px", marginRight: "14px", letterSpacing: "1px",
      }}>
        AR
      </span>

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
    </nav>
  );
};

export default Nav;
