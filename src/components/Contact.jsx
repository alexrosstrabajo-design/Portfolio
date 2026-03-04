import GlassCard from "./GlassCard";

const links = [
  { label: "Email",     value: "alexrosstrabajo@gmail.com",
    href: "mailto:alexrosstrabajo@gmail.com",          icon: "✉️" },
  { label: "GitHub",    value: "alexrosstrabajo-design",
    href: "https://github.com/alexrosstrabajo-design",  icon: "⌨️" },
  { label: "Instagram", value: "@alexanderross2312",
    href: "https://instagram.com/alexanderross2312",    icon: "📸" },
];

const Contact = () => (
  <section id="contact" style={{
    minHeight: "60vh", display: "flex", alignItems: "center",
    justifyContent: "center", padding: "120px 24px",
    position: "relative", zIndex: 1,
  }}>
    <div style={{ maxWidth: "620px", width: "100%", textAlign: "center" }}>

      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px",
        color: "rgba(255,255,255,0.35)", letterSpacing: "3px", marginBottom: "10px" }}>
        CONTACT
      </div>
      <h2 style={{ fontFamily: "'Space Mono', monospace",
        fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
        color: "#fff", marginBottom: "20px", letterSpacing: "-0.5px" }}>
        Let's Work Together
      </h2>
      <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace",
        fontSize: "14px", lineHeight: 1.9, marginBottom: "48px" }}>
        Looking for new opportunities. Whether you have a project in mind or
        just want to say hi — my inbox is always open.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {links.map(({ label, value, href, icon }) => (
          <GlassCard key={label} className="cursor-target" style={{ padding: "20px 28px" }}>
            <a href={href} style={{ display: "flex", alignItems: "center",
              gap: "16px", textDecoration: "none" }}>
              <span style={{ fontSize: "20px" }}>{icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px",
                  color: "rgba(255,255,255,0.2)", letterSpacing: "2px", marginBottom: "2px" }}>
                  {label.toUpperCase()}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px",
                  color: "#fff" }}>{value}</div>
              </div>
              <span style={{ marginLeft: "auto",
                color: "rgba(255,255,255,0.2)", fontSize: "16px" }}>↗</span>
            </a>
          </GlassCard>
        ))}
      </div>

      <p style={{ marginTop: "64px", fontFamily: "'Space Mono', monospace",
        fontSize: "10px", color: "rgba(255,255,255,0.15)", letterSpacing: "1.5px" }}>
        © 2025 ALEXANDER ROSS — BUILT WITH ♥
      </p>
    </div>
  </section>
);

export default Contact;
