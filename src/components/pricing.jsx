const plans = [
  {
    title: "Basic Repair",
    price: "₹199",
    features: ["Minor sole fix", "Basic cleaning", "1-day delivery"],
    highlight: false,
  },
  {
    title: "Standard Repair",
    price: "₹499",
    features: ["Sole replacement", "Heel repair", "Polish included"],
    highlight: true,
  },
  {
    title: "Premium Care",
    price: "₹799",
    features: [
      "Complete repair",
      "Deep cleaning",
      "Leather treatment",
    ],
    highlight: false,
  },
];

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-purple-600">Pricing</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Simple and transparent pricing for all services
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={(el) => { if (el) { const items = el.querySelectorAll('.reveal-item'); items.forEach((node,i)=>{ node.style.transitionDelay = `${i*110}ms` }); const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal-visible'); obs.unobserve(e.target); } }); }, {threshold:0.12}); items.forEach(n=>obs.observe(n)); } } } className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="relative reveal-item">
              <div className={`rounded-xl overflow-hidden backdrop-blur-md border shadow-lg transform-gpu transition-transform duration-300 hover:-translate-y-3 hover:scale-105 ${
                plan.highlight
                  ? "bg-white/90 border-white/30"
                  : "bg-white/80 border-white/30"
              }`}>
                <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <div className="p-6 text-center">
                  {plan.highlight && (
                    <div className={`text-xs text-white inline-block px-3 py-1 rounded-full mb-3 bg-gradient-to-r ${gradients[1]}`}>
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {plan.title}
                  </h3>
                  <p className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                    {plan.price}
                  </p>

                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>

                  <button className="w-full py-2 rounded-full bg-gradient-to-r from-gray-900 to-yellow-500 text-white text-sm font-semibold shadow-sm cursor-pointer hover:shadow-lg transition">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
