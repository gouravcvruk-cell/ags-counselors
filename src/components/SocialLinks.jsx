import { contactInfo } from "../data/siteData";

const icons = {
  youtube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 7.4a3 3 0 0 0-2.1-2.1C19.6 5 12 5 12 5s-7.6 0-9.4.3A3 3 0 0 0 .5 7.4 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 4.6 3 3 0 0 0 2.1 2.1C4.4 19 12 19 12 19s7.6 0 9.4-.3a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-4.6Zm-13 7V9.6L15.5 12l-5 2.4Z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1Zm3.1 1.1a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-3.8-1.5c-1.5-.1-6-.1-7.5 0a5.4 5.4 0 0 0-3.8 1.5 5.4 5.4 0 0 0-1.5 3.8c-.1 1.5-.1 6 0 7.5a5.4 5.4 0 0 0 1.5 3.8 5.4 5.4 0 0 0 3.8 1.5c1.5.1 6 .1 7.5 0a5.4 5.4 0 0 0 3.8-1.5 5.4 5.4 0 0 0 1.5-3.8c.1-1.5.1-6 0-7.5Zm-2 9.1a3.1 3.1 0 0 1-1.7 1.7c-1.2.5-4 .4-5.4.4s-4.2.1-5.4-.4a3.1 3.1 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.4s-.1-4.2.4-5.4a3.1 3.1 0 0 1 1.7-1.7c1.2-.5 4-.4 5.4-.4s4.2-.1 5.4.4a3.1 3.1 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.4s.1 4.2-.4 5.4Z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.1 18.9H5.7v-9h2.4Zm-1.2-10a1.4 1.4 0 1 1 1.4-1.4A1.4 1.4 0 0 1 6.9 8.9Zm12 10H16.5v-4.4c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.5H10.7v-9h2.3v1.2h.1a2.6 2.6 0 0 1 2.4-1.3c2.6 0 3.1 1.7 3.1 3.9Z"
      />
    </svg>
  ),
};

export default function SocialLinks({
  className = "",
  iconClassName = "",
  light = false,
}) {
  const links = [
    {
      key: "youtube",
      href: contactInfo.youtube,
      label: "YouTube",
      icon: icons.youtube,
    },
    {
      key: "instagram",
      href: contactInfo.instagram,
      label: "Instagram",
      icon: icons.instagram,
    },
  ];

  if (contactInfo.linkedin) {
    links.push({
      key: "linkedin",
      href: contactInfo.linkedin,
      label: "LinkedIn",
      icon: icons.linkedin,
    });
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={`inline-flex items-center justify-center rounded-full border ${
            light ? "border-rose-200 text-burgundy-700 hover:text-burgundy-600" : "border-rose-200/60 bg-white/10 text-rose-100 hover:text-white"
          } p-2 transition-colors ${iconClassName}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
