import GlassCard from "./GlassCard";
import t from "../translations";

const Projects = ({ lang }) => {
  const tx = t[lang].projects;

  return (
    <section id="projects" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "120px 24px",
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: "960px", width: "100%" }}>

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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "18px",
        }}>
          {tx.items.map((p) => (
            <GlassCard key={p.name} className="cursor-target"
              style={{ padding: "32px", display: "flex", flexDirection: "column" }}>

              <div style={{
                width: "40px", height: "2px", borderRadius: "1px",
                background: "var(--accent-bar)", marginBottom: "20px",
                boxShadow: "var(--accent-bar-shadow)",
              }} />

              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "10px",
                color: "var(--fg-dim)", letterSpacing: "2.5px",
                marginBottom: "6px", textTransform: "uppercase",
              }}>
                {p.tagline}
              </span>

              <h3 style={{
                fontFamily: "'Space Mono', monospace", color: "var(--fg)",
                fontSize: "20px", fontWeight: 700, marginBottom: "12px",
              }}>
                {p.name}
              </h3>

              <p style={{
                color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace",
                fontSize: "13px", lineHeight: 1.8, flex: 1, marginBottom: "20px",
              }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'Space Mono', monospace", fontSize: "10px",
                    background: "var(--tag-bg)", border: "1px solid var(--tag-border)",
                    borderRadius: "50px", padding: "3px 10px", color: "var(--tag-fg)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <a href={p.link} className="cursor-target" style={{
                  padding: "8px 18px",
                  background: "var(--btn-primary-bg)", color: "var(--btn-primary-fg)",
                  borderRadius: "50px", textDecoration: "none",
                  fontFamily: "'Space Mono', monospace", fontSize: "11px", fontWeight: 700,
                }}>
                  {tx.live}
                </a>
                <a href={p.github} className="cursor-target" style={{
                  padding: "8px 18px", background: "transparent",
                  border: "1px solid var(--btn-secondary-border)",
                  borderRadius: "50px", color: "var(--fg-muted)",
                  textDecoration: "none", fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                }}>
                  GitHub
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;