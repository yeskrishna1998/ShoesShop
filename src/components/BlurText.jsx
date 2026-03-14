import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BlurText = ({
  text = "",
  delay = 100,
  className = "",
}) => {

  const words = text.split(" ");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (

<p ref={ref} className={className}>

{words.map((word, i) => (

<motion.span
key={i}
initial={{ opacity: 0, filter: "blur(10px)", y: -20 }}
animate={
visible
? { opacity: 1, filter: "blur(0px)", y: 0 }
: {}
}
transition={{
delay: i * delay / 1000,
duration: 0.5
}}
style={{ marginRight: "6px", display: "inline-block" }}
>

{word}

</motion.span>

))}

</p>

  );
};

export default BlurText;