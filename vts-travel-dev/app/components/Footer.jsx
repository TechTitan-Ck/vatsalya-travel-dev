"use client";

import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Youtube = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

/**
 * Footer — Premium Dark Glass Panel
 * Teal accents, serif branding, social icons with hover colors.
 */
export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Domestic Packages", href: "#" },
    { label: "International Packages", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/vatsaltravel",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/vatsaltravel",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@vatsaltravel",
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-muted-bg border-t border-card-border mt-10 pb-28 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-primary/15">
                <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                Vatsalya Tourism & Services
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Your trusted partner for premium domestic & international travel
              experiences. Creating memories that last a lifetime since 2010.
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

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
                  123 Travel Street, Ahmedabad, Gujarat, India - 380001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:hello@vatsaltravel.com"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  hello@vatsalyatravel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-card-border text-center">
          <p className="text-xs text-muted flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Vatsalya Tourism & Services. Made with{" "}
            <Heart className="w-3 h-3 text-accent fill-accent" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
