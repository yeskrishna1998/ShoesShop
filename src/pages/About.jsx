import React from "react";

const services = [
  {
    title: "Deep Cleaning",
    desc: "Complete sneaker cleaning to remove dirt, stains, odor, and surface buildup.",
  },
  {
    title: "Shoe Repair",
    desc: "Professional repair work for soles, stitches, heels, and damaged structure.",
  },
  {
    title: "Protection Coating",
    desc: "Premium protection treatment to reduce stains, moisture damage, and daily wear impact.",
  },
];

const aboutHighlights = [
  "Professional Sneaker Cleaning",
  "Shoe Restoration",
  "Pickup & Delivery Service",
  "Premium Protection Coating",
];

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(254,152,116,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,214,102,0.16),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <section className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <img
              src="/zcoated.png"
              alt="Zcoated logo"
              className="h-12 w-14 rounded-lg bg-black object-contain p-1"
            />
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200">
              About Zcoated
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Premium Shoe Care Built Around Craft, Convenience, and Trust
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Zcoated is a premium shoe care startup dedicated to bringing life back to your favorite sneakers and footwear through expert cleaning, restoration, and protection services.
          </p>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[30px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
              Our Startup Story
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              We started with one simple idea
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
              People love their shoes, but they often do not have the time, tools, or expertise to maintain them properly. Zcoated was built to solve that problem with professional sneaker cleaning and restoration backed by pickup and delivery.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Our mission is to make premium shoe care more accessible while helping customers extend the life, look, and comfort of the pairs they value most.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#121212]/95 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
              Why Choose Zcoated
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              A cleaner, smarter, more premium service experience
            </h3>

            <div className="mt-6 grid gap-3">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300"
                >
                  <span className="mr-2 text-orange-300">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Care options designed for everyday wear and premium pairs
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl transition hover:border-[#FE9874]/40 hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
