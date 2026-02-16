"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

interface ReplacementRow {
  feature: string;
  replaces: string[];
  otherToolsCost: string;
}

const replacements: ReplacementRow[] = [
  {
    feature: "Full CRM & Pipeline",
    replaces: ["Salesforce", "HubSpot", "Zoho"],
    otherToolsCost: "$99/mo",
  },
  {
    feature: "Training Library",
    replaces: ["Kajabi", "Teachable"],
    otherToolsCost: "$97/mo",
  },
  {
    feature: "Funnel Builder",
    replaces: ["ClickFunnels", "Leadpages"],
    otherToolsCost: "$297/mo",
  },
  {
    feature: "Email & SMS Marketing",
    replaces: ["Mailchimp", "ActiveCampaign"],
    otherToolsCost: "$149/mo",
  },
  {
    feature: "Website Builder",
    replaces: ["Wix", "Squarespace", "WordPress"],
    otherToolsCost: "$75/mo",
  },
  {
    feature: "Workflow Automations",
    replaces: ["Zapier", "Make"],
    otherToolsCost: "$159/mo",
  },
  {
    feature: "Social Media Management",
    replaces: ["Hootsuite", "Buffer"],
    otherToolsCost: "$99/mo",
  },
  {
    feature: "Advanced AI Tools",
    replaces: ["ChatGPT Pro", "Jasper"],
    otherToolsCost: "$299/mo",
  },
  {
    feature: "Scheduling & Booking",
    replaces: ["Calendly", "Acuity"],
    otherToolsCost: "$29/mo",
  },
  {
    feature: "Document Signing",
    replaces: ["DocuSign", "PandaDoc"],
    otherToolsCost: "$47/mo",
  },
  {
    feature: "Community Platform",
    replaces: ["Skool", "Circle"],
    otherToolsCost: "$89/mo",
  },
  {
    feature: "Analytics & Reporting",
    replaces: ["Google Analytics 360", "Mixpanel"],
    otherToolsCost: "$299/mo",
  },
  {
    feature: "Live Monthly Webinars",
    replaces: ["Masterclass", "Industry Coaching"],
    otherToolsCost: "$497/mo",
  },
  {
    feature: "Casey's Content Vault",
    replaces: ["Unique to LIFEWiZE"],
    otherToolsCost: "$997/mo",
  },
];

const totalOtherCost = replacements.reduce((sum, row) => {
  const num = parseInt(row.otherToolsCost.replace(/[^0-9]/g, ""));
  return sum + num;
}, 0);

export default function PricingValueTable() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={spring}
      className="max-w-6xl mx-auto mt-20"
    >
      {/* Toggle Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between glass-strong rounded-2xl px-8 py-6 hover:bg-white/[0.08] transition-all group"
      >
        <div className="text-left">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            What You&apos;re <span className="gradient-text">Replacing</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            See how much you&apos;d spend buying these tools separately
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.div>
      </button>

      {/* Collapsible Table */}
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
              {/* Table Header — hidden on mobile */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="col-span-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Feature
                  </span>
                </div>
                <div className="col-span-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Replaces
                  </span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Other Tools
                  </span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    LIFEWiZE
                  </span>
                </div>
              </div>

              {/* Rows */}
              {replacements.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors items-center"
                >
                  <div className="md:col-span-4 flex items-center justify-between md:block">
                    <span className="text-sm font-semibold text-foreground">
                      {row.feature}
                    </span>
                    <div className="flex items-center gap-3 md:hidden">
                      <span className="text-sm text-muted-foreground line-through decoration-red-400/50">
                        {row.otherToolsCost}
                      </span>
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap gap-1.5">
                      {row.replaces.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] text-muted-foreground bg-white/[0.06] px-2 py-0.5 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 text-center">
                    <span className="text-sm text-muted-foreground line-through decoration-red-400/50">
                      {row.otherToolsCost}
                    </span>
                  </div>
                  <div className="hidden md:flex md:col-span-2 justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </motion.div>
              ))}

              {/* Total Row */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 bg-gradient-to-r from-primary/10 to-primary-glow/5 items-center">
                <div className="md:col-span-4">
                  <span className="text-base font-bold text-primary uppercase tracking-wide">
                    Total Cost
                  </span>
                </div>
                <div className="hidden md:block md:col-span-3" />
                <div className="md:col-span-3 text-center">
                  <span className="text-lg font-bold text-muted-foreground line-through decoration-red-400/60">
                    ${totalOtherCost.toLocaleString()}/mo
                  </span>
                </div>
                <div className="md:col-span-2 text-center">
                  <div className="text-lg font-bold text-primary">
                    $250/mo
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    Starting at
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
