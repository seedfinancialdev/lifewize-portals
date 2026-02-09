"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is LIFEWiZE?",
    a: "LIFEWiZE is the all-in-one operating system for life insurance agents. It combines training, CRM, marketing automation, AI tools, community, and optional contracting through LIFEWIZE Financial — all under one roof.",
  },
  {
    q: "What's the difference between the three tiers?",
    a: "Foundations ($250/mo) gives you the essentials — Resource Center, Community, CRM Lite, and basic tools. Pro ($1,000/mo) unlocks the full platform including advanced CRM, training, automations, website builder, and more. Pro Contract ($500/mo) gives you everything in Pro plus leads and policy management — available only to agents contracted through LIFEWIZE Financial.",
  },
  {
    q: "How does contracting through LIFEWIZE Financial work?",
    a: "Qualified agents can apply to be contracted through LIFEWIZE Financial for access to top carriers, competitive commissions, provided leads, and the full Pro platform at a reduced rate of $500/mo. You'll go through a vetting process including an interview with our leadership team.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! You can try LIFEWiZE free for 14 days with no credit card required. Experience the full platform and see the value before committing to a plan.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Absolutely. You can upgrade from Foundations to Pro at any time. If you qualify for contracting, you can also apply to switch to the Pro (Contract) tier for the reduced rate and additional benefits.",
  },
  {
    q: "What carriers are available through LIFEWIZE Financial?",
    a: "We partner with top-rated carriers across the industry. Specific carrier availability depends on your state and licensing. During your contracting interview, we'll discuss the best carrier fit for your business.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most agents are fully set up and running within 24-48 hours. Our onboarding flow walks you through platform setup, CRM configuration, and getting your first campaign live.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime from your account settings. Contracted agents have separate terms outlined during the contracting process.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-foreground font-medium pr-8 group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
            open && "rotate-180 text-primary"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
