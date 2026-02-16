"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

const testimonials = [
  {
    quote:
      "LIFEWIZE completely transformed how I run my business. The CRM alone replaced three tools I was paying for separately. My production is up 40% in six months.",
    name: "Marcus Johnson",
    role: "Senior Agent · 5 years",
    initials: "MJ",
    gradient: "from-primary to-primary-glow",
    rating: 5,
  },
  {
    quote:
      "Getting contracted through LIFEWIZE Financial was a game-changer. The leads, the support, the platform — everything is under one roof. I wish I found this sooner.",
    name: "Rachel Kim",
    role: "Contracted Agent · 2 years",
    initials: "RK",
    gradient: "from-gold to-gold-light",
    rating: 5,
  },
  {
    quote:
      "The AI Sales Trainer helped me nail my objection handling. I went from closing 20% to closing over 35% of my calls. The community is incredibly supportive too.",
    name: "David Torres",
    role: "New Agent · 8 months",
    initials: "DT",
    gradient: "from-emerald-500 to-teal-400",
    rating: 5,
  },
  {
    quote:
      "The funnel builder and marketing automations have saved me 10+ hours a week. I'm spending more time selling and less time on admin. Absolute no-brainer.",
    name: "Sophia Martinez",
    role: "Agency Owner · 7 years",
    initials: "SM",
    gradient: "from-violet-500 to-purple-400",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but the training content alone is worth the subscription. Casey's vault gave me the confidence to go independent.",
    name: "James Okafor",
    role: "Independent Agent · 3 years",
    initials: "JO",
    gradient: "from-rose-500 to-pink-400",
    rating: 5,
  },
  {
    quote:
      "The community keeps me accountable. Between the weekly calls and the agent forum, I never feel like I'm building alone anymore.",
    name: "Alyssa Chen",
    role: "Contracted Agent · 1 year",
    initials: "AC",
    gradient: "from-amber-500 to-orange-400",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Real Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            What Agents Are{" "}
            <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from agents who are building, running, and scaling with LIFEWiZE.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full glass-strong border border-white/10 hidden md:flex items-center justify-center transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full glass-strong border border-white/10 hidden md:flex items-center justify-center transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.93, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...spring, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex flex-col min-w-[300px] md:min-w-[360px] snap-start flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-foreground leading-relaxed pl-4 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
