import Counter from "./Counter.jsx";
import HeroVisual from "./HeroVisual.jsx";
import Reveal from "./Reveal.jsx";

export default function HeroSection({ isOpen, scrollTo }) {
  return (
    <header id="home" className="hero">
      <div className="hero-glow" />
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className={`status ${isOpen ? "on" : "off"}`}>
              <i />{" "}
              {isOpen ? "Open Now · 12 AM - 8 PM" : "Closed · Opens 11 AM"}
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
              Chitbaragaon&apos;s favourite fast food spot - wood-fired pizzas,
              sizzling momos, and that legendary green chilli kick. Made fresh,
              served fast.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-btns pt-6">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("menu")}
              >
                View Menu
              </button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-stats">
              <div>
                <strong>
                  <Counter end={10000} suffix="+" />
                </strong>
                <span>Visited</span>
              </div>
              <div>
                <strong>
                  4.8<small>★</small>
                </strong>
                <span>Avg rating</span>
              </div>
              <div>
                <strong>
                  <Counter end={10} />
                </strong>
                <span>Years in Chitbaragaon</span>
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
