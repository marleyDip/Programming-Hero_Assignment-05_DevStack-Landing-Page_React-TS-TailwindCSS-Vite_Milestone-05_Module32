import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "hero" | "technology";
  className?: string;
}

/* const mobileGradient =
  "from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90%";

const desktopGradient = {
  hero: "md:from-orange md:via-secondary md:to-foreground",
  technology: "md:from-accent md:from-0% md:to-violet-light md:to-100%",
} as const; */

const gradients = {
  hero: {
    mobile: "from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90%",
    desktop: "md:from-orange md:via-secondary md:to-foreground",
  },

  technology: {
    mobile: "from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90%",
    desktop: "md:from-accent md:from-100% md:to-violet-light md:to-100%",
  },
} as const;

export default function GradientText({
  children,
  variant = "hero",
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`bg-linear-to-br md:bg-linear-to-r bg-clip-text text-transparent ${gradients[variant].mobile} ${gradients[variant].desktop} ${className}`}
    >
      {children}
    </span>
  );
}
