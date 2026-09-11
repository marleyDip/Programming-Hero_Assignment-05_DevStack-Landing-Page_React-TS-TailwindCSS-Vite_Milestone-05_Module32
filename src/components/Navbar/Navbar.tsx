import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="">
      <div className="">
        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={toggleMenu}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>

        {/* Brand */}

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLinks />
        </div>

        {/* Authentication Buttons */}
      </div>

      {/* Mobile Menu - Sends data parent to child  component through props and <MobileMenu /> is a Element who is also be a Component where also exists many Elements. */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
