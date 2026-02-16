"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

const logos = [
  { name: "National Life Group", src: "/logos/national-life-group.png", filter: "" },
  { name: "Nationwide", src: "/logos/nationwide.png", filter: "" },
  { name: "North American", src: "/logos/north-american.webp", filter: "" },
  { name: "Protective Life", src: "/logos/protective-life.png", filter: "brightness-0 invert" },
];

export default function LogoStrip() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={spring}
          className="text-center"
        >
          <p className="text-xs font-semibold text-muted uppercase tracking-[0.2em] mb-8">
            Trusted by agents working with top carriers
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative h-8 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={32}
                  className={`h-8 w-auto object-contain ${logo.filter}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
