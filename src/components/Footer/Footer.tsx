import BrandMark from "../Common/BrandMark";
import { LINK_GROUPS, SOCIALS } from "../Common/links";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border-subtle bg-white font-jakarta"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-6 md:pb-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <BrandMark />

            <p className="mt-3 text-xs/relaxed text-text-muted">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex flex-col items-center gap-1.5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border-subtle bg-[#f8fafc] p-2 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:shadow-brand-soft">
                    <img
                      src={social.icon}
                      alt=""
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </span>
                  <span className="text-[11px] font-medium text-text-faint transition-colors group-hover:text-primary">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs/[1.33] font-bold text-text-heading tracking-[0.6]">
                {group.title}
              </h3>

              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs/[1.33] text-text-muted transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-border-subtle to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs/[1.33] text-text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a
              href="#"
              className="transition-colors hover:text-primary text-text-faint text-xs/[1.33]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-primary text-text-faint text-xs/[1.33]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
