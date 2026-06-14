"use client";

import { useState } from "react";
import Header from "./components/Header";
import TripToggle from "./components/TripToggle";
import HeroCarousel from "./components/HeroCarousel";
import PackagesSection from "./components/PackagesSection";
import Services from "./components/Services";
import ReviewsCarousel from "./components/ReviewsCarousel";
import CTABanner from "./components/CTABanner";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import WhatsAppButton from "./components/WhatsAppButton";
import CategoriesOverlay from "./components/CategoriesOverlay";

/**
 * Home Page - Main entry point for Vatsalya Travel & Tourism
 * Manages the global tripType state which dynamically filters
 * the Hero Banner and Travel Packages across the entire page.
 */
export default function Home() {
  // Global trip type filter: 'domestic' or 'international'
  const [tripType, setTripType] = useState("domestic");
  // Active bottom nav tab
  const [activeTab, setActiveTab] = useState("home");
  // Categories overlay open state
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (categoriesOpen) setCategoriesOpen(false);
  };

  const handleCategoriesToggle = () => {
    const next = !categoriesOpen;
    setCategoriesOpen(next);
    setActiveTab(next ? "categories" : "home");
  };

  return (
    <>
      {/* Sticky Header with Search & Theme Toggle */}
      <Header />

      <main className="flex-1">
        {/* Trip Type Toggle: Domestic / International */}
        <TripToggle tripType={tripType} setTripType={setTripType} />

        {/* Auto-playing Hero Banner Carousel */}
        <HeroCarousel tripType={tripType} />

        {/* Dynamic Travel Packages Grid */}
        <PackagesSection tripType={tripType} />

        {/* Travel Services & Trust Badges */}
        <Services />

        {/* Customer Reviews Carousel */}
        <ReviewsCarousel />

        {/* Call-to-Action Banner */}
        <CTABanner />

        {/* Team Members Section */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer setTripType={setTripType} />

      {/* Categories Full-Screen Overlay */}
      <CategoriesOverlay
        isOpen={categoriesOpen}
        onClose={() => {
          setCategoriesOpen(false);
          setActiveTab("home");
        }}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Mobile Bottom Navigation Bar (hidden on desktop) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onCategoriesToggle={handleCategoriesToggle}
      />
    </>
  );
}
