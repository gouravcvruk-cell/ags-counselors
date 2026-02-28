import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources | AGS Counselors</title>
        <meta
          name="description"
          content="Explore mental health resources, guidance, and supportive content from AGS Counselors."
        />
      </Helmet>

      <section className="section bg-gradient-primary text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Resources & Guidance
          </h1>
          <p className="text-rose-100 text-lg">
            Thoughtful content to support your healing between sessions.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Managing Anxiety Day by Day",
              text: "Practical tools to calm racing thoughts and build daily resilience.",
            },
            {
              title: "Healthy Anger Expression",
              text: "Learn how to honor your emotions without hurting yourself or others.",
            },
            {
              title: "Fear & Phobia Support",
              text: "Gentle strategies to face fears and expand your sense of safety.",
            },
          ].map((resource) => (
            <div key={resource.title} className="card border-t-4 border-rose-300">
              <h3 className="font-serif text-xl text-burgundy-700 font-bold mb-3">
                {resource.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {resource.text}
              </p>
              <NavLink to="/contact" className="btn-secondary">
                Ask a Question
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
            Want a topic covered?
          </h2>
          <p className="text-slate-600 mb-8">
            Send us your questions and we will create resources that meet your
            needs.
          </p>
          <NavLink to="/contact" className="btn-primary">
            Contact Us
          </NavLink>
        </div>
      </section>
    </>
  );
}
