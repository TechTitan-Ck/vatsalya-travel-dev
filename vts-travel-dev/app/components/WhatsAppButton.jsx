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
      "Hi, I want to know the best price for your Tour Packages. Please share more details.";
    window.open(
      `https://wa.me/918541035585?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 z-[60] flex items-center gap-3">
      {/* Help Text Bubble */}
      <div className="bg-white px-3 py-2 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center relative animate-pulse">
        <p className="text-sm font-semibold text-gray-700 whitespace-nowrap tracking-wide">
          Chat with us!
        </p>
        {/* Right Arrow Pointer */}
        <div className="absolute top-1/2 -right-[6px] transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-white border-b-[6px] border-b-transparent"></div>
      </div>

      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-xl flex items-center justify-center whatsapp-pulse hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 animate-bounce" fill="white" strokeWidth={0} />
      </button>
    </div>
  );
}
