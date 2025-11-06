import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ExpertSection from "../Pages/ExpertSection.jsx";
import PopularServices from "../Pages/PopularServices.jsx";
import SliderderGallery from "../Components/SliderGallery.jsx";

//  Assets
import aboutImg from "../assets/image.png";
import heroImg from "../assets/gril.jpg";

export default function Home() {
  const phone = "+91 99159 42299";
  const wa = "91 99159 42299";

  // --- SEO Meta Setup ---
  useEffect(() => {
    document.title = "Hair Raiserz Luxe Salon | Premium Men's Grooming in Mohali";
    const content =
      "Hair Raiserz Luxe Salon – premium men's haircuts, beard styling, facials & grooming in Sector 66A, Mohali. Book your slot online.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }, []);

  return (
    <main className="bg-[#0a0a0c] text-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative grid place-items-center min-h-[85vh] sm:min-h-[90vh]">
        <img
          src={heroImg}
          alt="Salon interior with premium grooming setup"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] sm:text-xs tracking-wider text-amber-300 uppercase">
            Where every cut feels like indulgence
          </div>
          <p className="mt-3 text-[11px] sm:text-xs tracking-[0.2em] text-zinc-300 uppercase">
            Premium Grooming • Mohali
          </p>

          <h1 className="mt-3 font-serif font-bold leading-tight text-[clamp(28px,5vw,60px)]">
            WHERE STYLE IS{" "}
            <span className="block text-amber-400">
              PERSONAL, AND EVERY DETAIL MATTERS
            </span>
          </h1>

          {/* --- CTA Buttons --- */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="rounded-lg bg-amber-400 text-black font-semibold px-6 py-3 hover:bg-amber-500 transition"
            >
              Discover Now
            </Link>
            <a
              href={`tel:${phone}`}
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Call {phone}
            </a>
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent(
                "Hi Hair Raiserz Luxe Salon! I’d like to book an appointment."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-semibold text-emerald-300 hover:bg-emerald-400/20 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-20 grid gap-10 md:grid-cols-2 items-center">
        {/* Left text */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400">
            About Our Salon
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            When it comes to hair, nails, skin and beauty care, Hair Raiserz Salon is
            committed to offering our customers a wide range of services. Our salon
            prides itself on the finest stylists, nail technicians and highly
            knowledgeable skincare specialists.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            We also provide salon-grade products for home use — so your glow continues
            long after you leave our doors.
          </p>
          <Link
            to="/about"
            className="mt-5 inline-block rounded-lg border border-amber-400/40 px-5 py-2 text-amber-300 hover:bg-amber-400 hover:text-black transition"
          >
            Learn More
          </Link>
        </div>

        {/* Right image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutImg}
            alt="Professional stylist working at Hair Raiserz Luxe Salon"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* --- Expert Video Section --- */}
        <div className="md:col-span-2 mt-10">
          <ExpertSection />
        </div>
      </section>

      {/* ============ POPULAR SERVICES + GALLERY ============ */}
      <PopularServices />
      <div className="mt-10">
        <SliderderGallery />
      </div>
    </main>
  );
}
