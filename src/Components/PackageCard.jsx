import {
  ChevronLeft,
  ChevronRight,
  Check,
  MessageCircle,
} from "lucide-react";

import "./PackageCard.css";

export default function PackageCard({ packageData }) {

  return (
    <article className="package-card">

      {/* Image */}

      <div className="package-image">

        <img
          src={packageData.image}
          alt={packageData.title}
        />

        <span className="package-badge">
          {packageData.badge}
        </span>

        <button className="package-arrow left">
          <ChevronLeft size={13} />
        </button>

        <button className="package-arrow right">
          <ChevronRight size={13} />
        </button>

      </div>


      {/* Content */}

      <div className="package-content">

        <p className="package-audience">
          {packageData.audience}
        </p>

        <div className="package-heading">

          <h3>
            {packageData.title}
          </h3>

          <span className="package-days">
            {packageData.days}
          </span>

        </div>

        <em>
          "{packageData.subtitle}"
        </em>

        <p className="starting-point">
          Starting Point :
          <strong>
            {" "}
            {packageData.startingPoint}
          </strong>
        </p>

        <div className="route-box">

          <small>ROUTE:</small>

          <span>
            {packageData.route}
          </span>

        </div>


        <div className="package-features">

          {packageData.features.map((feature) => (

            <span key={feature}>
              <Check size={11} />
              {feature}
            </span>

          ))}

        </div>


        {/* Bottom */}

        <div className="package-footer">

          <div className="package-price">

            <small>
              Starting from
            </small>

            <div>
              <strong>
                ₹{packageData.price}
              </strong>

              <small>
                / person
              </small>
            </div>

          </div>

          <a
            href="https://wa.me/919876500000"
            target="_blank"
            rel="noreferrer"
            className="enquire-button"
          >
            <MessageCircle size={12} />
            Enquire
          </a>

        </div>

      </div>

    </article>
  );
}