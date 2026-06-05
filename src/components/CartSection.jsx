import Reveal from "./Reveal.jsx";

export default function CartSection({
  cart,
  cartTotal,
  customer,
  setCustomer,
  updateCartQty,
  removeFromCart,
  sendCartOrder,
  goToMenu,
}) {
  const hasItems = cart.length > 0;
  const updateCustomer = (field, value) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="cart" className="section section-alt cart-section cart-page">
      <Reveal>
        <p className="eyebrow">Your Order</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="sec-title">
          Food <span className="flame-text">Cart</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="sec-sub">
          Review your food, fill delivery details, and send the order on WhatsApp.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="cart-card">
          {!hasItems ? (
            <div className="cart-empty">
              <strong>Your cart is empty</strong>
              <span>Pick your favourites from the menu above.</span>
              <button type="button" className="btn btn-primary" onClick={goToMenu}>
                Browse Menu
              </button>
            </div>
          ) : (
            <form onSubmit={sendCartOrder}>
              <div className="cart-list">
                {cart.map((item) => (
                  <div className="cart-row" key={item.name}>
                    <div className="cart-item-main">
                      <strong>{item.name}</strong>
                      <span>Rs. {item.price} each</span>
                    </div>
                    <div className="qty-control" aria-label={`${item.name} quantity`}>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.name, item.qty - 1)}
                        aria-label={`Reduce ${item.name}`}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.name, item.qty + 1)}
                        aria-label={`Increase ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <strong className="cart-line-total">
                      Rs. {item.price * item.qty}
                    </strong>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeFromCart(item.name)}
                      aria-label={`Remove ${item.name}`}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <span>Total</span>
                <strong>Rs. {cartTotal}</strong>
              </div>

              <div className="checkout-form">
                <h3>Customer Details</h3>
                <div className="row">
                  <div className="field">
                    <label htmlFor="customer-name">Name</label>
                    <input
                      id="customer-name"
                      value={customer.name}
                      onChange={(event) => updateCustomer("name", event.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="customer-phone">Phone no.</label>
                    <input
                      id="customer-phone"
                      value={customer.phone}
                      onChange={(event) => updateCustomer("phone", event.target.value)}
                      placeholder="Mobile number"
                      inputMode="tel"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label htmlFor="order-type">Order type</label>
                    <select
                      id="order-type"
                      value={customer.orderType}
                      onChange={(event) => updateCustomer("orderType", event.target.value)}
                    >
                      <option>Delivery</option>
                      <option>Pickup</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="customer-landmark">Landmark</label>
                    <input
                      id="customer-landmark"
                      value={customer.landmark}
                      onChange={(event) => updateCustomer("landmark", event.target.value)}
                      placeholder="Nearby landmark"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="customer-address">Address</label>
                  <textarea
                    id="customer-address"
                    rows="3"
                    value={customer.address}
                    onChange={(event) => updateCustomer("address", event.target.value)}
                    placeholder="House no., street, area, city"
                    required={customer.orderType === "Delivery"}
                  />
                </div>
                <div className="field">
                  <label htmlFor="customer-note">Special note</label>
                  <textarea
                    id="customer-note"
                    rows="2"
                    value={customer.note}
                    onChange={(event) => updateCustomer("note", event.target.value)}
                    placeholder="Less spicy, extra chutney, delivery timing, etc."
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary full">
                Send Order on WhatsApp
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
