import { useState } from "react";
import CTA from "../components/cta";
import Hero from "../components/hero";
import HowWorks from "../components/howworks";
import Navbar from "../components/navbar";
import Pricing from "../components/pricing";
import Reviews from "../components/review";
import Services from "../components/service";
import WhyChoose from "../components/whyChoose";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
       <Hero />
      
      <Services />
      <WhyChoose/>
      <HowWorks/>
      <Pricing/>
      <Reviews/>
      <CTA setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal}/>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* REGISTER MODAL */}
      <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
    </>
  );
};

export default Home;
