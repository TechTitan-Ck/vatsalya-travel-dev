"use client";

import { Star, Clock, MapPin, Info } from "lucide-react";

/**
 * PackageCard Component — Premium Travel Card
 * - Coral discount badge, glass-effect duration badge
 * - Gold star rating with backdrop blur
 * - JetBrains Mono for pricing
 * - Teal gradient "Book Now" CTA with glow
 */
export default function PackageCard({ pkg, onOpenDetails }) {
  const discount = Math.round(
    ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
  );

  const handleBookNow = () => {
    const message = `Hi, I want to know the best price for the ${pkg.title} package. Please share more details.`;
    window.open(
      `https://wa.me/918541035585?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-card-bg rounded-2xl overflow-hidden card-hover group shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          style={{ transform: 'scale(1)', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
          loading="lazy"
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Discount Badge — Coral accent */}
        <div 
          className="absolute top-3 left-3 px-2.5 py-1 text-white text-[11px] font-bold rounded-lg shadow-lg tracking-wide uppercase"
          style={{ backgroundColor: "#EF4444" }}
        >
          {discount}% Off
        </div>

        {/* Duration Badge — Glass effect */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/15 backdrop-blur-md text-white text-[11px] font-medium rounded-lg flex items-center gap-1 border border-white/10">
          <Clock className="w-3 h-3" />
          {pkg.duration}
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <h3 className="font-display text-white text-lg font-bold text-shadow-sm tracking-tight">
              {pkg.title}
            </h3>
            <p className="text-white/75 text-[11px] flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" />
              {pkg.subtitle}
            </p>
          </div>
          {/* Rating — Gold star */}
          <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-white text-xs font-semibold">{pkg.rating}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {pkg.highlights.map((item, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-primary/8 text-primary text-[10px] font-semibold rounded-md tracking-wide uppercase"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-card-border">
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">
              Price on Request
            </span>
            {/* About Place Option */}
            <button
              onClick={() => onOpenDetails()}
              className="text-[13px] font-bold text-foreground hover:text-primary flex items-center gap-1.5 transition-colors group/link"
            >
              <Info className="w-4 h-4 text-primary/70 group-hover/link:text-primary transition-colors" />
              <span className="group-hover/link:underline underline-offset-4">Explore Place</span>
            </button>
          </div>
          <button
            onClick={handleBookNow}
            className="group/btn relative overflow-hidden px-5 py-2.5 bg-foreground dark:bg-white text-[13px] font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full gradient-bg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 text-background dark:text-black group-hover/btn:text-white transition-colors duration-300 flex items-center gap-2">
              Enquire Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
