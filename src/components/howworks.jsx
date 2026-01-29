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

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
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
        <div ref={(el) => { if (el) { const items = el.querySelectorAll('.reveal-item'); items.forEach((node,i)=>{ node.style.transitionDelay = `${i*100}ms` }); const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal-visible'); obs.unobserve(e.target); } }); }, {threshold:0.12}); items.forEach(n=>obs.observe(n)); } } } className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative reveal-item">
              <div className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/30 shadow-lg transform-gpu transition-transform duration-300 hover:-translate-y-3 hover:scale-105">
                <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <div className="p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl shadow-md text-white ${"bg-gradient-to-br " + gradients[index % gradients.length]}`}>
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold mb-2 text-gray-700">
                    STEP {item.step}
                  </div>
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

export default HowWorks;
