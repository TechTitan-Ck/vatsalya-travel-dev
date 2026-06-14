"use client";

import { Plane, Hotel, Map, FileCheck, Shield, Headphones, Clock, CreditCard, Car, Heart, Briefcase, Compass } from "lucide-react";

/**
 * Services Component — Travel Solutions & Trust Badges
 * Soft-glow icon circles, serif section headers, refined hover effects.
 */

const services = [
  {
    icon: Map,
    title: "Tour Packages",
    description: "Curated experiences and memorable journeys tailored to your preferences.",
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Booking",
    description: "Handpicked luxury hotels, resorts & homestays at unbeatable prices.",
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: Plane,
    title: "Flight & Train Booking",
    description: "Best deals on domestic & international flights and train reservations.",
    color: "from-teal-500 to-cyan-600",
    glow: "shadow-teal-500/20",
  },
  {
    icon: Car,
    title: "Cab & Transportation",
    description: "Reliable and comfortable transfers, outstation cabs, and rentals.",
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description: "Romantic getaways designed to create lifelong memories for couples.",
    color: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/20",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Streamlined business travel solutions, offsites, and MICE events.",
    color: "from-slate-500 to-zinc-600",
    glow: "shadow-slate-500/20",
  },
  {
    icon: Compass,
    title: "Customized Tours",
    description: "Personalized itineraries built from scratch to match your travel style.",
    color: "from-purple-500 to-fuchsia-600",
    glow: "shadow-purple-500/20",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "Hassle-free visa processing with 98% success rate for all countries.",
    color: "from-red-500 to-rose-600",
    glow: "shadow-red-500/20",
  },
];

const trustBadges = [
  { icon: Shield, label: "Safe & Secure Travel", detail: "100% verified partners" },
  { icon: Headphones, label: "24/7 Support", detail: "Always here for you" },
  { icon: Clock, label: "On-Time Guarantee", detail: "Punctual departures" },
  { icon: CreditCard, label: "Easy Payments", detail: "Multiple Payment Options" },
];

export default function Services() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      {/* Services Section */}
      <div className="mb-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Comprehensive Travel Solutions
        </h2>
        <p className="text-sm text-muted mt-1.5 leading-relaxed">
          Everything you need for the perfect trip, all under one roof
        </p>
        <span className="section-line" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-card-bg border border-card-border rounded-2xl p-5 sm:p-6 card-hover group text-center hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col items-center"
              >
                {/* Subtle background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

                <div
                  className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg ${service.glow} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative z-10`}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] sm:text-base font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed hidden sm:block relative z-10">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust Badges Section */}
      <div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Your Trusted Travel Partner
        </h2>
        <p className="text-sm text-muted mt-1.5 leading-relaxed">
          Trusted by 1,000+ happy travelers across India
        </p>
        <span className="section-line" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 sm:p-4 bg-card-bg border border-card-border rounded-xl hover:border-primary/25 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-foreground truncate tracking-tight">
                    {badge.label}
                  </p>
                  <p className="text-[10px] text-muted truncate">{badge.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
