import { useState } from "react";
import { MessageCircle } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <span>◉</span>
          zinigo
          <b>.</b>
        </button>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <button onClick={() => scrollToSection("packages")}>
            Packages
          </button>

          <button onClick={() => scrollToSection("why-zinigo")}>
            Why ZiniGo
          </button>

          <button onClick={() => scrollToSection("included")}>
            What's Included
          </button>
        </nav>

        {/* Right Buttons */}
        <div className="nav-actions">

          <a
            href="https://wa.me/919876500000"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <MessageCircle size={15} />
            WhatsApp us
          </a>

          <button
            className="quote-btn"
            onClick={() => scrollToSection("customize")}
          >
            Get free Quote
          </button>

        </div>

        {/* Mobile Menu */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}