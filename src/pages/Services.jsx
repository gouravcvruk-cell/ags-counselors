import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | AGS Counselors</title>
        <meta
          name="description"
          content="Explore counseling services for anxiety, anger, fear, phobia, addiction recovery, and relationship support at AGS Counselors."
        />
      </Helmet>

      <section className="section bg-gradient-primary text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-rose-100 text-lg">
            Support tailored to your needs, guided by compassion and expertise.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
            Find the support that fits your journey
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Each service is designed to help you feel grounded, understood, and
            empowered. We combine evidence-based strategies with compassionate
            care.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${index % 2 === 0 ? "bg-rose-50" : "bg-cream-50"}`}
        >
          <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <span className="text-sm uppercase tracking-widest text-rose-500 font-semibold">
                {service.tag}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mt-3 mb-4">
                {service.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-burgundy-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <NavLink to="/contact" className="btn-primary">
                Book a {service.title} Session
              </NavLink>
            </div>
            <div
              className={`rounded-3xl bg-white shadow-xl border border-rose-100 p-8 ${
                index % 2 === 0 ? "" : "lg:order-1"
              }`}
            >
              <h3 className="font-serif text-2xl text-burgundy-700 font-bold mb-4">
                {service.infoTitle}
              </h3>
              <ul className="space-y-3 text-slate-600">
                {service.infoList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-gradient-primary text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-rose-100 mb-8">
            Reach out today and let us create a path toward calm and clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-burgundy-700">
              Book a Session
            </NavLink>
            <NavLink to="/contact" className="btn-primary bg-white text-burgundy-700 hover:bg-rose-100">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
