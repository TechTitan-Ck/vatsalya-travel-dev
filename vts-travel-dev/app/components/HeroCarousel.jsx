"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { domesticBanners, internationalBanners } from "../data/packages";

/**
 * HeroCarousel Component — Cinematic Banner Slider
 * - Serif display headlines with text shadows
 * - Rich gradient overlays per destination
 * - Touch swipe + auto-play + navigation dots
 */
export default function HeroCarousel({ tripType }) {
  const banners =
    tripType === "domestic" ? domesticBanners : internationalBanners;
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(0);
  }, [tripType]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500);
  }, [banners.length]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoPlay]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    startAutoPlay();
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goNext = () => goToSlide((current + 1) % banners.length);
  const goPrev = () => goToSlide((current - 1 + banners.length) % banners.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const handleWhatsApp = () => {
    const banner = banners[current];
    const message = `Hi! I saw the "${banner.title}" package on your website and I'm interested. Can you share details?`;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="px-4 pb-2 max-w-7xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-600 ease-out"
          style={{ transform: `translateX(-${current * 100}%)`, transitionDuration: '600ms' }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full shrink-0 relative aspect-[16/9] sm:aspect-[21/9]"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-14">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white text-shadow-lg mb-2 sm:mb-3 tracking-tight leading-[1.1]">
                  {banner.title}
                </h2>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl text-shadow-sm mb-4 sm:mb-5 leading-relaxed line-clamp-2">
                  {banner.subtitle}
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="self-start px-6 py-2.5 sm:px-7 sm:py-3 gradient-bg text-white text-sm font-semibold tracking-wide rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 btn-glow"
                >
                  {banner.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Navigation Arrows */}
        <button
          onClick={goPrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md hover:bg-white/30 items-center justify-center transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={goNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md hover:bg-white/30 items-center justify-center transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-7 bg-white dot-active"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
