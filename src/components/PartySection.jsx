import Reveal from "./Reveal.jsx";

export default function PartySection({ booking, setBooking, sendBooking }) {
  return (
    <section id="party" className="section party">
      <div className="party-grid">
        <Reveal className="party-copy">
          <p className="eyebrow">🎂 Celebrate with us</p>
          <h2 className="sec-title">
            Book a <span className="flame-text">Birthday Party</span>
          </h2>
          <p className="sec-sub left">
            Let us handle the food, decoration and the fun. Custom packages for
            kids and grown-ups - cake, music, and a private area on request.
          </p>
          <ul className="perks">
            <li>🎈 Free decoration on 20+ guests</li>
            <li>🍰 Complimentary celebration cake</li>
            <li>📸 Dedicated party host & photo corner</li>
            <li>🎁 Goodies for kids</li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="party-form">
          <div className="form-card">
            <h3>Reserve your date</h3>
            <div className="field">
              <label>Your name</label>
              <input
                value={booking.name}
                onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                placeholder="e.g. Rahul"
              />
            </div>
            <div className="row">
              <div className="field">
                <label>Phone</label>
                <input
                  value={booking.phone}
                  onChange={(e) =>
                    setBooking({ ...booking, phone: e.target.value })
                  }
                  placeholder="10-digit number"
                />
              </div>
              <div className="field">
                <label>Date</label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Guests</label>
                <select
                  value={booking.guests}
                  onChange={(e) =>
                    setBooking({ ...booking, guests: e.target.value })
                  }
                >
                  {["10", "20", "30", "50", "50+"].map((guests) => (
                    <option key={guests}>{guests}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Package</label>
                <select
                  value={booking.pkg}
                  onChange={(e) => setBooking({ ...booking, pkg: e.target.value })}
                >
                  {["Standard", "Premium", "Kids Special", "Custom"].map((pkg) => (
                    <option key={pkg}>{pkg}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label>Anything special?</label>
              <textarea
                rows={2}
                value={booking.msg}
                onChange={(e) => setBooking({ ...booking, msg: e.target.value })}
                placeholder="Theme, timing, cake flavour..."
              />
            </div>
            <button className="btn btn-primary full" onClick={sendBooking}>
              Send Booking on WhatsApp
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
