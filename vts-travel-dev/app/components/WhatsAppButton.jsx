"use client";

import { MessageCircle } from "lucide-react";

/**
 * WhatsAppButton — Floating CTA with pulse glow
 * z-[60] ensures it's always above the BottomNav (z-50).
 * Positioned to clear the new floating pill navigation bar.
 */
export default function WhatsAppButton() {
  const handleClick = () => {
    const message =
      "Hi, I want to book a trip! 🌍 Please share your best travel packages and deals.";
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-6 right-4 z-[60] w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-xl flex items-center justify-center whatsapp-pulse hover:scale-110 active:scale-95 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" strokeWidth={0} />
    </button>
  );
}
