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
          className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center hover:bg-navy-700 hover:border-gold/30 transition-all shadow-lg shadow-black/30 group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
