
const plans = [
  {
    name: "Basic Repair",
    price: "₹199",
    features: ["Minor sole fix", "Basic cleaning", "1-day delivery"],
  },
  {
    name: "Standard Repair",
    price: "₹499",
    features: ["Sole replacement", "Heel repair", "Polish included"],
    highlight: true,
  },
  {
    name: "Premium Care",
    price: "₹799",
    features: ["Complete repair", "Deep cleaning", "Leather treatment"],
  },
];

const Pricing = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* BASIC */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">

            <h3 className="text-xl font-semibold text-black">Basic</h3>
            <p className="text-gray-500 mt-1 text-sm">
              Quick surface clean for everyday wear.
            </p>

            <h2 className="mt-6 text-4xl font-bold text-black">
              $29 <span className="text-base font-normal text-gray-400">/pair</span>
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              <li>✔ Surface cleaning</li>
              <li>✔ Deodorizing</li>
              <li>✔ Lace cleaning</li>
              <li>✔ 2-day turnaround</li>
            </ul>

            <button className="mt-8 w-full bg-[#FE9874] text-white py-3 rounded-full font-medium hover:bg-[#f07f56] transition">
              Book Restoration
            </button>

          </div>

          {/* MOST POPULAR */}
          <div className="bg-black text-white rounded-3xl p-8 shadow-lg border-2 border-orange-500 relative scale-105">

            {/* BADGE */}
            <span className="absolute top-4 left-6 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              MOST POPULAR
            </span>

            <h3 className="text-xl font-semibold mt-6">Deep Cleaning</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Complete deep clean with stain removal.
            </p>

            <h2 className="mt-6 text-4xl font-bold">
              $59 <span className="text-base font-normal text-gray-400">/pair</span>
            </h2>

            <ul className="mt-6 space-y-3 text-gray-300 text-sm">
              <li>✔ Deep stain removal</li>
              <li>✔ Sole whitening</li>
              <li>✔ Full sanitization</li>
              <li>✔ Conditioning treatment</li>
              <li>✔ 1-day turnaround</li>
            </ul>

            <button className="mt-8 w-full bg-[#FE9874] text-white py-3 rounded-full font-semibold hover:bg-[#f07f56] transition">
              Book Restoration
            </button>

          </div>

          {/* PREMIUM */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">

            <h3 className="text-xl font-semibold text-black">Premium</h3>
            <p className="text-gray-500 mt-1 text-sm">
              Full restoration & protective coating.
            </p>

            <h2 className="mt-6 text-4xl font-bold text-black">
              $99 <span className="text-base font-normal text-gray-400">/pair</span>
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              <li>✔ Everything in Deep Clean</li>
              <li>✔ Color restoration</li>
              <li>✔ Protective nano-coating</li>
              <li>✔ Minor repairs included</li>
              <li>✔ Priority service</li>
            </ul>

            <button className="mt-8 w-full bg-[#FE9874] text-white py-3 rounded-full font-medium hover:bg-[#f07f56] transition">
              Book Restoration
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
