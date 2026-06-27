"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/traveler_gallery/WhatsApp Image 2026-06-11 at 4.31.19 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 2, src: "/traveler_gallery/WhatsApp Image 2026-06-11 at 4.36.42 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 3, src: "/traveler_gallery/WhatsApp Image 2026-06-11 at 4.36.46 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 4, src: "/traveler_gallery/WhatsApp Image 2026-06-11 at 4.36.50 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 5, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.13.19 PM (1).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 6, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.13.19 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 7, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.13.20 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 8, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.20 PM (1).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 9, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.20 PM (2).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 10, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.20 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 11, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.21 PM (1).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 12, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.21 PM (2).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 13, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.21 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 14, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.22 PM (1).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 15, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.22 PM (2).jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" },
  { id: 16, src: "/traveler_gallery/WhatsApp Image 2026-06-20 at 11.27.22 PM.jpeg", alt: "Happy Travelers", location: "Vatsalya Traveler" }
];

/**
 * TravelerGallery — Display customer photos
 * Auto-playing carousel with framed images and location tags.
 * Supports all aspect ratios (portrait/landscape) with a blurred background.
 */
export default function TravelerGallery() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 4500); // changes every 4.5 seconds
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
      if (diff > 0) goTo((current + 1) % galleryImages.length);
      else goTo((current - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Traveler's Gallery
        </h2>
      </div>
      <p className="text-sm text-muted leading-relaxed">
        Glimpses of joy shared by our travelers from their unforgettable journeys.
      </p>
      <span className="section-line mb-6" />

      <div
        className="relative overflow-hidden rounded-3xl bg-card-bg/60 border border-card-border shadow-md p-4 sm:p-8 backdrop-blur-sm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative aspect-[4/3] sm:aspect-[21/9] w-full max-w-5xl mx-auto overflow-hidden rounded-2xl ring-4 ring-card-border shadow-2xl bg-black">
          {/* Image Frame Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {galleryImages.map((image) => (
              <div key={image.id} className="w-full h-full shrink-0 relative group flex items-center justify-center overflow-hidden">
                {/* Blurred Background for Portrait Images */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl scale-110"
                  style={{ backgroundImage: `url("${image.src}")` }}
                ></div>

                {/* Main Image, scaled to fit perfectly */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="relative w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 z-10"
                  loading="lazy"
                />

                {/* Overlay with Location info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-500 z-30">
                  <p className="text-white font-display text-xl sm:text-3xl font-semibold flex items-center gap-3 drop-shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block animate-pulse shadow-[0_0_8px_rgba(var(--color-primary),0.8)]"></span>
                    {image.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Arrows - Positioned inside the frame */}
          <button
            onClick={() => goTo((current - 1 + galleryImages.length) % galleryImages.length)}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-primary hover:border-primary transition-all text-white z-40 shadow-lg group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => goTo((current + 1) % galleryImages.length)}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-primary hover:border-primary transition-all text-white z-40 shadow-lg group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 pt-8 flex-wrap max-w-full">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${idx === current
                ? "w-8 bg-primary"
                : "w-2 bg-muted/40 hover:bg-muted/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
