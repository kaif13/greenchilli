import Reveal from "./Reveal.jsx";
import { REVIEWS } from "./data.js";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section section-alt">
      <Reveal>
        <p className="eyebrow">💬 Loved by Chitbaragaon</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="sec-title pb-6">
          What people <span className="flame-text">say</span>
        </h2>
      </Reveal>
      <div className="review-grid">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={(i % 3) * 80}>
            <div className="review-card">
              <div className="stars">
                {"★".repeat(review.stars)}
                <span className="dim">{"★".repeat(5 - review.stars)}</span>
              </div>
              <p>&quot;{review.text}&quot;</p>
              <div className="reviewer">
                <div className="avatar">{review.name[0]}</div>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.city}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

