"use client";

import { MessageCircle, Phone } from "lucide-react";

/**
 * CTABanner — Premium Call-to-Action
 * Teal gradient with glass-overlay CTA card, decorative circles, serif headline.
 */
export default function CTABanner() {
  const handleChat = () => {
    const message =
      "Hi Vatsal Travel! 👋 I'd like to chat about planning a trip. Can you help me find the best options?";
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleContact = () => {
    const message =
      "Hello Vatsal Travel! I'd like to get in touch regarding a travel booking. Please share your available packages and contact details.";
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl gradient-bg p-7 sm:p-12 text-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/8 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/6 rounded-full translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/3 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-3 text-shadow-sm tracking-tight leading-[1.15]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mb-7 leading-relaxed">
            Let our travel experts craft the perfect trip for you. Get instant
            quotes and personalized itineraries.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleChat}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary-dark font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us
            </button>
            <button
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/12 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
