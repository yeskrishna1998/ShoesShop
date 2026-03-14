import { useEffect, useState } from "react";

const RotatingText = ({ words, interval = 0, className }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);

  }, [words, interval]);

  return (

<div className={`overflow-hidden h-[1.2em] ${className}`}>

<span
key={index}
className="block animate-rotateWord"
>
{words[index]}
</span>

</div>

  );
};

export default RotatingText;