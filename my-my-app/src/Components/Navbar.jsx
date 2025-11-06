import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Untitled design (5).png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const phone = " +91 99159 42299";
  const cx = (...a) => a.filter(Boolean).join(" ");

  return (
    <header className="sticky top-0 z-50 bg-black/85 border-b border-white/10 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px] md:h-[110px]">
          
           {/* Logo Section */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src={logo}
              alt="Hair Raiserz Logo"
              className="h-[70px] sm:h-[80px] md:h-[95px] w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/*  Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cx(
                    "text-base font-medium transition-colors",
                    isActive
                      ? "text-amber-400"
                      : "text-zinc-300 hover:text-amber-300"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/*  Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className="text-sm lg:text-base font-semibold text-zinc-200 hover:text-white"
            >
              {phone}
            </a>
            <Link
              to="/booknow"
              className="inline-flex items-center rounded-lg bg-amber-400 text-black font-bold px-4 py-2 lg:px-5 lg:py-2.5 hover:brightness-95 transition"
            >
              Book Now
            </Link>
          </div>

          {/*  Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center rounded-lg p-2 hover:bg-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/*  Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <div className="px-4 py-5 flex flex-col gap-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cx(
                    "text-lg font-medium",
                    isActive
                      ? "text-amber-400"
                      : "text-zinc-200 hover:text-amber-300"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}

            <a
              href={`tel:${phone}`}
              className="text-base font-semibold text-zinc-200"
            >
              {phone}
            </a>

            <Link
              to="/booknow"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-amber-400 text-black font-bold px-5 py-2.5 hover:brightness-95"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
