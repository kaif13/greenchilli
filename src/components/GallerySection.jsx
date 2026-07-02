import Dish from "./Dish.jsx";
import Reveal from "./Reveal.jsx";
import { GALLERY } from "./data.js";

export default function GallerySection() {
  return (
    <section id="gallery" className="section gallery-section">
      <Reveal>
        <p className="eyebrow">Fresh From Green Chilli</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="sec-title">
          Food <span className="flame-text">Gallery</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="sec-sub pb-6">
          A quick look at the pizzas, party spreads, snacks, and drinks people
          come back for.
        </p>
      </Reveal>

      <div className="gallery-grid">
        {GALLERY.map((item, index) => (
          <Reveal key={item.title} delay={(index % 4) * 50}>
            <article className="gallery-card">
              <Dish
                src={item.src}
                alt={item.title}
                emoji={item.emoji}
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
