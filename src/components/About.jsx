import GlassCard from "./GlassCard";

const cards = [
  { icon: "🌐", title: "Web Development",
    desc: "Building modern, responsive applications with React and cutting-edge frontend tooling." },
  { icon: "🗄️", title: "Database Design",
    desc: "Architecting efficient, normalized schemas with SQL backends and Python APIs." },
  { icon: "🔒", title: "Pentesting",
    desc: "Identifying vulnerabilities, network scanning, and ethical hacking practices." },
];

const About = () => (
  <section id="about" style={{
    minHeight: "100vh", display: "flex", alignItems: "center",
    justifyContent: "center", padding: "120px 24px",
    position: "relative", zIndex: 1,
  }}>
    <div style={{ maxWidth: "900px", width: "100%" }}>

      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: "10px",
        color: "var(--fg-dim)", letterSpacing: "3px", marginBottom: "10px",
      }}>
        ABOUT ME
      </div>

      <h2 style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
        color: "var(--fg)", marginBottom: "40px", letterSpacing: "-0.5px",
      }}>
        Who I Am
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: "18px",
      }}>

        <GlassCard hover={false} style={{ padding: "36px", gridColumn: "1 / -1" }}>
          <p style={{
            color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace",
            fontSize: "14px", lineHeight: 2, margin: 0,
          }}>
            I'm <span style={{ color: "var(--fg)" }}>Alexander Ross</span>, a student at{" "}
            <span style={{ color: "var(--fg)" }}>ITESA</span> passionate about web development,
            database architecture, and cybersecurity. I enjoy turning complex problems into
            clean, secure, and scalable solutions.<br /><br />
            When I'm not coding, you'll find me exploring security techniques, contributing
            to open-source, or leveling up in ethical hacking.
          </p>
        </GlassCard>

        {cards.map(({ icon, title, desc }) => (
          <GlassCard key={title} className="cursor-target" style={{ padding: "28px" }}>
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>{icon}</div>
            <h3 style={{
              fontFamily: "'Space Mono', monospace", color: "var(--fg)",
              fontSize: "14px", fontWeight: 700, marginBottom: "10px",
            }}>
              {title}
            </h3>
            <p style={{
              color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace",
              fontSize: "13px", lineHeight: 1.8, margin: 0,
            }}>
              {desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default About;