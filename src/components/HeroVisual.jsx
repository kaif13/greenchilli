import { motion, useReducedMotion } from "framer-motion";
import Dish from "./Dish.jsx";

const heroPizza = "/pizza-hero-clean.png";

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="hv-glow" />

      {/* Entrance: smooth arc in from behind the right edge (runs once) */}
      <motion.div
        className="hero-pizza-enter"
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, x: "110%", y: "35%", rotate: 90, scale: 0.85 }
        }
        animate={{ opacity: 1, x: "0%", y: "0%", rotate: 0, scale: 1 }}
        transition={
          reduceMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 0.5, ease: "easeOut" },
                x: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 0.9, ease: [0.45, 0, 0.55, 1] },
                rotate: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              }
        }
      >
        {/* Float: gentle loop, starts after entrance settles */}
        <motion.div
          className="hero-pizza-wrap"
          animate={reduceMotion ? {} : { y: [0, -7, 0], rotate: [0, 0.8, 0] }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        >
          <div className="hero-pizza-stage">
            <Dish
              src={heroPizza}
              alt="Full tandoori paneer pizza"
              className="hero-pizza-img"
              fallbackText="Add pizza-hero.png"
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 540px) 90vw, 520px"
            />
            <div className="hero-pizza-shadow" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hv-badge"
        initial={{ x: reduceMotion ? 0 : 50, opacity: 0 }}
        animate={
          reduceMotion
            ? { x: 0, opacity: 1 }
            : { x: 0, opacity: 1, y: [0, -5, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.4, delay: 0.3 }
            : {
                x: { duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.6, delay: 1.4 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.1,
                },
              }
        }
      >
        <span className="hv-badge-star">★ 4.8</span>
        <span className="hv-badge-sub">2,400+ ratings</span>
      </motion.div>

      <motion.div
        className="hv-card hv-card-0"
        initial={{ x: reduceMotion ? 0 : 50, opacity: 0 }}
        animate={
          reduceMotion
            ? { x: 0, opacity: 1 }
            : { x: 0, opacity: 1, y: [0, -5, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.4, delay: 0.35 }
            : {
                x: { duration: 0.6, delay: 1.55, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.6, delay: 1.55 },
                y: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.25,
                },
              }
        }
      >
        <div className="hv-chip-ic">🍔</div>
        <div className="hv-card-info">
          <strong>Veg Burger</strong>
          <span>₹99</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
