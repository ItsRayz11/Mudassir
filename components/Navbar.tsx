"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`container-px mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled
            ? "my-3 rounded-full border border-walnut/10 bg-cream/80 py-3 shadow-softer backdrop-blur-md"
            : "py-6"
        }`}
      >
        <a
          href="#top"
          className="focus-ring flex items-center gap-2.5 rounded-full"
          aria-label={`${SITE.name} — home`}
        >
          <Image
            src="/logo.jpeg"
            alt="Mudassar Online Earning logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 rounded-full object-cover ring-1 ring-caramel/40"
          />
          <span className="hidden font-display text-base font-semibold text-paper sm:block">
            Mudassar
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-sand/40 hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Let&apos;s talk
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-paper md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="container-px mx-auto max-w-7xl md:hidden"
          >
            <ul className="mt-2 flex flex-col gap-1 rounded-3xl border border-walnut/10 bg-cream/95 p-4 shadow-soft backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-sand/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-1 block rounded-2xl bg-espresso px-4 py-3 text-center text-base font-semibold text-paper"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
