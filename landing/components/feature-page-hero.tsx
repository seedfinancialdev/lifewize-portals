"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
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

const borderMap: Record<string, string> = {
  emerald: "border-emerald-500/20",
  cyan: "border-cyan-500/20",
  blue: "border-blue-500/20",
  violet: "border-violet-500/20",
  pink: "border-pink-500/20",
  amber: "border-amber-500/20",
  orange: "border-orange-500/20",
  rose: "border-rose-500/20",
  teal: "border-teal-500/20",
  indigo: "border-indigo-500/20",
};

const dotMap: Record<string, string> = {
  emerald: "bg-emerald-400",
  cyan: "bg-cyan-400",
  blue: "bg-blue-400",
  violet: "bg-violet-400",
  pink: "bg-pink-400",
  amber: "bg-amber-400",
  orange: "bg-orange-400",
  rose: "bg-rose-400",
  teal: "bg-teal-400",
  indigo: "bg-indigo-400",
};

export default function FeaturePageHero({ feature }: { feature: Feature }) {
  const Icon = resolveIcon(feature.iconName);
  const accent = accentMap[feature.accentColor] ?? accentMap.emerald;
  const glow = glowMap[feature.accentColor] ?? glowMap.emerald;
  const border = borderMap[feature.accentColor] ?? borderMap.emerald;
  const dot = dotMap[feature.accentColor] ?? dotMap.emerald;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className={`absolute top-1/3 right-0 w-[500px] h-[500px] ${glow} rounded-full blur-3xl`} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
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

            <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              {feature.title}
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              {feature.tagline}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {feature.heroDescription}
            </p>

            <a
              href={feature.cta.href}
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              {feature.cta.text}
            </a>
          </motion.div>

          {/* Right — Screenshot / Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className={`relative rounded-2xl border ${border} bg-white/[0.03] overflow-hidden shadow-2xl shadow-black/30`}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/[0.05] rounded-md h-6 max-w-[260px] mx-auto" />
                </div>
              </div>

              {/* Placeholder content area */}
              <div className="aspect-[4/3] relative bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col items-center justify-center p-8">
                {/* Animated accent glow behind icon */}
                <div className={`absolute w-32 h-32 ${glow} rounded-full blur-2xl`} />

                {/* Icon */}
                <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5`}>
                  <Icon className="h-10 w-10 text-foreground" />
                </div>

                {/* Placeholder text */}
                <p className="text-sm text-muted-foreground mb-4 text-center max-w-[200px]">
                  Screenshot or video of {feature.title}
                </p>

                {/* Play button hint */}
                <div className={`w-12 h-12 rounded-full border-2 ${border} flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity cursor-pointer`}>
                  <Play className="h-5 w-5 text-foreground ml-0.5" />
                </div>

                {/* Decorative UI lines to simulate a dashboard */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex gap-2">
                    <div className={`h-2 rounded-full ${dot} opacity-40 w-1/4`} />
                    <div className="h-2 rounded-full bg-white/[0.06] flex-1" />
                  </div>
                  <div className="flex gap-2">
                    <div className={`h-2 rounded-full ${dot} opacity-25 w-1/3`} />
                    <div className="h-2 rounded-full bg-white/[0.04] flex-1" />
                  </div>
                  <div className="flex gap-2">
                    <div className={`h-2 rounded-full ${dot} opacity-15 w-1/5`} />
                    <div className="h-2 rounded-full bg-white/[0.03] flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
