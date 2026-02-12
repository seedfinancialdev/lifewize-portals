"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { FeatureSection } from "@/lib/features-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeatureSections({
  sections,
}: {
  sections: FeatureSection[];
}) {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {sections.map((section, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Section Header (left on even, right on odd) */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-muted-foreground mb-6">
                      {section.description}
                    </p>
                  )}
                </div>

                {/* Feature Cards */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`space-y-4 ${isReversed ? "lg:order-1" : ""}`}
                >
                  {section.features.map((feat) => (
                    <motion.div
                      key={feat.title}
                      variants={item}
                      className="glass rounded-xl p-5 hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="flex gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {feat.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
