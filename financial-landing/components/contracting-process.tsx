"use client";

import { motion } from "framer-motion";
import { FileText, UserCheck, Shield, Rocket, ArrowRight } from "lucide-react";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Your Application",
    description: "Fill out our quick application form. We review your production history, persistency, and licensing.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Interview with Leadership",
    description: "A brief call with our team to discuss your goals, carrier preferences, and how we can best support you.",
  },
  {
    icon: Shield,
    step: "03",
    title: "Get Appointed",
    description: "We handle all the paperwork. Most carrier appointments are processed within 48-72 hours.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Writing Business",
    description: "Access the full LIFEWiZE platform, receive qualified leads, and start writing business immediately.",
  },
];

export default function ContractingProcess() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
                Get Started
              </span>
              <div className="gold-rule" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
              How{" "}
              <span className="text-gold">Contracting Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From application to first policy — most agents are fully
              onboarded within a week.
            </p>
          </motion.div>

          {/* Steps — vertical timeline feel */}
          <div className="space-y-5 mb-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...ease, delay: i * 0.1 }}
                className="group pro-card p-6 md:p-8 flex items-start gap-6 hover:border-navy-600 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-navy-700 flex items-center justify-center border border-navy-600 group-hover:bg-gold/10 group-hover:border-gold/20 transition-colors">
                  <span className="font-display text-lg font-bold text-gold/60 group-hover:text-gold transition-colors">
                    {s.step}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="h-4 w-4 text-gold/50" />
                    <h3 className="font-heading font-semibold text-foreground text-lg">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={ease}
            className="text-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 text-base font-semibold text-primary-foreground bg-gold hover:bg-gold-light px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 group"
            >
              Apply for Contracting
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-xs text-muted mt-4">
              No upfront fees · You own your book · Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
