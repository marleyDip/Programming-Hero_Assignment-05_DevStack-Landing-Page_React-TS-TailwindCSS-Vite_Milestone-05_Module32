import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0614]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          <Menu />
        </button>

        {/* Brand */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 via-pink-500 to-violet-600 font-bold text-white">
            DS
          </div>

          <span className="hidden bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent sm:block">
            Dev Stack
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0b0614] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
