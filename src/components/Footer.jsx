import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Sofia Serenity Wellness</h2>
          <p>
            Your space to relax, recharge, and enjoy
            a peaceful wellness experience.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <a href="tel:+18326608962">
            <span>☎</span> (832) 660-8962
          </a>

          <a href="mailto:sofiaserenity5spa@gmail.com">
            <span>✉</span> sofiaserenity5spa@gmail.com
          </a>

          <a
            href="https://t.me/Hey8Amira"
            target="_blank"
            rel="noreferrer"
          >
            <span>➤</span> Telegram
          </a>

          <a
            href="https://wa.me/18326608962"
            target="_blank"
            rel="noreferrer"
          >
            <span>◉</span> WhatsApp
          </a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <Link to="/services">Swedish Massage</Link>
          <Link to="/services">Nuru Massage</Link>
          <Link to="/services">Deep Tissue Massage</Link>
          <Link to="/services">Relaxation Massage</Link>
          <Link to="/services">Full Body Massage</Link>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Testimonials</Link>
          <Link to="/contact">Contact Me</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SofiaSerenity Wellness.
          All rights reserved.
        </p>
        <p>Created for your comfort and relaxation.</p>
      </div>
    </footer>
  );
}