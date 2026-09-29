import "./CTA.css";

export default function CTA() {

  const scrollToCustomize = () => {
    document
      .getElementById("customize")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="cta-section">

      <div className="container cta-inner">

        <div>

          <h2>
            Your Bhutan Journey Starts Here
          </h2>

          <p>
            Ready to experience Bhutan your way?
            Tell us your travel plans and our Bhutan
            specialists will help you create a personalised
            journey with the right destinations, stays,
            experiences, and support.
          </p>

        </div>

        <div className="cta-buttons">

          <a
            href="https://wa.me/919876500000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>

          <button onClick={scrollToCustomize}>
            Get free Quote
          </button>

        </div>

      </div>

    </section>
  );
}