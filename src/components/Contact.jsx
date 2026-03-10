import GlassCard from "./GlassCard";
import t from "../translations";

const links = [
  { label: { en: "Email",     es: "Correo" },     value: "alexrosstrabajo@gmail.com",       href: "mailto:alexrosstrabajo@gmail.com",        icon: "✉️" },
  { label: { en: "GitHub",    es: "GitHub" },     value: "alexrosstrabajo-design",           href: "https://github.com/alexrosstrabajo-design", icon: "⌨️" },
  { label: { en: "Instagram", es: "Instagram" },  value: "@alexanderross2312",               href: "https://instagram.com/alexanderross2312",   icon: "📸" },
];

const Contact = ({ lang }) => {
  const tx = t[lang].contact;

  return (
    <section id="contact" style={{
      minHeight: "60vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "120px 24px",
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: "620px", width: "100%", textAlign: "center" }}>

        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: "10px",
          color: "var(--fg-dim)", letterSpacing: "3px", marginBottom: "10px",
        }}>
          {tx.label}
        </div>

        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
          color: "var(--fg)", marginBottom: "20px", letterSpacing: "-0.5px",
        }}>
          {tx.title}
        </h2>

        <p style={{
          color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace",
          fontSize: "14px", lineHeight: 1.9, marginBottom: "48px",
        }}>
          {tx.subtitle}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {links.map(({ label, value, href, icon }) => (
            <GlassCard key={label.en} className="cursor-target" style={{ padding: "20px 28px" }}>
              <a href={href} style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
                <span style={{ fontSize: "20px" }}>{icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace", fontSize: "10px",
                    color: "var(--fg-ghost)", letterSpacing: "2px", marginBottom: "2px",
                  }}>
                    {label[lang].toUpperCase()}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px", color: "var(--fg)" }}>
                    {value}
                  </div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--fg-faint)", fontSize: "16px" }}>↗</span>
              </a>
            </GlassCard>
          ))}
        </div>

        <p style={{
          marginTop: "64px", fontFamily: "'Space Mono', monospace",
          fontSize: "10px", color: "var(--fg-ghost)", letterSpacing: "1.5px",
        }}>
          {tx.footer}
        </p>
      </div>
    </section>
  );
};

export default Contact;