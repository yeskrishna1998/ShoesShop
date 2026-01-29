import ShoeRotate from "./shoerotate";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center min-h-[420px]">
          
          {/* 🔹 LEFT SIDE — 60% */}
          <div className="w-full md:w-[60%] text-center md:text-left text-white">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-white/20 backdrop-blur border border-white/30 text-xs font-semibold">
              ⭐ Rated 5.0 by Happy Customers
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Premium Shoe <br />
              <span className="text-yellow-300">Repair Services</span>
            </h1>

            {/* Sub text */}
            <p className="mt-5 max-w-xl text-sm md:text-base text-gray-200 leading-relaxed">
              Professional shoe repair, cleaning, and restoration —
              trusted craftsmanship with fast service.
            </p>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30">
                ✔ Same Day Repair
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30">
                ✔ Premium Quality
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30">
                ✔ Trusted Experts
              </span>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6393072928"
                className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg"
              >
                📞 Call Now
              </a>

              <a
                href="/contact"
                className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* 🔹 RIGHT SIDE — 40% */}
          <div className="w-full md:w-[40%] flex justify-center items-center mt-12 md:mt-0">
            <ShoeRotate />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
