"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

interface Tier {
  name: string;
  level: string;
  description: string;
  badge?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Independent Agent",
    level: "Street Level",
    description: "Competitive base contracts with full platform access.",
    features: [
      "Street-level commissions",
      "30+ carrier appointments",
      "Full LIFEWiZE platform ($500/mo)",
      "Case design support",
      "E-App & policy tracking",
      "Agent community access",
    ],
    cta: "Get Started",
  },
  {
    name: "Senior Producer",
    level: "Enhanced",
    description: "Higher commissions for proven producers.",
    badge: "Most Popular",
    features: [
      "Above-street commissions",
      "Priority carrier processing",
      "Full LIFEWiZE platform ($500/mo)",
      "Qualified leads provided",
      "Dedicated case manager",
      "Advanced underwriting support",
      "Monthly performance bonuses",
    ],
    cta: "Apply Now",
    highlighted: true,
  },
  {
    name: "Agency Builder",
    level: "Override",
    description: "Build your team with recruiting overrides.",
    badge: "For Leaders",
    features: [
      "Top-tier commissions",
      "Recruiting overrides",
      "Full LIFEWiZE platform ($500/mo)",
      "Qualified leads provided",
      "Team management dashboard",
      "White-label marketing tools",
      "Revenue share program",
      "Direct leadership access",
    ],
    cta: "Schedule a Call",
  },
];

export default function CommissionTiers() {
  return (
    <section id="commissions" className="section-padding relative">
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
              Commission Structure
            </span>
            <div className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Transparent{" "}
            <span className="text-gold">Compensation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No hidden fees, no production tiers to unlock. Competitive
            contracts from day one.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...ease, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col",
                tier.highlighted
                  ? "pro-card-elevated border-gold/20"
                  : "pro-card"
              )}
            >
              {/* Gold top border for highlighted */}
              {tier.highlighted && (
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Badge */}
                {tier.badge && (
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1.5">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 rounded bg-navy-700 border border-navy-600">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">{tier.level}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-navy-700 mb-6" />

                {/* Features */}
                <div className="flex-1 space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-gold/70" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#process"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 w-full text-sm font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 group",
                    tier.highlighted
                      ? "bg-gold hover:bg-gold-light text-primary-foreground hover:shadow-lg hover:shadow-gold/15"
                      : "border border-navy-600 text-foreground hover:border-navy-500 hover:bg-navy-700"
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
