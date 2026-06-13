"use client";

/**
 * TripToggle Component — Premium Pill Toggle
 * Teal gradient active state with smooth transitions.
 */
export default function TripToggle({ tripType, setTripType }) {
  return (
    <section className="px-4 py-4 max-w-7xl mx-auto">
      <div className="flex gap-2 p-1.5 bg-muted-bg rounded-2xl border border-card-border shadow-sm">
        {/* Domestic Toggle */}
        <button
          onClick={() => setTripType("domestic")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
            tripType === "domestic"
              ? "gradient-bg text-white shadow-lg shadow-primary/25 scale-[1.02]"
              : "text-muted hover:text-foreground hover:bg-card-bg"
          }`}
        >
          Domestic Trips
        </button>

        {/* International Toggle */}
        <button
          onClick={() => setTripType("international")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
            tripType === "international"
              ? "gradient-bg text-white shadow-lg shadow-primary/25 scale-[1.02]"
              : "text-muted hover:text-foreground hover:bg-card-bg"
          }`}
        >
          International Trips
        </button>
      </div>
    </section>
  );
}
