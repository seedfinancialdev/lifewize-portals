"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Floating Glassmorphic Cards */}
      <div className="absolute top-1/3 right-[10%] hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="glass rounded-2xl p-4 w-56"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Monthly Revenue</span>
          </div>
          <p className="text-2xl font-bold text-foreground">$47,250</p>
          <p className="text-xs text-primary mt-1">↑ 32% this month</p>
        </motion.div>
      </div>

      <div className="absolute top-[55%] right-[5%] hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="glass rounded-2xl p-4 w-48"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
              <Shield className="h-4 w-4 text-gold" />
            </div>
            <span className="text-xs text-muted-foreground">Policies Closed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">128</p>
          <p className="text-xs text-gold mt-1">12 this week</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Now offering contracting through LIFEWIZE Financial
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            The Operating System for{" "}
            <span className="gradient-text">Elite Life Agents</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Everything you need to build, run, and scale your insurance business
            — training, CRM, marketing, AI tools, and contracting — all under
            one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all group"
            >
              Start Your Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-foreground glass px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              <Play className="h-4 w-4" />
              See Pricing
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Avatar Stack */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {["JW", "RA", "TM", "SK", "LP"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary-glow/60 flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="ml-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Trusted by <span className="text-foreground font-semibold">500+</span> agents
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-border" />

            {/* Stats */}
            <div className="flex gap-6">
              <div>
                <p className="text-lg font-bold text-foreground">$50M+</p>
                <p className="text-xs text-muted-foreground">Premium Written</p>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
