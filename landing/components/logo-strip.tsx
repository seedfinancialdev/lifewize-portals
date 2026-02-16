"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

const logos = [
  { name: "Mutual of Omaha", abbr: "MoO" },
  { name: "Transamerica", abbr: "TA" },
  { name: "National Life Group", abbr: "NLG" },
  { name: "Nationwide", abbr: "NW" },
  { name: "Pacific Life", abbr: "PL" },
  { name: "Protective", abbr: "PR" },
  { name: "North American", abbr: "NA" },
  { name: "Foresters", abbr: "FO" },
];

export default function LogoStrip() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={spring}
          className="text-center"
        >
          <p className="text-xs font-semibold text-muted uppercase tracking-[0.2em] mb-8">
            Trusted by agents working with top carriers
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
              >
                <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
