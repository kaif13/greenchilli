import { useState } from "react";

export default function Dish({ src, alt, emoji, className, fallbackText }) {
  const [ok, setOk] = useState(true);

  return ok ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setOk(false)}
    />
  ) : (
    <div className={`${className} dish-fallback`}>
      <span>{emoji}</span>
      {fallbackText && <small>{fallbackText}</small>}
    </div>
  );
}
