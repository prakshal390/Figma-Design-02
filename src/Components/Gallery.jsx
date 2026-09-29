import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./Gallery.css";

const filters = [
  "All",
  "Paro",
  "Thimphu",
  "Punakha",
  "Phuentsholing",
  "Gangtey",
  "Haa",
];

const images = [
  {
    src: "/assets/gallery-1.png",
    location: "Paro",
  },
  {
    src: "/assets/gallery-2.png",
    location: "Thimphu",
  },
  {
    src: "/assets/gallery-3.png",
    location: "Punakha",
  },
  {
    src: "/assets/gallery-4.png",
    location: "Haa",
  },
];

export default function Gallery() {

  return (
    <section className="gallery-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            See Bhutan Through the ZiniGo Journey
          </h2>

          <p>
            Explore the landscapes, culture, people,
            experiences, and unforgettable moments that
            make every Bhutan journey special.
          </p>

        </div>

        <div className="gallery-filters">

          {filters.map((filter, index) => (
            <button
              key={filter}
              className={index === 0 ? "active" : ""}
            >
              {filter}
            </button>
          ))}

        </div>

        <div className="gallery-slider">

          <button className="gallery-arrow">
            <ChevronLeft size={19} />
          </button>

          <div className="gallery-grid">

            {images.map((image) => (

              <div
                className="gallery-image"
                key={image.src}
              >

                <img
                  src={image.src}
                  alt={image.location}
                />

              </div>

            ))}

          </div>

          <button className="gallery-arrow">
            <ChevronRight size={19} />
          </button>

        </div>

        <div className="gallery-dots">
          <span></span>
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>

      </div>

    </section>
  );
}