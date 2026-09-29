import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import "./Testimonials.css";

export default function Testimonials() {

  return (
    <section className="testimonial-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            Loved by Travellers. Remembered for a Lifetime.
          </h2>

          <p>
            From the first enquiry to the journey home,
            discover what our travellers have to say about
            their Bhutan experience with ZiniGo.
          </p>

        </div>

        <div className="testimonial-wrapper">

          <button className="testimonial-arrow">
            <ChevronLeft size={18} />
          </button>

          <div className="testimonial-image">

            <img
              src="/assets/testimonial.png
              "
              alt="Bhutan traveller experience"
            />

          </div>

          <div className="testimonial-content">

            <div className="reviewer">
              <div className="reviewer-avatar">
                P
              </div>

              <strong>
                Priya & Rahul
              </strong>
            </div>

            <p className="review-location">
              Mumbai · Romantic Bhutan Escape · 5 Nights / 6 Days
            </p>

            <p className="review-text">
              “Everything was beautifully planned. The hotels
              were comfortable, our driver was excellent, and
              we got to experience Bhutan beyond the usual
              tourist spots.”
            </p>

            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={13}
                  fill="currentColor"
                />
              ))}
            </div>

            <small>
              Written 28 July 2026
            </small>

          </div>

          <button className="testimonial-arrow">
            <ChevronRight size={18} />
          </button>

        </div>

        <div className="testimonial-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </section>
  );
}