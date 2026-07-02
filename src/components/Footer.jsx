import { waLink } from "./data.js";

const links = ["menu", "gallery", "reviews", "party", "contact"];

export default function Footer({ scrollTo }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-chilli">🌶️</span>
            <span>
              Green Chilli<small>CHITBARAGAON</small>
            </span>
          </div>
          <p>Chitbaragaon&apos;s favourite fast food destination since 2013.</p>
        </div>
        <div className="footer-links">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}>
              {link[0].toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>
        <div className="footer-social">
          <a href={waLink("Hi!")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Instagram
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Facebook
          </a>
        </div>
      </div>
      <div className="copyright">
        <span>
          © {new Date().getFullYear()} Green Chilli Restaurant, Chitbaragaon.
          All rights reserved.
        </span>
        <span>
          Made by{" "}
          <a href="https://kaifwebstudio.in" target="_blank" rel="noreferrer">
            Kaif Web Studio
          </a>
        </span>
      </div>
    </footer>
  );
}
