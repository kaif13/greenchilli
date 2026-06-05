import { useState } from "react";

const getSrcSet = (src) => {
  if (!src.includes("images.unsplash.com") || !src.includes("w=")) {
    return undefined;
  }

  return [360, 520, 720, 900]
    .map((width) => `${src.replace(/w=\d+/, `w=${width}`)} ${width}w`)
    .join(", ");
};

export default function Dish({
  src,
  alt,
  emoji,
  className,
  fallbackText,
  loading = "lazy",
  fetchPriority = "auto",
  sizes = "(max-width: 540px) 100vw, (max-width: 880px) 50vw, 33vw",
}) {
  const [ok, setOk] = useState(true);

  return ok ? (
    <img
      src={src}
      srcSet={getSrcSet(src)}
      sizes={getSrcSet(src) ? sizes : undefined}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
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
