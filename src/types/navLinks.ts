export default interface NavLinksProps {
  activeLink: string;
  onSelect: (link: string) => void;
  hoveredLink: string | null;
  onHover: (link: string | null) => void;

  // isOpen?: boolean;
  // revealed?: boolean; // true = fully visible; false = pre-animation state
  // stagger?: boolean; // enables the one-after-another entrance
}
