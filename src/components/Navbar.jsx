import { waLink } from "./data.js";

const links = ["menu", "cart", "gallery", "reviews", "party", "contact"];

export default function Navbar({ navOpen, setNavOpen, scrollTo, cartCount }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-chilli">🌶️</span>
          <span>
            Green Chilli<small>BALLIA</small>
          </span>
        </button>
        <div className={`nav-links ${navOpen ? "open" : ""}`}>
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}>
              {link === "cart"
                ? `Cart${cartCount ? ` (${cartCount})` : ""}`
                : link[0].toUpperCase() + link.slice(1)}
            </button>
          ))}
          <a
            className="nav-cta"
            href={waLink("Hi Green Chilli! I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>
        </div>
        <button
          type="button"
          className="hamburger"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
          aria-expanded={navOpen}
        >
          <span />
          <span />
          <span />
        </button>
        {navOpen && (
          <button
            type="button"
            className="nav-scrim"
            aria-label="Close menu"
            onClick={() => setNavOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
