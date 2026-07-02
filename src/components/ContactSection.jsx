import Reveal from "./Reveal.jsx";

export default function ContactSection({
  contact,
  setContact,
  sent,
  sendContact,
}) {
  return (
    <section id="contact" className="section section-alt">
      <Reveal>
        <p className="eyebrow">📍 Find us</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="sec-title pb-6">
          Visit or <span className="flame-text">say hello</span>
        </h2>
      </Reveal>
      <div className="contact-grid">
        <Reveal className="contact-info">
          <div className="info-card">
            <div className="info-row">
              <span>📍</span>
              <div>
                <strong>Address</strong>
                <p>Bariya Pokhra, Ballia, Uttar Pradesh 277001</p>
              </div>
            </div>
            <div className="info-row">
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 99999 99999</p>
              </div>
            </div>
            <div className="info-row">
              <span>🕒</span>
              <div>
                <strong>Hours</strong>
                <p>Open daily · 11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              title="Green Chilli Restaurant Ballia map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6878.7822482678175!2d84.0019535335613!3d25.7421950017356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39926de495af836f%3A0xf60e2c7e42a3f4!2sGreen%20Chilli%20Restaurant%20%26%20Fast%20Food!5e0!3m2!1sen!2sin!4v1782990757006!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="contact-form">
          <div className="form-card">
            <h3>Send a message</h3>
            {sent ? (
              <div className="thanks">
                ✅ Thanks! We&apos;ll get back to you shortly.
              </div>
            ) : (
              <>
                <div className="field">
                  <label>Name</label>
                  <input
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input
                    value={contact.phone}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                    placeholder="Your number"
                  />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea
                    rows={3}
                    value={contact.msg}
                    onChange={(e) =>
                      setContact({ ...contact, msg: e.target.value })
                    }
                    placeholder="How can we help?"
                  />
                </div>
                <button className="btn btn-primary full" onClick={sendContact}>
                  Send Message
                </button>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
