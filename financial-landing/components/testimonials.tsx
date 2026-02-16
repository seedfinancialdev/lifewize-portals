"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const testimonials = [
  {
    quote:
      "Switching to LIFEWiZE Financial was the best decision I made for my career. The carrier access, the commission structure, and the tech platform — it's everything I needed in one place.",
    name: "Marcus Johnson",
    role: "Senior Producer · 5 years",
    initials: "MJ",
  },
  {
    quote:
      "I was with a captive agency for 3 years. Going independent through LIFEWiZE Financial gave me better contracts, better support, and I actually own my book now.",
    name: "Rachel Kim",
    role: "Independent Agent · 2 years",
    initials: "RK",
  },
  {
    quote:
      "The leads program alone pays for itself. I went from cold calling to having qualified prospects delivered to me weekly. My production doubled in 6 months.",
    name: "David Torres",
    role: "Contracted Agent · 8 months",
    initials: "DT",
  },
  {
    quote:
      "What sets LIFEWiZE Financial apart is the support. I can call Casey directly if I need help with case design. Try getting that at a big IMO.",
    name: "Sophia Martinez",
    role: "Agency Builder · 7 years",
    initials: "SM",
  },
  {
    quote:
      "Fast appointments, competitive comp, and a full CRM platform for $500/mo. I was paying more than that for just a CRM before. No-brainer.",
    name: "James Okafor",
    role: "Independent Agent · 3 years",
    initials: "JO",
  },
  {
    quote:
      "I'm building a team now and the recruiting overrides are legit. The platform makes onboarding new agents seamless.",
    name: "Alyssa Chen",
    role: "Agency Builder · 1 year",
    initials: "AC",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={ease}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
              Agent Testimonials
            </span>
            <div className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Trusted by{" "}
            <span className="text-gold">Top Producers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from agents who made the switch to LIFEWiZE Financial.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-lg bg-navy-700 border border-navy-600 hidden md:flex items-center justify-center transition-opacity hover:bg-navy-600 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-lg bg-navy-700 border border-navy-600 hidden md:flex items-center justify-center transition-opacity hover:bg-navy-600 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...ease, delay: i * 0.06 }}
                className="pro-card p-7 flex flex-col min-w-[300px] md:min-w-[360px] snap-start flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote className="h-6 w-6 text-gold/15 absolute -top-0.5 -left-0.5" />
                  <p className="text-foreground/90 leading-relaxed pl-3 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-navy-700">
                  <div className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center text-xs font-bold text-gold/70">
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
