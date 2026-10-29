import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import About from "./components/About";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <img src="/images/logo.jpeg" />
      </Link>

      <Link to="/contact" className="book-now">
        BOOK NOW
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <nav className={menuOpen ? "navigation open" : "navigation"}>
        <Link to="/">HOME</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/certification">CERTIFICATION</Link>
        <Link to="/prices">PRICE</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/reviews">REVIEWS</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO SOFIASERENITY WELLNESS</p>
          <div className=""></div>

          <h1>Your Journey to Inner Peace.</h1>

          <p>
            Relax, recharge, and enjoy a peaceful wellness experience
            created with your comfort in mind.
          </p>

          <Link to="/contact" className="book-now">
            BOOK SESSION
          </Link>
        </div>
      </section>

      <About />

      <section className="home-gallery">
        <h2>My Gallery</h2>
        <p>Take a look at more photos from my gallery.</p>

        <Link to="/gallery" className="book-now">
          VIEW GALLERY
        </Link>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route
          path="/prices"
          element={
            <main className="prices-page">
              <div className="prices-heading">
                <h1>PRICE LIST</h1>
              </div>

              <div className="prices-image">
                <img
                  src="/images/prices.jpeg"
                  alt="Massage service price list"
                />
              </div>
            </main>
          }
        />

        <Route
          path="/certification"
          element={
            <main className="certification-page">
              <h1>Certification</h1>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}