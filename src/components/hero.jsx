// // import { useEffect, useState } from "react";

// // import p1 from "../assets/slider/p-1.jpg";
// // import p2 from "../assets/slider/p-2.jpg";
// // import p3 from "../assets/slider/p-3.jpg";
// // import p4 from "../assets/slider/p-4.jpg";
// // import p5 from "../assets/slider/p-5.jpg";
// // import p6 from "../assets/slider/p-6.jpg";
// // import p7 from "../assets/slider/p-7.jpg";
// // import p8 from "../assets/slider/p-8.jpg";
// // import p9 from "../assets/slider/p-9.jpg";

// // import BlurText from "./BlurText";
// // import RotatingText from "./RotatingText";
// // import RegisterForm from "./RegisterForm";

// // const images = [p1,p2,p3,p4,p5,p6,p7,p8,p9];

// // const services = [
// //   { name: "Shoe Cleaning", icon: "👟" },
// //   { name: "Shoe Repair", icon: "🧵" },
// //   { name: "Sole Fix", icon: "🛠" },
// //   { name: "Sneaker Whitening", icon: "✨" },
// //   { name: "Waterproofing", icon: "💧" },
// //   { name: "Polishing", icon: "🧴" }
// // ];

// // const Hero = () => {

// //   const [index,setIndex]=useState(0);

// //   const [showPopup,setShowPopup]=useState(false);

// //   const [isSchedule,setIsSchedule]=useState(true);

// //   useEffect(()=>{

// //     const timer=setInterval(()=>{
// //       setIndex((prev)=>(prev+1)%images.length);
// //     },3000);

// //     return ()=>clearInterval(timer);

// //   },[]);

// //   return(

// // <section className="bg-white pt-10 md:pt-14 pb-10">

// // <div className="max-w-7xl mx-auto px-5">

// // {/* DESKTOP TOP BAR */}

// // <div className="hidden md:flex items-center justify-center gap-18 mb-19">

// // <button
// // onClick={()=>{
// // setIsSchedule(true);
// // setShowPopup(true);
// // }}
// // className="flex items-center gap-2 px-5 py-4 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition shadow cursor-pointer"
// // >
// // 📦 Schedule Free Pickup
// // </button>

// // <h2 className="flex items-center gap-2 text-2xl font-semibold">

// // <span className="text-gray-800">Feel</span>

// // <div className="px-3 py-1 rounded-lg text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-600">

// // <RotatingText
// // words={["New","Fresh","Clean","Revived"]}
// // interval={2000}
// // />

// // </div>

// // </h2>

// // <a
// // href="https://wa.me/916393072928"
// // target="_blank"
// // rel="noreferrer"
// // className="flex items-center gap-2 px-5 py-4 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition shadow"
// // >

// // <img
// // src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
// // className="w-4 h-5"
// // />

// // Book on WhatsApp

// // </a>

// // </div>

// // {/* MOBILE TOP BAR */}

// // <div className="flex md:hidden flex-col items-center mb-6 text-center">

// // <h2 className="flex items-center gap-2 text-lg font-semibold">

// // <span className="text-gray-800">Feel</span>

// // <div className="px-2.5 py-1 rounded-md text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-600">

// // <RotatingText
// // words={["New","Fresh","Clean","Revived"]}
// // interval={2000}
// // />

// // </div>

// // </h2>

// // <div className="flex flex-col gap-2 mt-3">

// // <button
// // onClick={()=>{
// // setIsSchedule(true);
// // setShowPopup(true);
// // }}
// // className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold"
// // >
// // Schedule Free Pickup
// // </button>

// // <a
// // href="https://wa.me/916393072928"
// // target="_blank"
// // rel="noreferrer"
// // className="flex items-center justify-center gap-1 px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold"
// // >

// // <img
// // src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
// // className="w-3.5 h-3.5"
// // />

// // Book on WhatsApp

// // </a>

// // </div>

// // </div>

// // {/* MAIN GRID */}

// // <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

// // {/* LEFT */}

// // <div>

// // <BlurText
// // text="Premium Shoe Repair Services"
// // delay={120}
// // animateBy="words"
// // direction="top"
// // className="text-2xl md:text-4xl font-bold text-gray-900"
// // />

// // <p className="mt-3 text-gray-600 text-sm md:text-lg">
// // Professional shoe cleaning and repair services at your doorstep.
// // </p>

// // {/* SERVICES */}

// // <div className="mt-6 bg-gray-100 rounded-xl p-4 md:p-6">

// // <h3 className="text-md md:text-lg font-semibold text-gray-800 mb-4">
// // What service do you need?
// // </h3>

// // <div className="grid grid-cols-3 gap-3 md:gap-4">

// // {services.map((service,i)=>(
// // <div
// // key={i}
// // onClick={()=>{
// // setIsSchedule(false);
// // setShowPopup(true);
// // }}
// // className="bg-white rounded-lg p-3 md:p-4 flex flex-col items-center justify-center shadow hover:shadow-md cursor-pointer transition hover:scale-105"
// // >

// // <span className="text-xl md:text-2xl mb-1">{service.icon}</span>

// // <span className="text-[11px] md:text-sm font-medium text-gray-700 text-center">
// // {service.name}
// // </span>

// // </div>
// // ))}

// // </div>

// // </div>

// // </div>

// // {/* RIGHT IMAGES */}

// // <div>

// // <div className="hidden md:grid grid-cols-2 gap-4">

// // <img src={p9} className="rounded-xl object-cover h-[200px] w-full"/>
// // <img src={p1} className="rounded-xl object-cover h-[200px] w-full"/>
// // <img src={p7} className="rounded-xl object-cover h-[200px] w-full"/>
// // <img src={p4} className="rounded-xl object-cover h-[200px] w-full"/>

// // </div>

// // <div className="md:hidden">

// // <img
// // src={images[index]}
// // className="rounded-xl object-cover w-full h-[220px]"
// // />

// // </div>

// // </div>

// // </div>

// // </div>

// // {/* POPUP */}

// // {showPopup && (

// // <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

// // <div className="bg-white p-6 rounded-xl relative">

// // <button
// // onClick={()=>setShowPopup(false)}
// // className="absolute top-2 right-3 text-gray-500 text-xl"
// // >
// // ×
// // </button>

// // <RegisterForm
// // scheduleMode={isSchedule}
// // />

// // </div>

// // </div>

// // )}

// // </section>

// //   );
// // };

// // export default Hero;

















// import { useEffect, useState } from "react";

// import p1 from "../assets/slider/p-1.jpg";
// import p2 from "../assets/slider/p-2.jpg";
// import p3 from "../assets/slider/p-3.jpg";
// import p4 from "../assets/slider/p-4.jpg";
// import p5 from "../assets/slider/p-5.jpg";
// import p6 from "../assets/slider/p-6.jpg";
// import p7 from "../assets/slider/p-7.jpg";
// import p8 from "../assets/slider/p-8.jpg";
// import p9 from "../assets/slider/p-9.jpg";

// import BlurText from "./BlurText";
// import RotatingText from "./RotatingText";
// import RegisterForm from "./RegisterForm";

// const images = [p1,p2,p3,p4,p5,p6,p7,p8,p9];

// const services = [
//   { name: "Shoe Cleaning", icon: "👟" },
//   { name: "Shoe Repair", icon: "🧵" },
//   { name: "Sole Fix", icon: "🛠" },
//   { name: "Sneaker Whitening", icon: "✨" },
//   { name: "Waterproofing", icon: "💧" },
//   { name: "Polishing", icon: "🧴" }
// ];

// const Hero = () => {

// const [index,setIndex]=useState(0);
// const [showPopup,setShowPopup]=useState(false);
// const [isSchedule,setIsSchedule]=useState(true);

// useEffect(()=>{

// const timer=setInterval(()=>{
// setIndex((prev)=>(prev+1)%images.length);
// },3000);

// return ()=>clearInterval(timer);

// },[]);

// return(

// <section className="relative pt-12 md:pt-16 pb-12 overflow-hidden">

// {/* VIDEO BACKGROUND */}

// <video
// autoPlay
// loop
// muted
// playsInline
// className="absolute top-0 left-0 w-full h-full object-cover"
// >
// <source src="/Video/shoes.mp4" type="video/mp4"/>
// </video>

// {/* DARK OVERLAY */}

// <div className="absolute inset-0 bg-black/60"></div>

// <div className="relative z-10 max-w-7xl mx-auto px-5">

// {/* TOP BAR */}

// <div className="hidden md:flex items-center justify-center gap-14 mb-16">

// <button
// onClick={()=>{
// setIsSchedule(true);
// setShowPopup(true);
// }}
// className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#fff] font-semibold shadow-lg hover:scale-105 transition"
// >
// 📦 Schedule Free Pickup
// </button>

// <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">

// <span>Feel</span>

// <div className="px-3 py-1 rounded-lg text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-600">

// <RotatingText
// words={["New","Fresh","Clean","Revived"]}
// interval={2000}
// />

// </div>

// </h2>

// <a
// href="https://wa.me/916393072928"
// target="_blank"
// rel="noreferrer"
// className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:scale-105 transition"
// >

// <img
// src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
// className="w-5 h-5"
// />

// Book on WhatsApp

// </a>

// </div>

// {/* MAIN GRID */}

// <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

// {/* LEFT */}

// <div>

// <BlurText
// text="Premium Shoe Cleaning & Repair Services"
// delay={120}
// animateBy="words"
// direction="top"
// className="text-3xl md:text-5xl font-bold text-white leading-tight"
// />

// <p className="mt-4 text-gray-200 text-sm md:text-lg max-w-md">
// Doorstep sneaker cleaning, repair and restoration for a fresh new look.
// </p>

// {/* SERVICES */}

// <div className="mt-8 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">

// <h3 className="text-lg font-semibold text-white mb-4">
// What service do you need?
// </h3>

// <div className="grid grid-cols-3 gap-4">

// {services.map((service,i)=>(
// <div
// key={i}
// onClick={()=>{
// setIsSchedule(false);
// setShowPopup(true);
// }}
// className="bg-white/80 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105"
// >

// <span className="text-2xl mb-1">{service.icon}</span>

// <span className="text-xs md:text-sm font-medium text-gray-700 text-center">
// {service.name}
// </span>

// </div>
// ))}

// </div>

// </div>

// </div>

// {/* RIGHT IMAGES */}

// <div>

// <div className="hidden md:grid grid-cols-2 gap-4">

// <img src={p9} className="rounded-2xl object-cover h-[200px] w-full shadow-lg hover:scale-105 transition duration-500"/>

// <img src={p1} className="rounded-2xl object-cover h-[200px] w-full shadow-lg hover:scale-105 transition duration-500"/>

// <img src={p7} className="rounded-2xl object-cover h-[200px] w-full shadow-lg hover:scale-105 transition duration-500"/>

// <img src={p4} className="rounded-2xl object-cover h-[200px] w-full shadow-lg hover:scale-105 transition duration-500"/>

// </div>

// <div className="md:hidden">

// <img
// src={images[index]}
// className="rounded-xl object-cover w-full h-[230px]"
// />

// </div>

// </div>

// </div>

// </div>

// {/* POPUP */}

// {showPopup && (

// <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

// <div className="bg-white p-6 rounded-xl relative">

// <button
// onClick={()=>setShowPopup(false)}
// className="absolute top-2 right-3 text-gray-500 text-xl"
// >
// ×
// </button>

// <RegisterForm
// scheduleMode={isSchedule}
// />

// </div>

// </div>

// )}

// </section>

// );

// };

// export default Hero;


import { useState } from "react";
import RegisterForm from "./RegisterForm";
import heroPoster from "../assets/slider/shoe4.jpg";

const Hero = () => {

  const [showPopup,setShowPopup]=useState(false);
  const [videoReady, setVideoReady] = useState(false);

  return(

<section className="relative h-[84vh] min-h-[560px] sm:h-[88vh] md:h-[92vh] flex items-center overflow-hidden bg-black">

<img
src={heroPoster}
alt=""
aria-hidden="true"
className="absolute inset-0 h-full w-full object-cover"
/>

{/* VIDEO BACKGROUND */}
<video
autoPlay
loop
muted
playsInline
preload="metadata"
poster={heroPoster}
onCanPlayThrough={() => setVideoReady(true)}
className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-700 ${
  videoReady ? "opacity-100" : "opacity-0"
}`}
>
<source src="/Video/shoes.mp4" type="video/mp4"/>
</video>

{/* LIGHT OVERLAY (sirf readability ke liye) */}
<div className="absolute inset-0 bg-black/45 md:bg-black/30"></div>

{/* CONTENT */}
<div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-16 pb-12 sm:pb-10 md:pb-0">

<p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.18em] text-gray-300 font-semibold">
FREE PICKUP & DELIVERY
</p>

<h1 className="text-3xl sm:text-5xl md:text-7xl text-white font-semibold leading-tight max-w-2xl tracking-tight">

Premium Shoe Care  
<span className="block text-gray-200 font-light">Wear Them Like New</span>

</h1>

<p className="mt-5 sm:mt-6 text-gray-200 text-sm sm:text-base md:text-xl max-w-lg leading-relaxed">

Cleaning • Repair • Restoration  
Free Pickup & Delivery at your doorstep.

</p>

{/* BUTTONS */}
<div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

<button
onClick={()=>setShowPopup(true)}
className="border border-white text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-white hover:text-black transition w-full sm:w-auto rounded-full"
>
BOOK SERVICE
</button>

<a
href="https://wa.me/91XXXXXXXXXX"
target="_blank"
rel="noreferrer"
className="text-white border border-white/35 sm:border-0 rounded-full sm:rounded-none px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-center hover:opacity-70 transition w-full sm:w-auto"
>
WHATSAPP →
</a>

</div>

<div className="mt-8 flex items-center gap-8 sm:gap-12">
  <div>
    <p className="text-3xl sm:text-4xl font-semibold text-white">4,200+</p>
    <p className="text-gray-300 text-sm sm:text-base">Pairs Restored</p>
  </div>
  <div>
    <p className="text-3xl sm:text-4xl font-semibold text-white">98.4%</p>
    <p className="text-gray-300 text-sm sm:text-base">Stains Removed</p>
  </div>
</div>

</div>

{/* SCROLL INDICATOR */}
<div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce">
  ↓
</div>

{/* POPUP */}
{showPopup && (
<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm">

<div className="bg-white p-6 rounded-2xl relative w-full max-w-md shadow-2xl">

<button
onClick={()=>setShowPopup(false)}
className="absolute top-2 right-3 text-gray-500 text-xl"
>
×
</button>

<RegisterForm />

</div>

</div>
)}

</section>

  );
};

export default Hero;








