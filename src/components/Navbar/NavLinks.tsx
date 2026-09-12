/* When TypeScript type import in a file always add type keyword.

Without type keyword it gives error.
  import type_name from "./file_path";
  import { type_name } from "./file_path";
*/

import type NavLinksProps from "../../types/navLinks";
import { NAV_LINKS } from "../Common/links";

export default function NavLinks({
  activeLink,
  hoveredLink,
  onHover,
  onSelect,
  revealed = true,
  stagger = false,
}: { revealed?: boolean; stagger?: boolean } & NavLinksProps) {
  return (
    <>
      {NAV_LINKS.map((link, index) => {
        const isHighlighted = hoveredLink
          ? hoveredLink === link
          : activeLink === link;

        return (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onMouseEnter={() => onHover(link)}
            onClick={() => onSelect(link)}
            style={
              stagger
                ? { transitionDelay: revealed ? `${index * 40}ms` : ")ms" }
                : undefined
            }
            className={`text-sm/[1.43] font-medium ${stagger ? "transition-all duration-300 ease-out" : "transition-colors"} ${isHighlighted ? "text-primary" : "text-text-secondary"} ${stagger ? (revealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1") : ""}`}
          >
            {link}
          </a>
        );
      })}
    </>
  );
}
