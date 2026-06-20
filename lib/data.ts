/**
 * Single source of truth for all site content.
 * Edit values here to update copy across the whole site.
 */

import type { LucideIcon } from "lucide-react";
import {
  Youtube,
  Send,
  Twitter,
  MessageCircle,
  Facebook,
  Mail,
  Phone,
  Globe,
  GraduationCap,
  Users,
  TrendingUp,
  BookOpen,
  Video,
  Sparkles,
} from "lucide-react";

export const SITE = {
  name: "Mudassar Ishtiaq",
  brand: "Mudassar Online Earning",
  role: "Content Creator & Web3 Educator",
  tagline:
    "Helping a 30,000+ strong crypto family learn Web3, trade smarter, and earn online — one honest lesson at a time.",
  location: "Pakistan",
  url: "https://mudassaronlineearning.vercel.app",
  email: "Lmmudassarishtiaq@gmail.com",
  phone: "0343 6025080",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#skills" },
  { label: "Platforms", href: "#platforms" },
  { label: "Exchanges", href: "#exchanges" },
  { label: "Journey", href: "#journey" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
] as const;

export const ABOUT = {
  heading: "From a small idea to a 30,000+ crypto family.",
  paragraphs: [
    "I'm Mudassar Ishtiaq, a content creator and Web3 educator from Pakistan. What started as a few simple videos explaining crypto in plain Urdu has grown into a community of more than 30,000 people who learn, trade, and earn online together.",
    "I make Web3 approachable. No hype, no get-rich-quick noise — just clear, practical lessons on blockchain, trading, airdrops, and building real income streams from the internet.",
    "My mission is simple: give everyday people the knowledge and tools to take part in the new digital economy with confidence — and to do it the honest way.",
  ],
} as const;

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "30,000+", label: "Crypto Family" },
  { value: "11,000+", label: "YouTube Subscribers" },
  { value: "18,000+", label: "Telegram Members" },
  { value: "5+", label: "Exchange Partnerships" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Web3 Education",
    description:
      "Beginner-friendly lessons on blockchain, wallets, DeFi, and how the crypto world really works.",
    icon: GraduationCap,
  },
  {
    title: "Content Creation",
    description:
      "Engaging videos and posts that turn complicated crypto topics into simple, watchable stories.",
    icon: Video,
  },
  {
    title: "Trading Guidance",
    description:
      "Practical strategies and risk-first thinking to help you trade with discipline, not emotion.",
    icon: TrendingUp,
  },
  {
    title: "Community Building",
    description:
      "An active, supportive family across Telegram, WhatsApp, and YouTube that grows together.",
    icon: Users,
  },
  {
    title: "Airdrops & Earning",
    description:
      "Step-by-step walkthroughs on legit online earning opportunities and how to capture them early.",
    icon: Sparkles,
  },
  {
    title: "Free Learning Resources",
    description:
      "Guides, tutorials, and live sessions — knowledge kept open and accessible for everyone.",
    icon: BookOpen,
  },
];

export const SKILLS_MARQUEE = [
  "Web3",
  "Blockchain",
  "Crypto Trading",
  "DeFi",
  "Airdrops",
  "Content Creation",
  "Community Growth",
  "Online Earning",
  "Education",
  "Risk Management",
  "Spot & Futures",
  "Storytelling",
];

export type Platform = {
  name: string;
  handle: string;
  audience: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: string; // tailwind text color class for the icon
};

export const PLATFORMS: Platform[] = [
  {
    name: "YouTube",
    handle: "@mudassaronlineearning",
    audience: "11,000+ subscribers",
    description:
      "Long-form tutorials, market breakdowns, and earning guides — the home base of the community.",
    href: "https://youtube.com/@mudassaronlineearning",
    icon: Youtube,
    accent: "text-[#FF0000]",
  },
  {
    name: "Telegram",
    handle: "@mudaxxar",
    audience: "18,000+ followers",
    description:
      "Daily signals, instant updates, and direct conversation with the crypto family.",
    href: "https://t.me/mudaxxar",
    icon: Send,
    accent: "text-[#229ED9]",
  },
  {
    name: "Twitter / X",
    handle: "@MudassarIshtiaq",
    audience: "1,900+ followers",
    description:
      "Quick takes, alpha, and real-time thoughts on the markets and Web3 trends.",
    href: "https://x.com/MudassarIshtiaq",
    icon: Twitter,
    accent: "text-paper",
  },
  {
    name: "WhatsApp Channel",
    handle: "Mudassar Online Earning",
    audience: "1,600+ followers",
    description:
      "Bite-sized broadcasts and announcements delivered straight to your phone.",
    href: "https://whatsapp.com/channel/0029VbBa2da7Noa5F8GTuQ3j",
    icon: MessageCircle,
    accent: "text-[#25D366]",
  },
  {
    name: "Facebook",
    handle: "Mudassar Online Earning",
    audience: "Growing community",
    description:
      "Highlights, reels, and community discussion for the wider audience.",
    href: "https://www.facebook.com/share/1Bu1xjdj8r/",
    icon: Facebook,
    accent: "text-[#1877F2]",
  },
];

export type Exchange = {
  name: string;
  referral: string;
  blurb: string;
  href: string;
};

export const EXCHANGES: Exchange[] = [
  {
    name: "Binance",
    referral: "MUDASSAR786",
    blurb: "The world's largest exchange — spot, futures, and earn in one place.",
    href: "https://www.binance.com/register?ref=MUDASSAR786",
  },
  {
    name: "OKX",
    referral: "MUDASSAR",
    blurb: "Powerful trading tools and a top-tier Web3 wallet.",
    href: "https://okx.ac/join/MUDASSAR",
  },
  {
    name: "Gate",
    referral: "Mudassar",
    blurb: "Huge selection of tokens and early-listing opportunities.",
    href: "https://www.gate.com/share/Mudassar",
  },
  {
    name: "Bitget",
    referral: "Mudassar",
    blurb: "Copy-trading and futures built for active traders.",
    href: "https://partner.bitget.site/bg/jcvyxael",
  },
  {
    name: "Bybit",
    referral: "142406",
    blurb: "Fast, reliable derivatives and a clean trading experience.",
    href: "https://partner.bybit.com/b/142406",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    period: "The Start",
    title: "First steps into Web3",
    description:
      "Began learning crypto hands-on — wallets, exchanges, and the fundamentals of blockchain — and decided to share everything I learned.",
  },
  {
    period: "Building",
    title: "Launched the YouTube channel",
    description:
      "Started Mudassar Online Earning to teach crypto in simple language, one honest tutorial at a time.",
  },
  {
    period: "Growing",
    title: "The community takes off",
    description:
      "Telegram and WhatsApp channels became a daily home for thousands of learners and traders supporting each other.",
  },
  {
    period: "Today",
    title: "A 30,000+ crypto family",
    description:
      "A multi-platform community trusting clear education over hype — and earning, learning, and growing together every day.",
  },
];

export type Proof = {
  /** Path under /public, e.g. "/proofs/earning-1.jpg" */
  src: string;
  /** Accessible description of the screenshot */
  alt: string;
  /** Optional short caption shown on the tile */
  caption?: string;
};

/**
 * Members' earning poll / result screenshots.
 * Drop image files into /public/proofs/ and list them here.
 * While this array is empty the section shows tasteful placeholders.
 */
export const PROOFS: Proof[] = [
  {
    src: "/proofs/catizen.jpeg",
    alt: "Telegram poll of how much members earned from Catizen, with hundreds of votes",
    caption: "Catizen — community earnings poll",
  },
  {
    src: "/proofs/dogs.jpeg",
    alt: "Telegram poll showing member earnings from the DOGS airdrop, 400+ votes in the top bracket",
    caption: "DOGS airdrop — member earnings",
  },
  {
    src: "/proofs/x-empire.jpeg",
    alt: "Telegram poll of member earnings from the X token airdrop",
    caption: "X airdrop — member earnings",
  },
  {
    src: "/proofs/memefi.jpeg",
    alt: "Telegram poll of member earnings from the MemeFi airdrop",
    caption: "MemeFi airdrop — member earnings",
  },
];

export const PROOF_INTRO = {
  heading: "Real members. Real results.",
  intro:
    "Screenshots shared by the community — proof that honest education and consistency pay off. Results vary; always trade responsibly.",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const CONTACT = {
  heading: "Let's build your Web3 journey together.",
  intro:
    "Have a question, a collaboration idea, or just getting started in crypto? Reach out — I read every message.",
  email: SITE.email,
  phone: SITE.phone,
  telegramDm: "@mudassar_ishtiaq",
  telegramDmHref: "https://t.me/mudassar_ishtiaq",
  whatsappHref: "https://wa.me/923436025080",
};

export const SOCIALS: SocialLink[] = [
  { label: "YouTube", href: "https://youtube.com/@mudassaronlineearning", icon: Youtube },
  { label: "Telegram", href: "https://t.me/mudaxxar", icon: Send },
  { label: "Twitter / X", href: "https://x.com/MudassarIshtiaq", icon: Twitter },
  { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBa2da7Noa5F8GTuQ3j", icon: MessageCircle },
  { label: "Facebook", href: "https://www.facebook.com/share/1Bu1xjdj8r/", icon: Facebook },
  { label: "Email", href: "mailto:Lmmudassarishtiaq@gmail.com", icon: Mail },
];

// Re-export commonly used icons so sections don't each import lucide directly.
export const ICONS = { Mail, Phone, Globe, Send, MessageCircle };
