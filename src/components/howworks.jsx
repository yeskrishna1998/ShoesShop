const steps = [
  {
    step: "01",
    title: "Book Repair",
    desc: "Choose your shoe issue and book repair service online",
    icon: "📅",
  },
  {
    step: "02",
    title: "Pickup From Home",
    desc: "Our partner collects your shoes from your doorstep",
    icon: "🚚",
  },
  {
    step: "03",
    title: "Repair & Restore",
    desc: "Experts repair, clean and restore your shoes",
    icon: "🛠️",
  },
  {
    step: "04",
    title: "Delivered Like New",
    desc: "Get your shoes back looking fresh and brand new",
    icon: "✨",
  },
];

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
  "from-purple-500 to-indigo-500",
];

const HowWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((item, index) => (
            <div key={index} className="relative">

              <div className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/30 shadow-lg transform transition duration-300 hover:-translate-y-2">

                <div className={`h-1 bg-gradient-to-r ${gradients[index]}`} />

                <div className="p-6 text-center">

                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl shadow-md text-white bg-gradient-to-br ${gradients[index]}`}
                  >
                    {item.icon}
                  </div>

                  <div className="text-xs font-bold mb-2 text-gray-700">
                    STEP {item.step}
                  </div>

                  <h3 className="font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowWorks;