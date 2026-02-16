"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full glass-strong border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg shadow-black/20"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
