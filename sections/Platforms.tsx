"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PLATFORMS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Platforms() {
  return (
    <section id="platforms" className="section-py relative bg-sand/25">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Platforms & Work"
          title="Where the community lives."
          intro="Five channels, one mission. Follow along wherever you spend your time — every door leads to the same family."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon;
            // First card spans two columns on large screens for a magazine feel.
            const featured = i === 0;
            return (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`group focus-ring relative flex flex-col justify-between overflow-hidden rounded-xl2 border border-walnut/10 bg-sand/40 p-7 shadow-softer transition-colors hover:bg-sand/60 ${
                  featured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand/40 transition-colors group-hover:bg-sand/70">
                    <Icon size={26} className={p.accent} />
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-caramel"
                  />
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-semibold text-paper">
                      {p.name}
                    </h3>
                    <span className="rounded-full bg-paper/10 px-3 py-1 text-xs font-semibold text-haze">
                      {p.audience}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-caramel">
                    {p.handle}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
