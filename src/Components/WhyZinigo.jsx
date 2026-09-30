import {
  Lightbulb,
  HandCoins,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

import "./WhyZinigo.css";

const reasons = [
  {
    icon: Lightbulb,
    title: "100% Bhutan\nFocused",
    text: "We don't sell 40+ countries. Our operations, guides, and hotel relationships exist exclusively across the Kingdom of Bhutan.",
  },
  {
    icon: HandCoins,
    title: "End-to-End SDF &\nPermits",
    text: "Zero immigration paperwork stress. We handle entry route permits, SDF payments, and road travel approvals well ahead of your arrival.",
  },
  {
    icon: BadgeCheck,
    title: "Native Certified\nGuides",
    text: "Every itinerary is led by licensed Bhutanese storytellers and courteous mountain drivers trained in Himalayan road safety.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Hidden Fees\nGuarantee",
    text: "Transparent breakdowns. Hotels, internal permits, luxury transport, and meals are locked with no unexpected surprise surcharges.",
  },
];

export default function WhyZinigo() {
  return (
    <section className="why-section" id="why-zinigo">
      <div className="container">

        <div className="section-heading why-heading">
          <h2>Why Travel With ZiniGo?</h2>

          <p>
            More than a holiday, we help you experience Bhutan
            with local expertise, thoughtful planning, and support
            at every step.
          </p>
        </div>

        <div className="why-grid">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div className="why-card" key={item.title}>

                <div className="why-icon">
                  <Icon size={17} />
                </div>

                <h3>
                  {item.title.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>

                <p>{item.text}</p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}