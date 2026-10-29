import {
  FaTelegram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

const contactMethods = [
  {
    name: "Telegram",
    detail: "@Hey8Amira",
    icon: FaTelegram,
    className: "telegram",
    link: "https://t.me/Hey8Amira",
  },
  {
    name: "Phone",
    detail: "(832) 660-8962",
    icon: FaPhoneAlt,
    className: "phone",
    link: "tel:+18326608962",
  },
  {
    name: "Email",
    detail: "sofiaserenity5spa@gmail.com",
    icon: FaEnvelope,
    className: "email",
    link: "mailto:sofiaserenity5spa@gmail.com",
  },
  {
    name: "WhatsApp",
    detail: "(832) 660-8962",
    icon: FaWhatsapp,
    className: "whatsapp",
    link: "https://wa.me/18326608962",
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>

        <h1>Let's Connect</h1>

        <p>
          Have a question or ready to book your next session?
          Reach out today. I look forward to helping you enjoy
          a relaxing wellness experience.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <span className="contact-section-label">GET IN TOUCH</span>

          <h2>We're Here for You</h2>

          <p className="contact-description">
            Choose your preferred way to connect with us.
            We look forward to hearing from you.
          </p>

          <div className="contact-methods">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.name}
                  href={method.link}
                  className="contact-method"
                  target={
                    method.name === "Telegram" ||
                    method.name === "WhatsApp"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.name === "Telegram" ||
                    method.name === "WhatsApp"
                      ? "noreferrer"
                      : undefined
                  }
                >
                  <span
                    className={`contact-icon ${method.className}`}
                  >
                    <Icon />
                  </span>

                  <span className="contact-method-text">
                    <span className="contact-method-name">
                      {method.name}
                    </span>

                    <span className="contact-method-detail">
                      {method.detail}
                    </span>
                  </span>

                  <FiArrowUpRight className="contact-method-arrow" />
                </a>
              );
            })}
          </div>

          <div className="contact-note">
            <FaMapMarkerAlt />
            <p>
              Your comfort and relaxation are always our priority.
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <span className="contact-section-label">BOOK YOUR VISIT</span>

          <h2>Book a Session</h2>

          <p>
            Tell us a little about your request, and we'll be happy
            to assist you.
          </p>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "Thank you for your message! The form still needs to be connected to a service to send your request."
              );
            }}
          >
            <div className="form-field">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-phone">Telephone Number</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-session">Choose a Session</label>
              <select
                id="contact-session"
                name="session"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Swedish Massage</option>
                <option>Full-Body Massage</option>
                <option>Deep Tissue Massage</option>
                <option>Nuru Massage</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell us about your booking request..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              SEND MESSAGE <FiArrowUpRight />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}