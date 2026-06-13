"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Sun, Moon, MapPin, X, Phone } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { domesticPackages, internationalPackages } from "../data/packages";

/**
 * Header Component — Premium Glassmorphism Navigation
 * - Serif-accented branding with teal gradient logo
 * - Expandable smart search with live filtering
 * - Smooth Sun/Moon theme toggle with rotation
 * - Sticky with glass effect on scroll
 */
export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const allPackages = [...domesticPackages, ...internationalPackages];

  const searchResults = searchQuery.trim()
    ? allPackages.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.highlights.some((h) =>
            h.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  const handleBookNow = (pkg) => {
    const message = `Hi! I'm interested in the *${pkg.title}* package (${pkg.duration}) priced at ₹${pkg.price.toLocaleString()}. Please share more details.`;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-nav-bg backdrop-blur-2xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-3">
        {/* Logo & Branding */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20">
            <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-display font-bold tracking-tight text-foreground">
              Vatsalya
            </span>
            <span className="text-[9px] text-muted uppercase tracking-[0.2em] font-medium">
              Tourism & Services
            </span>
          </div>
        </div>

        {/* Search, Call Now & Theme Toggle */}
        <div className="flex items-center gap-2" ref={searchRef}>
          {/* Expandable Search */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center animate-fade-in">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search destinations..."
                    className="w-48 sm:w-72 h-10 pl-10 pr-8 rounded-xl bg-card-bg text-foreground text-sm font-sans placeholder:text-muted border border-card-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <button
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Search Results Dropdown */}
                {searchQuery.trim() && (
                  <div className="absolute top-full right-0 mt-2 w-80 max-h-80 overflow-y-auto bg-card-bg border border-card-border rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] z-50 animate-slide-up">
                    {searchResults.length > 0 ? (
                      searchResults.map((pkg) => (
                        <button
                          key={pkg.id}
                          onClick={() => handleBookNow(pkg)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-muted-bg transition-colors text-left border-b border-card-border last:border-b-0"
                        >
                          <img
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-12 h-12 rounded-xl object-cover shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">
                              {pkg.title}
                            </p>
                            <p className="text-xs text-muted">
                              {pkg.duration} · <span className="font-mono-price">₹{pkg.price.toLocaleString()}</span>
                            </p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-8 text-center text-muted text-sm">
                        <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        No destinations found
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-xl bg-muted-bg border border-card-border flex items-center justify-center hover:border-primary/30 hover:bg-card-bg transition-all duration-200"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 text-muted" />
              </button>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-muted-bg border border-card-border flex items-center justify-center hover:border-primary/30 hover:bg-card-bg transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
              {darkMode ? (
                <Sun className="w-4 h-4 text-secondary" />
              ) : (
                <Moon className="w-4 h-4 text-primary" />
              )}
            </div>
          </button>

          {/* Call Now Button */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-1.5 h-10 px-3.5 rounded-xl text-white text-xs font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #EF4444, #DC2626)",
              boxShadow: "0 4px 14px rgba(239, 68, 68, 0.35)",
            }}
            aria-label="Call Now"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
