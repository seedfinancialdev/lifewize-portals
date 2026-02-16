"use client";

import { motion } from "framer-motion";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const logos = [
  "Mutual of Omaha",
  "Transamerica",
  "National Life Group",
  "Nationwide",
  "Pacific Life",
  "Protective",
  "North American",
  "Foresters",
  "American National",
  "Americo",
];

export default function LogoStrip() {
  return (
    <section className="py-14 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={ease}
          className="text-center"
        >
          <p className="text-[11px] font-semibold text-muted uppercase tracking-[0.25em] mb-8">
            Carrier partners available through LIFEWiZE Financial
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 max-w-4xl mx-auto">
            {logos.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="text-xs font-medium tracking-wide text-navy-400 px-4 py-2 rounded border border-navy-800 bg-navy-900/50 hover:text-navy-200 hover:border-navy-700 transition-colors duration-300"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
