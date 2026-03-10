import { useState } from "react";

const GlassCard = ({ children, style = {}, hover = true, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: hovered ? "var(--glass-bg-hover)" : "var(--glass-bg)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: "16px",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered ? "var(--glass-shadow-hover)" : "var(--glass-shadow)",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;