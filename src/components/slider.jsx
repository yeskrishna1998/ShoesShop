import { useEffect, useState } from "react";

import shoe1 from "../assets/slider/shoe1.jpg";
import shoe2 from "../assets/slider/shoe2.jpg";
import shoe3 from "../assets/slider/shoe3.jpg";

const images = [shoe1, shoe2, shoe3];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[460px] overflow-hidden">
      
      {/* Image */}
      <img
        key={index}
        src={images[index]}
        alt="Shoe Repair"
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Dark Overlay (premium look) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
