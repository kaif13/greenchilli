import { useEffect, useRef, useState } from "react";

export default function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      let current = 0;
      const step = end / 60;
      const id = window.setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          window.clearInterval(id);
        }
        setVal(Math.floor(current));
      }, 22);

      observer.disconnect();
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
