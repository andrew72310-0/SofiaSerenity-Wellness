import { Link } from "react-router-dom";

const services = [
  {
    title: "Swedish Massage",
    description:
      "Enjoy a calming full-body massage designed to help you relax, unwind, and release everyday tension.",
    image: "/images/gallery1.jpeg",
  },
  {
    title: "Nuru Massage",
    description:
      "Experience a soothing atmosphere with aromatic essential oils and gentle massage techniques.",
    image: "/images/gallery2.jpeg",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Enjoy a focused massage experience designed to address muscle tension and encourage relaxation.",
    image: "/images/gallery3.jpeg",
  },
  {
    title: "Full-body Massage",
    description:
      "Take a moment for yourself and enjoy a peaceful wellness experience in a calming environment.",
    image: "/images/gallery4.jpeg",
  },
];

export default function Service() {
  return (
    <main className="services-page">
      <section className="services-heading">
        <p className="services-eyebrow">PERSONALIZED SERVICES</p>

        <h1>Our Services</h1>

        <p className="services-intro">
          Every guest deserves a relaxing experience tailored to
          their needs. Explore our massage services and choose
          the session that best suits your comfort, relaxation,
          and wellness goals.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-card-content">
              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <Link to="/contact" className="book-session-btn">
                BOOK SESSION
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}