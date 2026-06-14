"use client";

import { useEffect, useState } from "react";
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
  Plane,
  Tent,
  Ship,
  Sunset,
  Castle,
  Umbrella,
  Backpack,
  Waves,
  Compass,
  Map,
  Train
} from "lucide-react";

/**
 * CategoriesOverlay — Full-screen travel categories menu
 * 16 rich travel package types with sample destinations.
 * Triggered from the "Categories" bottom nav tab.
 */

// A collection of reliable, high-quality Unsplash image IDs mapped to themes.
const IMAGES = {
  SNOW: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=400&h=250&fit=crop",
  HILLS: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop",
  BEACH: "https://images.unsplash.com/photo-1507528562238-57ca881ce6b1?w=400&h=250&fit=crop",
  BEACH_AERIAL: "https://images.unsplash.com/photo-1500930250025-02f81bd670df?w=400&h=250&fit=crop",
  BEACH_SUNSET: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=250&fit=crop",
  MALDIVES: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop",
  TIGER: "https://images.unsplash.com/photo-1563299796-17596ed6b05c?w=400&h=250&fit=crop",
  SAFARI: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=250&fit=crop",
  WILDLIFE: "https://images.unsplash.com/photo-1518331647614-7e1f04cd58ea?w=400&h=250&fit=crop",
  ELEPHANT: "https://images.unsplash.com/photo-1550184658-c2a4af8cd71c?w=400&h=250&fit=crop",
  VARANASI: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=250&fit=crop",
  TEMPLE: "https://images.unsplash.com/photo-1584996969566-ee40a02fba7b?w=400&h=250&fit=crop",
  FORT: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop",
  TAJ_MAHAL: "https://images.unsplash.com/photo-1514222785103-4f9e31a1a9ed?w=400&h=250&fit=crop",
  PALACE: "https://images.unsplash.com/photo-1582500057217-1f480ff6b825?w=400&h=250&fit=crop",
  DUBAI: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
  PARIS: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=250&fit=crop",
  NY: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
  SYDNEY: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=250&fit=crop",
  THAI: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop",
  SANTORINI: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=250&fit=crop",
  CRUISE: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=250&fit=crop",
  YOGA: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
  BALI: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop",
  KERALA: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=250&fit=crop",
  TREK: "https://images.unsplash.com/photo-1454496506484-ddf00cb1017e?w=400&h=250&fit=crop",
  LAKE: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=250&fit=crop",
  DESERT: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=250&fit=crop",
};

const categories = [
  {
    id: "domestic",
    title: "Incredible India",
    tagline: "Discover the beauty and diversity of India",
    icon: Map,
    color: "from-orange-500 to-rose-400",
    destinations: [
      { name: "Kashmir Paradise", places: "Srinagar → Gulmarg → Pahalgam", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/kashmir_paradise_1781400555245.png" },
      { name: "Kerala God's Own Country", places: "Munnar → Thekkady → Alleppey", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/kerala_gods_own_country_1781400571738.png" },
      { name: "Rajasthan Royal Tour", places: "Jaipur → Jodhpur → Udaipur", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Andaman Islands", places: "Port Blair → Havelock → Neil Island", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/andaman_islands_1781400607128.png" },
      { name: "North East Delights", places: "Guwahati → Shillong → Cherrapunji", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/north_east_delights_1781400624954.png" }
    ],
  },
  {
    id: "international",
    title: "International Escapes",
    tagline: "Explore the best destinations around the globe",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    destinations: [
      { name: "European Highlights", places: "Paris → Rome → Swiss Alps", duration: "9 Nights / 10 Days", price: "At best price", image: "/images/destinations/european_highlights_1781400639705.png" },
      { name: "Dubai Glamour", places: "Burj Khalifa • Desert Safari • Dhow Cruise", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/dubai_glamour_1781400656516.png" },
      { name: "Southeast Asia Explorer", places: "Bangkok → Phuket → Bali", duration: "10 Nights / 11 Days", price: "At best price", image: "/images/destinations/southeast_asia_explorer_1781400674121.png" },
      { name: "USA East Coast", places: "New York → Washington DC → Niagara", duration: "8 Nights / 9 Days", price: "At best price", image: "/images/destinations/usa_east_coast_1781400690675.png" },
      { name: "Australia & New Zealand", places: "Sydney → Gold Coast → Auckland", duration: "12 Nights / 13 Days", price: "At best price", image: "/images/destinations/australia_new_zealand_1781400725360.png" }
    ],
  },
  {
    id: "honeymoon",
    title: "Romantic Honeymoons",
    tagline: "Begin your forever with unforgettable romantic escapes",
    icon: Heart,
    color: "from-rose-500 to-pink-400",
    destinations: [
      { name: "Maldives Romance", places: "Overwater Villa • Private Beach Dinner", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/maldives_romance_1781400798242.png" },
      { name: "Santorini Dream", places: "Greece Coastal Paradise • Sunset Cruise", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/santorini_dream_1781400814713.png" },
      { name: "Mauritius Escape", places: "Luxury Resorts • Catamaran Cruise", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" },
      { name: "Bali Love Spell", places: "Ubud Villas • Nusa Penida • Swing", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/bali_love_spell_1781400849535.png" },
      { name: "Swiss Alps Honeymoon", places: "Zurich → Lucerne → Interlaken", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/swiss_alps_honeymoon_1781400866221.png" }
    ],
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage & Darshan",
    tagline: "Sacred journeys to the holiest destinations",
    icon: Landmark,
    color: "from-amber-500 to-orange-400",
    destinations: [
      { name: "Char Dham Yatra", places: "Yamunotri → Gangotri → Kedarnath → Badrinath", duration: "11 Nights / 12 Days", price: "At best price", image: "/images/destinations/char_dham_yatra_1781400883905.png" },
      { name: "Kashi & Ayodhya Darshan", places: "Varanasi • Ayodhya Ram Mandir • Prayagraj", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/kashi_ayodhya_darshan_1781400900579.png" },
      { name: "Tirupati Balaji", places: "Tirupati Darshan • Kalahasti", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/kashi_ayodhya_darshan_1781400900579.png" },
      { name: "Mata Vaishno Devi", places: "Jammu → Katra → Bhawan", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/char_dham_yatra_1781400883905.png" },
      { name: "Golden Temple & Wagah", places: "Amritsar • Jallianwala Bagh • Wagah Border", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/kashi_ayodhya_darshan_1781400900579.png" }
    ],
  },
  {
    id: "adventure",
    title: "Adventure & Trekking",
    tagline: "Thrilling escapades for the adrenaline junkies",
    icon: Tent,
    color: "from-red-500 to-orange-500",
    destinations: [
      { name: "Everest Base Camp Trek", places: "Kathmandu → Lukla → Namche → EBC", duration: "13 Nights / 14 Days", price: "At best price", image: "/images/destinations/swiss_alps_honeymoon_1781400866221.png" },
      { name: "Leh Ladakh Bike Expedition", places: "Manali → Sarchu → Leh → Khardung La", duration: "9 Nights / 10 Days", price: "At best price", image: "/images/destinations/kashmir_paradise_1781400555245.png" },
      { name: "Spiti Valley Circuit", places: "Shimla → Kaza → Chandratal → Manali", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/manali.png" },
      { name: "Rishikesh Rafting & Camping", places: "Ganga River Rafting • Bungee Jumping", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/north_east_delights_1781400624954.png" },
      { name: "Scuba Diving Andaman", places: "Havelock Island Open Water Dive", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/andaman_islands_1781400607128.png" }
    ],
  },
  {
    id: "wildlife",
    title: "Wildlife & Safari",
    tagline: "Get up close with nature's magnificent creatures",
    icon: TreePine,
    color: "from-green-600 to-emerald-500",
    destinations: [
      { name: "Masai Mara Safari, Kenya", places: "Nairobi → Masai Mara → Lake Nakuru", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Jim Corbett National Park", places: "Jeep Safari • Elephant Safari • Resort Stay", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/meghalaya.png" },
      { name: "Ranthambore Tiger Safari", places: "Sawai Madhopur • Safari • Fort Visit", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Kaziranga Rhino Tour", places: "Guwahati → Kaziranga Safari", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/north_east_delights_1781400624954.png" },
      { name: "Bandhavgarh & Kanha", places: "Madhya Pradesh Tiger Trails", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/meghalaya.png" }
    ],
  },
  {
    id: "hillstation",
    title: "Hill Station Retreats",
    tagline: "Escape the heat and relax in the cool mountains",
    icon: Mountain,
    color: "from-sky-500 to-blue-400",
    destinations: [
      { name: "Manali Wonderland", places: "Rohtang Pass • Solang Valley • Kasol", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/manali.png" },
      { name: "Shimla & Kufri", places: "Mall Road • Jakhu Temple • Snow Peaks", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/kashmir_paradise_1781400555245.png" },
      { name: "Darjeeling & Gangtok", places: "Tiger Hill • Tea Gardens • Nathu La", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/north_east_delights_1781400624954.png" },
      { name: "Ooty & Coonoor", places: "Botanical Garden • Nilgiri Mountain Railway", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/meghalaya.png" },
      { name: "Munnar Tea Estates", places: "Eravikulam • Mattupetty Dam • Echo Point", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/kerala_gods_own_country_1781400571738.png" }
    ],
  },
  {
    id: "beach",
    title: "Beach Holidays",
    tagline: "Sun, sand, and sea for the perfect tropical vacation",
    icon: Waves,
    color: "from-cyan-500 to-teal-400",
    destinations: [
      { name: "Goa Vibes", places: "Baga Beach • Fort Aguada • Dudhsagar", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" },
      { name: "Maldives Luxury", places: "Water Villas • Snorkeling • Spa", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/maldives_romance_1781400798242.png" },
      { name: "Phuket & Krabi", places: "Phi Phi Islands • Tiger Cave • Patong", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/andaman_islands_1781400607128.png" },
      { name: "Andaman Coastal", places: "Radhanagar Beach • Cellular Jail", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/andaman_islands_1781400607128.png" },
      { name: "Seychelles Retreat", places: "Praslin • La Digue • Mahe", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" }
    ],
  },
  {
    id: "heritage",
    title: "Heritage & Culture",
    tagline: "Dive into history with magnificent monuments and forts",
    icon: Castle,
    color: "from-yellow-700 to-amber-600",
    destinations: [
      { name: "Golden Triangle Tour", places: "Delhi → Agra (Taj Mahal) → Jaipur", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Hampi Ruins", places: "Vijayanagara Empire • Virupaksha Temple", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Egypt Pyramids", places: "Cairo → Luxor → Aswan Cruise", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/dubai_glamour_1781400656516.png" },
      { name: "Rome & Florence", places: "Colosseum • Vatican • Michelangelo", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/european_highlights_1781400639705.png" },
      { name: "Ajanta & Ellora", places: "Aurangabad • Ancient Cave Art", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/kashi_ayodhya_darshan_1781400900579.png" }
    ],
  },
  {
    id: "cruise",
    title: "Cruise Vacations",
    tagline: "Luxurious voyages across the majestic oceans",
    icon: Ship,
    color: "from-blue-600 to-indigo-500",
    destinations: [
      { name: "Singapore to Malaysia", places: "Royal Caribbean / Genting Dream", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/australia_new_zealand_1781400725360.png" },
      { name: "Mumbai to Goa Cruise", places: "Cordelia Cruises • Ocean View", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" },
      { name: "Mediterranean Voyage", places: "Spain → Italy → France", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/santorini_dream_1781400814713.png" },
      { name: "Alaska Glacier Cruise", places: "Seattle → Juneau → Glacier Bay", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/swiss_alps_honeymoon_1781400866221.png" },
      { name: "Nile River Cruise", places: "Luxor → Aswan • Temple Visits", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/dubai_glamour_1781400656516.png" }
    ],
  },
  {
    id: "wellness",
    title: "Wellness & Yoga",
    tagline: "Rejuvenate your mind, body & soul in serene havens",
    icon: Leaf,
    color: "from-lime-500 to-green-400",
    destinations: [
      { name: "Rishikesh Yoga Retreat", places: "Ashram Stay • Daily Yoga • Meditation", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/kashi_ayodhya_darshan_1781400900579.png" },
      { name: "Kerala Ayurveda", places: "Kovalam • Panchakarma • Spa", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/kerala_gods_own_country_1781400571738.png" },
      { name: "Bali Healing & Spa", places: "Ubud • Sound Healing • Organic Food", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/bali_love_spell_1781400849535.png" },
      { name: "Auroville Zen", places: "Pondicherry • Matrimandir • Silent Retreat", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/kerala_gods_own_country_1781400571738.png" },
      { name: "Himalayan Vipassana", places: "Dharamshala • Buddhist Monasteries", duration: "10 Nights / 11 Days", price: "At best price", image: "/images/destinations/kashmir_paradise_1781400555245.png" }
    ],
  },
  {
    id: "weekend",
    title: "Weekend Getaways",
    tagline: "Short escapes to refresh your routine",
    icon: Sunset,
    color: "from-fuchsia-500 to-purple-400",
    destinations: [
      { name: "Lonavala & Khandala", places: "Tiger Point • Bhushi Dam • Caves", duration: "1 Night / 2 Days", price: "At best price", image: "/images/destinations/meghalaya.png" },
      { name: "Coorg Coffee Trails", places: "Abbey Falls • Coffee Estates", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/kerala_gods_own_country_1781400571738.png" },
      { name: "Pondicherry French Vibe", places: "White Town • Promenade Beach", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" },
      { name: "Mahabaleshwar", places: "Pratapgarh Fort • Mapro Garden", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/meghalaya.png" },
      { name: "Mussoorie Quick Break", places: "Kempty Falls • Mall Road • Lal Tibba", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/manali.png" }
    ],
  },
  {
    id: "backpacking",
    title: "Solo & Backpacking",
    tagline: "Epic adventures for the fearless solo traveler",
    icon: Backpack,
    color: "from-emerald-600 to-teal-500",
    destinations: [
      { name: "Vietnam & Cambodia", places: "Hanoi → Siem Reap → Ho Chi Minh", duration: "10 Nights / 11 Days", price: "At best price", image: "/images/destinations/southeast_asia_explorer_1781400674121.png" },
      { name: "Kasol & Tosh", places: "Parvati Valley Trek • Cafe Hopping", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/manali.png" },
      { name: "Eurotrip Backpacking", places: "Hostels • Eurail Pass • 5 Countries", duration: "14 Nights / 15 Days", price: "At best price", image: "/images/destinations/european_highlights_1781400639705.png" },
      { name: "Meghalaya Backpacking", places: "Shillong • Dawki • Root Bridges", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/meghalaya.png" },
      { name: "Gokarna Beach Trail", places: "Om Beach • Kudle • Half Moon Trek", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" }
    ],
  },
  {
    id: "corporate",
    title: "Corporate & MICE",
    tagline: "Team retreats, offsites & leadership summits",
    icon: Briefcase,
    color: "from-slate-600 to-slate-500",
    destinations: [
      { name: "Goa Leadership Summit", places: "5-Star Resort • Gala Dinner", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/mauritius_escape_1781400832534.png" },
      { name: "Dubai Team Reward", places: "Yacht Party • Desert Safari Dinner", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/dubai_glamour_1781400656516.png" },
      { name: "Ramoji Film City", places: "Hyderabad • Studio Tour • Events", duration: "2 Nights / 3 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Bangkok Corporate", places: "Conference Venues • City Tour", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/southeast_asia_explorer_1781400674121.png" },
      { name: "Kyoto Zen Retreat", places: "Tea Ceremony • Strategy Sessions", duration: "4 Nights / 5 Days", price: "At best price", image: "/images/destinations/southeast_asia_explorer_1781400674121.png" }
    ],
  },
  {
    id: "luxury",
    title: "Luxury Experiences",
    tagline: "Indulge in ultimate opulence and world-class hospitality",
    icon: Compass,
    color: "from-yellow-500 to-amber-400",
    destinations: [
      { name: "Burj Al Arab Dubai", places: "7-Star Stay • Helipad Tour • Fine Dining", duration: "3 Nights / 4 Days", price: "At best price", image: "/images/destinations/dubai_glamour_1781400656516.png" },
      { name: "Palace on Wheels", places: "Delhi → Jaipur → Jaisalmer → Agra", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Private Island Maldives", places: "Exclusive Villa • Seaplane Transfer", duration: "5 Nights / 6 Days", price: "At best price", image: "/images/destinations/maldives_romance_1781400798242.png" },
      { name: "Swiss Chalet Retreat", places: "St. Moritz • Skiing • Fondue Nights", duration: "6 Nights / 7 Days", price: "At best price", image: "/images/destinations/swiss_alps_honeymoon_1781400866221.png" },
      { name: "French Riviera Yacht", places: "Monaco → Cannes → Nice", duration: "7 Nights / 8 Days", price: "At best price", image: "/images/destinations/santorini_dream_1781400814713.png" }
    ],
  },
  {
    id: "customized",
    title: "Customized Tours",
    tagline: "Your dream trip, designed exactly the way you want it",
    icon: Palette,
    color: "from-violet-500 to-purple-400",
    destinations: [
      { name: "Build Your Own Adventure", places: "Choose destinations • Set your pace", duration: "Flexible Duration", price: "At best price", image: "/images/destinations/meghalaya.png" },
      { name: "Personal Travel Concierge", places: "24/7 dedicated support • VIP transfers", duration: "As per your plan", price: "At best price", image: "/images/destinations/dubai_glamour_1781400656516.png" },
      { name: "Surprise Destination", places: "We plan, you pack • Budget-based", duration: "Flexible Duration", price: "At best price", image: "/images/destinations/andaman_islands_1781400607128.png" },
      { name: "Destination Weddings", places: "End-to-end planning • Guests & Stay", duration: "Multi-day", price: "At best price", image: "/images/destinations/rajasthan_royal_tour_1781400589901.png" },
      { name: "Special Needs Travel", places: "Accessible tours • Guided support", duration: "Flexible Duration", price: "At best price", image: "/images/destinations/kerala_gods_own_country_1781400571738.png" }
    ],
  }
];

export default function CategoriesOverlay({ isOpen, onClose }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

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
        className={`absolute inset-x-0 bottom-0 top-0 overflow-y-auto transition-transform duration-500 ease-out bg-background ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-card-border bg-nav-bg backdrop-blur-md">
          <div>
            <h2 className="text-xl font-bold text-foreground">Explore Categories</h2>
            <p className="text-sm text-muted mt-0.5">
              Find your perfect travel experience
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted-bg border border-card-border flex items-center justify-center text-muted hover:bg-card-border hover:text-foreground transition-all duration-200"
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
                className="rounded-2xl border border-card-border bg-card-bg shadow-sm overflow-hidden"
                style={{
                  animationDelay: `${idx * 60}ms`,
                }}
              >
                {/* Category Header */}
                <div 
                  className={`flex items-center gap-3 p-4 cursor-pointer transition-colors hover:bg-muted-bg ${expandedCategory === cat.id ? "border-b border-card-border bg-muted-bg" : ""}`}
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted truncate">
                      {cat.tagline}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${expandedCategory === cat.id ? "rotate-90" : ""}`} />
                </div>

                {/* Destination Cards */}
                {expandedCategory === cat.id && (
                  <div className="p-3 space-y-3 animate-in slide-in-from-top-1 fade-in duration-200">
                    {cat.destinations.map((dest, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex gap-3 p-2 rounded-xl bg-muted-bg hover:bg-card-border transition-colors duration-200 cursor-pointer group"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-card-border">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground truncate">
                          {dest.name}
                        </h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-muted shrink-0" />
                          <p className="text-[11px] text-muted truncate">
                            {dest.places}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="flex items-center gap-1 text-[11px] text-muted">
                            <Clock className="w-3 h-3" />
                            {dest.duration}
                          </span>
                          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-success">
                            {dest.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
