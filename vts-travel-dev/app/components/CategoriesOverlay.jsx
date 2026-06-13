"use client";

import { useEffect } from "react";
import {
  X,
  Globe,
  Heart,
  Briefcase,
  Landmark,
  Palette,
  Mountain,
  Leaf,
  TreePine,
  MapPin,
  Clock,
  IndianRupee,
  ChevronRight,
} from "lucide-react";

/**
 * CategoriesOverlay — Full-screen travel categories menu
 * 8 rich travel package types with sample destinations.
 * Triggered from the "Categories" bottom nav tab.
 */

const categories = [
  {
    id: "tour",
    title: "Tour Packages",
    tagline: "Curated multi-city experiences across the globe",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    destinations: [
      {
        name: "European Highlights",
        places: "Paris → Rome → Barcelona",
        duration: "7 Nights / 8 Days",
        price: "₹1,29,999",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop",
      },
      {
        name: "Southeast Asia Explorer",
        places: "Bangkok → Phuket → Bali",
        duration: "10 Nights / 11 Days",
        price: "₹59,999",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    tagline: "Begin your forever with unforgettable romantic escapes",
    icon: Heart,
    color: "from-rose-500 to-pink-400",
    destinations: [
      {
        name: "Maldives Romance",
        places: "Overwater Villa • Private Beach",
        duration: "4 Nights / 5 Days",
        price: "₹62,999",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop",
      },
      {
        name: "Santorini & Amalfi",
        places: "Greece → Italy Coastal Paradise",
        duration: "6 Nights / 7 Days",
        price: "₹1,49,999",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Packages",
    tagline: "Team retreats, offsites & leadership summits",
    icon: Briefcase,
    color: "from-slate-600 to-slate-400",
    destinations: [
      {
        name: "Kyoto Team Retreat",
        places: "Zen Gardens • Tea Ceremony • Strategy Sessions",
        duration: "2 Nights / 3 Days",
        price: "₹85,999",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
      },
      {
        name: "Goa Leadership Summit",
        places: "Beach Resort • Team Building • Gala Dinner",
        duration: "3 Nights / 4 Days",
        price: "₹28,999",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage Tours",
    tagline: "Sacred journeys to India's holiest destinations",
    icon: Landmark,
    color: "from-amber-500 to-orange-400",
    destinations: [
      {
        name: "Char Dham Yatra",
        places: "Yamunotri → Gangotri → Kedarnath → Badrinath",
        duration: "11 Nights / 12 Days",
        price: "₹32,999",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=250&fit=crop",
      },
      {
        name: "Varanasi Spiritual Trail",
        places: "Kashi Vishwanath • Ganga Aarti • Sarnath • Bodh Gaya",
        duration: "4 Nights / 5 Days",
        price: "₹14,999",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "customized",
    title: "Customized Tours",
    tagline: "Your dream trip, designed exactly the way you want it",
    icon: Palette,
    color: "from-violet-500 to-purple-400",
    destinations: [
      {
        name: "Build Your Own Adventure",
        places: "Choose destinations • Set your pace • Pick experiences",
        duration: "Flexible Duration",
        price: "From ₹9,999",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      },
      {
        name: "Personal Travel Concierge",
        places: "24/7 dedicated support • VIP transfers • Private guides",
        duration: "As per your plan",
        price: "Custom Quote",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "solo",
    title: "Solo & Backpacking",
    tagline: "Epic adventures for the fearless solo traveler",
    icon: Mountain,
    color: "from-emerald-500 to-teal-400",
    destinations: [
      {
        name: "Vietnam & Cambodia Trail",
        places: "Hanoi → Ha Long Bay → Siem Reap → Phnom Penh",
        duration: "13 Nights / 14 Days",
        price: "₹42,999",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=250&fit=crop",
      },
      {
        name: "Ladakh Solo Ride",
        places: "Leh → Nubra Valley → Pangong Lake → Khardung La",
        duration: "6 Nights / 7 Days",
        price: "₹19,999",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness & Yoga Retreats",
    tagline: "Rejuvenate your mind, body & soul in serene havens",
    icon: Leaf,
    color: "from-lime-500 to-green-400",
    destinations: [
      {
        name: "Rishikesh Yoga Immersion",
        places: "Ashram Stay • Daily Yoga • Meditation • Ganga Walks",
        duration: "6 Nights / 7 Days",
        price: "₹18,999",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
      },
      {
        name: "Bali Detox Retreat",
        places: "Ubud Spa Resort • Sound Healing • Organic Cuisine",
        duration: "4 Nights / 5 Days",
        price: "₹54,999",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "wildlife",
    title: "Wildlife & Eco-Tourism",
    tagline: "Get up close with nature's most magnificent creatures",
    icon: TreePine,
    color: "from-yellow-600 to-amber-400",
    destinations: [
      {
        name: "African Safari",
        places: "Kenya Masai Mara → Tanzania Serengeti",
        duration: "7 Nights / 8 Days",
        price: "₹1,89,999",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=250&fit=crop",
      },
      {
        name: "Ranthambore & Jim Corbett",
        places: "Tiger Safari • Nature Walks • Wildlife Photography",
        duration: "4 Nights / 5 Days",
        price: "₹22,999",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=250&fit=crop",
      },
    ],
  },
];

export default function CategoriesOverlay({ isOpen, onClose }) {
  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[55] transition-all duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Overlay panel */}
      <div
        className={`absolute inset-x-0 bottom-0 top-0 overflow-y-auto transition-transform duration-500 ease-out bg-slate-50 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Explore Categories</h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Find your perfect travel experience
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all duration-200"
            aria-label="Close categories"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="px-4 py-6 pb-28 space-y-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                style={{
                  animationDelay: `${idx * 60}ms`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 p-4 border-b border-slate-100">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate">
                      {cat.tagline}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                </div>

                {/* Destination Cards */}
                <div className="p-3 space-y-3">
                  {cat.destinations.map((dest, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex gap-3 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200 cursor-pointer group"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 truncate">
                          {dest.name}
                        </h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <p className="text-[11px] text-slate-500 truncate">
                            {dest.places}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="flex items-center gap-1 text-[11px] text-slate-500">
                            <Clock className="w-3 h-3" />
                            {dest.duration}
                          </span>
                          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                            {dest.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
