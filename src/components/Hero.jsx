import { useState, useEffect } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const roles = ["Web Developer", "Database Designer", "Pentester"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    let t;
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

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
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "50px", padding: "6px 18px", marginBottom: "32px",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
        transition: "all 0.8s ease", fontFamily: "'Space Mono', monospace",
        fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "2px",
      }}>
        <span style={{
          width: "6px", height: "6px", borderRadius: "50%",
          background: "#fff", display: "inline-block",
          animation: "pulse 2s infinite",
        }} />
        AVAILABLE FOR HIRE
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "clamp(44px, 9vw, 96px)", fontWeight: 700,
        color: "#fff", margin: "0 0 6px", lineHeight: 1.0, letterSpacing: "-2px",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)",
        transition: "all 0.9s ease 0.15s",
      }}>
        Alexander<br />
        <span style={{ color: "rgba(255,255,255,0.35)" }}>Ross</span>
      </h1>

      {/* Typewriter */}
      <p style={{
        fontFamily: "'DM Mono', monospace", fontSize: "clamp(15px,2.5vw,22px)",
        color: "rgba(255,255,255,0.4)", margin: "16px 0 20px", minHeight: "30px",
        opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.3s",
      }}>
        {displayed}
        <span style={{ color: "#fff", animation: "blink 1s infinite", fontWeight: 300 }}>|</span>
      </p>

      {/* Bio */}
      <p style={{
        color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace",
        fontSize: "14px", maxWidth: "440px", lineHeight: 1.9, marginBottom: "44px",
        opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.45s",
      }}>
        Student at ITESA · Building secure, efficient web applications.<br />
        Growing. Learning. Adapting.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center",
        opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.6s",
      }}>
        <a href="#contact" className="cursor-target" style={{
          padding: "13px 30px", background: "#fff", color: "#000",
          borderRadius: "50px", textDecoration: "none",
          fontFamily: "'Space Mono', monospace", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.5px", transition: "all 0.3s ease",
        }}>
          Get In Touch
        </a>
        <a href="#projects" className="cursor-target" style={{
          padding: "13px 30px", background: "transparent",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "rgba(255,255,255,0.65)", borderRadius: "50px",
          textDecoration: "none", fontFamily: "'Space Mono', monospace",
          fontSize: "12px", backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}>
          View My Work
        </a>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 6px #fff} 50%{box-shadow:0 0 16px #fff} }
      `}</style>
    </section>
  );
};

export default Hero;
