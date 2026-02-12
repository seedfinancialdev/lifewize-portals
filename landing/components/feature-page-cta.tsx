"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { features } from "@/lib/features-data";
import { resolveIcon } from "@/lib/icons";

export default function FeaturePageCta({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related = features.filter((f) => f.slug !== currentSlug).slice(0, 3);

  return (
    <>
      {/* Related Features */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Explore More <span className="gradient-text">Features</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {related.map((f) => {
              const Icon = resolveIcon(f.iconName);
              return (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="glass rounded-2xl p-5 hover:bg-white/[0.08] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {f.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {f.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-gold/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Try the full LIFEWiZE platform free for 14 days. No credit card
              required.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary-glow px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all group"
            >
              Start Your Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
