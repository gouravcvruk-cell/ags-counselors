import { NavLink } from "react-router-dom";
import { contactInfo } from "../data/siteData";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-burgundy-900 text-rose-50">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/banner.png"
              alt="AGS Counselors logo"
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-serif text-xl font-bold">AGS Counselors</p>
              <p className="text-xs uppercase tracking-[0.2em] text-rose-200">
                Compassionate Care
              </p>
            </div>
          </div>
          <p className="mt-4 text-rose-100">
            A warm, professional space for anxiety, anger, fear, phobia, and
            addiction counseling. We help you rediscover calm and confidence.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-4">Quick Links</p>
          <ul className="space-y-2 text-rose-100">
            <li>
              <NavLink to="/about" className="hover:text-white">
                About AGS
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-white">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className="hover:text-white">
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-4">Contact Info</p>
          <ul className="space-y-2 text-rose-100">
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-4">Social Media</p>
          <SocialLinks className="text-rose-100" />
        </div>
      </div>
      <div className="border-t border-rose-800">
        <div className="container-wide py-4 text-sm text-rose-200 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© 2026 AGS Counselors. All rights reserved.</span>
          <span>Made with care for your healing journey.</span>
        </div>
      </div>
    </footer>
  );
}
