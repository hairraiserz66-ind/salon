import React, { useState } from "react";
import bgImage from "../assets/G.jpg"; 

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const services = [
    "Hair Styling",
    "Beard Trim",
    "Hair Color",
    "Cleansing Facial",
    "Manicure / Pedicure",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  //  When user submits → WhatsApp message auto opens
  const handleSubmit = (e) => {
    e.preventDefault();

    const salonNumber = "91 99159 42299"; 
    const message = `
 *New Contact/Booking Inquiry — Hair Raiserz Luxe Salon* 

 Name: ${form.name}
 Email: ${form.email}
 Service: ${form.service}
Date: ${form.date}
 Message: ${form.message}

Please connect with me soon. Thank you! 💛
`;

    //  WhatsApp API link
    const whatsappURL = `https://wa.me/${salonNumber}?text=${encodeURIComponent(message)}`;

    //  Open WhatsApp chat
    window.open(whatsappURL, "_blank");

    // Reset form
    setForm({ name: "", email: "", service: "", date: "", message: "" });
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="text-white">
            <p className="text-sm tracking-widest text-amber-400 uppercase">
              Contact With Us
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-lg text-gray-300 text-[15px] leading-relaxed">
              Discover your beauty haven. Contact us today for expert hair, nail,
              skin, and grooming care. Your journey to radiance begins here.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6 text-[15px]">
              {/* Call */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-md bg-amber-400/10 border border-amber-400/30">
                  <span className="text-amber-400 text-xl">📞</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Call</div>
                  <a
                    href="tel:+91 99159 42299"
                    className="text-gray-200 hover:text-amber-400 transition"
                  >
                    +91 99159 42299
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-md bg-amber-400/10 border border-amber-400/30">
                  <span className="text-amber-400 text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <a
                    href="mailto:hairraiserzsec66@gmail.com"
                    className="text-gray-200 hover:text-amber-400 transition"
                  >
                    hairraiserzsec66@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              {/* Address */}
<div className="flex items-start gap-4">
  <div className="h-12 w-12 grid place-items-center rounded-md bg-amber-400/10 border border-amber-400/30">
    <span className="text-amber-400 text-xl">📍</span>
  </div>
  <div>
    <div className="text-sm font-semibold text-white">Address</div>
    <a
      href="https://www.google.com/maps?q=Hair+Raiserz+Luxe+Salon,+SCO+63,+Airport+Road,+near+Firstcry,+Sector+66A,+Mohali,+Punjab+140306"
      target="_blank"
      rel="noreferrer"
      className="text-gray-200 hover:text-amber-400 transition leading-snug"
    >
      SCO 63, Airport Road, near Firstcry, Sector 66A, Sahibzada Ajit Singh Nagar,
      <br />
      Punjab 140306
    </a>
  </div>
</div>

            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded-2xl bg-black/85 backdrop-blur-lg text-white p-8 sm:p-10 md:p-12 shadow-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none border-b border-white/25 focus:border-amber-400 h-10 text-white transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none border-b border-white/25 focus:border-amber-400 h-10 text-white transition"
                  required
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Select Service
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="appearance-none w-full bg-transparent text-white border-b border-white/25 focus:border-amber-400 h-10 pr-8 outline-none transition"
                    required
                  >
                    <option value="" className="bg-black">
                      Choose Service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-black">
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 pr-1 text-white">
                    ▾
                  </span>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none border-b border-white/25 focus:border-amber-400 h-10 text-white transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none bg-transparent outline-none border-b border-white/25 focus:border-amber-400 text-white transition"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="w-48 h-12 uppercase tracking-wide text-sm font-semibold
                             bg-amber-400 text-black border border-amber-500
                             hover:bg-amber-500 hover:shadow-lg rounded-md transition-all duration-300"
                >
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
