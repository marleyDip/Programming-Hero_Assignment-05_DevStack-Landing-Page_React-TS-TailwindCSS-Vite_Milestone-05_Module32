import { navbarLinks } from "../Common/links";

export default function NavLinks() {
  return (
    <>
      {navbarLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm text-gray-300 transition hover:text-white"
        >
          {link.name}
        </a>
      ))}
    </>
  );
}
