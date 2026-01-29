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

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
  "from-purple-500 to-indigo-500",
];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
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
        <div ref={(el) => { if (el) { const items = el.querySelectorAll('.reveal-item'); items.forEach((node,i)=>{ node.style.transitionDelay = `${i*90}ms` }); const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal-visible'); obs.unobserve(e.target); } }); }, {threshold:0.12}); items.forEach(n=>obs.observe(n)); } } } className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative reveal-item"
            >
              <div className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/30 shadow-lg transform-gpu transition-transform duration-300 hover:shadow-lg hover:-translate-y-3 hover:scale-105 group">
                <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md text-white ${"bg-gradient-to-br " + gradients[index % gradients.length]}`}>{item.icon}</div>
                  <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
