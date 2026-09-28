import React, { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

const PACKAGES = [
  {
    id: "pkg-1",
    title: "Bhutan First-Time Explorer",
    subtitle: "Paro • Thimphu • Punakha",
    price: "₹22,999",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85",
    days: "5 Days",
    tag: "Best Seller",
  },
  {
    id: "pkg-2",
    title: "Romantic Bhutan Escape",
    subtitle: "Paro • Thimphu • Punakha",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=900&q=85",
    days: "6 Days",
    tag: "Romantic",
  },
  {
    id: "pkg-3",
    title: "Bhutan Family Escape",
    subtitle: "Thimphu • Punakha • Paro",
    price: "₹27,999",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    days: "6 Days",
    tag: "Family Choice",
  },
];

export function Packages() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.8;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#fffaf5] py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow ambient element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-3.5 py-1.5 backdrop-blur-sm">
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Curated Bhutan Journeys
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Top Bhutan{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Holiday Packages
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
            Discover thoughtfully planned Bhutan journeys with handpicked
            destinations, comfortable stays, local experiences, and flexible
            options for every kind of traveller.
          </p>

          <div
            aria-hidden="true"
            className="mt-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400 sm:w-16" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400 sm:w-16" />
          </div>
        </header>

        {/* Carousel / Card Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Slider Controls (visible on screens where slider activates) */}
          <button
            type="button"
            aria-label="Previous packages"
            onClick={() => handleScroll("previous")}
            className="absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/90 p-3 text-slate-700 shadow-md backdrop-blur-sm transition duration-200 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 md:flex lg:-left-6"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next packages"
            onClick={() => handleScroll("next")}
            className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/90 p-3 text-slate-700 shadow-md backdrop-blur-sm transition duration-200 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 md:flex lg:-right-6"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 scrollbar-none sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div
          aria-hidden="true"
          className="mt-6 flex items-center justify-center gap-2 sm:hidden"
        >
          <span className="h-2 w-7 rounded-full bg-orange-500" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

function PackageCard({ packageData }) {
  const { title, subtitle, price, image, days, tag } = packageData;

  return (
    <article className="group flex w-[85vw] max-w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-auto sm:max-w-none">
      {/* Visual Header */}
      <div className="relative h-52 overflow-hidden sm:h-56 lg:h-60">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
          {tag}
        </span>

        <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
          <Clock3 size={13} className="text-orange-500" />
          {days}
        </span>

        <h3 className="absolute bottom-4 left-4 right-20 text-base font-bold leading-snug text-white sm:text-lg">
          {title}
        </h3>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <MapPin size={14} className="shrink-0 text-orange-500" />
            <span className="truncate">{subtitle}</span>
          </div>
          <div className="my-4 h-px bg-slate-100" />
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              Starting from
            </span>
            <p className="mt-0.5 text-2xl font-black tracking-tight text-slate-900">
              {price}
            </p>
            <span className="text-[11px] text-slate-400">per person</span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
          >
            Explore
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Packages;