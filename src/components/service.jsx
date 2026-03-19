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
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">

      <img
        src={p2}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={p2}
        onCanPlayThrough={() => setVideoReady(true)}
        className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/Video/service page.mp4" type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">

        {/* HEADING */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
          Signature Care Collection
        </h2>

        {/* TAGLINE */}
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-300 sm:text-base">
          Hand-finished luxury care for shoes, sneakers, and bags with precision cleaning, expert repair, and restoration.
          <span className="block mt-2 text-white/95 font-medium tracking-wide">
            Crafted for people who value premium footwear care.
          </span>
        </p>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((item, index) => (
            <div key={index} className="group h-full">

              {/* CARD */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.95)] sm:p-6">
                <div className="absolute inset-x-5 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105 sm:h-48"
                />

                {/* TITLE */}
                <h3 className="mt-5 text-lg font-semibold tracking-wide sm:text-xl">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-200">
                  {item.desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedService(item.title);
                    setShowPopup(true);
                  }}
                  className="mt-6 self-center rounded-full bg-[#FE9874] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-[#f07f56]"
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
