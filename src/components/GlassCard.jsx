import { useState } from "react";

const GlassCard = ({ children, style = {}, hover = true, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: "16px",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? "0 8px 40px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
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
