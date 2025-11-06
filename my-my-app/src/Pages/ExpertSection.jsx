import React, { useState } from "react";


import expertVideo from "../assets/^AM MOnsdiknx sn.mp4";
import expertImage from "../assets/photo-1634449571010-02389ed0f9b0.jpg";

export default function ExpertSection({
  title = "Allow your body, mind and soul to sense a haven of tranquility",
  kicker = "Expertise Areas",
  caption,
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0c] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- Heading Section --- */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-400">
            {kicker}
          </p>
          <h2 className="mt-4 font-serif font-semibold leading-tight text-[clamp(28px,5vw,52px)] text-amber-300">
            {title}
          </h2>
        </div>

        {/* --- Media Section --- */}
        <figure
          className="relative mt-10 sm:mt-12 aspect-video overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-white/10"
          aria-label="Salon video thumbnail"
        >
          {/* Image Thumbnail */}
          <img
            src={expertImage}
            alt="Professional stylist performing treatment"
            className="h-full w-full object-cover scale-[1.02] saturate-[.9] contrast-[.95]"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Play Button */}
          <button
            onClick={() => setShowVideo(true)}
            aria-label="Play video"
            className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center 
                       rounded-full bg-amber-400 text-black shadow-[0_0_25px_rgba(255,193,7,0.4)]
                       hover:scale-105 transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-black translate-x-[2px]"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </figure>

        {/* Optional caption */}
        {caption && (
          <p className="mt-4 text-center text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            {caption}
          </p>
        )}
      </div>

      {/* --- Video Modal --- */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
          <div className="relative w-full max-w-3xl rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <video
              src={expertVideo}
              controls
              autoPlay
              className="w-full h-auto object-contain"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-amber-400 transition"
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
