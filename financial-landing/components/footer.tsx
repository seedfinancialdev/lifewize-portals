"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ease = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contractingLinks = [
  { label: "Get Contracted", href: "#process" },
  { label: "Carrier Partners", href: "#carriers" },
  { label: "Commission Structure", href: "#commissions" },
  { label: "Why LIFEWiZE Financial", href: "#why-us" },
];

const platformLinks = [
  { label: "LIFEWiZE Platform", href: "https://lifewize.io" },
  { label: "CRM Suite", href: "https://lifewize.io/features/crm" },
  { label: "AI Call Trainer", href: "https://lifewize.io/features/ai-call-trainer" },
  { label: "Training Academy", href: "https://lifewize.io/features/training-academy" },
  { label: "Resource Library", href: "https://lifewize.io/features/resource-library" },
];

const companyLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-700 pt-16 pb-8">
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
                src="/lifewize-financial-logo-dark.png"
                alt="LIFEWiZE Financial"
                width={160}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Independent Marketing Organization for elite life agents. Top
              carriers, competitive commissions, full technology platform.
            </p>
          </motion.div>

          {/* Contracting */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contracting
            </h4>
            <ul className="space-y-2.5">
              {contractingLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
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
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
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
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
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
          className="border-t border-navy-700 pt-8"
        >
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            {[
              { label: "Facebook", href: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", href: "#", icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z" },
              { label: "LinkedIn", href: "#", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
              { label: "YouTube", href: "#", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-9 w-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center hover:bg-navy-700 transition-colors"
              >
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              &copy; {year} LIFEWiZE Financial. All rights reserved.
            </p>
            <p className="text-xs text-muted text-center max-w-lg">
              LIFEWiZE Financial is an Independent Marketing Organization for licensed insurance professionals.
              Not affiliated with any government agency.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs text-muted hover:text-muted-foreground transition-colors">Privacy</Link>
              <Link href="#" className="text-xs text-muted hover:text-muted-foreground transition-colors">Terms</Link>
              <Link href="#" className="text-xs text-muted hover:text-muted-foreground transition-colors">Compliance</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
