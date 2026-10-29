const photos = [
  { src: "/images/gallery1.jpeg", alt: "Wellness photo 1" },
  { src: "/images/gallery2.jpeg", alt: "Wellness photo 2" },
  { src: "/images/gallery3.jpeg", alt: "Wellness photo 3" },
  { src: "/images/gallery4.jpeg", alt: "Wellness photo 4" },
  { src: "/images/gallery5.jpeg", alt: "Wellness photo 5" },
  { src: "/images/gallery6.jpeg", alt: "Wellness photo 6" },
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <div className="gallery-heading">
        <p className="eyebrow">OUR SPACE</p>
        <h1>Gallery</h1>
        <p>
          Explore our collection of wellness moments
          and relaxing experiences.
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div className="gallery-item" key={photo.src}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}