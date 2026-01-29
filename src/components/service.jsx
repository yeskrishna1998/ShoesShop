import { Link } from "react-router-dom";

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
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Services</span>
          </h2>
          <p className="mt-3 text-gray-700 text-sm">
            Professional shoe repairing services with colorful care
          </p>
        </div>

        {/* Cards */}
        <div ref={(el) => { if (el) { const items = el.querySelectorAll('.reveal-item'); items.forEach((node,i)=>{ node.style.transitionDelay = `${i*110}ms` }); const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal-visible'); obs.unobserve(e.target); } }); }, {threshold:0.12}); items.forEach(n=>obs.observe(n)); } } } className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="relative reveal-item">
              <div className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/30 shadow-lg transform-gpu transition-transform duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl group">
                <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <div className="p-6 flex items-start gap-4">
                  <div className={`w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center text-2xl shadow-md text-white transform-gpu transition-transform duration-300 group-hover:scale-110 ${"bg-gradient-to-br " + gradients[index % gradients.length]}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      {item.premium && (
                        <span className="ml-auto inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">Premium</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                    <div className="mt-4">
                      <Link to="/booking">
                        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-gray-900 to-yellow-500 text-white text-sm shadow-sm cursor-pointer">
                          Book Now
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
