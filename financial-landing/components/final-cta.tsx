"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

export default function FinalCta() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background — subtle, not flashy */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={ease}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="gold-rule mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-tight">
            Ready to Go{" "}
            <span className="text-gold">Independent?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Join 500+ agents who chose LIFEWiZE Financial for carrier access,
            competitive commissions, and a full technology platform.
          </p>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2.5 text-base font-semibold text-primary-foreground bg-gold hover:bg-gold-light px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 group"
          >
            Get Contracted Today
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="text-xs text-muted mt-5">
            No upfront fees · You own your book · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
