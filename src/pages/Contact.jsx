import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { contactInfo, faqs } from "../data/siteData";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!formData.concern) nextErrors.concern = "Please select a concern.";
    if (!formData.message.trim())
      nextErrors.message = "Please share a short message.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus("Thanks for reaching out. We will respond within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        concern: "",
        message: "",
      });
    } else {
      setStatus("Please review the highlighted fields.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | AGS Counselors</title>
        <meta
          name="description"
          content="Reach out to AGS Counselors for compassionate mental health support in Indore and online across India. Book appointments directly using our secure Google Form."
        />
      </Helmet>

      <section className="section bg-gradient-primary text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            You Do Not Need to Face It Alone
          </h1>
          <p className="text-rose-100 text-lg">
            Share what you are going through. We will respond with care and
            clarity.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <form
            className="bg-rose-100 rounded-3xl p-8 shadow-xl space-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label className="block text-sm font-semibold text-burgundy-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                className="w-full rounded-lg border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy-600"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-xs text-burgundy-700 mt-2">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-burgundy-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                className="w-full rounded-lg border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy-600"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-burgundy-700 mt-2">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-burgundy-700 mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy-600"
                placeholder="+91 99999 99999"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-burgundy-700 mb-2">
                Concern
              </label>
              <select
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                aria-invalid={Boolean(errors.concern)}
                className="w-full rounded-lg border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy-600"
              >
                <option value="">Select a concern</option>
                <option>Anxiety & Stress</option>
                <option>Anger Management</option>
                <option>Fear & Phobia</option>
                <option>Addiction Recovery</option>
                <option>Relationship Counseling</option>
                <option>Other</option>
              </select>
              {errors.concern && (
                <p className="text-xs text-burgundy-700 mt-2">{errors.concern}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-burgundy-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                className="w-full rounded-lg border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy-600"
                placeholder="Tell us what you are looking for support with."
              />
              {errors.message && (
                <p className="text-xs text-burgundy-700 mt-2">{errors.message}</p>
              )}
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
            <p className="text-xs text-slate-500" aria-live="polite">
              {status || "We respond within 24 hours on business days."}
            </p>
          </form>

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl text-burgundy-700 font-bold mb-4">
                Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Reach out in the way that feels easiest for you. We are here to
                listen.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { label: "Email", value: contactInfo.email },
                { label: "Phone", value: contactInfo.phone },
                { label: "WhatsApp", value: "Message us directly" },
                { label: "Location", value: contactInfo.location },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-rose-100 p-6 border border-rose-200"
                >
                  <p className="text-sm uppercase tracking-widest text-rose-500 mb-2">
                    {item.label}
                  </p>
                  <p className="text-burgundy-700 font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-rose-100">
              <p className="font-semibold text-burgundy-700 mb-4">
                Quick Actions
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={contactInfo.bookingForm}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Book Appointment
                </a>
                <a href={contactInfo.whatsapp} className="btn-whatsapp">
                  WhatsApp
                </a>
                <a href="mailto:contact@agscounselors.com" className="btn-secondary">
                  Email Us
                </a>
              </div>
              <div className="mt-4">
                <SocialLinks light />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-rose-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
              Book Your Counseling Appointment
            </h2>
            <p className="text-slate-600 mt-3">
              Use the secure form below to schedule your session. It takes less
              than 2 minutes.
            </p>
          </div>
          <div className="soft-panel p-4 md:p-6">
            <iframe
              title="AGS Counselors Appointment Booking Form"
              src={contactInfo.bookingFormEmbed}
              className="w-full h-[980px] rounded-2xl border border-rose-100 bg-white"
              loading="lazy"
            >
              Loading...
            </iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href={contactInfo.bookingForm}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Open Form in New Tab
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-3">
              Helpful answers so you feel informed and confident.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card border-l-4 border-rose-300"
              >
                <h3 className="font-semibold text-burgundy-700 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
            Taking the First Step Takes Courage
          </h2>
          <p className="text-slate-600 mb-8">
            You deserve support that feels safe and compassionate. We are ready
            when you are.
          </p>
          <a href={contactInfo.whatsapp} className="btn-whatsapp">
            Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
