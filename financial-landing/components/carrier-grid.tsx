"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const carriers = [
  { name: "Mutual of Omaha", products: "Term, Whole Life, Disability", tier: "Premier" },
  { name: "Transamerica", products: "IUL, Term, Annuities", tier: "Premier" },
  { name: "National Life Group", products: "IUL, Term, Living Benefits", tier: "Premier" },
  { name: "Nationwide", products: "IUL, Term, Annuities", tier: "Premier" },
  { name: "Pacific Life", products: "IUL, VUL, Annuities", tier: "Elite" },
  { name: "Protective", products: "Term, UL, Annuities", tier: "Elite" },
  { name: "North American", products: "IUL, FIA, MYGA", tier: "Elite" },
  { name: "Foresters", products: "Term, Whole Life, Final Expense", tier: "Premier" },
  { name: "American National", products: "Term, UL, Annuities", tier: "Select" },
  { name: "Americo", products: "Final Expense, Term, IUL", tier: "Select" },
  { name: "CUNA Mutual", products: "Term, AD&D, Disability", tier: "Select" },
  { name: "Global Atlantic", products: "FIA, MYGA, RILA", tier: "Select" },
];

const tierBadge: Record<string, string> = {
  Premier: "bg-gold/10 text-gold border-gold/20",
  Elite: "bg-accent/10 text-accent border-accent/20",
  Select: "bg-navy-600/50 text-navy-200 border-navy-600",
};

export default function CarrierGrid() {
  return (
    <section id="carriers" className="section-padding relative">
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
              Carrier Partners
            </span>
            <div className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Appointed with the{" "}
            <span className="text-gold">Industry&apos;s Best</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We negotiate competitive contracts with top-rated carriers so you
            can focus on what matters — serving your clients.
          </p>
        </motion.div>

        {/* Grid — clean, structured */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {carriers.map((carrier, i) => (
            <motion.div
              key={carrier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...ease, delay: i * 0.04 }}
              className="group pro-card p-5 hover:border-navy-600 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Shield className="h-4 w-4 text-gold/70 group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {carrier.name}
                  </h3>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${tierBadge[carrier.tier]}`}>
                  {carrier.tier}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-12">
                {carrier.products}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-muted mt-10"
        >
          30+ carrier partnerships available. Specific availability varies by state and licensing.
        </motion.p>
      </div>
    </section>
  );
}
