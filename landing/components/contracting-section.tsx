"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle2,
  Award,
  Clock,
  BadgeCheck,
  FileSearch,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/magnetic-button";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

const benefits = [
  "Top carrier access with competitive commissions",
  "Full platform access at $500/mo (vs $1,000/mo)",
  "Qualified leads provided to you",
  "Policy management included",
  "Dedicated support from leadership",
  "Training & mentorship from day one",
];

const requirements = [
  { icon: Clock, text: "12+ months in business" },
  { icon: Award, text: "$60K+ target premium (last 12 months)" },
  { icon: BadgeCheck, text: "80%+ persistency (90%+ preferred)" },
  { icon: Shield, text: "Clean background check" },
  { icon: FileSearch, text: "Quality review of last 3 policies" },
  { icon: UserCheck, text: "Interview with leadership team" },
];

export default function ContractingSection() {
  return (
    <section id="contracting" className="section-padding relative overflow-hidden">
      {/* Gold Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Exclusive Opportunity
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
              Get Contracted Through{" "}
              <Image
                src="/lifewize-financial-logo-dark.png"
                alt="LIFEWiZE Financial"
                width={320}
                height={60}
                className="inline-block h-[1.7em] w-auto -mb-[0.25em] ml-[3px]"
              />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We&apos;re not just a platform — we&apos;re a partner. Get contracted,
              get supported, and get paid with the tools and team behind you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={spring}
              className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 md:p-10"
            >
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                Why Contract With Us?
              </h3>
              <p className="text-muted-foreground mb-8">
                Vetted agents get exclusive access to our full ecosystem at a
                fraction of the cost.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Pricing Callout */}
              <div className="mt-8 p-5 rounded-2xl glass border border-gold/20">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-gold">$500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Save $500/mo vs Pro — available to contracted agents only
                </p>
              </div>

              <MagneticButton
                href="#"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full text-base font-semibold text-background bg-gradient-to-r from-gold to-gold-light px-8 py-4 rounded-full hover:shadow-xl hover:shadow-gold/25 transition-all group"
              >
                Apply for Contracting
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </motion.div>

            {/* Requirements Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: 0.1 }}
              className="rounded-3xl glass p-8 md:p-10"
            >
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                Who Qualifies?
              </h3>
              <p className="text-muted-foreground mb-8">
                We vet every agent to ensure quality. Only serious
                professionals who meet these criteria are eligible.
              </p>

              <div className="space-y-5">
                {requirements.map((req, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <req.icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-foreground">{req.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Casey Endorsement */}
              <div className="mt-8 flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  CD
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;We hand-pick every contracted agent. If you qualify,
                    you&apos;ll have the full weight of our team behind you.&rdquo;
                  </p>
                  <p className="text-xs text-gold mt-1 font-semibold">
                    — Casey, Founder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
