"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features } from "@/lib/features-data";
import { resolveIcon } from "@/lib/icons";

const accentTextMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
  pink: "text-pink-400",
  amber: "text-amber-400",
  orange: "text-orange-400",
  rose: "text-rose-400",
  teal: "text-teal-400",
  indigo: "text-indigo-400",
};

const accentBgMap: Record<string, string> = {
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesOverviewGrid() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Platform Features
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5">
            Your Complete{" "}
            <span className="gradient-text">Agent Toolkit</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to build, run, and scale your insurance
            business — all under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {features.map((f) => {
            const Icon = resolveIcon(f.iconName);
            const accent = accentBgMap[f.accentColor] ?? accentBgMap.emerald;
            const textColor =
              accentTextMap[f.accentColor] ?? accentTextMap.emerald;

            return (
              <motion.div key={f.slug} variants={item}>
                <Link
                  href={`/features/${f.slug}`}
                  className="group block glass rounded-2xl p-6 h-full hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h2 className="font-semibold text-foreground text-lg mb-2">
                    {f.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {f.description}
                  </p>

                  {/* Link hint */}
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${textColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
