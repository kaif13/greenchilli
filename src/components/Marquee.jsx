export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i}>
            🌶️ Flat 20% OFF on your first order &nbsp;•&nbsp; 🎂 Free cake on
            birthday bookings above 20 guests &nbsp;•&nbsp; 🚀 Order on WhatsApp
            - ready in 20 mins &nbsp;•&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
