"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/lib/features-data";
import { resolveIcon } from "@/lib/icons";

const accentMap: Record<string, string> = {
  emerald: "from-emerald-500/20 to-emerald-500/5",
  cyan: "from-cyan-500/20 to-cyan-500/5",
  blue: "from-blue-500/20 to-blue-500/5",
  violet: "from-violet-500/20 to-violet-500/5",
  pink: "from-pink-500/20 to-pink-500/5",
  amber: "from-amber-500/20 to-amber-500/5",
  orange: "from-orange-500/20 to-orange-500/5",
  rose: "from-rose-500/20 to-rose-500/5",
  teal: "from-teal-500/20 to-teal-500/5",
  indigo: "from-indigo-500/20 to-indigo-500/5",
};

const glowMap: Record<string, string> = {
  emerald: "bg-emerald-500/10",
  cyan: "bg-cyan-500/10",
  blue: "bg-blue-500/10",
  violet: "bg-violet-500/10",
  pink: "bg-pink-500/10",
  amber: "bg-amber-500/10",
  orange: "bg-orange-500/10",
  rose: "bg-rose-500/10",
  teal: "bg-teal-500/10",
  indigo: "bg-indigo-500/10",
};

export default function FeaturePageHero({ feature }: { feature: Feature }) {
  const Icon = resolveIcon(feature.iconName);
  const accent = accentMap[feature.accentColor] ?? accentMap.emerald;
  const glow = glowMap[feature.accentColor] ?? glowMap.emerald;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className={`absolute top-1/3 right-0 w-[500px] h-[500px] ${glow} rounded-full blur-3xl`} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          {/* Icon + Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center`}
            >
              <Icon className="h-7 w-7 text-foreground" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Feature
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            {feature.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            {feature.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {feature.heroDescription}
          </p>

          {/* CTA */}
          <a
            href={feature.cta.href}
            className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all"
          >
            {feature.cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
