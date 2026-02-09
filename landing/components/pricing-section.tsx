"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  features: string[];
  cta: string;
  ctaStyle: "primary" | "gold" | "outline";
  note?: string;
  valueCallout?: string;
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Foundations",
    price: "$250",
    period: "/month",
    description: "Everything you need to get started and build momentum.",
    features: [
      "Resource Center",
      "Agent Community",
      "CRM Lite (email integration)",
      "Scheduler",
      "Brand Center",
      "Cross Post (social media)",
      "Funnel Builder (Demo)",
      "AI Credits (Limited)",
      "Buy Full-Priced Leads",
    ],
    cta: "Start Free Trial",
    ctaStyle: "outline",
    note: "Grandfathered pricing for existing users",
  },
  {
    name: "Pro",
    price: "$1,000",
    period: "/month",
    description: "The complete growth engine for serious producers.",
    badge: "Most Popular",
    badgeColor: "bg-primary text-primary-foreground",
    features: [
      "Everything in Foundations, plus:",
      "Full Training Library ($97/mo value)",
      "Full CRM with Twilio ($500/mo value)",
      "Full Funnel Builder ($150/mo value)",
      "Advanced Tools ($99/mo value)",
      "Automations via Zapier ($100/mo value)",
      "Marketing Campaigns ($100/mo value)",
      "Website Builder ($75/mo value)",
      "Social Media Management ($30/mo value)",
      "Buy Full-Priced Leads",
    ],
    cta: "Start Free Trial",
    ctaStyle: "primary",
    valueCallout: "Over $1,200/mo in value",
    highlighted: true,
  },
  {
    name: "Pro (Contract)",
    price: "$500",
    period: "/month",
    description: "Elite agents. Full support. Lower cost.",
    badge: "Best Value",
    badgeColor: "bg-gold text-background",
    features: [
      "Everything in Pro, plus:",
      "Qualified Leads Provided ($100 value)",
      "Policy Management ($100/mo value)",
      "Top Carrier Access",
      "Competitive Commissions",
      "Dedicated Leadership Support",
    ],
    cta: "Apply Now",
    ctaStyle: "gold",
    valueCallout: "Save $500/mo vs Pro",
    note: "Requires contracting through LIFEWIZE Financial",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Simple Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            One Platform.{" "}
            <span className="gradient-text">Three Tiers.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the plan that fits where you are today. Upgrade anytime as
            you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 flex flex-col",
                tier.highlighted
                  ? "glass-strong border-primary/30 shadow-xl shadow-primary/10 scale-[1.02]"
                  : "glass"
              )}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold",
                    tier.badgeColor
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    {tier.ctaStyle === "gold" ? (
                      <Crown className="h-3 w-3" />
                    ) : (
                      <Sparkles className="h-3 w-3" />
                    )}
                    {tier.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                {tier.valueCallout && (
                  <p className="text-xs text-primary font-semibold mt-2">
                    {tier.valueCallout}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="flex-1 space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "h-4 w-4 flex-shrink-0 mt-0.5",
                        tier.ctaStyle === "gold" ? "text-gold" : "text-primary"
                      )}
                    />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={tier.ctaStyle === "gold" ? "#contracting" : "#"}
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full text-base font-semibold px-6 py-3.5 rounded-full transition-all group",
                  tier.ctaStyle === "primary" &&
                    "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-lg hover:shadow-primary/25",
                  tier.ctaStyle === "gold" &&
                    "bg-gradient-to-r from-gold to-gold-light text-background hover:shadow-lg hover:shadow-gold/25",
                  tier.ctaStyle === "outline" &&
                    "border border-border text-foreground hover:bg-white/5"
                )}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Note */}
              {tier.note && (
                <p className="text-xs text-muted text-center mt-3">
                  {tier.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
