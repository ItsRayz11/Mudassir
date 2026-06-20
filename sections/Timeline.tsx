"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { TIMELINE } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  // Track progress of the timeline column through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="section-py relative bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Journey"
          title="How a passion became a movement."
          intro="No overnight success — just consistency, honesty, and a community that kept growing."
        />

        <div ref={ref} className="relative mt-16 max-w-3xl">
          {/* Track */}
          <div className="absolute left-4 top-2 h-full w-px bg-walnut/15 sm:left-1/2" />
          {/* Progress fill that grows as you scroll */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-4 top-2 h-full w-px origin-top bg-gradient-to-b from-caramel to-walnut sm:left-1/2"
          />

          <ul className="flex flex-col gap-12">
            {TIMELINE.map((item, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                    right
                      ? "sm:ml-auto sm:pl-12 sm:text-left"
                      : "sm:pr-12 sm:text-right"
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-caramel ring-4 ring-cream left-2.5 sm:left-auto ${
                      right ? "sm:-left-2" : "sm:-right-2"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cream" />
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
