import ShoeRotate from "./shoerotate";
import { useEffect, useState, useRef } from "react";
import shoe1 from "../assets/slider/shoe1.jpg";
import shoe2 from "../assets/slider/shoe2.jpg";
import shoe3 from "../assets/slider/shoe3.jpg";

const sliderImages = [shoe1, shoe2, shoe3];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const contentRef = useRef(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const items = container.querySelectorAll('.reveal-item');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('reveal-visible');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-10 md:py-12">
      
      {/* Background Image - Animated Slider */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url('${sliderImages[bgIndex]}')`,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

      {/* CONTENT WRAPPER */}
      <div ref={contentRef} className="relative z-20 max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center min-h-[320px]">
          
          {/* 🔹 LEFT SIDE — 60% */}
          <div className="w-full md:w-[60%] text-center md:text-left text-white">
            
            {/* Badge */}
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-yellow-400/20 to-pink-400/20 backdrop-blur-md border border-yellow-300/40 text-xs font-bold reveal-item shadow-lg shadow-yellow-500/10">
              ⭐ Rated 5.0 by Happy Customers
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight reveal-item">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-400">Premium Shoe</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-400">Repair Services</span>
            </h1>

            {/* Sub text */}
            <p className="mt-6 max-w-xl text-base md:text-lg text-gray-100 leading-relaxed reveal-item font-medium">
              Professional shoe repair, cleaning, and restoration —
              trusted craftsmanship with fast service.
            </p>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm reveal-item">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/40 font-semibold shadow-lg shadow-green-500/10">
                ✔ Same Day Repair
              </span>
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/40 font-semibold shadow-lg shadow-blue-500/10">
                ✔ Premium Quality
              </span>
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/40 font-semibold shadow-lg shadow-purple-500/10">
                ✔ Trusted Experts
              </span>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4 reveal-item">
              <a
                href="tel:6393072928"
                className="px-9 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-yellow-500/30"
              >
                📞 Call Now
              </a>

              <a
                href="/contact"
                className="px-9 py-3.5 rounded-full border-2 border-white/60 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* 🔹 RIGHT SIDE — 40% */}
          <div className="w-full md:w-[40%] flex justify-center items-center mt-12 md:mt-0 reveal-item">
            <ShoeRotate />
          </div>

        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              bgIndex === i ? "bg-yellow-400" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
