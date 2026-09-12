import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "../Common/BrandMark";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [activeLink, setActiveLink] = useState<string>("Home"); // persists after click

  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // temporary preview

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border md:border-b border-border-subtle bg-[#fbfbfc] md:bg-[#ffffff] backdrop-blur-md m-1 md:m-0"
    >
      <div className="mx-auto max-w-7xl font-jakarta flex items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6">
        {/* Mobile Hamburger */}
        <button
          type="button"
          className="-ml-1 grid place-items-center h-3.5 w-4.5 rounded-lg text-stone-500 cursor-pointer md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Brand */}
        <BrandMark />

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-5 lg:gap-8 md:flex"
          onMouseLeave={() => setHoveredLink(null)}
        >
          <NavLinks
            activeLink={activeLink}
            hoveredLink={hoveredLink}
            onHover={setHoveredLink}
            onSelect={setActiveLink}
          />
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <button
            type="button"
            className="hidden sm:inline-block text-sm/[1.43] font-medium text-text-body hover:text-text-danger cursor-pointer hover:scale-105 transform hover:translate-x-0.5 transition-all duration-300"
          >
            Sign In
          </button>

          {/* "shadow-[0px_1px_2px_0px_#fbcfe8]
          shadow-xs shadow-pink-200

          shadow-xs => x=0 y=1px blur=2px spread=0
          */}
          <button
            type="button"
            className="bg-button hover:bg-accent px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full shadow-pink-glow text-xs/[1.43] sm:text-sm/[1.43]  font-semibold text-white   cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sends data parent to child  component through props and <MobileMenu /> is a Element who is also be a Component where also exists many Elements. */}
      <MobileMenu
        isOpen={isMenuOpen}
        activeLink={activeLink}
        hoveredLink={hoveredLink}
        onHover={setHoveredLink}
        onSelect={(link) => {
          setActiveLink(link);
          closeMenu(); // picking a link on mobile close the menu
        }}
      />
    </header>
  );
};

export default Navbar;
