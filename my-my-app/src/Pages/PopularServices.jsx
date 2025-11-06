import React from "react";

const Ornament = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 20"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M92 10h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M106 10c6 0 10-6 16-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M94 10c-6 0-10-6-16-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="60" cy="10" r="2" fill="currentColor" />
    <circle cx="140" cy="10" r="2" fill="currentColor" />
    <circle cx="48" cy="10" r="2" fill="currentColor" />
    <circle cx="152" cy="10" r="2" fill="currentColor" />
  </svg>
);

export default function PopularServices() {
  return (
    <section className="relative bg-[#121315] text-gray-300 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-24 bg-amber-400 mx-auto translate-y-[-1px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <Ornament className="mx-auto h-5 w-[200px] text-amber-400" />
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white">
            <span className="uppercase">Popular</span>{" "}
            <span className="text-amber-400 uppercase">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-gray-400">
            Experience our signature treatments — crafted for those who value detail.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Hair Styling",
              desc: "Get the best from your thick hair by choosing a great style and using the right products for the look you’re after.",
            },
            {
              title: "Beard Trim",
              desc: "Define your look with precision trimming — crafted for the modern gentleman.",
            },
            {
              title: "Hair Color",
              desc: "Enhance your aura with premium shades and expert coloring techniques.",
            },
            {
              title: "Cleansing Facial",
              desc: "Rejuvenate your skin with deep cleansing & hydration — because real confidence glows.",
            },
          ].map((item, i) => (
            <article
              key={i}
              className="text-center p-6 rounded-xl bg-black/20 hover:bg-black/30 border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(255,193,7,0.15)]"
            >
              <h3 className="font-serif text-xl md:text-2xl text-white uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-gray-400 text-sm sm:text-base">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* bottom thin line */}
      <div className="h-[1px] w-full bg-white/10" />
    </section>
  );
}
