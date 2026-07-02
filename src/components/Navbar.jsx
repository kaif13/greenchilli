import { waLink } from "./data.js";

const links = ["menu", "gallery", "reviews", "party", "contact"];

export default function Navbar({ navOpen, setNavOpen, scrollTo }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-chilli">🌶️</span>
          <span>
            Green Chilli<small>CHITBARAGAON</small>
          </span>
        </button>
        <div className={`nav-links ${navOpen ? "open" : ""}`}>
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}>
              {link[0].toUpperCase() + link.slice(1)}
            </button>
          ))}
          <a
            className="nav-cta"
            href={waLink("Hi Green Chilli! I have a question about your menu.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
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
