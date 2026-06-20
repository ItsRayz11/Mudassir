"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { STATS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

const VALUES = [
  {
    icon: Heart,
    title: "Honesty first",
    body: "No fake calls, no hidden agendas. Just real education and real talk.",
  },
  {
    icon: Sparkles,
    title: "Everyone's welcome",
    body: "Total beginner or seasoned trader — there's a place for you here.",
  },
];

export default function Community() {
  return (
    <section className="section-py relative overflow-hidden bg-sand/25">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-gradient-to-br from-walnut to-espresso px-6 py-14 shadow-soft sm:px-12 sm:py-16"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-display-md text-balance text-paper"
          >
            Built on trust by a 30,000+ strong family.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-balance text-haze/80"
          >
            Thousands of members learn, trade, and earn together every single
            day. The proof is in the community.
          </motion.p>

          {/* Stats */}
          <motion.dl
            variants={staggerContainer}
            className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <dt className="font-display text-4xl font-semibold text-paper sm:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-sm text-haze/70">{s.label}</dd>
              </motion.div>
            ))}
          </motion.dl>

          {/* Values + CTA */}
          <div className="mt-12 grid gap-6 border-t border-paper/10 pt-10 md:grid-cols-[1fr_1fr_auto] md:items-center">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="flex gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper/10 text-caramel">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-paper">{v.title}</h3>
                    <p className="mt-0.5 text-sm text-haze/70">{v.body}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.a
              variants={fadeUp}
              href="https://t.me/mudaxxar"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3.5 text-sm font-semibold text-espresso transition-transform hover:scale-[1.03]"
            >
              Join on Telegram
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
