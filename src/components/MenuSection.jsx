import { useState } from "react";
import Dish from "./Dish.jsx";
import Reveal from "./Reveal.jsx";
import { MENU } from "./data.js";

const INITIAL_VISIBLE = 6;

const formatPrice = (price) => {
  if (price.options) {
    return price.options
      .map(({ label, value }) => `${label} Rs. ${value}`)
      .join(" / ");
  }

  return `Rs. ${price.value}`;
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU[0]?.title ?? "");
  const [expanded, setExpanded] = useState(false);
  const category =
    MENU.find((item) => item.title === activeCategory) ?? MENU[0];
  const hasMore = category.items.length > INITIAL_VISIBLE;
  const visibleItems = expanded
    ? category.items
    : category.items.slice(0, INITIAL_VISIBLE);

  const selectCategory = (title) => {
    setActiveCategory(title);
    setExpanded(false);
  };

  return (
    <section id="menu" className="section">
      <Reveal>
        <p className="eyebrow">Our Kitchen</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="sec-title">
          The <span className="flame-text">Menu</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>/ </Reveal>
      <div className="menu-tabs" role="tablist" aria-label="Menu categories">
        {MENU.map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={item.title === activeCategory}
            className={item.title === activeCategory ? "active" : ""}
            key={item.title}
            onClick={() => selectCategory(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="menu-category" role="tabpanel">
        <Reveal>
          <div className="menu-category-head">
            <h3>{category.title}</h3>
            <span>
              {category.note ? `${category.note} · ` : ""}
              {category.items.length} items
            </span>
          </div>
        </Reveal>
        <div className="menu-grid">
          {visibleItems.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 50}>
              <article className="menu-card">
                <div className="menu-photo">
                  <Dish
                    src={item.img}
                    alt={item.name}
                    emoji={item.emoji}
                    fallbackText={`Add photo for ${item.name}`}
                    className="menu-img"
                    loading={i < 4 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                  />
                  <div className="menu-photo-top">
                    <span className="veg-dot veg" title="Vegetarian">
                      <i />
                    </span>
                    {item.tag && <span className="menu-tag">{item.tag}</span>}
                  </div>
                </div>
                <div className="menu-body">
                  <h3>{item.name}</h3>
                  <div className="menu-foot menu-prices">
                    {item.prices.map((price) => (
                      <span className="price" key={formatPrice(price)}>
                        {formatPrice(price)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {hasMore && (
          <button
            type="button"
            className="menu-more-btn"
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded
              ? "Show Less"
              : `See More (${category.items.length - INITIAL_VISIBLE})`}
          </button>
        )}
      </div>
    </section>
  );
}
