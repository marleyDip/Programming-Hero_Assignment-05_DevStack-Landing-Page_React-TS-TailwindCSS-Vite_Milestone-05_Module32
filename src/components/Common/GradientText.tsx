import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "hero" | "technology";
  className?: string;
}

const mobileGradient =
  "from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90%";

const desktopGradient = {
  hero: "md:from-orange md:via-secondary md:to-foreground",
  technology: "md:from-accent md:to-violet-light",
} as const;

export default function GradientText({
  children,
  variant = "hero",
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`bg-linear-to-br md:bg-linear-to-r bg-clip-text text-transparent ${mobileGradient} ${desktopGradient[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
