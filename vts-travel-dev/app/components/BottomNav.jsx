"use client";

import { useState } from "react";
import { Home, LayoutGrid, Play, MessageSquare, Info, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

/**
 * BottomNav — Premium Floating Pill Navigation
 * 4 tabs: Home, Categories, Play, AI Chat
 * White frosted glass in light mode, dark frosted glass in dark mode.
 * Rounded floating pill lifted from bottom.
 */
export default function BottomNav({ activeTab, onTabChange, onCategoriesToggle }) {
  const { darkMode } = useTheme();
  const [popupInfo, setPopupInfo] = useState({ show: false, tab: "" });

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "categories", label: "Categories", icon: LayoutGrid },
    { id: "play", label: "Play", icon: Play },
    { id: "aichat", label: "AI Chat", icon: MessageSquare },
  ];

  const handleTabClick = (tabId) => {
    if (tabId === "play" || tabId === "aichat") {
      setPopupInfo({ show: true, tab: tabId === "play" ? "Play" : "AI Chat" });
      setTimeout(() => setPopupInfo({ show: false, tab: "" }), 3000);
      return;
    }
    
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
    <>
      {/* Coming Soon Popup Toast */}
      <div 
        className={`fixed left-1/2 -translate-x-1/2 transition-all duration-400 ease-out z-[60] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl pointer-events-auto w-max max-w-[90vw] ${
          popupInfo.show ? "bottom-[90px] opacity-100 scale-100" : "bottom-10 opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          background: darkMode ? "rgba(30, 41, 59, 0.95)" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
          <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {popupInfo.tab} Feature
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Work in progress. Coming soon!
          </p>
        </div>
        <button 
          onClick={() => setPopupInfo({ show: false, tab: "" })}
          className="ml-1 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
        </button>
      </div>

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
    </>
  );
}
