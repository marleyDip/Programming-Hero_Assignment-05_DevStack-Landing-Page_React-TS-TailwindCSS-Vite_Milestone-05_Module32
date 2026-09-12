import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "hero" | "technology";
  className?: string;
}

export default function GradientText({
  children,
  variant = "hero",
  className = "",
}: GradientTextProps) {
  /* const gradientStyles =
    variant === "hero"
      ? "from-orange via-secondary to-foreground"
      : "from-accent to-violet-light"; */

  const gradientStyles =
    variant === "hero"
      ? "from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90% md:from-orange md:via-secondary md:to-foreground"
      : "from-accent to-violet-light";

  return (
    <span
      className={`bg-linear-to-br md:bg-linear-to-r bg-clip-text text-transparent ${gradientStyles} ${className}`}
    >
      {children}
    </span>
  );
}

/*  
const gradientStyles =
    variant === "hero"
      ? "bg-[linear-gradient(to_bottom_right,#ff5722_15%,#e91e63_55%,#9c27b0_90%)] md:bg-linear-to-r md:from-orange md:via-secondary md:to-foreground"
      : "bg-linear-to-r from-accent to-violet-light";
*/
