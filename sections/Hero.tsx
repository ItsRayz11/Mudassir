"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Play, Users, BadgeCheck } from "lucide-react";
import Hero3D from "@/components/hero/Hero3D";
import { SITE, STATS } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-28"
    >
      {/* Ambient warm glow behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[36rem] w-[36rem] rounded-full bg-caramel/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sand/40 blur-[120px]"
      />

      <div className="container-px mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-walnut/25 bg-sand/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-caramel backdrop-blur"
          >
            <Users size={14} />
            {SITE.role}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="mt-6 text-display-xl text-paper"
          >
            {["Mudassar", "Ishtiaq"].map((word, i) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                }}
                className="block"
              >
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-caramel to-paper bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://youtube.com/@mudassaronlineearning"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-2.5 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-paper shadow-soft transition-transform hover:scale-[1.03]"
            >
              <Play size={18} className="transition-transform group-hover:scale-110" />
              Watch on YouTube
            </a>
            <a
              href="#platforms"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full border border-walnut/25 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-sand/40"
            >
              Join the family
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-tight text-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Logo centerpiece with subtle 3D ambient accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative z-0 order-1 mx-auto flex w-full max-w-[16rem] items-center justify-center sm:max-w-sm lg:order-2 lg:max-w-md"
        >
          {/* Ambient floating 3D orbs (lazy, client-only) */}
          <div className="absolute inset-0 -m-12 sm:-m-16">
            <Hero3D />
          </div>

          {/* Champagne glow behind the logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 rounded-full bg-caramel/25 blur-[90px]"
          />

          {/* Brand logo */}
          <div className="relative aspect-square w-full">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/logo.jpeg"
                alt="Mudassar Online Earning — Content Creator & Web3 Educator"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 440px"
                className="rounded-full object-cover shadow-soft ring-1 ring-caramel/40"
              />
            </motion.div>

            {/* Floating social-proof badge */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 flex items-center gap-2.5 rounded-2xl border border-walnut/40 bg-sand/80 px-4 py-2.5 shadow-soft backdrop-blur sm:-bottom-4 sm:-left-4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-caramel/15 text-caramel">
                <BadgeCheck size={16} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-semibold text-paper">
                  30,000+
                </span>
                <span className="block text-[11px] text-muted">Crypto Family</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted sm:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
