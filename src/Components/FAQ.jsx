import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./FAQ.css";

const questions = [
  {
    q: "Why should I book a Bhutan holiday package with Zinigo?",
    a: "ZiniGo specialises in Bhutan travel and helps you plan your journey from start to finish. Our packages can bring together accommodation, private transportation, local support, curated experiences, applicable SDF arrangements, and sightseeing based on your selected itinerary. You can also customise your trip according to your travel dates, group size, preferred hotel category, interests, and budget.",
  },
  {
    q: "How many days should I spend in Bhutan?",
    a: "A typical Bhutan holiday can range from 4 to 7 nights depending on your destinations, interests and travel pace.",
  },
  {
    q: "What are the main destinations covered in Bhutan packages?",
    a: "Popular destinations include Paro, Thimphu, Punakha, Phuentsholing, Gangtey and Haa.",
  },
  {
    q: "What is the best time to visit Bhutan?",
    a: "Bhutan can be visited throughout the year. The ideal period depends on whether you prefer pleasant weather, mountain views, festivals or quieter travel.",
  },
  {
    q: "Can I customise my Bhutan holiday package?",
    a: "Yes. You can customise your destinations, duration, travel style, activities and accommodation according to your preferences.",
  },
  {
    q: "What is included in a ZiniGo Bhutan package?",
    a: "Packages can include accommodation, private transportation, local support, guides, experiences and required travel arrangements depending on the selected package.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Planning a trip to Bhutan can bring up plenty
            of questions. From travel documents and the
            Sustainable Development Fee to packages, hotels,
            transportation, custom itineraries, and special
            experiences, find helpful answers to plan your
            journey with confidence.
          </p>

        </div>

        <div className="faq-list">

          {questions.map((item, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                className={
                  isOpen
                    ? "faq-item open"
                    : "faq-item"
                }
                key={item.q}
              >

                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? -1 : index
                    )
                  }
                >

                  <span>
                    {index + 1}. {item.q}
                  </span>

                  <ChevronDown
                    size={15}
                    className={
                      isOpen ? "rotate" : ""
                    }
                  />

                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {item.a}
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