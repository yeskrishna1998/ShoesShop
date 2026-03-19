import { useState } from "react";
import RegisterForm from "./RegisterForm";

const CTA = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <section className="bg-[#f5f5f5] py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* BLACK CARD */}
        <div className="bg-black rounded-[40px] py-16 px-6 md:px-16 text-center shadow-lg">

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Give Your Shoes <br className="hidden md:block" />
            a New Life
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Schedule your free pickup today and experience laboratory-grade restoration.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#FE9874] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#f07f56] transition"
            >
              Book Now
            </button>
          </div>

        </div>

      </div>

    </section>

    {showPopup && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
        <div className="bg-white p-5 rounded-xl relative w-full max-w-md">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-3 text-gray-500 text-xl"
          >
            ×
          </button>
          <RegisterForm scheduleMode={true} />
        </div>
      </div>
    )}
    </>
  );
};

export default CTA;
