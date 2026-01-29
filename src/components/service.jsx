const services = [
  {
    title: "Sole Repair",
    desc: "Worn-out soles repaired to last longer",
    icon: "👞",
  },
  {
    title: "Heel Repair",
    desc: "Broken or damaged heels fixed perfectly",
    icon: "🦶",
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

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-purple-600">Services</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Professional shoe repairing services you can trust
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
