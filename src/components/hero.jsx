import { useEffect, useState } from "react";

import p1 from "../assets/slider/p-1.jpg";
import p2 from "../assets/slider/p-2.jpg";
import p3 from "../assets/slider/p-3.jpg";
import p4 from "../assets/slider/p-4.jpg";
import p5 from "../assets/slider/p-5.jpg";
import p6 from "../assets/slider/p-6.jpg";
import p7 from "../assets/slider/p-7.jpg";
import p8 from "../assets/slider/p-8.jpg";
import p9 from "../assets/slider/p-9.jpg";

import BlurText from "./BlurText";
import RotatingText from "./RotatingText";
import RegisterForm from "./RegisterForm";

const images = [p1,p2,p3,p4,p5,p6,p7,p8,p9];

const services = [
  { name: "Shoe Cleaning", icon: "👟" },
  { name: "Shoe Repair", icon: "🧵" },
  { name: "Sole Fix", icon: "🛠" },
  { name: "Sneaker Whitening", icon: "✨" },
  { name: "Waterproofing", icon: "💧" },
  { name: "Polishing", icon: "🧴" }
];

const Hero = () => {

  const [index,setIndex]=useState(0);

  const [showPopup,setShowPopup]=useState(false);

  const [isSchedule,setIsSchedule]=useState(true);

  useEffect(()=>{

    const timer=setInterval(()=>{
      setIndex((prev)=>(prev+1)%images.length);
    },3000);

    return ()=>clearInterval(timer);

  },[]);

  return(

<section className="bg-white pt-14 pb-10">

<div className="max-w-7xl mx-auto px-5">

{/* DESKTOP TOP BAR */}

<div className="hidden md:flex items-center justify-center gap-18 mb-19">

<button
onClick={()=>{
setIsSchedule(true);
setShowPopup(true);
}}
className="flex items-center gap-2 px-5 py-4 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition shadow cursor-pointer"
>
📦 Schedule Free Pickup
</button>

<h2 className="flex items-center gap-2 text-2xl font-semibold">

<span className="text-gray-800">Feel</span>

<div className="px-3 py-1 rounded-lg text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-600">

<RotatingText
words={["New","Fresh","Clean","Revived"]}
interval={2000}
/>

</div>

</h2>

<a
href="https://wa.me/916393072928"
target="_blank"
rel="noreferrer"
className="flex items-center gap-2 px-5 py-4 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition shadow"
>

<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
className="w-4 h-5"
/>

Book on WhatsApp

</a>

</div>

{/* MOBILE TOP BAR */}

<div className="flex md:hidden flex-col items-center mb-6 text-center">

<h2 className="flex items-center gap-2 text-lg font-semibold">

<span className="text-gray-800">Feel</span>

<div className="px-2.5 py-1 rounded-md text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-600">

<RotatingText
words={["New","Fresh","Clean","Revived"]}
interval={2000}
/>

</div>

</h2>

<div className="flex flex-col gap-2 mt-3">

<button
onClick={()=>{
setIsSchedule(true);
setShowPopup(true);
}}
className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold"
>
Schedule Free Pickup
</button>

<a
href="https://wa.me/916393072928"
target="_blank"
rel="noreferrer"
className="flex items-center justify-center gap-1 px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold"
>

<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
className="w-3.5 h-3.5"
/>

Book on WhatsApp

</a>

</div>

</div>

{/* MAIN GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

{/* LEFT */}

<div>

<BlurText
text="Premium Shoe Repair Services"
delay={120}
animateBy="words"
direction="top"
className="text-2xl md:text-4xl font-bold text-gray-900"
/>

<p className="mt-3 text-gray-600 text-sm md:text-lg">
Professional shoe cleaning and repair services at your doorstep.
</p>

{/* SERVICES */}

<div className="mt-6 bg-gray-100 rounded-xl p-4 md:p-6">

<h3 className="text-md md:text-lg font-semibold text-gray-800 mb-4">
What service do you need?
</h3>

<div className="grid grid-cols-3 gap-3 md:gap-4">

{services.map((service,i)=>(
<div
key={i}
onClick={()=>{
setIsSchedule(false);
setShowPopup(true);
}}
className="bg-white rounded-lg p-3 md:p-4 flex flex-col items-center justify-center shadow hover:shadow-md cursor-pointer transition hover:scale-105"
>

<span className="text-xl md:text-2xl mb-1">{service.icon}</span>

<span className="text-[11px] md:text-sm font-medium text-gray-700 text-center">
{service.name}
</span>

</div>
))}

</div>

</div>

</div>

{/* RIGHT IMAGES */}

<div>

<div className="hidden md:grid grid-cols-2 gap-4">

<img src={p9} className="rounded-xl object-cover h-[200px] w-full"/>
<img src={p1} className="rounded-xl object-cover h-[200px] w-full"/>
<img src={p7} className="rounded-xl object-cover h-[200px] w-full"/>
<img src={p4} className="rounded-xl object-cover h-[200px] w-full"/>

</div>

<div className="md:hidden">

<img
src={images[index]}
className="rounded-xl object-cover w-full h-[220px]"
/>

</div>

</div>

</div>

</div>

{/* POPUP */}

{showPopup && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

<div className="bg-white p-6 rounded-xl relative">

<button
onClick={()=>setShowPopup(false)}
className="absolute top-2 right-3 text-gray-500 text-xl"
>
×
</button>

<RegisterForm
scheduleMode={isSchedule}
/>

</div>

</div>

)}

</section>

  );
};

export default Hero;