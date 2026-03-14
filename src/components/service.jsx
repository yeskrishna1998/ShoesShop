import { useState } from "react";
import RegisterForm from "./RegisterForm";

const services = [
  {
    title: "Sole Repair",
    desc: "Worn-out soles repaired to last longer",
    icon: "👞",
    premium: true,
  },
  {
    title: "Heel Repair",
    desc: "Broken or damaged heels fixed perfectly",
    icon: "🦶",
    premium: true,
  },
  {
    title: "Shoe Polish",
    desc: "Premium polish for brand-new shine",
    icon: "✨",
  },
  {
    title: "Leather Fix",
    desc: "Cracks & cuts repaired professionally",
    icon: "🧵",
  },
  {
    title: "Deep Cleaning",
    desc: "Remove dirt, stains & odor completely",
    icon: "🧼",
  },
  {
    title: "Stitch Repair",
    desc: "Strong stitching for longer life",
    icon: "🪡",
  },
];

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
  "from-purple-500 to-indigo-500",
  "from-red-400 to-orange-400",
  "from-amber-400 to-rose-400",
];

const Services = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="py-12 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 ml-2">
              Services
            </span>
          </h2>

          <p className="mt-3 text-gray-700 text-sm">
            Professional shoe repairing services
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {services.map((item, index) => (

            <div key={index}>

              <div className="rounded-xl overflow-hidden bg-white border shadow-lg hover:-translate-y-2 hover:shadow-2xl transition">

                <div
                  className={`h-1 bg-gradient-to-r ${
                    gradients[index % gradients.length]
                  }`}
                />

                <div className="p-6 flex items-start gap-4">

                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-3">

                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>

                      {item.premium && (
                        <span className="ml-auto px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                          Premium
                        </span>
                      )}

                    </div>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.desc}
                    </p>

                    <div className="mt-4">

                      <button
                        onClick={() => setShowPopup(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-gray-900 to-yellow-500 text-white text-sm shadow cursor-pointer"
                      >
                        Book Now
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* POPUP (Hero same style) */}

      {showPopup && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl relative">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ×
            </button>

            <RegisterForm scheduleMode={true} />

          </div>

        </div>

      )}

    </section>
  );
};

export default Services;  