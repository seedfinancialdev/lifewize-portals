"use client";

import { motion } from "framer-motion";
import { Check, MonitorSmartphone } from "lucide-react";
import type { FeatureSection } from "@/lib/features-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ScreenshotPlaceholder({
  title,
  index,
}: {
  title: string;
  index: number;
}) {
  const barWidths = [
    ["w-3/4", "w-1/2", "w-5/6", "w-2/3"],
    ["w-1/2", "w-4/5", "w-3/5", "w-1/3"],
    ["w-2/3", "w-1/3", "w-3/4", "w-1/2"],
    ["w-5/6", "w-2/5", "w-1/2", "w-3/4"],
    ["w-1/3", "w-3/4", "w-2/5", "w-5/6"],
  ];
  const bars = barWidths[index % barWidths.length];

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden shadow-xl shadow-black/20">
      {/* Mini browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-white/[0.01]">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="flex-1 mx-3">
          <div className="bg-white/[0.04] rounded h-4 max-w-[180px] mx-auto" />
        </div>
      </div>

      {/* Simulated UI */}
      <div className="aspect-[16/10] p-5 space-y-4">
        {/* Top nav mockup */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/15" />
          <div className="h-3 rounded bg-white/[0.08] w-24" />
          <div className="flex-1" />
          <div className="h-3 rounded bg-white/[0.05] w-16" />
          <div className="h-3 rounded bg-white/[0.05] w-16" />
        </div>

        {/* Title area */}
        <div className="space-y-2 mb-4">
          <div className="h-4 rounded bg-white/[0.08] w-48" />
          <div className="h-3 rounded bg-white/[0.04] w-72" />
        </div>

        {/* Content rows simulating a feature UI */}
        <div className="space-y-3">
          {bars.map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`h-8 rounded-lg ${i === 0 ? "bg-primary/10" : "bg-white/[0.03]"} ${w}`} />
              <div className="flex-1 space-y-1.5">
                <div className={`h-2.5 rounded bg-white/[0.06] ${i % 2 === 0 ? "w-3/4" : "w-1/2"}`} />
                <div className="h-2 rounded bg-white/[0.03] w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom action bar */}
        <div className="flex items-center gap-2 pt-2 mt-auto">
          <div className="h-7 rounded-full bg-primary/15 w-24" />
          <div className="h-7 rounded-lg bg-white/[0.04] w-20" />
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.01] flex items-center gap-2">
        <MonitorSmartphone className="h-3.5 w-3.5 text-muted-foreground" />
        <p className="text-[11px] text-muted-foreground truncate">
          {title} — screenshot placeholder
        </p>
      </div>
    </div>
  );
}

export default function FeatureSections({
  sections,
  accentColor,
}: {
  sections: FeatureSection[];
  accentColor: string;
}) {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {sections.map((section, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                {/* Screenshot Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <ScreenshotPlaceholder title={section.title} index={idx} />
                </motion.div>

                {/* Section Content */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-muted-foreground mb-5">
                      {section.description}
                    </p>
                  )}

                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {section.features.map((feat) => (
                      <motion.div
                        key={feat.title}
                        variants={item}
                        className="glass rounded-xl p-4 hover:bg-white/[0.06] transition-colors"
                      >
                        <div className="flex gap-3">
                          <div className="mt-0.5 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <Check className="h-3.5 w-3.5 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-0.5 text-sm">
                              {feat.title}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
