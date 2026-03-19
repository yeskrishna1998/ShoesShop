import { useState } from "react";
import RegisterForm from "./RegisterForm";

// ✅ IMPORT IMAGES
import p1 from "../assets/slider/wash.jpg";
import p2 from "../assets/slider/Repair.jpg";
import p3 from "../assets/slider/Bag repair.jpg";
import p4 from "../assets/slider/p-7.jpg"; // 👈 NEW (bag image)

const services = [
  {
    title: "Shoe Cleaning",
    desc: "Deep cleaning that removes dirt, stains, and odors using laboratory-grade solutions.",
    image: p1,
  },
  {
    title: "Shoe Repair",
    desc: "Expert sole replacement, stitching, and structural repairs by master craftsmen.",
    image: p2,
  },
  {
    title: "Bag Cleaning and Repair",
    desc: "Luxury handbag and backpack restoration with premium leather conditioning and stain care.",
    image: p3,
  },
  {
    title: "Sneaker Restoration",
    desc: "Full restoration including repainting, de-yellowing, and custom finishing for a like-new look.",
    image: p4,
  },
];

const ServicesClean = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="relative py-20 overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Video/service page.mp4" type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 text-white">

        {/* HEADING */}
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-4 tracking-tight">
          Signature Care Collection
        </h2>

        {/* TAGLINE */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Hand-finished luxury care for shoes, sneakers, and bags with precision cleaning, expert repair, and restoration.
          <span className="block mt-2 text-white/95 font-medium tracking-wide">
            Crafted for people who value premium footwear care.
          </span>
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 mt-12">

          {services.map((item, index) => (
            <div key={index} className="group">

              {/* CARD */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/25 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.95)] transition duration-300 text-center h-full overflow-hidden">
                <div className="absolute inset-x-5 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 sm:h-48 object-cover rounded-2xl group-hover:scale-105 transition duration-300"
                />

                {/* TITLE */}
                <h3 className="mt-5 text-lg md:text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-xs sm:text-sm text-gray-200 leading-relaxed min-h-[72px]">
                  {item.desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedService(item.title);
                    setShowPopup(true);
                  }}
                  className="mt-5 px-5 py-2.5 text-xs sm:text-sm rounded-full text-white font-semibold bg-[#FE9874] hover:bg-[#f07f56] transition shadow-lg shadow-orange-900/30"
                >
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-5 rounded-xl relative w-full max-w-md">
            <button
              onClick={() => {
                setShowPopup(false);
                setSelectedService("");
              }}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ×
            </button>
            <RegisterForm scheduleMode={true} prefilledService={selectedService} />
          </div>
        </div>
      )}

    </section>
  );
};

export default ServicesClean;
