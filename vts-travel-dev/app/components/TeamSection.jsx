"use client";

import { teamMembers } from "../data/packages";
import { Mail } from "lucide-react";

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/**
 * TeamSection — Travel Experts Showcase
 * Gradient glow aura behind avatars, serif header, hover social links.
 */
export default function TeamSection() {
  return (
    <section id="about" className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
        Meet Our Experts
      </h2>
      <p className="text-sm text-muted mt-1.5 leading-relaxed">
        Passionate professionals dedicated to making your trips unforgettable
      </p>
      <span className="section-line mb-6" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, idx) => (
          <div
            key={member.id}
            className="bg-card-bg border border-card-border rounded-2xl p-5 text-center card-hover group animate-slide-up"
            style={{
              animationDelay: `${idx * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            {/* Avatar with gradient glow aura */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
              <div className="avatar-glow w-full h-full">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="relative w-full h-full rounded-full object-cover ring-2 ring-card-border group-hover:ring-primary/30 transition-all duration-300 z-10"
                  loading="lazy"
                />
              </div>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight">
              {member.name}
            </h3>
            <p className="text-[11px] text-primary font-semibold mb-1.5 tracking-wide uppercase">
              {member.designation}
            </p>
            <p className="text-[11px] sm:text-xs text-muted leading-relaxed mb-3 line-clamp-2">
              {member.bio}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="w-8 h-8 rounded-lg bg-muted-bg flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="w-3.5 h-3.5 text-muted" />
              </button>
              <button
                className="w-8 h-8 rounded-lg bg-muted-bg flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <Linkedin className="w-3.5 h-3.5 text-muted" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
