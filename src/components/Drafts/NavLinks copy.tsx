import { useState } from "react";
import { NAV_LINKS } from "../Common/links";

export default function NavLinks() {
  const [activeLink, setActiveLink] = useState<string>("Home"); // persists after click
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // temporary preview

  return (
    <div className="contents" onMouseLeave={() => setHoveredLink(null)}>
      {NAV_LINKS.map((link) => {
        const isHighlighted = hoveredLink
          ? hoveredLink === link
          : activeLink === link;

        return (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onMouseEnter={() => setHoveredLink(link)}
            onClick={() => setActiveLink(link)}
            className={`text-sm/[1.43] font-medium transition-colors ${isHighlighted ? "text-primary" : "text-text-secondary"}`}
          >
            {link}
          </a>
        );
      })}
    </div>
  );
}

/* 
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  activeLink: string;
  onSelect: (link: string) => void;
}

export default function MobileMenu({
  isOpen,
  activeLink,
  onSelect,
}: MobileMenuProps) {
  // console.log(isOpen, activeLink, onSelect);

  if (!isOpen) return null;

  return (
    <div
      className="md:hidden border border-border-subtle px-4 py-4"
      aria-label="Mobile"
    >
      <div className="flex flex-col gap-5">
        <NavLinks
          activeLink={activeLink}
          hoveredLink={null}
          onHover={() => {}}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

*/
