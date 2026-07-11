import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "VATSALYA Tourism & Services — Premium Travel Experiences",
  description:
    "Discover incredible domestic and international travel packages with VATSALYA Travel & Tourism. Book flights, hotels, guided tours, and more — your trusted travel partner since 2010.",
  keywords: [
    "travel", "tourism", "Services", "travel packages", "domestic trips",
    "international trips", "Tourism & Services", "VATSALYA Tourism & Services","VATSALYA Tourism", "India tours",
    "Dubai", "Maldives", "Kashmir", "Kerala",
  ],
  openGraph: {
    title: "VATSALYA Tourism & Services — Premium Travel Experiences",
    description:
      "Book your dream vacation with VATSALYA Tourism & Services. Premium domestic & international packages at the best prices.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0B4C8C" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 relative">
        {/* Theme B Ambient Ocean Gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#1E79C9] to-[#0B4C8C] pointer-events-none opacity-15 dark:opacity-30" style={{ zIndex: 0 }} />

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col min-h-full">
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
