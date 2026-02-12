"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const productLinks = [
  { label: "All Features", href: "/features" },
  { label: "CRM Suite", href: "/features/crm" },
  { label: "AI Call Trainer", href: "/features/ai-call-trainer" },
  { label: "Marketing Automation", href: "/features/marketing-automation" },
  { label: "Funnel Builder", href: "/features/funnel-builder" },
  { label: "Social Media Manager", href: "/features/social-media-manager" },
];

const platformLinks = [
  { label: "Community Hub", href: "/features/community" },
  { label: "Calendar & Scheduling", href: "/features/calendar" },
  { label: "Lead Center", href: "/features/lead-center" },
  { label: "Resource Library", href: "/features/resource-library" },
  { label: "Training Academy", href: "/features/training-academy" },
  { label: "Pricing", href: "/#pricing" },
];

const companyLinks = [
  { label: "Contracting", href: "/#contracting" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/logo-dark.png"
                alt="LIFEWiZE"
                width={120}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              The operating system for elite life agents. Build, run, and scale
              your insurance business.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platform */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted">
            &copy; {year} LIFEWiZE. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with ❤️ for life agents
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
