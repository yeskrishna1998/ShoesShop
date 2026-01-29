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

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
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
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center border transition hover:-translate-y-1 hover:shadow-lg ${
                plan.highlight
                  ? "bg-white border-purple-500 shadow-md"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="text-xs text-white bg-purple-600 inline-block px-3 py-1 rounded-full mb-3">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold mb-4">
                {plan.price}
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button className="w-full py-2 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
