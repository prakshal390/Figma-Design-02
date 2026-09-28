import {
  Smartphone,
  Utensils,
  Flame,
  Camera,
} from "lucide-react";

const reasons = [
  {
    title: "Free Tourist SIM Card",
    text: "Stay connected throughout your journey with a local SIM, making it easy to call, navigate, and share your Bhutan experiences.",
    icon: Smartphone,
  },
  {
    title: "Farmhouse Organic Lunch",
    text: "Enjoy a traditional Bhutanese meal in a local farmhouse and experience authentic flavours in a warm, welcoming setting.",
    icon: Utensils,
  },
  {
    title: "Monastery Private Prayers",
    text: "Experience a meaningful spiritual moment with privately arranged prayers at a Bhutanese monastery.",
    icon: Flame,
  },
  {
    title: "Local Experiences",
    text: "Meet local communities, discover Bhutanese traditions, and experience everyday life beyond the typical tourist route.",
    icon: Camera,
  },
];

function WhyZinigo() {
  return (
    <section id="why-zinigo" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Left-aligned Header */}
        <div className="max-w-4xl text-left">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Travel With ZiniGo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Make your Bhutan journey more memorable with thoughtfully curated
            local experiences from staying connected with a local SIM and
            enjoying a traditional farm lunch to experiencing private
            monastery prayers and discovering authentic Bhutanese life beyond
            the usual tourist trail.
          </p>
        </div>

        {/* 4-Column Grid Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="flex flex-col rounded-2xl bg-[#FFFBF7] p-8 text-left transition-shadow duration-300 hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Card Title */}
                <h3 className="mt-6 text-xl font-bold leading-tight text-slate-900">
                  {reason.title}
                </h3>

                {/* Card Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {reason.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyZinigo;