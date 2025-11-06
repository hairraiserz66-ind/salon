import React, { useEffect } from "react";

const services = [
  {
    title: "Classic Haircut",
    desc: "Skin fades, pompadours, crew cuts & more. Precision cuts designed to suit your personality.",
  },
  {
    title: "Beard & Shave",
    desc: "Hot towel shave & beard styling for a sharp, confident look that defines your charm.",
  },
  {
    title: "Facials & Skin",
    desc: "Cleanup, de-tan, and glow facials using premium salon-grade products for fresh skin.",
  },
  {
    title: "Nails & Grooming",
    desc: "Manicure, pedicure, and relaxing head massage — perfect finishing touches for the modern man.",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Services | Haircuts, Beard, Facials & Grooming";
    const desc =
      "Explore services at Hair Raiserz Luxe Salon: haircuts, beard & shave, facials & skin, nails & grooming. Book your appointment online.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-[#0a0a0c] text-gray-200 min-h-screen py-16">
      {/* top accent line */}
      <div className="h-1 w-24 bg-amber-400 mx-auto mb-6" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-wide text-white">
          Our <span className="text-amber-400">Services</span>
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-400">
          Explore our expert grooming & styling services designed for comfort, class, and confidence.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-black/40 border border-white/10 p-6 shadow-md hover:shadow-[0_8px_20px_rgba(255,193,7,0.1)] hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="text-amber-400 text-2xl mb-3 group-hover:scale-110 transition-transform">
                {["✂️", "🧔", "💆‍♂️", "💅"][i]}
              </div>
              <h3 className="font-serif text-xl font-semibold text-white uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://wa.me/91 99159 42299?text=Hi! I’d like to book an appointment at Hair Raiserz Luxe Salon."
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-amber-400 text-black font-bold px-6 py-3 hover:bg-amber-500 transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </main>
  );
}
