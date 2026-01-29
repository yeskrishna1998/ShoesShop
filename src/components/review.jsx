const reviews = [
  {
    name: "Rahul Sharma",
    location: "Gurgaon",
    review:
      "Excellent shoe repair service. My shoes look brand new again. Highly recommended!",
  },
  {
    name: "Amit Verma",
    location: "Noida",
    review:
      "Very professional work and quick delivery. Affordable pricing with great quality.",
  },
  {
    name: "Neha Gupta",
    location: "Delhi",
    review:
      "Loved the service! Staff is friendly and repair quality is top-notch.",
  },
];

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Customers Say</span>
          </h2>
          <p className="mt-3 text-gray-700 text-sm">
            Trusted by customers across the city
          </p>
        </div>

        {/* Review Cards */}
        <div ref={(el) => { if (el) { const items = el.querySelectorAll('.reveal-item'); items.forEach((node,i)=>{ node.style.transitionDelay = `${i*110}ms` }); const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal-visible'); obs.unobserve(e.target); } }); }, {threshold:0.12}); items.forEach(n=>obs.observe(n)); } } } className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative reveal-item"
            >
              <div className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/30 shadow-lg transform-gpu transition-transform duration-300 hover:-translate-y-3 hover:scale-105 p-6">
                <div className={`h-1 absolute top-0 left-0 right-0 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <div className="text-yellow-400 mb-4 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-sm text-gray-700 mb-6 italic">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ${"bg-gradient-to-br " + gradients[index % gradients.length]}`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.location}
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

export default Reviews;
