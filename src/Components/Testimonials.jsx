import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffaf5] to-white py-20 sm:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <Sparkles size={14} className="text-orange-500" />

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-orange-600">
              Traveller Stories
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Loved by Travellers.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Remembered for a Lifetime.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From the first enquiry to the journey home, discover what our
            travellers have to say about their Bhutan experience.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
        </div>

        {/* Testimonial content */}
        <div className="mx-auto mt-14 grid w-full max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-[0_20px_50px_rgba(15,23,42,0.13)]">
              <img
                src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=85"
                alt="Traveller enjoying Bhutan"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px]"
              />
            </div>

            {/* Previous button */}
            <button
              type="button"
              aria-label="Previous testimonial"
              className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 sm:-left-5"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next button */}
            <button
              type="button"
              aria-label="Next testimonial"
              className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 sm:-right-5"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image badge */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-center text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm">
              Bhutan memories that last
            </div>
          </div>

          {/* Review card */}
          <article className="mx-auto flex w-full max-w-[520px] flex-col items-center rounded-[2rem] border border-orange-100 bg-white px-6 py-9 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:px-10 sm:py-12">
            {/* Quote icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
              <Quote size={25} fill="currentColor" />
            </div>

            {/* Avatar */}
            <div className="mt-6 flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-lg font-bold text-white shadow-lg">
                P
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">
                Priya & Rahul
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Mumbai • Romantic Bhutan Escape
              </p>
            </div>

            {/* Rating */}
            <div
              className="mt-6 flex justify-center gap-1 text-orange-500"
              aria-label="5 out of 5 stars"
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} size={17} fill="currentColor" />
              ))}
            </div>

            {/* Review */}
            <blockquote className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              “Everything was beautifully planned. The hotels were comfortable,
              our driver was excellent, and we got to experience Bhutan beyond
              the usual tourist spots.”
            </blockquote>

            <div className="mt-7 h-px w-20 bg-orange-200" />

            <p className="mt-5 text-xs font-medium text-slate-400">
              Written on 18 July 2024
            </p>
          </article>
        </div>

        {/* Centered indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-9 rounded-full bg-orange-500" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;