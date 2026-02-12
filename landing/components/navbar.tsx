"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { features } from "@/lib/features-data";
import { resolveIcon } from "@/lib/icons";

const navLinks = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Contracting", href: "/#contracting" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="LIFEWiZE"
            width={210}
            height={54}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Features Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  featuresOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {featuresOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-3 w-[900px] rounded-2xl border border-white/10 bg-[#0c1117] p-5 shadow-2xl shadow-black/60"
                >
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {features.map((f) => {
                      const Icon = resolveIcon(f.iconName);
                      return (
                        <Link
                          key={f.slug}
                          href={`/features/${f.slug}`}
                          onClick={() => setFeaturesOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/[0.06] transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                            <Icon className="h-4.5 w-4.5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground">
                              {f.title}
                            </p>
                            <p className="text-[11px] text-muted-foreground truncate">
                              {f.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <Link
                      href="/features"
                      onClick={() => setFeaturesOpen(false)}
                      className="text-xs font-semibold text-primary hover:text-primary-glow transition-colors"
                    >
                      View all features →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            Log In
          </a>
          <a
            href="/#pricing"
            className="text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link
                href="/features"
                onClick={() => setMobileOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a href="#" className="text-center text-muted-foreground py-2">
                  Log In
                </a>
                <a
                  href="/#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="text-center font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-5 py-3 rounded-full"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
