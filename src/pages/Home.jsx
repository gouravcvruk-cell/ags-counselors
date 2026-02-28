import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { contactInfo, services, testimonials } from "../data/siteData";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AGS Counselors | Antima Soni, Psychological Counselor</title>
        <meta
          name="description"
          content="AGS Counselors offers compassionate, evidence-based counseling in Indore with Antima Soni for anxiety, anger, fear, phobia, and addiction recovery."
        />
        <meta
          name="keywords"
          content="psychological counselor India, anxiety therapy Bhopal, fear and phobia treatment, anger management counseling, addiction recovery support, online counseling India"
        />
      </Helmet>

      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-soft opacity-95" />
        <div className="pointer-events-none absolute -left-14 top-10 h-48 w-48 rounded-full bg-rose-200/70 blur-2xl hero-blob" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-burgundy-200/50 blur-3xl hero-blob" />
        <div className="pointer-events-none absolute bottom-0 right-20 h-40 w-40 rounded-full bg-rose-300/60 blur-2xl hero-blob" />
        <div className="container-wide relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-300 bg-white/70 px-4 py-2 text-sm font-medium text-burgundy-700 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              Emotional wellness with clinical clarity
            </div>
            <p className="text-burgundy-600 font-semibold mb-4 tracking-wide">
              Warm, professional psychological care in Indore
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-burgundy-700 font-bold leading-tight mb-6">
              Your Mind Deserves <span className="hero-highlight">Gentle Healing.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              If anxiety, fear, anger, or addiction feels overwhelming, you do
              not have to carry it alone. Antima Soni offers evidence-based,
              compassionate counseling to help you feel steady and supported.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/80 border border-rose-200 px-4 py-2 text-sm text-burgundy-700">
                Anxiety Relief
              </span>
              <span className="rounded-full bg-white/80 border border-rose-200 px-4 py-2 text-sm text-burgundy-700">
                Emotional Balance
              </span>
              <span className="rounded-full bg-white/80 border border-rose-200 px-4 py-2 text-sm text-burgundy-700">
                Trauma-informed Support
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <NavLink to="/contact" className="btn-primary">
                Start Your Healing Journey
              </NavLink>
              <a
                href="https://www.youtube.com/@Agscounselor"
                target="_blank"
                rel="noreferrer"
                className="btn-youtube"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-rose-300 blur-2xl opacity-60 hero-blob" />
            <div className="absolute -bottom-6 -right-8 h-24 w-24 rounded-full bg-burgundy-200 blur-2xl opacity-50 hero-blob" />
            <img
              src="/images/og-image.svg"
              alt="Calm counseling environment"
              className="soft-panel p-3 rounded-3xl shadow-xl w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 left-6 rounded-2xl bg-white/85 px-4 py-3 shadow-lg border border-rose-100">
              <p className="text-xs uppercase tracking-widest text-rose-500">
                Trusted Care
              </p>
              <p className="font-semibold text-burgundy-700">Confidential Sessions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-6">
            You are not broken. You are human.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mental health struggles can feel isolating, but healing happens when
            you are met with understanding. At AGS Counselors, we create a safe,
            grounded space where you can breathe, be heard, and begin again.
          </p>
        </div>
      </section>

      <section className="section bg-rose-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
                Services That Meet You Where You Are
              </h2>
              <p className="text-slate-600 mt-2">
                Practical, compassionate support tailored to your story.
              </p>
            </div>
            <NavLink to="/services" className="btn-secondary">
              Explore All Services
            </NavLink>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="card border-t-4 border-rose-300 bg-white"
              >
                <p className="text-sm text-rose-500 font-semibold uppercase tracking-wide mb-3">
                  {service.tag}
                </p>
                <h3 className="font-serif text-xl text-burgundy-700 font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
              The AGS Approach
            </h2>
            <p className="text-slate-600 mt-3">
              Evidence-based methods blended with deep empathy and care.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Cognitive Behavioral Therapy (CBT)",
                text: "Reframe unhelpful thoughts and build healthier patterns with structured, practical strategies.",
              },
              {
                title: "Compassionate Talk Therapy",
                text: "A warm, non-judgmental space to explore feelings, relationships, and life transitions.",
              },
              {
                title: "Mindfulness & Grounding",
                text: "Calm your nervous system and reconnect with the present through mindful practices.",
              },
            ].map((item) => (
              <div key={item.title} className="card bg-rose-100 border-t-4 border-rose-300">
                <h3 className="font-serif text-xl text-burgundy-700 font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold">
              What Clients Say
            </h2>
            <p className="text-slate-600 mt-3">
              Real stories of relief, strength, and hope.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="card border-l-4 border-rose-300"
              >
                <p className="text-slate-600 leading-relaxed mb-6">
                  “{testimonial.quote}”
                </p>
                <p className="font-semibold text-burgundy-700">
                  {testimonial.name},{" "}
                  <span className="text-slate-500">{testimonial.age}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
              Hear From Us on YouTube
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Explore calming guidance, coping tools, and mental health insights
              on our channel.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Anxiety Relief", "Anger Tools", "Mindfulness", "Healing Stories"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-rose-100 text-sm text-burgundy-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <a
              href="https://www.youtube.com/@Agscounselor"
              target="_blank"
              rel="noreferrer"
              className="btn-youtube"
            >
              Visit Channel
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              title="AGS Counselors YouTube"
              className="w-full h-72 md:h-96"
              src="https://www.youtube.com/embed?listType=playlist&list=PLAYLIST_ID"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section bg-rose-50">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy-700 font-bold mb-4">
              Why Choose AGS Counselors
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We combine clinical expertise with compassionate care so you feel
              understood and empowered.
            </p>
            <ul className="space-y-3 text-slate-600">
              {[
                "Evidence-based, personalized support",
                "Safe, confidential environment",
                "Online and in-person flexibility",
                "Practical tools you can use every day",
                "A therapist who truly listens",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-burgundy-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-rose-100">
            <p className="text-lg font-semibold text-burgundy-700 mb-4">
              Healing does not start with perfection.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              It starts with a single, brave step. We will take that step with
              you, at your pace.
            </p>
            <NavLink to="/contact" className="btn-primary w-full">
              Book a Session
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-primary text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Healing does not start with perfection. It starts with reaching out.
          </h2>
          <p className="text-rose-100 mb-8">
            Let us create a healing path that feels safe, grounded, and hopeful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={contactInfo.bookingForm}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-white border-white hover:bg-white hover:text-burgundy-700"
            >
              Book Session
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
