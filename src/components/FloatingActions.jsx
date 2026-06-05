import { waLink } from "./data.js";

export default function FloatingActions({ goToCart, cartCount }) {
  return (
    <>
      <a
        className="float-btn wa"
        href={waLink("Hi Green Chilli! 👋")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.8L.5 31.5l7.9-2.1c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.3-2.1-2-4.5-2-6.9C3.4 9 9 3.4 16 3.4S28.6 9 28.6 16 23 28.8 16 28.8zm8.1-9.4c-.4-.2-2.6-1.3-3-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.3-.9.1-.4-.2-1.9-.7-3.6-2.2-1.3-1.2-2.2-2.6-2.5-3-.3-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.4-1.5 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.7.2.8-.1 2.6-1 2.9-2 .4-1 .4-1.8.3-2-.1-.2-.4-.3-.8-.5z" />
        </svg>
        <span className="float-pulse" />
      </a>
      <button
        type="button"
        className="float-btn cart"
        onClick={goToCart}
        aria-label={`Cart${cartCount ? ` with ${cartCount} items` : ""}`}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path d="M7 21c-.6 0-1.1-.2-1.5-.6S5 19.9 5 19.3s.2-1.1.6-1.5S6.4 17.2 7 17.2s1.1.2 1.5.6.6.9.6 1.5-.2 1.1-.6 1.5S7.6 21 7 21Zm10 0c-.6 0-1.1-.2-1.5-.6s-.6-.9-.6-1.5.2-1.1.6-1.5.9-.6 1.5-.6 1.1.2 1.5.6.6.9.6 1.5-.2 1.1-.6 1.5-.9.6-1.5.6ZM6.1 6l2.2 4.7h7l2.6-4.7H6.1Zm-1-2h14.6c.4 0 .7.2.9.5s.2.7 0 1L17 12.1c-.2.4-.6.6-1 .6H8l-1.1 2h12v2H6.5c-.8 0-1.4-.3-1.8-.9s-.4-1.2-.1-1.9l1.3-2.4L2.6 4H1V2h3c.4 0 .8.2 1 .6L5.1 4Z" />
        </svg>
        {cartCount > 0 && <span className="float-count">{cartCount}</span>}
      </button>
    </>
  );
}
