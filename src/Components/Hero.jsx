import {
  ShieldCheck,
  Users,
  ChevronDown,
} from "lucide-react";

import "./Hero.css";

export default function Hero() {

  const scrollToCustomize = () => {
    document
      .getElementById("customize")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background"></div>

      <div className="container hero-container">

        {/* Left Content */}

        <div className="hero-content">

          <h1>
            Discover Bhutan
            <br />
            Your Way
          </h1>

          <p className="hero-description">
            Explore breathtaking valleys, ancient monasteries,
            <br className="desktop" />
            vibrant local culture, and unforgettable experiences with
            <br className="desktop" />
            a thoughtfully planned Bhutan holiday.
          </p>

          <p className="hero-services">
            Hotels • Cab • Local Guide • Experiences • Permits
            planned locally.
          </p>

          {/* Stats */}

          <div className="hero-stats">

            <div className="hero-stat specialist">
              <ShieldCheck size={18} />

              <span>
                Bhutan Specialists
              </span>
            </div>

            <div className="hero-stat">
              <strong>13+</strong>
              <span>Years</span>
            </div>

            <div className="hero-stat">
              <strong>50,000</strong>
              <span>Happy Travellers</span>
            </div>

            <div className="hero-stat">
              <strong>24×7</strong>
              <span>Support</span>
            </div>

          </div>

          <button
            className="hero-button"
            onClick={scrollToCustomize}
          >
            Plan My Bhutan Trip
          </button>

        </div>

        {/* Quote Form */}

        <HeroForm />

      </div>

    </section>
  );
}


function HeroForm() {

  return (
    <form
      className="hero-form"
      onSubmit={(e) => e.preventDefault()}
    >

      <h2>
        Plan Your Bhutan Trip
      </h2>

      <p>
        Get a personalised quote from our Bhutan
        <br />
        travel specialists.
      </p>

      <label>
        Your Name

        <input
          type="text"
          placeholder="Enter name"
        />
      </label>

      <label>
        Whatsapp / Phone

        <input
          type="text"
          defaultValue="+91 98765 00000"
        />
      </label>

      <label>
        Travellers

        <div className="select-box">
          <span>2 Adults</span>
          <Users size={14} />
        </div>
      </label>

      <label>
        Duration

        <div className="select-box">
          <span>4N / 5D</span>
          <ChevronDown size={14} />
        </div>
      </label>

      <button type="submit">
        Get free Quote
      </button>

    </form>
  );
}