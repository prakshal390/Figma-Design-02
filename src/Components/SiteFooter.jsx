import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">

        {/* =========================
            FOOTER TOP
        ========================== */}
        <div className="site-footer-main">

          {/* LEFT - BRAND */}
          <div className="site-footer-brand">

            <div className="site-footer-logo">
              <span className="site-footer-logo-symbol">◉</span>

              <span className="site-footer-logo-text">
                zinigo
              </span>

              <span className="site-footer-logo-dot">
                .
              </span>

              <sup>®</sup>
            </div>

            <p>
              Thoughtfully planned Bhutan holidays with local expertise,
              curated experiences, and personalised travel support.
            </p>

          </div>


          {/* RIGHT - SOCIAL */}
          <div className="site-footer-social">

            <h3>Follow Us</h3>

            <div className="site-footer-social-icons">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="instagram-icon"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="facebook-icon"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="youtube-icon"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================== */}

        <div className="site-footer-bottom">

          {/* Copyright */}
          <div className="site-footer-copyright">
            © 2026 ZiniGo. All Rights Reserved.
          </div>


          {/* Links */}
          <div className="site-footer-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms &amp; Conditions
            </a>

            <a href="#">
              Cancellation Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}