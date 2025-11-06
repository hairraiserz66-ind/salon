import React, { useState } from "react";
import bgImage from "../assets/p.jpg"; 

export default function Booknow() {
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

  // handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  //  handle submit (send to WhatsApp)
  function handleSubmit(e) {
    e.preventDefault();

    const phoneNumber = " 918102419092"; //  your salon WhatsApp number (no + or spaces)

    // Message template
    const message = `
 *New Booking Request — Hair Raiserz Luxe Salon* 

 Name: ${form.name}
 Email: ${form.email}
 Service: ${form.service}
 Date: ${form.date}
 Message: ${form.message}

Please confirm my appointment. Thank you!
`;

    // WhatsApp link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Optional reset
    setForm({ name: "", email: "", service: "", date: "", message: "" });
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Booking Form */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6">
        <div className="rounded-xl bg-black/85 backdrop-blur-sm shadow-2xl p-10 md:p-12 border border-white/10">
          <h2 className="text-center text-3xl font-semibold mb-8 text-amber-400 tracking-wider">
            Book Your Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none border-b border-white/30 focus:border-white text-white h-10"
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
                className="w-full bg-transparent outline-none border-b border-white/30 focus:border-white text-white h-10"
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
                  className="appearance-none w-full bg-transparent text-white border-b border-white/30 focus:border-white h-10 outline-none pr-8"
                  required
                >
                  <option value="" className="bg-black">
                    Select Service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-black">
                      {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 pr-1">
                  ▾
                </span>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Select Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-transparent outline-none border-b border-white/30 focus:border-white text-white h-10"
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
                rows={3}
                className="w-full resize-none bg-transparent outline-none border-b border-white/30 focus:border-white text-white"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="w-48 h-12 uppercase tracking-wide text-sm font-semibold
                           bg-amber-400 text-black border border-amber-500
                           hover:bg-amber-500 transition-all duration-300 rounded-md shadow-md"
              >
                Send on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
