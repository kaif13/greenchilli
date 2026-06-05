import { useEffect, useState } from "react";
import CartSection from "./CartSection.jsx";
import ContactSection from "./ContactSection.jsx";
import FloatingActions from "./FloatingActions.jsx";
import Footer from "./Footer.jsx";
import GallerySection from "./GallerySection.jsx";
import HeroSection from "./HeroSection.jsx";
import Marquee from "./Marquee.jsx";
import MenuSection from "./MenuSection.jsx";
import Navbar from "./Navbar.jsx";
import PartySection from "./PartySection.jsx";
import ReviewsSection from "./ReviewsSection.jsx";
import { waLink } from "./data.js";

export default function GreenChilliRestaurant() {
  const [navOpen, setNavOpen] = useState(false);
  const [page, setPage] = useState(() =>
    window.location.pathname === "/cart" ? "cart" : "home",
  );
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "10",
    pkg: "Standard",
    msg: "",
  });
  const [contact, setContact] = useState({ name: "", phone: "", msg: "" });
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    orderType: "Delivery",
    address: "",
    landmark: "",
    note: "",
  });
  const [cart, setCart] = useState([]);
  const [sent, setSent] = useState(false);

  const hour = new Date().getHours();
  const isOpen = hour >= 11 && hour < 23;

  useEffect(() => {
    const onPopState = () => {
      setPage(window.location.pathname === "/cart" ? "cart" : "home");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const goHome = (targetId) => {
    setNavOpen(false);
    window.history.pushState({}, "", "/");
    setPage("home");

    if (targetId) {
      window.setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToCart = () => {
    setNavOpen(false);
    window.history.pushState({}, "", "/cart");
    setPage("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    if (id === "cart") {
      goToCart();
      return;
    }

    if (page === "cart") {
      goHome(id);
      return;
    }

    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sendBooking = () => {
    const text = `*Birthday Party Booking - Green Chilli*\n\nName: ${booking.name}\nPhone: ${booking.phone}\nDate: ${booking.date}\nGuests: ${booking.guests}\nPackage: ${booking.pkg}\nNote: ${booking.msg}`;
    window.open(waLink(text), "_blank");
  };

  const sendContact = () => {
    const text = `*Enquiry - Green Chilli*\n\nName: ${contact.name}\nPhone: ${contact.phone}\nMessage: ${contact.msg}`;
    window.open(waLink(text), "_blank");
    setSent(true);
  };

  const addToCart = (item) => {
    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.name === item.name);

      if (existing) {
        return current.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem,
        );
      }

      return [...current, { ...item, qty: 1 }];
    });
  };

  const updateCartQty = (name, qty) => {
    setCart((current) =>
      qty <= 0
        ? current.filter((item) => item.name !== name)
        : current.map((item) => (item.name === name ? { ...item, qty } : item)),
    );
  };

  const removeFromCart = (name) => {
    setCart((current) => current.filter((item) => item.name !== name));
  };

  const cartCounts = cart.reduce(
    (counts, item) => ({ ...counts, [item.name]: item.qty }),
    {},
  );
  const cartTotal = cart.reduce((total, item) => total + item.price * item.qty, 0);

  const sendCartOrder = (event) => {
    event.preventDefault();
    if (!cart.length) return;

    const lines = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x ${item.qty} - Rs. ${item.price * item.qty}`,
      )
      .join("\n");
    const details = [
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Order Type: ${customer.orderType}`,
      `Address: ${customer.address || "Pickup from restaurant"}`,
      `Landmark: ${customer.landmark || "-"}`,
      `Note: ${customer.note || "-"}`,
    ].join("\n");
    const text = `*Food Order - Green Chilli*\n\n*Customer Details*\n${details}\n\n*Cart Items*\n${lines}\n\nTotal: Rs. ${cartTotal}\n\nPlease confirm availability and delivery/pickup details.`;

    window.open(waLink(text), "_blank");
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="gc-root">
      <Marquee />
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrollTo={scrollTo}
        cartCount={cartCount}
      />
      {page === "cart" ? (
        <CartSection
          cart={cart}
          cartTotal={cartTotal}
          customer={customer}
          setCustomer={setCustomer}
          updateCartQty={updateCartQty}
          removeFromCart={removeFromCart}
          sendCartOrder={sendCartOrder}
          goToMenu={() => goHome("menu")}
        />
      ) : (
        <>
          <HeroSection isOpen={isOpen} scrollTo={scrollTo} />
          <MenuSection onAddToCart={addToCart} cartCounts={cartCounts} />
          <GallerySection />
          <ReviewsSection />
          <PartySection
            booking={booking}
            setBooking={setBooking}
            sendBooking={sendBooking}
          />
          <ContactSection
            contact={contact}
            setContact={setContact}
            sent={sent}
            sendContact={sendContact}
          />
        </>
      )}
      <Footer scrollTo={scrollTo} />
      <FloatingActions />
    </div>
  );
}
