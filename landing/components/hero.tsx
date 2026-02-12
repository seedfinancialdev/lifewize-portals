"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, TrendingUp, Shield, Users, Zap, BarChart3 } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import CountUp from "@/components/ui/count-up";

const headlineWords = ["The", "Operating", "System", "for"];
const gradientWords = ["Elite", "Life", "Agents"];

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };
const blurUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { ...spring, delay },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <motion.div
        style={{ y: orbY1 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: orbY2 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />

      {/* Main Content — Two Column */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Copy */}
          <div>
            {/* Badge */}
            <motion.div
              {...blurUp(0.1)}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Now offering contracting through LIFEWIZE Financial
              </span>
            </motion.div>

            {/* Headline — Word by Word */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ ...spring, delay: 0.2 + i * 0.08 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              {gradientWords.map((word, i) => (
                <motion.span
                  key={`g-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ ...spring, delay: 0.2 + (headlineWords.length + i) * 0.08 }}
                  className="inline-block mr-[0.3em] gradient-text"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              {...blurUp(0.35)}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Everything you need to build, run, and scale your insurance business
              — training, CRM, marketing, AI tools, and contracting — all under
              one roof.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...blurUp(0.5)}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <MagneticButton
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all group"
              >
                Start Your Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-foreground glass px-8 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                <Play className="h-4 w-4" />
                See Pricing
              </MagneticButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.7 }}
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
                    Trusted by <CountUp target={500} suffix="+" className="text-foreground font-semibold" /> agents
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-border" />

              {/* Stats */}
              <div className="flex gap-6">
                <div>
                  <p className="text-lg font-bold text-foreground">
                    <CountUp target={50} prefix="$" suffix="M+" />
                  </p>
                  <p className="text-xs text-muted-foreground">Premium Written</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">
                    <CountUp target={98} suffix="%" />
                  </p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ ...spring, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Glow behind the card stack */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl scale-110" />

            {/* Main Dashboard Card */}
            <div className="relative glass-strong rounded-3xl p-6 shadow-2xl shadow-black/30">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-muted-foreground">Agent Dashboard</p>
                  <p className="text-lg font-bold text-foreground">Welcome back, Casey</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-gold/40" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[10px] text-muted-foreground">Revenue</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">$47,250</p>
                  <p className="text-[10px] text-primary">↑ 32%</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Shield className="h-3.5 w-3.5 text-gold" />
                    <span className="text-[10px] text-muted-foreground">Policies</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">128</p>
                  <p className="text-[10px] text-gold">12 this week</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users className="h-3.5 w-3.5 text-blue-400" />
                    <span className="text-[10px] text-muted-foreground">Leads</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">84</p>
                  <p className="text-[10px] text-blue-400">24 hot</p>
                </div>
              </div>

              {/* Mini Chart Placeholder */}
              <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Monthly Performance</span>
                  <span className="text-[10px] text-primary font-semibold">+27% ↑</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[35, 45, 30, 55, 50, 65, 60, 75, 70, 85, 80, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2.5">
                <p className="text-xs text-muted-foreground mb-2">Recent Activity</p>
                {[
                  { icon: Zap, text: "New lead: Sarah M. — IUL Inquiry", time: "2m ago", color: "text-gold" },
                  { icon: Shield, text: "Policy issued: $250K Term — John D.", time: "1h ago", color: "text-primary" },
                  { icon: BarChart3, text: "Commission deposited: $3,200", time: "3h ago", color: "text-emerald-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.15 }}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-white/5 p-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground truncate">{item.text}</p>
                    </div>
                    <span className="text-[10px] text-muted flex-shrink-0">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
