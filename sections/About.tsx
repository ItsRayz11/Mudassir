"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { ABOUT, SITE } from "@/lib/data";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="section-py relative bg-cream">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Portrait visual.
            To use a real photo: drop it in /public/portrait.jpg and replace this
            block with <Image src="/portrait.jpg" alt="Mudassar Ishtiaq" fill ... />. */}
        <ScrollReveal variants={scaleIn} className="order-1 lg:order-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute inset-0 rotate-3 rounded-xl2 bg-gradient-to-br from-sand to-caramel/40" />
            <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-xl2 border border-walnut/15 bg-gradient-to-br from-walnut to-espresso shadow-soft">
              <Image
                src="/portrait.jpeg"
                alt={`${SITE.name} — ${SITE.role}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
              {/* Readability gradient + name/location overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
              <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl text-paper">{SITE.name}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-haze/90">
                  <MapPin size={14} /> {SITE.location}
                </p>
              </div>
            </div>
            {/* Floating accent badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-3 rounded-2xl border border-walnut/20 bg-sand px-5 py-3 shadow-soft"
            >
              <p className="font-display text-xl font-semibold text-paper">
                30K+
              </p>
              <p className="text-xs text-muted">Crypto Family</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Narrative */}
        <div>
          <SectionHeading eyebrow="About Me" title={ABOUT.heading} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 flex flex-col gap-5"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </motion.p>
            ))}

            <motion.blockquote
              variants={fadeUp}
              className="mt-2 flex gap-4 rounded-2xl border-l-4 border-caramel bg-sand/30 p-6"
            >
              <Quote size={24} className="shrink-0 text-caramel" />
              <p className="font-display text-lg italic text-paper">
                &ldquo;Knowledge is the only asset that grows when you share it.
                That&apos;s why I teach.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
