"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}
