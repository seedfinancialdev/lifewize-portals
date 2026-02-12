"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

const testimonials = [
  {
    quote:
      "LIFEWIZE completely transformed how I run my business. The CRM alone replaced three tools I was paying for separately. My production is up 40% in six months.",
    name: "Marcus Johnson",
    role: "Senior Agent · 5 years",
    initials: "MJ",
    rating: 5,
  },
  {
    quote:
      "Getting contracted through LIFEWIZE Financial was a game-changer. The leads, the support, the platform — everything is under one roof. I wish I found this sooner.",
    name: "Rachel Kim",
    role: "Contracted Agent · 2 years",
    initials: "RK",
    rating: 5,
  },
  {
    quote:
      "The AI Sales Trainer helped me nail my objection handling. I went from closing 20% to closing over 35% of my calls. The community is incredibly supportive too.",
    name: "David Torres",
    role: "New Agent · 8 months",
    initials: "DT",
    rating: 5,
  },
];

export default function Testimonials() {
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
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.93, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: i * 0.12 }}
              className="glass rounded-2xl p-6 flex flex-col"
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-xs font-bold text-white">
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
    </section>
  );
}
