import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,   // mobile smooth scroll
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return children;
};

export default SmoothScroll;