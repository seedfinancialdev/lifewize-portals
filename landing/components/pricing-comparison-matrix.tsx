"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

type CellValue = boolean | string;

interface FeatureRow {
  name: string;
  foundations: CellValue;
  pro: CellValue;
  proContract: CellValue;
}

interface Category {
  name: string;
  features: FeatureRow[];
}

const categories: Category[] = [
  {
    name: "Core Platform",
    features: [
      { name: "Agent Dashboard", foundations: true, pro: true, proContract: true },
      { name: "Resource Center", foundations: true, pro: true, proContract: true },
      { name: "Agent Community", foundations: true, pro: true, proContract: true },
      { name: "Brand Center", foundations: true, pro: true, proContract: true },
      { name: "Mobile App Access", foundations: true, pro: true, proContract: true },
    ],
  },
  {
    name: "CRM & Pipeline",
    features: [
      { name: "CRM Lite (Email Integration)", foundations: true, pro: true, proContract: true },
      { name: "Full CRM with Twilio", foundations: false, pro: true, proContract: true },
      { name: "Pipeline Management", foundations: false, pro: true, proContract: true },
      { name: "Contact Segmentation", foundations: "Basic", pro: "Advanced", proContract: "Advanced" },
      { name: "Deal Tracking", foundations: false, pro: true, proContract: true },
      { name: "Activity Logging", foundations: false, pro: true, proContract: true },
    ],
  },
  {
    name: "Marketing & Outreach",
    features: [
      { name: "Email Marketing Campaigns", foundations: false, pro: true, proContract: true },
      { name: "SMS Marketing", foundations: false, pro: true, proContract: true },
      { name: "Social Media Cross Post", foundations: true, pro: true, proContract: true },
      { name: "Social Media Management", foundations: false, pro: true, proContract: true },
      { name: "Marketing Automations", foundations: false, pro: true, proContract: true },
      { name: "Drip Campaigns", foundations: false, pro: true, proContract: true },
    ],
  },
  {
    name: "Funnels & Websites",
    features: [
      { name: "Funnel Builder", foundations: "Demo", pro: "Full", proContract: "Full" },
      { name: "Landing Pages", foundations: false, pro: "Unlimited", proContract: "Unlimited" },
      { name: "Website Builder", foundations: false, pro: true, proContract: true },
      { name: "Custom Domains", foundations: false, pro: true, proContract: true },
      { name: "Form & Survey Builder", foundations: false, pro: true, proContract: true },
    ],
  },
  {
    name: "AI & Automation",
    features: [
      { name: "AI Credits", foundations: "Limited", pro: "Full", proContract: "Full" },
      { name: "AI Call Trainer", foundations: false, pro: true, proContract: true },
      { name: "AI Content Writer", foundations: false, pro: true, proContract: true },
      { name: "Workflow Automations (Zapier)", foundations: false, pro: true, proContract: true },
      { name: "Smart Lead Scoring", foundations: false, pro: true, proContract: true },
    ],
  },
  {
    name: "Training & Education",
    features: [
      { name: "Getting Started Guides", foundations: true, pro: true, proContract: true },
      { name: "Full Training Library", foundations: false, pro: true, proContract: true },
      { name: "Live Coaching Calls", foundations: false, pro: true, proContract: true },
      { name: "Script & Objection Handling", foundations: false, pro: true, proContract: true },
      { name: "Mentorship from Leadership", foundations: false, pro: false, proContract: true },
    ],
  },
  {
    name: "Scheduling & Documents",
    features: [
      { name: "Appointment Scheduler", foundations: true, pro: true, proContract: true },
      { name: "Calendar Sync", foundations: true, pro: true, proContract: true },
      { name: "Document Signing", foundations: false, pro: true, proContract: true },
      { name: "E-Applications", foundations: false, pro: true, proContract: true },
    ],
  },
  {
    name: "Leads & Prospecting",
    features: [
      { name: "Buy Full-Priced Leads", foundations: true, pro: true, proContract: true },
      { name: "Qualified Leads Provided", foundations: false, pro: false, proContract: true },
      { name: "Lead Distribution", foundations: false, pro: false, proContract: true },
    ],
  },
  {
    name: "Contracting & Carriers",
    features: [
      { name: "Top Carrier Access", foundations: false, pro: false, proContract: true },
      { name: "Competitive Commissions", foundations: false, pro: false, proContract: true },
      { name: "Policy Management", foundations: false, pro: false, proContract: true },
      { name: "Dedicated Leadership Support", foundations: false, pro: false, proContract: true },
    ],
  },
  {
    name: "Analytics & Reporting",
    features: [
      { name: "Basic Reporting", foundations: true, pro: true, proContract: true },
      { name: "Advanced Analytics", foundations: false, pro: true, proContract: true },
      { name: "Revenue Tracking", foundations: false, pro: true, proContract: true },
      { name: "Commission Tracking", foundations: false, pro: false, proContract: true },
    ],
  },
];

function CellDisplay({ value }: { value: CellValue }) {
  if (value === true) return <Check className="h-4 w-4 text-primary mx-auto" />;
  if (value === false) return <Minus className="h-4 w-4 text-white/15 mx-auto" />;
  return (
    <span className="text-xs font-medium text-muted-foreground">{value}</span>
  );
}

function CategorySection({ category, index }: { category: Category; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full grid grid-cols-12 gap-4 px-6 py-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors items-center"
      >
        <div className="col-span-5 flex items-center gap-3 text-left">
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
          <span className="text-sm font-bold text-foreground uppercase tracking-wide">
            {category.name}
          </span>
        </div>
        <div className="col-span-7" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="overflow-hidden"
          >
            {category.features.map((feature, i) => (
              <div
                key={feature.name}
                className={cn(
                  "grid grid-cols-12 gap-4 px-6 py-3.5 items-center hover:bg-white/[0.02] transition-colors",
                  i < category.features.length - 1 && "border-b border-white/[0.03]"
                )}
              >
                <div className="col-span-5 pl-7">
                  <span className="text-sm text-muted-foreground">
                    {feature.name}
                  </span>
                </div>
                <div className="col-span-2 text-center">
                  <CellDisplay value={feature.foundations} />
                </div>
                <div className="col-span-3 text-center">
                  <CellDisplay value={feature.pro} />
                </div>
                <div className="col-span-2 text-center">
                  <CellDisplay value={feature.proContract} />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingComparisonMatrix() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={spring}
      className="max-w-4xl mx-auto mt-8"
    >
      {/* Toggle Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between glass-strong rounded-2xl px-8 py-6 hover:bg-white/[0.08] transition-all group"
      >
        <div className="text-left">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Full Feature{" "}
            <span className="gradient-text">Comparison</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            See exactly what&apos;s included in every plan
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.div>
      </button>

      {/* Collapsible Matrix */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="overflow-hidden"
          >
            <div className="glass rounded-2xl mt-3 overflow-hidden">
              {/* Sticky Column Headers */}
              <div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-white/10 bg-white/[0.04]">
                <div className="col-span-5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Features
                  </span>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide">Foundations</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">$250/mo</p>
                </div>
                <div className="col-span-3 text-center">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide">Pro</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">$1,000/mo</p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-xs font-bold text-gold uppercase tracking-wide">Pro (Contract)</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">$500/mo</p>
                </div>
              </div>

              {/* Category Sections */}
              {categories.map((category, i) => (
                <CategorySection key={category.name} category={category} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
