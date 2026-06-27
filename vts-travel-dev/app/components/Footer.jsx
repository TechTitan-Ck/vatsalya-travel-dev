"use client";

import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

/**
 * Footer — Premium Dark Glass Panel
 * Teal accents, serif branding, social icons with hover colors.
 */
export default function Footer({ setTripType }) {


  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/vatsalya_tourism_services/?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODlkZg%3D%3D",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1EJoALCqrh/",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@vatsalyatourismservices?si=5y3yGXi3--cU8WLK",
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer id="contact" className="bg-muted-bg border-t border-card-border mt-10 pb-28 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div>
            <div className="inline-flex flex-col mb-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-left hover:opacity-90 transition-opacity focus:outline-none pb-1"
              >
                <img src="/images/logo.png" alt="VTS Logo" className="w-14 h-12 object-contain drop-shadow-md" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[20px] sm:text-xl font-sans font-bold tracking-tight text-foreground">
                    VATSALYA
                  </span>
                  <span className="text-[9px] text-muted uppercase tracking-[0.2em] font-medium">
                    Tourism & Services
                  </span>
                </div>
              </button>
              <div className="w-full h-[1px] bg-gradient-to-r from-card-border via-primary/30 to-transparent rounded-full" />
            </div>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Your trusted partner for premium domestic & international travel
              experiences. Creating memories that last a lifetime since 2020.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-muted ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-sm`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links & Packages */}
          <div className="flex gap-6 sm:gap-10">
            {/* Column 1 */}
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm text-muted hover:text-primary transition-colors duration-200">
                    Home
                  </button>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Vertical Line */}
            <div className="w-px bg-card-border" />

            {/* Column 2 */}
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-4">
                Packages
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#packages" onClick={() => setTripType && setTripType("domestic")} className="text-sm text-muted hover:text-primary transition-colors duration-200 text-left">
                    Domestic Packages
                  </a>
                </li>
                <li>
                  <a href="#packages" onClick={() => setTripType && setTripType("international")} className="text-sm text-muted hover:text-primary transition-colors duration-200 text-left">
                    International Packages
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted leading-relaxed">
                  Building No./Flat No. : 198/ 1524, Ground Floor,
                  Pakariabar, Ara, Patna, Bihar, PostCode - 802210
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+918541035585, +917463992161"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  +918541035585, +917463992161
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@vatsalyatourism.com"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  info@vatsalyatourism.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-card-border text-center">
          <p className="text-xs text-muted flex items-center justify-center gap-1.5 font-medium tracking-wide">
            © {new Date().getFullYear()} VATSALYA Tourism & Services. Made with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
