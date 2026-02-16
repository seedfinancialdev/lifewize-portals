"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Carriers", href: "#carriers" },
  { label: "Why Us", href: "#why-us" },
  { label: "Commissions", href: "#commissions" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-900/95 backdrop-blur-sm border-b border-navy-700/50 shadow-xl shadow-black/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/lifewize-financial-logo-dark.png"
            alt="LIFEWiZE Financial"
            width={200}
            height={44}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-navy-300 hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://lifewize.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-navy-300 hover:text-foreground transition-colors tracking-wide"
          >
            Platform
          </a>
          <div className="w-[1px] h-4 bg-navy-700" />
          <a
            href="#process"
            className="text-[13px] font-semibold text-primary-foreground bg-gold hover:bg-gold-light px-5 py-2.5 rounded-md transition-all duration-300"
          >
            Get Contracted
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-900 border-t border-navy-700/50"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-navy-200 hover:text-foreground py-3 border-b border-navy-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-5">
                <a
                  href="#process"
                  onClick={() => setMobileOpen(false)}
                  className="text-center font-semibold text-primary-foreground bg-gold px-5 py-3.5 rounded-md"
                >
                  Get Contracted
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
