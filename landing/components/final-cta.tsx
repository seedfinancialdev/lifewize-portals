"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

export default function FinalCta() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-gold/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text">Scale?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join 500+ life agents who are building, running, and growing their
            businesses with LIFEWIZE. Start your free trial today.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all group"
          >
            Start Your Free Trial
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-muted mt-4">
            No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
