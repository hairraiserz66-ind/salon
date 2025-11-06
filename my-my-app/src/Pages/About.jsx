import React from "react";
import heroBg from "../assets/h.jpg";    
import storeImg from "../assets/Hair.webp"; 

export default function AboutSection() {
  return (
    <main className="bg-white text-[#1b1b1b] overflow-hidden">
      {/*  HERO SECTION  */}
      <section
        className="relative h-[40vh] sm:h-[45vh] md:h-[55vh] w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />

        {/* fog wave overlay */}
        <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0 h-24 sm:h-28">
          <svg className="w-full h-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <defs>
              <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C180,120 360,40 540,80 C720,120 900,60 1080,90 C1260,120 1440,80 1440,80 L1440,160 L0,160 Z"
              fill="url(#fade)"
            />
          </svg>
        </div>

        {/* page title */}
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            ABOUT
          </h1>
        </div>
      </section>

      {/*  CONTENT SECTION  */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-center">
          {/* LEFT COLUMN - TEXT */}
          <div className="text-center md:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black">
              HAIR RAISERZ
            </h1>
            <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium tracking-wide text-black/80">
              Elevate Your Beauty, One Raiserz Experience at a Time
            </h2>

            <div className="mt-6 space-y-5 text-[15px] sm:text-[16px] leading-relaxed text-black/90">
              <p>
                At Hair Raiserz, we believe beauty is not just a service — it’s an experience.
                Since our inception, we’ve redefined men’s and women’s grooming with precision,
                creativity, and care that go beyond the ordinary.
              </p>
              <p>
                Our salons combine cutting-edge styling, advanced hair, skin, and nail care, and
                an ambience of modern comfort. Each visit is designed to rejuvenate your
                confidence and leave you feeling your very best.
              </p>
              <p>
                Our expert team of stylists, aestheticians, and therapists bring global techniques
                and years of experience into every appointment. Whether it’s a refreshing haircut,
                a vibrant hair color transformation, or a calming facial ritual — every touch is
                guided by artistry and attention to detail.
              </p>
              <p>
                We use premium, salon-grade products that are also available for home care — so
                your glow continues long after you step out of our doors.
              </p>
              <p>
                At Hair Raiserz, we don’t just style hair — we shape how you feel about yourself.
                Your journey to confidence, care, and sophistication begins here.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={storeImg}
              alt="Hair Raiserz salon exterior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
