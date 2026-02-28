import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { contactInfo, services } from "../data/siteData";

const navLinkClass = ({ isActive }) =>
  `transition-colors ${isActive ? "text-burgundy-700" : "text-slate-700 hover:text-burgundy-600"}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-rose-100">
      <div className="container-wide flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/banner.png"
            alt="AGS Counselors logo"
            className="h-10 w-10 rounded-full object-cover shadow-glow"
            loading="lazy"
          />
          <div>
            <p className="font-serif text-xl text-burgundy-700 font-bold">
              AGS Counselors
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-rose-400">
              Heal. Grow. Transform.
            </p>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <div className="relative group">
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <div className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-xl border border-rose-100 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
              <div className="p-4 space-y-3">
                {services.map((service) => (
                  <NavLink
                    key={service.id}
                    to={`/services#${service.id}`}
                    className="block text-sm text-slate-600 hover:text-burgundy-700"
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={contactInfo.bookingForm}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Book Session
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-rose-200 px-3 py-2 text-burgundy-700"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white">
          <div className="container-wide py-6 space-y-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <div className="space-y-2">
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <NavLink
                    key={service.id}
                    to={`/services#${service.id}`}
                    className="block text-sm text-slate-600 hover:text-burgundy-700"
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/resources" className={navLinkClass}>
              Resources
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <a
              href={contactInfo.bookingForm}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
            >
              Book Session
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
