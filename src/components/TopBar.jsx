import { contactInfo } from "../data/siteData";
import SocialLinks from "./SocialLinks";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-burgundy-900 text-rose-50 text-sm">
      <div className="container-wide flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <span>{contactInfo.phone}</span>
          <span>{contactInfo.email}</span>
          <span>{contactInfo.hours}</span>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}
