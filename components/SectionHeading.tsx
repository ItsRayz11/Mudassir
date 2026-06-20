"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: Props) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex max-w-2xl flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : "items-start"
      }`}
    >
      <motion.span
        variants={fadeUp}
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-haze" : "text-caramel"
        }`}
      >
        <span className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className={`text-display-md text-balance ${
          dark ? "text-paper" : "text-paper"
        }`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`text-balance text-base leading-relaxed sm:text-lg ${
            dark ? "text-haze/80" : "text-muted"
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
