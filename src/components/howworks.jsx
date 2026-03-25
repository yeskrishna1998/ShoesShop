const steps = [
  {
    title: "Book Your Service",
    desc: "Choose your service and schedule your order in just a few clicks.",
    tag: "Quick Booking",
  },
  {
    title: "Free Doorstep Pickup",
    desc: "We pick up your shoes & bags from your home at your convenience.",
    tag: "Pickup Support",
  },
  {
    title: "Professional Cleaning & Repair",
    desc: "Our experts clean, restore, and repair your items with premium care.",
    tag: "Expert Care",
  },
  {
    title: "Delivered Like New",
    desc: "Get your items delivered back fresh, clean, and looking brand new.",
    tag: "Fresh Return",
  },
];

const cardStyles = [
  "bg-orange-500/10 border-orange-300/30",
  "bg-amber-500/10 border-amber-300/30",
  "bg-emerald-500/10 border-emerald-300/30",
  "bg-cyan-500/10 border-cyan-300/30",
];

const accentBars = [
  "from-orange-300 via-orange-400 to-orange-500",
  "from-amber-300 via-amber-400 to-yellow-500",
  "from-emerald-300 via-emerald-400 to-teal-500",
  "from-cyan-300 via-sky-400 to-blue-500",
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#080808] via-[#111317] to-[#1a130b] text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl"></div>
      <div className="relative z-10">

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
        How It <span className="text-orange-300">Works</span>
      </h2>

      <p className="text-gray-300 mb-16 text-sm md:text-base">
        Simple, hassle-free process from pickup to delivery
      </p>

      {/* STEPS */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">

        {/* 🔗 CONNECTING LINE (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-orange-300/30 via-white/20 to-emerald-300/30 z-0"></div>

        {steps.map((item, index) => (
          <div key={index} className="relative z-10">

            {/* CARD */}
            <div
              className={`
                ${cardStyles[index]}
                border
                p-8 rounded-3xl
                text-center
                backdrop-blur-md
                transition duration-300
                hover:-translate-y-2
                hover:shadow-xl hover:shadow-orange-950/30
              `}
            >

              {/* STEP NUMBER CIRCLE */}
              <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-white/95 text-black text-sm flex items-center justify-center">
                {index + 1}
              </div>

              <div className="mx-auto mb-5 max-w-[180px]">
                <div
                  className={`h-1.5 rounded-full bg-gradient-to-r ${accentBars[index]}`}
                ></div>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  {item.tag}
                </p>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-2 text-white">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
      </div>

    </section>
  );
};

export default HowItWorks;
