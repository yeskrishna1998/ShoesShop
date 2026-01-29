import shoe1 from "../assets/slider/shoe1.jpg";

const ShoeRotate = () => {
  return (
    <div className="relative z-30 flex justify-center items-center">
      <img
        src={shoe1}
        alt="Rotating Shoe"
        className="
          w-30 md:w-100 h-100
          animate-shoe-rotate
          drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]
        "
      />
    </div>
  );
};

export default ShoeRotate;
