import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Antima Soni | AGS Counselors</title>
        <meta
          name="description"
          content="Learn about Antima Soni, a psychological counselor in Indore, and the mission and values behind AGS Counselors."
        />
      </Helmet>

      <section className="section bg-gradient-primary text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            About AGS Counselors
          </h1>
          <p className="text-rose-100 text-lg">Heal. Grow. Transform.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
            Our Philosophy
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We believe every healing journey is unique. Our role is to walk with
            you, providing compassionate guidance, evidence-based tools, and a
            safe space to rediscover your strength.
          </p>
        </div>
      </section>

      <section className="section bg-rose-50">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          <div className="card border-t-4 border-rose-300 bg-rose-100">
            <h3 className="font-serif text-2xl text-burgundy-700 font-bold mb-3">
              Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To provide compassionate, evidence-led counseling that helps
              clients feel safe, understood, and empowered to heal.
            </p>
          </div>
          <div className="card border-t-4 border-rose-300 bg-rose-100">
            <h3 className="font-serif text-2xl text-burgundy-700 font-bold mb-3">
              Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              A world where mental health support feels accessible, dignified,
              and hopeful for every person seeking help.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
              Our Values
            </h2>
            <p className="text-slate-600 mt-3">
              The principles that shape every session and every conversation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Empathy",
                text: "We meet you with warmth, understanding, and genuine care.",
              },
              {
                title: "Evidence-led Practice",
                text: "Our methods are grounded in research and clinical experience.",
              },
              {
                title: "Confidentiality",
                text: "Your story is safe with us. Trust and privacy come first.",
              },
              {
                title: "Growth-focused",
                text: "We help you build resilience, clarity, and lasting change.",
              },
            ].map((value) => (
              <div key={value.title} className="card border-t-4 border-rose-300">
                <h3 className="font-serif text-xl text-burgundy-700 font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <img
            src="/images/antima-soni.svg"
            alt="Antima Soni, Counselor"
            className="rounded-3xl shadow-xl w-full object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
              Meet the Counselor
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Antima Soni is a psychological counselor, content creator, and
              community-focused professional based in Indore. She supports
              individuals, couples, and groups in navigating emotional
              challenges while also leading skill development initiatives for
              students, freshers, and working professionals. Her style is warm,
              practical, and focused on helping people build steadier lives.
            </p>
            <div className="rounded-2xl bg-rose-100 p-4 border border-rose-200 text-burgundy-700">
              Open for collaboration, speaking, and wellness education
              initiatives.
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
              How We Work
            </h2>
            <p className="text-slate-600 mt-3">
              A clear, gentle process that respects your pace.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Connect and understand your story",
              "Define goals and focus areas",
              "Build practical tools and coping skills",
              "Support ongoing growth and resilience",
            ].map((step, index) => (
              <div key={step} className="card border-t-4 border-rose-300">
                <div className="h-12 w-12 rounded-full bg-rose-100 text-burgundy-700 font-bold flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <p className="text-slate-600 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-rose-50">
        <div className="container-wide grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
              Digital Presence
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Join our YouTube community for practical guidance, calming
              practices, and supportive mental health education.
            </p>
            <a
              href="https://www.youtube.com/@Agscounselor"
              target="_blank"
              rel="noreferrer"
              className="btn-youtube"
            >
              Visit YouTube Channel
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white p-8">
            <p className="text-burgundy-700 font-semibold mb-2">
              You are not alone.
            </p>
            <p className="text-slate-600">
              We share resources, reflections, and tools to support your healing
              between sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-slate-600 mb-8">
            We are here to listen, guide, and support your healing journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/contact" className="btn-primary">
              Contact Us
            </NavLink>
            <NavLink to="/contact" className="btn-secondary">
              Book Session
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
