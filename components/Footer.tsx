import Image from "next/image";
import { NAV_LINKS, SOCIALS, SITE } from "@/lib/data";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden bg-espresso text-paper">
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full"
            >
              <Image
                src="/logo.jpeg"
                alt="Mudassar Online Earning logo"
                width={44}
                height={44}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-caramel/40"
              />
              <span className="font-display text-lg font-semibold">
                {SITE.brand}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-haze/70">
              {SITE.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-haze/60">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring rounded text-sm text-paper/80 transition-colors hover:text-caramel"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-haze/60">
              Connect
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-all hover:border-caramel hover:bg-caramel hover:text-espresso"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-sm text-haze/60 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built with care in {SITE.location}. Trade responsibly — never invest
            more than you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}
