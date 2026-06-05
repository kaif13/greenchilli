import Counter from "./Counter.jsx";
import HeroVisual from "./HeroVisual.jsx";
import Reveal from "./Reveal.jsx";
import { waLink } from "./data.js";

export default function HeroSection({ isOpen, scrollTo }) {
  return (
    <header id="home" className="hero">
      <div className="hero-glow" />
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className={`status ${isOpen ? "on" : "off"}`}>
              <i /> {isOpen ? "Open Now · 11 AM - 11 PM" : "Closed · Opens 11 AM"}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Green Chilli
              <br />
              <span className="flame-text">Pizza & Fast Food</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              Ballia&apos;s favourite fast food spot - wood-fired pizzas,
              sizzling momos, and that legendary green chilli kick. Made fresh,
              served fast.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-btns">
              <a
                className="btn btn-primary"
                href={waLink("Hi Green Chilli! I'd like to order.")}
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp
              </a>
              <button className="btn btn-ghost" onClick={() => scrollTo("menu")}>
                View Menu
              </button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-stats">
              <div>
                <strong>
                  <Counter end={50000} suffix="+" />
                </strong>
                <span>Orders served</span>
              </div>
              <div>
                <strong>
                  4.8<small>★</small>
                </strong>
                <span>Avg rating</span>
              </div>
              <div>
                <strong>
                  <Counter end={12} />
                </strong>
                <span>Years in Ballia</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="hero-3d">
          <HeroVisual />
        </div>
      </div>
    </header>
  );
}
