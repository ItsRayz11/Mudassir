"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  /** Render as a list-stagger container (children animate in sequence). */
  as?: "div" | "section" | "ul" | "li";
};

/**
 * Lightweight wrapper that reveals content once it scrolls into view.
 * Defaults to a gentle fade-up.
 */
export default function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
