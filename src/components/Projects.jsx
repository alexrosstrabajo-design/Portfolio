import GlassCard from "./GlassCard";

const projects = [
  { name: "TextNode", tagline: "Note Taking App",
    desc: "A modern note-taking app to organize thoughts efficiently. Clean UI with full CRUD.",
    tags: ["JavaScript", "React", "Web App"],
    link: "https://Text-node.vercel.app",
    github: "https://github.com/alexrosstrabajo-design/TextNode" },
  { name: "NetScan", tagline: "Network Scanner Tool",
    desc: "Python-based scanner that identifies active devices and open ports across a network.",
    tags: ["Python", "Scapy", "Network Security"],
    link: "#", github: "#" },
  { name: "InvDB", tagline: "Database Management System",
    desc: "Inventory database with a Flask interface, SQL backend, and Bootstrap UI.",
    tags: ["SQL", "Python", "Flask", "Bootstrap"],
    link: "#", github: "#" },
];

const Projects = () => (
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
        PROJECTS
      </div>

      <h2 style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
        color: "var(--fg)", marginBottom: "40px", letterSpacing: "-0.5px",
      }}>
        What I've Built
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
        gap: "18px",
      }}>
        {projects.map((p) => (
          <GlassCard key={p.name} className="cursor-target"
            style={{ padding: "32px", display: "flex", flexDirection: "column" }}>

            {/* Accent bar */}
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
              {p.tags.map((t) => (
                <span key={t} style={{
                  fontFamily: "'Space Mono', monospace", fontSize: "10px",
                  background: "var(--tag-bg)",
                  border: "1px solid var(--tag-border)",
                  borderRadius: "50px", padding: "3px 10px",
                  color: "var(--tag-fg)",
                }}>
                  {t}
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
                Live ↗
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

export default Projects;