
import { useState } from "react";
import {
  Hotel,
  Car,
  ShieldCheck,
  Map,
  Languages,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    title: "Handpicked 3★/4★/5★ Stays",
    icon: Hotel,
    text: "Stay in carefully selected hotels, resorts and retreats chosen for comfort, location, quality, and a relaxing Bhutan experience.",
  },
  {
    title: "Exclusive Private Vehicle",
    icon: Car,
    text: "Travel comfortably in a private vehicle with experienced local drivers throughout your Bhutan journey.",
  },
  {
    title: "24×7 Local Emergency Desk",
    icon: ShieldCheck,
    text: "Receive local assistance whenever you need support during your Bhutan journey.",
  },
  {
    title: "SDF Included",
    icon: Map,
    text: "We help manage the essential travel arrangements for a smoother and more convenient trip.",
  },
  {
    title: "Curated Experiences",
    icon: Map,
    text: "Discover carefully selected cultural, scenic, and local experiences across Bhutan.",
  },
  {
    title: "English-Speaking Guide",
    icon: Languages,
    text: "Explore Bhutan with friendly and experienced English-speaking guides.",
  },
];

function PackageIncludes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section
      id="included"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Every ZiniGo Package Includes
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-5 text-slate-600 sm:text-base">
            From comfortable stays to local support and carefully planned
            experiences, every ZiniGo package covers the essentials for a
            smooth and memorable Bhutan journey.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[392px_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* Navigation list */}
          <div
            className="border-t border-slate-200"
            role="tablist"
            aria-orientation="vertical"
          >
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`package-panel-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center justify-between border-b border-slate-200 px-3 py-4 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-slate-800 hover:bg-orange-50"
                  }`}
                >
                  <span>{item.title}</span>

                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? "translate-x-0 text-white"
                        : "text-slate-900 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id={`package-panel-${activeIndex}`}
            role="tabpanel"
            className="flex min-h-[255px] flex-col justify-center rounded-xl border border-slate-300 bg-white px-8 py-10 sm:px-12"
          >
            <ActiveIcon
              size={21}
              strokeWidth={1.8}
              className="mb-5 text-orange-500"
            />

            <h3 className="max-w-sm text-xl font-semibold leading-6 text-slate-900 sm:text-2xl">
              {activeItem.title}
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-5 text-slate-600">
              {activeItem.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageIncludes;