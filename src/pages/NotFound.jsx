import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | AGS Counselors</title>
        <meta
          name="description"
          content="Sorry, the page you are looking for does not exist. Return to AGS Counselors home."
        />
      </Helmet>
      <section className="section bg-gradient-soft min-h-[70vh] flex items-center">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <p className="text-rose-500 font-semibold uppercase tracking-widest mb-3">
            Error 404
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-burgundy-700 font-bold mb-4">
            We could not find that page.
          </h1>
          <p className="text-slate-600 leading-relaxed mb-8">
            The link may be broken, or the page may have been moved. Let us get
            you back to a safe place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/" className="btn-primary">
              Go Home
            </NavLink>
            <NavLink to="/contact" className="btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
