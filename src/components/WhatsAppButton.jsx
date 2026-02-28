import { contactInfo } from "../data/siteData";

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-green-600 hover:-translate-y-1"
      aria-label="Chat with AGS Counselors on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
