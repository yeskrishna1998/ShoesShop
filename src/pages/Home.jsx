import CTA from "../components/cta";
import Hero from "../components/hero";
import HowWorks from "../components/howworks";
import Pricing from "../components/pricing";
import Reviews from "../components/review";
import Services from "../components/service";
import Slider from "../components/slider";
import WhyChoose from "../components/whyChoose";

const Home = () => {
  return (
    <>
    
      <Hero />
      <Slider/>
      
      <Services />
      <WhyChoose/>
      <HowWorks/>
      <Pricing/>
      <Reviews/>
      <CTA/>
    </>
  );
};

export default Home;
