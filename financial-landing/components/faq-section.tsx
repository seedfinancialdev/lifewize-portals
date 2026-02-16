"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const faqs = [
  {
    q: "What is an IMO and why should I work with one?",
    a: "An Independent Marketing Organization (IMO) negotiates carrier contracts on behalf of agents. Working with LIFEWiZE Financial gives you access to top-tier carrier contracts at competitive commission levels, plus technology, leads, and support — without being captive to any single carrier.",
  },
  {
    q: "Do I own my book of business?",
    a: "Absolutely. You retain 100% ownership of your book. There are no non-compete clauses, no release requirements, and no strings attached. If you ever leave, your book goes with you.",
  },
  {
    q: "What commissions can I expect?",
    a: "We offer street-level and above commissions from day one. There are no production tiers to unlock and no hidden rollover requirements. Your specific rates depend on the carrier and product, and we're happy to discuss exact numbers during your interview.",
  },
  {
    q: "How fast can I get appointed with carriers?",
    a: "Most carrier appointments are processed within 48-72 hours. We handle all the paperwork and follow-up so you can focus on selling. The full onboarding process typically takes less than a week.",
  },
  {
    q: "What technology is included?",
    a: "All contracted agents get access to the full LIFEWiZE platform for $500/mo — including CRM, marketing automation, AI call trainer, resource library, and training academy. It's everything you need to run your business, in one place.",
  },
  {
    q: "Do you provide leads?",
    a: "Yes. Contracted agents can receive qualified leads. We offer multiple lead programs depending on your production level and preferences. No cold calling required.",
  },
  {
    q: "Is there a cost to get contracted?",
    a: "There are no upfront contracting fees. The only cost is the LIFEWiZE platform subscription ($500/mo), which replaces the multiple tools most agents pay for separately.",
  },
  {
    q: "What carriers are available?",
    a: "We have 30+ carrier partnerships including Mutual of Omaha, Transamerica, National Life Group, Nationwide, Pacific Life, Protective, North American, Foresters, and many more. Specific availability varies by state.",
  },
  {
    q: "Can I build a team and earn overrides?",
    a: "Yes. Our Agency Builder tier includes recruiting overrides, team management tools, and revenue share. If you're interested in building a downline, we have the infrastructure to support it.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
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
                FAQ
              </span>
              <div className="gold-rule" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
              Common{" "}
              <span className="text-gold">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about contracting with LIFEWiZE Financial.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ ...ease, delay: i * 0.03 }}
                className="pro-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between group"
                >
                  <span className="text-sm font-semibold text-foreground pr-4 group-hover:text-gold transition-colors duration-200">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 rounded bg-navy-700 flex items-center justify-center"
                  >
                    <ChevronDown className="h-3.5 w-3.5 text-gold/60" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="h-[1px] bg-navy-700 mb-4" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
