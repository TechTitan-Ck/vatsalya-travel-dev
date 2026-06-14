"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "../data/packages";

/**
 * ReviewsCarousel — Customer Testimonials
 * Large quote watermark, glowing avatar rings, serif header, auto-play.
 */
export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoPlay]);

  const goTo = (idx) => { setCurrent(idx); startAutoPlay(); };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo((current + 1) % reviews.length);
      else goTo((current - 1 + reviews.length) % reviews.length);
    }
  };

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-1">
        What Our Travelers Say
      </h2>
      <p className="text-sm text-muted leading-relaxed">
        Real stories from real travelers who explored with Vatsalya
      </p>
      <span className="section-line mb-6" />

      <div
        className="relative overflow-hidden rounded-2xl bg-card-bg border border-card-border shadow-sm quote-watermark"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full shrink-0 p-6 sm:p-10">
              <div className="flex flex-col items-center text-center max-w-lg mx-auto relative z-10">
                {/* Review Text */}
                <p className="text-foreground text-sm sm:text-base leading-relaxed mb-5 font-display italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-secondary fill-secondary"
                          : "text-card-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Avatar & Info */}
                <div className="flex items-center gap-3">
                  <div className="avatar-glow relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="relative w-11 h-11 rounded-full object-cover ring-2 ring-primary/20 z-10"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground tracking-tight">
                      {review.name}
                    </p>
                    <p className="text-[11px] text-muted">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Arrows */}
        <button
          onClick={() => goTo((current - 1 + reviews.length) % reviews.length)}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-muted-bg border border-card-border items-center justify-center hover:border-primary/25 hover:bg-card-bg transition-all"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-4 h-4 text-muted" />
        </button>
        <button
          onClick={() => goTo((current + 1) % reviews.length)}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-muted-bg border border-card-border items-center justify-center hover:border-primary/25 hover:bg-card-bg transition-all"
          aria-label="Next review"
        >
          <ChevronRight className="w-4 h-4 text-muted" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 pb-5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted/25 hover:bg-muted/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
