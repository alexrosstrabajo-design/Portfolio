import { useState, useEffect } from "react";
import t from "../translations";

const Hero = ({ lang }) => {
  const tx = t[lang].hero;
  const [visible, setVisible]     = useState(false);
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping]       = useState(true);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    setRoleIdx(0);
    setDisplayed("");
    setTyping(true);
  }, [lang]);

  useEffect(() => {
    let timer;
    const current = tx.roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timer = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((roleIdx + 1) % tx.roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx, tx.roles]);

  const bioLines = tx.bio.split("\n");

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "0 24px",
      position: "relative", zIndex: 1,
    }}>

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        background: "var(--badge-bg)", border: "1px solid var(--badge-border)",
        borderRadius: "50px", padding: "6px 18px", marginBottom: "32px",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
        transition: "all 0.8s ease",
        fontFamily: "'Space Mono', monospace", fontSize: "11px",
        color: "var(--fg-muted)", letterSpacing: "2px",
      }}>
        <span style={{
          width: "6px", height: "6px", borderRadius: "50%",
          background: "var(--fg)", display: "inline-block",
          animation: "pulse 2s infinite",
        }} />
        {tx.badge}
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "clamp(44px, 9vw, 96px)", fontWeight: 700,
        color: "var(--fg)", margin: "0 0 6px", lineHeight: 1.0, letterSpacing: "-2px",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)",
        transition: "all 0.9s ease 0.15s",
      }}>
        Oliver<br />
        <span style={{ color: "var(--fg-muted)" }}>Ortega</span>
      </h1>

      {/* Typewriter */}
      <p style={{
        fontFamily: "'DM Mono', monospace", fontSize: "clamp(15px,2.5vw,22px)",
        color: "var(--fg-muted)", margin: "16px 0 20px", minHeight: "30px",
        opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.3s",
      }}>
        {displayed}
        <span style={{ color: "var(--fg)", animation: "blink 1s infinite", fontWeight: 300 }}>|</span>
      </p>

      {/* Bio */}
      <p style={{
        color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace",
        fontSize: "14px", maxWidth: "440px", lineHeight: 1.9, marginBottom: "44px",
        opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.45s",
      }}>
        {bioLines[0]}<br />{bioLines[1]}
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center",
        opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.6s",
      }}>
        <a href="#contact" className="cursor-target" style={{
          padding: "13px 30px",
          background: "var(--btn-primary-bg)", color: "var(--btn-primary-fg)",
          borderRadius: "50px", textDecoration: "none",
          fontFamily: "'Space Mono', monospace", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.5px", transition: "all 0.3s ease",
        }}>
          {tx.cta1}
        </a>
        <a href="#projects" className="cursor-target" style={{
          padding: "13px 30px", background: "transparent",
          border: "1px solid var(--btn-secondary-border)",
          color: "var(--btn-secondary-fg)", borderRadius: "50px",
          textDecoration: "none", fontFamily: "'Space Mono', monospace",
          fontSize: "12px", backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}>
          {tx.cta2}
        </a>

      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 6px currentColor} 50%{box-shadow:0 0 16px currentColor} }
      `}</style>
    </section>
  );
};

export default Hero;