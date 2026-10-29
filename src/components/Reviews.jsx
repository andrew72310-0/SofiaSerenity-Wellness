import { useState } from "react";

const initialReviews = [
  {
    title: "Terms and conditions",
    rating: 5,
    text: "Conditions are reasonable.",
    author: "Anonymous",
  },
  {
    title: "Jason",
    rating: 4,
    text: "I really don’t do this but if you’ve been a victim and wanting to try a real professional massage then you should call on Elena. She gives 100% satisfactory services.",
    author: "Anonymous",
  },
  {
    title: "Experienced professional",
    rating: 5,
    text: "Gets all the right sore spots.",
    author: "Anonymous",
  },
  {
    title: "Very professional and respectful masseuse",
    rating: 4,
    text: "She’s very professional with her job and knows what she’s doing. She made sure I was very comfortable before and after the session.",
    author: "Anonymous",
  },
  {
    title: "It was really revitalizing",
    rating: 5,
    text: "I got the service worth more than what I was charged. I had to tip her very well.",
    author: "Anonymous",
  },
  {
    title: "Good time",
    rating: 4,
    text: "It went smoothly.",
    author: "Anonymous",
  },
  {
    title: "Perfect",
    rating: 5,
    text: "I really enjoyed my time with her. Will book again.",
    author: "Anonymous",
  },
  {
    title: "Elena was amazing!",
    rating: 5,
    text: "We had such a great time together! I left feeling refreshed after our bodywork session.",
    author: "Anonymous",
  },
  {
    title: "Fantastic service",
    rating: 5,
    text: "Job well done!",
    author: "Anonymous",
  },
  {
    title: "Fantastic job",
    rating: 5,
    text: "She’s a professional masseuse who’s very good with her skilled hands.",
    author: "Anonymous",
  },
  {
    title: "Amazing session",
    rating: 5,
    text: "She is beautiful and her skills are amazing.",
    author: "Anonymous",
  },
];

function Stars({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="empty-stars">{"☆".repeat(5 - rating)}</span>
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (rating === 0) {
      setMessage("Please select a star rating before submitting.");
      return;
    }

    if (!title.trim() || !text.trim()) {
      setMessage("Please complete both the title and review fields.");
      return;
    }

    const newReview = {
      title: title.trim(),
      rating,
      text: text.trim(),
      author: "Pending review",
    };

    setReviews((currentReviews) => [...currentReviews, newReview]);
    setRating(0);
    setTitle("");
    setText("");
    setMessage(
      "Thank you! Your review has been added to this page preview."
    );
  }

  return (
    <main className="reviews-page">
      <h1 className="reviews-page-title">TESTIMONIALS</h1>

      <div className="testimonials-list">
        {reviews.map((review, index) => (
          <article className="testimonial" key={`${review.title}-${index}`}>
            <h2>{review.title}</h2>
            <Stars rating={review.rating} />
            <p className="testimonial-text">{review.text}</p>
            <p className="testimonial-author">{review.author}</p>
          </article>
        ))}
      </div>

      <section className="submit-reviews">
        <h2>SUBMIT REVIEWS</h2>

        <form onSubmit={handleSubmit}>
          <fieldset className="rating-field">
            <legend>Your overall rating</legend>

            <div className="rating-picker" aria-label="Choose your rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={star <= rating ? "rating-star selected" : "rating-star"}
                  onClick={() => setRating(star)}
                  aria-label={`${star} star${star === 1 ? "" : "s"}`}
                  aria-pressed={rating === star}
                >
                  {star <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
          </fieldset>

          <label htmlFor="review-title">Title of your review</label>
          <input
            id="review-title"
            type="text"
            placeholder="Summarize your review or highlight an interesting detail"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <label htmlFor="review-text">Your review</label>
          <textarea
            id="review-text"
            placeholder="Tell people your review"
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows={5}
            required
          />

          <button className="submit-review-button" type="submit">
            SUBMIT REVIEW
          </button>

          {message && <p className="review-form-message">{message}</p>}
        </form>
      </section>
    </main>
  );
}