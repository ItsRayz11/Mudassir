"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ImageIcon, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PROOFS, PROOF_INTRO } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Proof() {
  const [active, setActive] = useState<number | null>(null);
  const hasProofs = PROOFS.length > 0;

  const close = useCallback(() => setActive(null), []);

  // Esc closes the lightbox; lock scroll while it's open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <section id="proof" className="section-py relative bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proof & Results"
          title={PROOF_INTRO.heading}
          intro={PROOF_INTRO.intro}
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {hasProofs
            ? PROOFS.map((p, i) => (
                <motion.li key={p.src} variants={fadeUp}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group focus-ring block w-full overflow-hidden rounded-2xl border border-walnut/10 bg-sand/30 shadow-softer"
                    aria-label={`View screenshot: ${p.alt}`}
                  >
                    <span className="relative block aspect-[3/4] w-full">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </span>
                    {p.caption && (
                      <span className="block px-3 py-2.5 text-left text-xs font-medium text-muted">
                        {p.caption}
                      </span>
                    )}
                  </button>
                </motion.li>
              ))
            : // Placeholder tiles until real screenshots are added to /public/proofs.
              Array.from({ length: 8 }).map((_, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-walnut/20 bg-sand/20 text-center text-muted/70"
                >
                  <ImageIcon size={22} className="opacity-50" />
                  <span className="px-3 text-[11px] leading-tight">
                    Screenshot {i + 1}
                  </span>
                </motion.li>
              ))}
        </motion.ul>

        {!hasProofs && (
          <p className="mt-6 text-center text-xs text-muted/70">
            Proof screenshots will appear here once added.
          </p>
        )}

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-muted">
          <ShieldCheck size={15} className="shrink-0 text-caramel" />
          Results are not guaranteed and vary by individual. Always do your own
          research and never invest more than you can afford to lose.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && PROOFS[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={PROOFS[active].alt}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="focus-ring absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-auto max-w-3xl"
            >
              <Image
                src={PROOFS[active].src}
                alt={PROOFS[active].alt}
                width={900}
                height={1200}
                className="h-auto max-h-[85vh] w-auto rounded-2xl object-contain shadow-soft"
              />
              {PROOFS[active].caption && (
                <p className="mt-3 text-center text-sm text-haze/90">
                  {PROOFS[active].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
