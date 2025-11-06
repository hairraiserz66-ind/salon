import React from "react";

const Icon = {
  Facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .07 2.2.1v2.5h-1.4c-1.1 0-1.4.7-1.4 1.3V12h2.8l-.45 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  ),
  X: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h3.9l5.1 6.7L17.9 3H21l-7.6 9.5L21 21h-3.9l-5.3-7-5.2 7H3l7.6-9.4L3 3z" />
    </svg>
  ),
  LinkedIn: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h4v12H3zM14.5 8.75c-2.1 0-3.5 1.2-3.9 2.1V9H6.7l.05 12h3.9v-6.7c0-1.8.9-2.9 2.4-2.9 1.4 0 2.2 1 2.2 2.9V21h4v-7.3c0-3.8-2.1-4.95-4.75-4.95z" />
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.8 6.2a1 1 0 1 1-1.6 1.2 1 1 0 0 1 1.6-1.2Z" />
    </svg>
  ),
  Pinterest: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.53 2 3 5.57 3 10.2c0 3.13 1.78 4.92 2.8 4.92.44 0 .7-1.23.7-1.57 0-.41-1.05-1.3-1.05-3.02 0-3.57 2.73-6.08 6.62-6.08 3.22 0 5.59 1.83 5.59 5.21 0 2.51-1.01 7.24-4.3 7.24-1.19 0-2.2-.85-2.2-2.07 0-1.79 1.26-3.52 1.26-5.38 0-3.12-4.42-2.56-4.42 1.2 0 1.07.32 1.8.32 1.8s-1.09 4.59-1.28 5.4c-.38 1.63-.06 3.63-.03 3.83.02.14.2.18.29.07.12-.16 1.62-2.24 2.13-3.94.15-.5.84-3.09.84-3.09.41.78 1.6 1.36 2.87 1.36 3.79 0 6.35-3.44 6.35-8.07C21.04 5.46 17.73 2 12.04 2Z" />
    </svg>
  ),
};

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61566087710273", label: "Facebook", Icon: Icon.Facebook },
  { href: "#", label: "X", Icon: Icon.X },
  { href: "#", label: "LinkedIn", Icon: Icon.LinkedIn },
  { href: "https://www.instagram.com/hairraiserzluxe66/", label: "Instagram", Icon: Icon.Instagram },
  { href: "#", label: "Pinterest", Icon: Icon.Pinterest },
];

export default function Footer() {
  const phone = "+91 99159 42299";
  const email = "hairraiserzsec66@gmail.com";

  // Salon Google Maps Link
  const mapLink =
    "https://www.google.com/maps/dir//SCO+63,+Airport+Road,+near+Firstcry,+Sector+66+A,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140306/@30.661252,76.6620322,11.97z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa2e9834a562b4565:0x6aca366eb72e1632!2m2!1d76.7384442!2d30.6586273?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-[#0a0a0c] text-zinc-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* LOGO */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-white">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide">
              HAIR
            </span>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-amber-400 tracking-wide">
              RAISERZ
            </span>
          </div>
        </div>

        {/* CONTACT GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-center sm:text-left">
          <div className="space-y-1 text-sm sm:text-base">
            <p>
              <span className="text-zinc-400">Phone: </span>
              <a
                className="hover:text-white"
                href={`tel:${phone.replace(/\s/g, "")}`}
              >
                {phone}
              </a>
            </p>
            <p>
              <span className="text-zinc-400">Email: </span>
              <a className="hover:text-white" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>

          <div className="space-y-1 text-sm sm:text-base">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              SCO 63, Airport Road, Sector 66 A
            </a>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300 block"
            >
              Punjab 140306
            </a>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
                         border border-white/20 rounded-md hover:bg-white/10
                         transition-all duration-300 hover:scale-110 hover:border-amber-400"
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-200 transition-transform duration-500 group-hover:rotate-180" />
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-white/10 py-4 text-center text-xs sm:text-sm text-zinc-500">
        © {new Date().getFullYear()} Hair Raiserz Luxe Salon — All rights reserved.
      </div>

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 inline-flex h-10 w-10 sm:h-11 sm:w-11
                   items-center justify-center rounded-md border border-white/20
                   bg-zinc-900/80 hover:bg-zinc-800 transition duration-300"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12z" />
        </svg>
      </button>
    </footer>
  );
}
