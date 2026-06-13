"use client";

import PackageCard from "./PackageCard";
import { domesticPackages, internationalPackages } from "../data/packages";

/**
 * PackagesSection — Dynamic Travel Packages Grid
 * Serif section headers with decorative underline accent.
 * Responsive grid with staggered scroll-reveal animations.
 */
export default function PackagesSection({ tripType }) {
  const packages =
    tripType === "domestic" ? domesticPackages : internationalPackages;

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      {/* Section Header — Serif with decorative line */}
      <div className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {tripType === "domestic"
            ? "Trending Domestic Packages"
            : "Popular International Packages"}
        </h2>
        <p className="text-sm text-muted mt-1.5 leading-relaxed">
          {tripType === "domestic"
            ? "Explore the incredible diversity of India with our curated packages"
            : "Your dream international vacation starts here — hassle-free & affordable"}
        </p>
        <span className="section-line" />
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </section>
  );
}
