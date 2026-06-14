"use client";

import { useState } from "react";
import PackageCard from "./PackageCard";
import { domesticPackages, internationalPackages } from "../data/packages";
import { Star, X } from "lucide-react";

/**
 * PackagesSection — Dynamic Travel Packages Grid
 * Serif section headers with decorative underline accent.
 * Responsive grid with staggered scroll-reveal animations.
 */
export default function PackagesSection({ tripType }) {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const packages =
    tripType === "domestic" ? domesticPackages : internationalPackages;

  const getExpertDetails = (id, title) => {
    const details = {
      d1: { desc: "Kashmir is the ultimate paradise on earth. Known for its mesmerizing Dal Lake, snow-capped peaks of Gulmarg, and lush green valleys of Pahalgam. It offers a perfect blend of romance, adventure, and tranquility. Expect freezing winters ideal for snow sports and incredibly pleasant summers.", time: "March to August (Summer) | December to February (Snow)" },
      d2: { desc: "Kerala is God's Own Country, famous for its serene backwaters, traditional houseboats, and sprawling tea estates in Munnar. It's the perfect destination for nature lovers and those seeking Ayurvedic wellness. The tropical climate keeps it green all year round.", time: "September to March" },
      d3: { desc: "Rajasthan offers a grand dive into India's royal history. From the pink city of Jaipur and the lakes of Udaipur to the golden dunes of Jaisalmer, experience majestic forts, vibrant culture, and world-class hospitality.", time: "October to March (Winter)" },
      d4: { desc: "Goa is India's pocket-sized paradise. Known for its pristine beaches, vibrant nightlife, Portuguese heritage, and thrilling water sports. Whether you want to party in North Goa or relax in South Goa, it has something for everyone.", time: "November to February" },
      d5: { desc: "Manali is a high-altitude Himalayan resort town known for its cool climate and snow-capped mountains. It's an adventure hub offering paragliding, trekking, and skiing, especially around Rohtang Pass and Solang Valley.", time: "October to June" },
      d6: { desc: "The Andaman Islands are a stunning archipelago offering some of the best beaches in Asia, like Radhanagar. It's a haven for scuba diving, snorkeling, and exploring rich marine life in crystal-clear waters.", time: "October to May" },
      i1: { desc: "Dubai is the city of gold and futuristic wonders. Marvel at the Burj Khalifa, enjoy thrilling desert safaris, and shop at massive malls. It perfectly blends ultra-modern architecture with deep-rooted Arabian culture.", time: "November to April" },
      i2: { desc: "The Maldives is the ultimate tropical getaway. Famous for its luxurious overwater villas, crystal-clear turquoise lagoons, and vibrant coral reefs. It's the perfect destination for honeymoons and romantic retreats.", time: "November to April" },
      i3: { desc: "Bali, the Island of Gods, is celebrated for its lush rice terraces, ancient Hindu temples, and beautiful beaches. It offers a unique mix of spiritual retreats in Ubud and vibrant beach clubs in Seminyak.", time: "April to October (Dry Season)" },
      i4: { desc: "Singapore is a dynamic island city-state where futuristic architecture meets lush green spaces. Visit Gardens by the Bay, Universal Studios, and experience a world-class culinary scene in a highly safe environment.", time: "February to April (But great year-round)" },
      i5: { desc: "Thailand is the land of smiles, offering bustling city life in Bangkok, serene temples, and stunning tropical islands like Phuket and Phi Phi. It's famous for its street food, culture, and vibrant nightlife.", time: "November to early April" },
      i6: { desc: "Paris, the City of Love, needs no introduction. Walk along the Seine river, marvel at the Eiffel Tower, and explore world-class art at the Louvre. It's a dream destination for art, fashion, and food lovers.", time: "April to June | September to October" },
    };
    return details[id] || { desc: `Discover the unmatched beauty and culture of ${title}. This destination offers unique experiences, breathtaking sights, and memories that will last a lifetime. Highly recommended by travel experts for its incredible value and attractions.`, time: "Year-round destination" };
  };

  const expertData = selectedPkg ? getExpertDetails(selectedPkg.id, selectedPkg.title) : null;

  const handleBookNowModal = (pkg) => {
    const message = `Hi, I want to know the best price for the ${pkg.title} package. Please share more details.`;
    window.open(
      `https://wa.me/918541035585?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="packages" className="px-4 py-8 max-w-7xl mx-auto relative">
      {/* Section Header — Serif with decorative line */}
      <div className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {tripType === "domestic"
            ? "Trending Domestic Packages"
            : "Popular International Packages"}
        </h2>
        <p className="text-sm text-muted mt-1.5 leading-relaxed">
          {tripType === "domestic"
            ? "Explore the incredible diversity of India with our curated packages"
            : "Your dream international vacation starts here — hassle-free & affordable"}
        </p>
        <span className="section-line" />
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <PackageCard pkg={pkg} onOpenDetails={() => setSelectedPkg(pkg)} />
          </div>
        ))}
      </div>

      {/* Global About Place Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedPkg(null)} style={{ margin: 0 }}>
          <div className="bg-card-bg rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-slide-up flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPkg(null)}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors z-[1000] backdrop-blur-sm"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-56 relative shrink-0">
              <img src={selectedPkg.image} alt={selectedPkg.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h3 className="absolute bottom-5 left-5 font-display text-white text-3xl font-bold text-shadow-lg tracking-tight">
                {selectedPkg.title}
              </h3>
            </div>
            <div className="p-6 overflow-y-auto hide-scrollbar flex-grow">
              <h4 className="text-xl font-bold text-primary mb-3">Why Visit {selectedPkg.title}?</h4>
              <p className="text-base text-muted leading-relaxed mb-6">
                {expertData.desc}
              </p>
              
              <div className="bg-muted-bg rounded-2xl p-5 mb-6 border border-card-border shadow-sm">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary fill-secondary" /> 
                  Expert Travel Tips
                </h4>
                <ul className="text-sm text-muted space-y-3.5">
                  <li className="flex gap-3">
                    <strong className="text-foreground shrink-0 w-24">Best Time:</strong> 
                    <span className="font-medium">{expertData.time}</span>
                  </li>
                  <li className="flex gap-3">
                    <strong className="text-foreground shrink-0 w-24">Duration:</strong> 
                    <span className="font-medium">{selectedPkg.duration}</span>
                  </li>
                  <li className="flex gap-3">
                    <strong className="text-foreground shrink-0 w-24">Highlights:</strong> 
                    <span className="font-medium leading-relaxed">{selectedPkg.highlights.join(", ")}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleBookNowModal(selectedPkg)}
                  className="w-full sm:w-auto px-8 py-3 gradient-bg text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all btn-glow"
                >
                  Enquire for this Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
