import { useState } from "react";
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
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "10",
    pkg: "Standard",
    msg: "",
  });
  const [contact, setContact] = useState({ name: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);

  const hour = new Date().getHours();
  const isOpen = hour >= 11 && hour < 23;

  const goHome = (targetId) => {
    setNavOpen(false);

    if (targetId) {
      window.setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollTo = (id) => {
    setNavOpen(false);
    if (id === "home") {
      goHome();
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
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

  return (
    <div className="gc-root">
      <Marquee />
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} scrollTo={scrollTo} />
      <HeroSection isOpen={isOpen} scrollTo={scrollTo} />
      <MenuSection />
      {/* <GallerySection /> */}
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
      <Footer scrollTo={scrollTo} />
      <FloatingActions />
    </div>
  );
}
