import { useState } from "react";
import RegisterForm from "./RegisterForm";

const services = [
  {
    title: "Sole Repair",
    desc: "Worn-out soles repaired to last longer",
    icon: "👞",
    premium: true,
  },
  {
    title: "Heel Repair",
    desc: "Broken or damaged heels fixed perfectly",
    icon: "🦶",
    premium: true,
  },
  {
    title: "Shoe Polish",
    desc: "Premium polish for brand-new shine",
    icon: "✨",
  },
  {
    title: "Leather Fix",
    desc: "Cracks & cuts repaired professionally",
    icon: "🧵",
  },
  {
    title: "Deep Cleaning",
    desc: "Remove dirt, stains & odor completely",
    icon: "🧼",
  },
  {
    title: "Stitch Repair",
    desc: "Strong stitching for longer life",
    icon: "🪡",
  },
];

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
  "from-purple-500 to-indigo-500",
  "from-red-400 to-orange-400",
  "from-amber-400 to-rose-400",
];

const Services = () => {

const [showPopup,setShowPopup]=useState(false);

return (

<section className="py-7 bg-white">

<div className="max-w-6xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-12">

<h2 className="text-3xl md:text-4xl font-bold">
Our
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
 Services
</span>
</h2>

<p className="mt-3 text-gray-700 text-sm">
Professional shoe repairing services
</p>

</div>


{/* Cards */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

{services.map((item,index)=>(

<div key={index} className="relative">

<div className="rounded-xl overflow-hidden bg-white border shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">

<div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />

<div className="p-6 flex items-start gap-4">

<div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${"bg-gradient-to-br " + gradients[index % gradients.length]}`}>
{item.icon}
</div>

<div className="flex-1">

<div className="flex items-center gap-3">

<h3 className="text-lg font-semibold text-gray-800">
{item.title}
</h3>

{item.premium && (
<span className="ml-auto px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
Premium
</span>
)}

</div>

<p className="mt-2 text-sm text-gray-600">
{item.desc}
</p>

<div className="mt-4">

<button
onClick={()=>setShowPopup(true)}
className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-gray-900 to-yellow-500 text-white text-sm shadow cursor-pointer"
>

Book Now

<svg
xmlns="http://www.w3.org/2000/svg"
className="h-4 w-4"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>

<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M14 5l7 7m0 0l-7 7m7-7H3"
/>

</svg>

</button>

</div>

</div>

</div>

</div>

</div>

))}

</div>

</div>


{/* POPUP FORM */}

{showPopup && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

<div className="relative">

<button
onClick={()=>setShowPopup(false)}
className="absolute -top-3 -right-3 bg-black text-white w-8 h-8 rounded-full"
>
×
</button>

<RegisterForm scheduleMode={true} />

</div>

</div>

)}

</section>

);

};

export default Services;