"use client";

import { Home, LayoutGrid, Play, MessageSquare } from "lucide-react";
import { useTheme } from "./ThemeProvider";

/**
 * BottomNav — Premium Floating Pill Navigation
 * 4 tabs: Home, Categories, Play, AI Chat
 * White frosted glass in light mode, dark frosted glass in dark mode.
 * Rounded floating pill lifted from bottom.
 */
export default function BottomNav({ activeTab, onTabChange, onCategoriesToggle }) {
  const { darkMode } = useTheme();

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "categories", label: "Categories", icon: LayoutGrid },
    { id: "play", label: "Play", icon: Play },
    { id: "aichat", label: "AI Chat", icon: MessageSquare },
  ];

  const handleTabClick = (tabId) => {
    if (tabId === "categories") {
      onCategoriesToggle?.();
      return;
    }
    onTabChange?.(tabId);
    if (tabId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-5 pb-4 pt-1"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="flex items-center justify-around py-2.5 px-2 rounded-[28px] shadow-2xl"
        style={{
          background: darkMode
            ? "rgba(15, 23, 42, 0.75)"
            : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: darkMode
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: darkMode
            ? "0 8px 32px rgba(0, 0, 0, 0.5)"
            : "0 8px 32px rgba(0, 0, 0, 0.12)",
          pointerEvents: "auto",
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative flex flex-col items-center gap-0.5 py-2 px-4 rounded-2xl transition-all duration-300"
              style={{
                background: isActive
                  ? darkMode
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(11, 76, 140, 0.1)"
                  : "transparent",
              }}
              aria-label={tab.label}
            >
              <Icon
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive
                    ? darkMode
                      ? "text-white scale-110"
                      : "text-[#0B4C8C] scale-110"
                    : darkMode
                      ? "text-white/40"
                      : "text-gray-400"
                }`}
                strokeWidth={isActive ? 2.2 : 1.5}
                fill={isActive && tab.id === "play" ? (darkMode ? "rgba(255,255,255,0.9)" : "rgba(11,76,140,0.9)") : "none"}
              />
              <span
                className={`text-[10px] tracking-wide transition-all duration-300 ${
                  isActive
                    ? darkMode
                      ? "text-white font-semibold"
                      : "text-[#0B4C8C] font-semibold"
                    : darkMode
                      ? "text-white/35 font-medium"
                      : "text-gray-400 font-medium"
                }`}
              >
                {tab.label}
              </span>
              {/* Active bar indicator */}
              {isActive && (
                <div
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full"
                  style={{
                    background: darkMode ? "rgba(255,255,255,0.7)" : "#0B4C8C",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
