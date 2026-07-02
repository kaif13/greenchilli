export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i}>
            Spicy fast food in Chitbaragaon &nbsp;•&nbsp; Birthday bookings available
            for groups &nbsp;•&nbsp; Fresh pizzas, rolls, noodles and snacks
            - ready in 20 mins &nbsp;•&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

