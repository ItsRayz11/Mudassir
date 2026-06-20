import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal & Champagne — luxe DARK palette.
        // Token roles (kept generic so components re-theme):
        //   cream    = page background (base dark)     sand   = elevated panel / secondary
        //   espresso = deepest sections (footer etc.)  walnut = borders / graphite gradients
        //   caramel  = champagne accent / CTA          ink    = body text (light)
        //   muted    = muted text (taupe)
        //   paper    = strong/heading text + light translucent surfaces
        //   haze     = body text on dark feature sections
        cream: "#08080A", // true-black base (page background)
        sand: "#161518", // elevated panel / secondary surface
        espresso: "#050506", // deepest sections
        walnut: "#454049", // graphite (borders, gradients, lines)
        caramel: "#ECC877", // bright gold (accent / CTA)
        ink: "#D2CCC2", // warm gray (body text)
        muted: "#988F84", // taupe (muted text)
        paper: "#F6F3EC", // warm white (headings / strong / light surfaces)
        haze: "#D2CCC2", // body text on dark feature sections
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 22px 60px -24px rgba(0, 0, 0, 0.7)",
        softer: "0 12px 34px -18px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
