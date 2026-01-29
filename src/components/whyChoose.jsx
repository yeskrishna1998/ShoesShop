const features = [
  {
    title: "Expert Cobblers",
    desc: "Skilled professionals with years of experience",
    icon: "👞",
  },
  {
    title: "Same Day Repair",
    desc: "Quick service without compromising quality",
    icon: "⚡",
  },
  {
    title: "Affordable Pricing",
    desc: "Best prices with premium workmanship",
    icon: "💰",
  },
  {
    title: "Trusted by Customers",
    desc: "Hundreds of happy and repeat customers",
    icon: "⭐",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-purple-600">Choose Us</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm max-w-xl mx-auto">
            We focus on quality, speed, and customer satisfaction
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
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

export default WhyChoose;
