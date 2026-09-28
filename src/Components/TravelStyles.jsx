import {
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  Wallet,
  Bike,
  Mountain,
} from "lucide-react";

const styles = [
  {
    title: "Honeymoon",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=85",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Family",
    image:
      "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=85",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=85",
    icon: Sparkles,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Senior",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=85",
    icon: Mountain,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Budget",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85",
    icon: Wallet,
    color: "from-emerald-500 to-green-500",
  },

  {
    title: "Bike",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85",
    icon: Bike,
    color: "from-slate-600 to-slate-800",
  },
];

function TravelStyles() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-orange-600">
            Travel Styles
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Travel Style
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            Whether you're planning a romantic escape, family holiday, group
            adventure, or a relaxed Himalayan journey, discover a Bhutan
            experience tailored to the way you love to travel.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
        </div>

        {/* Centered Card Grid */}
        <div className="mx-auto flex w-full max-w-6xl justify-center">
          <div className="grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {styles.map((style, index) => (
              <StyleCard key={style.title} style={style} index={index} />
            ))}
          </div>
        </div>

        {/* Centered CTA */}
        <button className="group mt-12 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg">
          Explore All Packages
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}

function StyleCard({ style, index }) {
  const Icon = style.icon;

  return (
    <article
      className={`group relative w-full max-w-[280px] ${
        index === styles.length - 1
          ? "col-span-2 sm:col-span-1 lg:col-start-2"
          : ""
      }`}
    >
      <div className="relative aspect-[1.25/1] overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/80 sm:aspect-[1.2/1]">
        {/* Image */}
        <img
          src={style.image}
          alt={`${style.title} travel in Bhutan`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

        {/* Color Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 transition-opacity duration-500 group-hover:opacity-35`}
        />

        {/* Icon */}
        <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/20 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon size={18} className="text-white" />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-lg font-bold tracking-wide text-white sm:text-xl">
            {style.title}
          </h3>

          <div
            className={`mt-2 h-0.5 w-8 bg-gradient-to-r ${style.color} transition-all duration-500 group-hover:w-full`}
          />

          <div className="mt-3 flex translate-y-2 items-center gap-2 text-xs font-semibold text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span>Explore style</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default TravelStyles;