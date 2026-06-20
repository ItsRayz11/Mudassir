"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Copy, Check } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { EXCHANGES } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async (e: React.MouseEvent) => {
    // Stop the click from triggering the parent card's navigation.
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable (e.g. insecure context) — fail silently.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy referral code ${code}`}
      className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-paper/10 px-2.5 py-1 font-mono text-xs font-semibold text-caramel transition-colors hover:bg-paper/20"
    >
      {code}
      {copied ? (
        <Check size={13} className="text-green-700" />
      ) : (
        <Copy size={13} className="opacity-60" />
      )}
    </button>
  );
}

export default function Exchanges() {
  return (
    <section id="exchanges" className="section-py relative overflow-hidden bg-espresso">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-caramel/20 blur-[120px]"
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow="Start Trading"
          title="Trusted exchanges, real benefits."
          intro="These are the platforms I personally use and recommend. Sign up through my links to support the channel — and grab the sign-up perks for yourself."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EXCHANGES.map((ex) => (
            <motion.li key={ex.name} variants={fadeUp}>
              <a
                href={ex.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus-ring flex h-full flex-col justify-between gap-6 rounded-xl2 border border-paper/10 bg-paper/[0.04] p-6 transition-all hover:border-caramel/50 hover:bg-paper/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold text-paper">
                    {ex.name}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-haze/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-caramel"
                  />
                </div>
                <p className="text-sm leading-relaxed text-haze/70">{ex.blurb}</p>
                <div className="flex items-center justify-between border-t border-paper/10 pt-4">
                  <span className="text-xs uppercase tracking-wider text-haze/50">
                    Referral
                  </span>
                  <CopyCode code={ex.referral} />
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex items-center gap-2 text-xs text-haze/50"
        >
          <ShieldCheck size={15} className="shrink-0 text-caramel" />
          Crypto trading carries risk. Always do your own research and never
          invest more than you can afford to lose.
        </motion.p>
      </div>
    </section>
  );
}
