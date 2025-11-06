import React, { useEffect, useRef, useState } from "react";

// ✅ Automatically import all images from 6 folders under /src/assets/
const modules = import.meta.glob(
  [
    "../assets/sky1/*.{jpg,jpeg,png,webp,avif}",
    "../assets/sky3/*.{jpg,jpeg,png,webp,avif}",
    "../assets/sky4/*.{jpg,jpeg,png,webp,avif}",
    "../assets/sky5/*.{jpg,jpeg,png,webp,avif}",
    "../assets/sky6/*.{jpg,jpeg,png,webp,avif}",
    "../assets/sky7/*.{jpg,jpeg,png,webp,avif}",
  ],
  { eager: true, as: "url" }
);

// 🧠 Convert imported modules into an array of {src, alt}
const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => {
    const file = path.split("/").pop() || "image";
    const alt = file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
    return { src: url, alt };
  });

export default function SliderderGallery({
  autoPlay = true,
  interval = 4000,
  showThumbs = true,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const go = (i) => setIndex((prev) => (i + images.length) % images.length);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // 🔁 AutoPlay
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [index, autoPlay, interval]);

  // 🖱 Pause on hover
  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (!autoPlay || images.length <= 1) return;
    timerRef.current = setInterval(next, interval);
  };

  // ⌨️ Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // 🚫 Fallback if no images
  if (!images.length) {
    return (
      <div className="rounded-xl bg-black/5 p-6 text-center text-sm text-gray-500">
        No images found in gallery folders.
      </div>
    );
  }

  return (
    <section className="w-full">
      {/* ===== Slider ===== */}
      <div
        className="relative overflow-hidden rounded-xl shadow-2xl"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <figure key={img.src} className="shrink-0 w-full aspect-video bg-black">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center
                       rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center
                       rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbs && images.length > 1 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => go(i)}
              className={`relative overflow-hidden rounded-lg border transition-all duration-200 ${
                i === index ? "border-amber-400 scale-105" : "border-transparent"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-20 w-full object-cover hover:opacity-90"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
