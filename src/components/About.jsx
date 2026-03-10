import GlassCard from "./GlassCard";
import t from "../translations";

const About = ({ lang }) => {
  const tx = t[lang].about;

  return (
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
          {tx.label}
        </div>

        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
          color: "var(--fg)", marginBottom: "40px", letterSpacing: "-0.5px",
        }}>
          {tx.title}
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
              {tx.bio1} <span style={{ color: "var(--fg)" }}>Alexander Ross</span>
              {tx.bio2} <span style={{ color: "var(--fg)" }}>ITESA</span>{" "}
              {tx.bio3}<br /><br />
              {tx.bio4}
            </p>
          </GlassCard>

          {tx.cards.map(({ icon, title, desc }) => (
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
};

export default About;