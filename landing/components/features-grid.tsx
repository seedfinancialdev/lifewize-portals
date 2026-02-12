"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { features } from "@/lib/features-data";
import { resolveIcon } from "@/lib/icons";
import TiltCard from "@/components/ui/tilt-card";

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

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { ...spring },
  },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Everything You Need
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            Your All-in-One{" "}
            <span className="gradient-text">Agent Toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stop juggling 10 different tools. LIFEWIZE puts everything under one
            roof so you can focus on what matters — closing deals and growing
            your book.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {features.map((feature) => {
            const Icon = resolveIcon(feature.iconName);
            const accent =
              accentBgMap[feature.accentColor] ?? accentBgMap.emerald;

            return (
              <motion.div key={feature.slug} variants={item}>
                <TiltCard className="h-full">
                <Link
                  href={`/features/${feature.slug}`}
                  className="group block glass rounded-2xl p-6 h-full hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {feature.description}
                  </p>

                  {/* Link hint */}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
