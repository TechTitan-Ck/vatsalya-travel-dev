"use client";

/**
 * TripToggle Component — Premium Pill Toggle
 * Teal gradient active state with smooth transitions.
 */
export default function TripToggle({ tripType, setTripType }) {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="relative flex p-1.5 bg-muted-bg/80 backdrop-blur-xl rounded-full border border-card-border shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]">
        {/* Domestic Toggle */}
        <button
          onClick={() => setTripType("domestic")}
          className={`relative z-10 flex-1 py-3.5 px-6 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-400 ease-out ${
            tripType === "domestic"
              ? "gradient-bg text-white shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)] scale-[1.01]"
              : "text-muted hover:text-foreground hover:bg-card-bg/60"
          }`}
        >
          Domestic Trips
        </button>

        {/* International Toggle */}
        <button
          onClick={() => setTripType("international")}
          className={`relative z-10 flex-1 py-3.5 px-6 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-400 ease-out ${
            tripType === "international"
              ? "gradient-bg text-white shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)] scale-[1.01]"
              : "text-muted hover:text-foreground hover:bg-card-bg/60"
          }`}
        >
          International Trips
        </button>
      </div>
    </section>
  );
}
