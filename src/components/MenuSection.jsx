import Dish from "./Dish.jsx";
import Reveal from "./Reveal.jsx";
import { MENU } from "./data.js";

export default function MenuSection({ onAddToCart, cartCounts }) {
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
      <Reveal delay={120}>
        <p className="sec-sub pb-6">
          Freshly made daily. Veg & non-veg. Prices in Rs.
        </p>
      </Reveal>
      <div className="menu-grid">
        {MENU.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 70}>
            <article className="menu-card">
              <div className="menu-photo">
                <Dish
                  src={item.img}
                  alt={item.name}
                  emoji={item.emoji}
                  className="menu-img"
                />
                <div className="menu-photo-top">
                  <span
                    className={`veg-dot ${item.veg ? "veg" : "nonveg"}`}
                    title={item.veg ? "Veg" : "Non-veg"}
                  >
                    <i />
                  </span>
                  {item.tag && <span className="menu-tag">{item.tag}</span>}
                </div>
              </div>
              <div className="menu-body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="menu-foot mt-8">
                  <span className="price">Rs. {item.price}</span>
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() => onAddToCart(item)}
                  >
                    {cartCounts[item.name]
                      ? `Added (${cartCounts[item.name]})`
                      : "Add +"}
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
