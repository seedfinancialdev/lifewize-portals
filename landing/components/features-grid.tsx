"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  BarChart3,
  Layers,
  Palette,
  Bot,
  Mail,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Resource Center",
    description:
      "Training library, proven scripts, Casey's content vault — everything to sharpen your edge.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Agent Community",
    description:
      "Real-time discussions, peer support, and a network of top-producing agents.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: BarChart3,
    title: "Full CRM",
    description:
      "HubSpot-grade pipeline management with email, Twilio, and automation built in.",
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: Layers,
    title: "Funnel Builder",
    description:
      "Lead capture pages and conversion-optimized templates that turn clicks into clients.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Palette,
    title: "Brand Center",
    description:
      "Canva-like design tools for compliant marketing materials, logos, and social content.",
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    icon: Bot,
    title: "AI Sales Trainer",
    description:
      "Practice calls with AI, get real-time coaching, and master objection handling.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    description:
      "Email campaigns, Zapier integrations, and social posting — all on autopilot.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Globe,
    title: "Website Builder",
    description:
      "Launch your custom agent website in minutes — mobile-optimized, SEO-ready.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2 text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
