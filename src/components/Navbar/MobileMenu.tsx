import { LogIn, Sparkles } from "lucide-react";
import type NavLinksProps from "../../types/navLinks";
import NavLinks from "./NavLinks";

// Extend the existing properties with isOpen
export interface MobileMenuProps extends NavLinksProps {
  isOpen: boolean;
}

// Inline Intersection (&)
// ({} : {isOpen: boolean} & NavLinksProps)

export default function MobileMenu({
  isOpen,
  activeLink,
  hoveredLink,
  onHover,
  onSelect,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav
      aria-label="Mobile"
      aria-hidden={!isOpen}
      onMouseLeave={() => onHover(null)}
      className={`md:hidden overflow-hidden border-t border-border-subtle bg-white transition-[max-height,opacity,transform] duration-300 ease-out ${isOpen ? "max-h-112 opacity-100 translate-y-0 shadow-[0_16px_32px_-12px_rgba(15,23,42,0.12)]" : "max-h-0 opacity-0 -translate-y-1 pointer-events-none"}`}
    >
      <div className="h-0.5 w-full bg-gradient-band" />

      <div className="flex flex-col gap-5 px-4 py-5">
        <NavLinks
          activeLink={activeLink}
          hoveredLink={hoveredLink}
          onHover={onHover}
          onSelect={onSelect}
          revealed={isOpen}
          stagger
        />

        <div className="mt-1 h-px w-full bg-border-subtle" />

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border border-border-subtle text-text-body transition-colors hover:border-primary  hover:text-primary"
          >
            <LogIn size={16} /> Sign In
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-brand hover:bg-linear-to-bl hover:from-pink-500 hover:to-violet-600 shadow-pink-glow transition-transform active:scale-95"
          >
            <Sparkles size={16} /> Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
