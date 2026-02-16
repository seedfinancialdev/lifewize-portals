"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import CountUp from "@/components/ui/count-up";

const ease = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { ...ease, delay },
});

const stats = [
  { value: 30, suffix: "+", label: "Carrier Partners" },
  { value: 500, suffix: "+", label: "Contracted Agents" },
  { value: 50, prefix: "$", suffix: "M+", label: "Annual Premium" },
  { value: 98, suffix: "%", label: "Agent Retention" },
];

const credentials = [
  "No captive contracts — you own your book",
  "Street-level commissions from day one",
  "48-hour carrier appointments",
  "Full LIFEWiZE technology platform included",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — subtle gradient, not flashy orbs */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[120px]"
      />
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Centered hero — authoritative, not two-column SaaS */}
        <div className="max-w-4xl">
          {/* Credential badge — understated */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-10">
            <div className="gold-rule" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Independent Marketing Organization
            </span>
          </motion.div>

          {/* Headline — serif, authoritative */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-8"
          >
            Your Career.
            <br />
            Your Contracts.
            <br />
            <span className="text-gold">Our Commitment.</span>
          </motion.h1>

          {/* Subheadline — professional, direct */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            LIFEWiZE Financial partners with independent life agents who demand
            top-tier carrier access, competitive compensation, and a technology
            platform built to scale their business.
          </motion.p>

          {/* CTAs — professional, less rounded */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2.5 text-base font-semibold text-primary-foreground bg-gold hover:bg-gold-light px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group"
            >
              Apply for Contracting
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#carriers"
              className="inline-flex items-center justify-center gap-2.5 text-base font-semibold text-foreground border border-navy-600 hover:border-navy-500 bg-navy-800/50 px-8 py-4 rounded-lg transition-all duration-300 hover:bg-navy-800"
            >
              <Shield className="h-4 w-4 text-gold/70" />
              View Carrier Partners
            </a>
          </motion.div>

          {/* Credential checklist — trust builder */}
          <motion.div {...fadeUp(0.6)} className="mb-20">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar — solid, structured, professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.75 }}
        >
          <div className="divider-gold mb-0" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 pro-card overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-8 py-8 text-center ${
                  i < stats.length - 1 ? "border-r border-navy-700" : ""
                }`}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
