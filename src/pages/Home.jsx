// import { useState } from "react";
// import CTA from "../components/cta";
// import Hero from "../components/hero";
// import HowWorks from "../components/howworks";
// import Navbar from "../components/navbar";
// import Pricing from "../components/pricing";
// import Reviews from "../components/review";
// import Services from "../components/service";
// import WhyChoose from "../components/whyChoose";
// import LoginModal from "../components/LoginModal";
// import RegisterModal from "../components/RegisterModal";

// const Home = () => {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);

//   return (
//     <>
//        <Hero />
      
      
//       <Services />
//       <WhyChoose/>
//       <HowWorks/>
//       <Pricing/>
//       <Reviews/>
//       <CTA setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal}/>

//       {/* LOGIN MODAL */}
//       <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

//       {/* REGISTER MODAL */}
//       <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
//     </>
//   );
// };

// export default Home;






import { useState } from "react";
import { Link } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll";

import CTA from "../components/cta";
import Hero from "../components/hero";
import HowWorks from "../components/howworks";
import Pricing from "../components/pricing";
import Reviews from "../components/review";
import Services from "../components/service";
import WhyChoose from "../components/whyChoose";

import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const faqItems = [
  {
    question: "Why choose Zcoated for premium shoe care in Gurgaon?",
    answer:
      "Zcoated combines premium shoe cleaning, sneaker restoration, repair support, and doorstep pickup in Gurgaon so customers can get convenient, reliable care for daily wear and luxury pairs.",
  },
  {
    question: "Does Zcoated offer sneaker cleaning and restoration in Gurgaon?",
    answer:
      "Yes. Zcoated offers sneaker cleaning, deep cleaning, stain removal, whitening support, and restoration for fashion sneakers, sports shoes, and premium pairs.",
  },
  {
    question: "Can I book shoe pickup and delivery with Zcoated?",
    answer:
      "Yes. Customers can contact Zcoated for free pickup and delivery support in Gurgaon for shoe cleaning, shoe repair, and restoration services.",
  },
];

const Home = () => {

  const [showLoginModal,setShowLoginModal] = useState(false);
  const [showRegisterModal,setShowRegisterModal] = useState(false);
  

  return (

    <SmoothScroll>

      <Hero />
      <FloatingWhatsApp />

   

      <Services />

      <WhyChoose/>

      <HowWorks/>

      <Pricing/>

      <Reviews/>

      <section className="bg-[#050505] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-8">
              <span className="inline-flex rounded-full border border-[#FE9874]/30 bg-[#FE9874]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200">
                Premium Shoe Care Gurgaon
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Zcoated helps Gurgaon customers keep sneakers and shoes looking premium
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                Zcoated is built for people searching for premium shoe care,
                shoe cleaning in Gurgaon, sneaker cleaning, shoe repair, and
                restoration support with a smoother pickup and delivery
                experience. We focus on everyday pairs, premium sneakers,
                leather footwear, and worn shoes that need cleaning, repair, or
                a fresh finish.
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                If someone searches for Zcoated, premium shoe care, sneaker
                cleaning Gurgaon, or shoe restoration Gurgaon, this page now
                clearly explains the brand, the services, and the local area we
                serve. That gives both users and search engines stronger context
                about what the business actually offers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="rounded-full bg-[#FE9874] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f07f56]"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Contact Zcoated
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#101010] p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                Search Intent Coverage
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Zcoated shoe cleaning Gurgaon",
                  "premium shoe care Gurgaon",
                  "sneaker cleaning Gurgaon",
                  "shoe repair Gurgaon",
                  "shoe restoration Gurgaon",
                  "premium sneaker cleaning Gurgaon",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Questions customers ask before booking shoe cleaning in Gurgaon
              </h2>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[24px] border border-white/10 bg-[#0f0f10] p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />

      {/* LOGIN MODAL */}

      <LoginModal
        isOpen={showLoginModal}
        onClose={()=>setShowLoginModal(false)}
      />

      {/* REGISTER MODAL */}

      <RegisterModal
        isOpen={showRegisterModal}
        onClose={()=>setShowRegisterModal(false)}
      />

    </SmoothScroll>

  );
};

export default Home;
