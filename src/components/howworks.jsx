const steps = [
  {
    step: "01",
    title: "Bring Your Shoes",
    desc: "Visit our shop or contact us with your shoe issue",
    icon: "👟",
  },
  {
    step: "02",
    title: "Repair & Polish",
    desc: "Our experts repair, clean & polish your shoes",
    icon: "🛠️",
  },
  {
    step: "03",
    title: "Collect Like New",
    desc: "Get your shoes back looking brand new",
    icon: "✨",
  },
];

const HowWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How It <span className="text-purple-600">Works</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Simple steps to get your shoes repaired
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-purple-600 text-sm font-bold mb-2">
                STEP {item.step}
              </div>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWorks;
