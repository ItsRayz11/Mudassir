"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT, SITE } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

const DIRECT = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phone,
    href: CONTACT.whatsappHref,
  },
  {
    icon: Send,
    label: "Telegram DM",
    value: CONTACT.telegramDm,
    href: CONTACT.telegramDmHref,
  },
  {
    icon: Phone,
    label: "Call",
    value: SITE.phone,
    href: `tel:+923436025080`,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend required — compose a prefilled email via the user's mail client.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\nReply to: ${form.email}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "focus-ring w-full rounded-2xl border border-walnut/15 bg-cream px-4 py-3.5 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-caramel";

  return (
    <section id="contact" className="section-py relative bg-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr]">
        {/* Left: heading + direct channels */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={CONTACT.heading}
            intro={CONTACT.intro}
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {DIRECT.map((d) => {
              const Icon = d.icon;
              return (
                <motion.li key={d.label} variants={fadeUp}>
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group focus-ring flex items-center gap-4 rounded-2xl border border-walnut/10 bg-sand/20 p-4 transition-colors hover:bg-sand/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-espresso text-paper transition-colors group-hover:bg-caramel group-hover:text-espresso">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted">
                        {d.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-paper">
                        {d.value}
                      </span>
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4 rounded-[2rem] border border-walnut/10 bg-gradient-to-b from-sand/20 to-cream p-6 shadow-softer sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-paper">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-paper">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-paper">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can I help?"
              className={`${inputClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="focus-ring group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-paper shadow-soft transition-transform hover:scale-[1.02]"
          >
            Send message
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <p className="text-center text-xs text-muted">
            This opens your email app with the message ready to send.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
