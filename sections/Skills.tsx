"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SKILLS_MARQUEE } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

function Marquee() {
  // Duplicated track so the -50% translate loops seamlessly.
  const items = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];
  return (
    <div
      className="relative flex overflow-hidden border-y border-walnut/10 bg-espresso py-5"
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee gap-10 pr-10">
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-xl text-paper/90 sm:text-2xl"
          >
            {skill}
            <span className="text-caramel">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-cream">
      <Marquee />

      <div className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Education, content, and community — done the honest way."
          intro="I turn the noise of crypto into clear, usable knowledge. Here's how I help my family grow."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.li
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-xl2 border border-walnut/10 bg-gradient-to-b from-sand/60 to-sand/20 p-7 shadow-softer"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-espresso text-paper transition-colors group-hover:bg-caramel group-hover:text-espresso">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-paper">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-caramel/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
