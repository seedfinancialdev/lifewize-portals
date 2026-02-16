"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Headphones,
  Layers,
  Zap,
  Users,
} from "lucide-react";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const reasons = [
  {
    icon: TrendingUp,
    title: "Competitive Commissions",
    description: "Street-level and above contracts from day one. No production tiers or hidden rollovers.",
  },
  {
    icon: Shield,
    title: "No Captive Contracts",
    description: "You own your book. No non-competes, no release hassles. True independence.",
  },
  {
    icon: Layers,
    title: "Full Tech Platform",
    description: "CRM, marketing, AI tools, training — the entire LIFEWiZE platform included at a reduced rate.",
  },
  {
    icon: Zap,
    title: "Fast Appointments",
    description: "We handle the paperwork. Most carrier appointments are processed within 48-72 hours.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Direct access to leadership. Case design help, underwriting support, and sales coaching.",
  },
  {
    icon: Users,
    title: "Qualified Leads",
    description: "Contracted agents receive qualified leads. No cold calling required — we feed your pipeline.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={ease}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
              Why LIFEWiZE Financial
            </span>
            <div className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Built for{" "}
            <span className="text-gold">Independent Agents</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We&apos;re not just another IMO. We&apos;re a technology-powered
            partner that gives you everything you need to grow.
          </p>
        </motion.div>

        {/* Grid — clean, structured */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...ease, delay: i * 0.06 }}
              className="group pro-card p-7 hover:border-navy-600 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-navy-700 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <reason.icon className="h-5 w-5 text-gold/70 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2.5">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
