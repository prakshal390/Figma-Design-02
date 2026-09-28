import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const questions = [
  {
    q: "Why should I book a Bhutan holiday package with ZiniGo?",
    a: "ZiniGo specialises in Bhutan travel and helps you plan your journey from start to finish. Our packages can bring together accommodation, private transportation, local support, curated experiences, applicable SDF arrangements, and sightseeing based on your selected itinerary. You can also customise your trip according to your travel dates, group size, preferred hotel category, interests, and budget.",
  },
  {
    q: "How many days should I spend in Bhutan?",
    a: "A 5–7 day trip is a popular option for first-time travellers, but your ideal duration depends on your interests and itinerary.",
  },
  {
    q: "What are the main destinations covered in Bhutan packages?",
    a: "Popular destinations include Paro, Thimphu and Punakha, with other destinations available depending on your package.",
  },
  {
    q: "What is the best time to visit Bhutan?",
    a: "Spring and autumn are popular periods, but Bhutan can be visited in different seasons depending on the experiences you want.",
  },
  {
    q: "Can I customise my Bhutan holiday package?",
    a: "Yes. You can submit your preferences through the customization form and request a personalized itinerary.",
  },
  {
    q: "What is included in a ZiniGo Bhutan package?",
    a: "Packages can include accommodation, transportation, local experiences, guides and other services depending on the selected package.",
  },
];

export function FAQ() {
  const [active, setActive] = useState(0);

  const toggleQuestion = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section 
      id="faq" 
      className="flex min-h-screen w-full items-center justify-center bg-white py-12 sm:py-16"
    >
      {/* Centered content container */}
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#0d0d0d] sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3.5 text-sm leading-relaxed text-[#555555] sm:text-base sm:leading-6">
            Planning a trip to Bhutan can bring up plenty of questions. From travel documents and the Sustainable Development Fee to packages, hotels, transportation, custom itineraries, and special experiences, find helpful answers to plan your journey with confidence.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          {questions.map((item, index) => {
            const isOpen = active === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div key={item.q} className="border-b-0">
                <button
                  id={questionId}
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-start justify-between text-left focus:outline-none"
                >
                  <span className="pr-6 text-base font-bold text-[#0d0d0d] sm:text-lg">
                    {index + 1}. {item.q}
                  </span>

                  {isOpen ? (
                    <ChevronUp
                      size={20}
                      className="mt-1 shrink-0 text-[#0d0d0d]"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="mt-1 shrink-0 text-[#0d0d0d]"
                    />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="mt-3.5 pl-5 sm:pl-6"
                  >
                    <p className="text-xs leading-relaxed text-[#555555] sm:text-sm sm:leading-6">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;