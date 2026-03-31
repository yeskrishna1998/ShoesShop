import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate = useNavigate(); 
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const year = new Date().getFullYear();
  const footerServices = [
    "Sole Repair",
    "Heel Repair",
    "Shoe Polishing",
    "Leather Fix",
    "Shoe Cleaning",
    "Shoe Stitching",
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowPopup(true);
  };

  return (

<>
<footer className="bg-gray-900 text-gray-300">

<div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

{/* BRAND */}

<div className="col-span-2 md:col-span-1">

<div className="flex items-center gap-3">
<div className="flex h-10 w-12 items-center justify-center overflow-hidden rounded-lg bg-black shadow-lg shadow-black/20">
<img
src="/zcoated.png"
alt="Zcoated logo"
className="h-full w-full object-contain scale-125"
/>
</div>

<h2 className="text-2xl font-bold text-white">
Zcoated
</h2>
</div>


<div className="flex flex-col leading-tight">

<span className="text-[11px] text-gray-500 tracking-[0.25em] uppercase">
Premium Shoe Care
</span>

</div>

<p className="mt-3 text-sm text-gray-400 leading-relaxed">
Premium shoe cleaning and repair services.
We restore your shoes to look brand new again.
</p>

<p className="mt-2 text-sm text-yellow-400 font-semibold">
🚚 Free Pickup & Delivery
</p>

<div className="flex gap-3 mt-4">

<a
href="https://wa.me/918368385923"
target="_blank"
rel="noreferrer"
className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm transition"
>

<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
className="w-4 h-4"
/>

WhatsApp

</a>

<a
href="tel:+918368385923"
className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#FE9874] hover:bg-red-500 text-white text-sm transition"
>
📞 Call
</a>

</div>

</div>


{/* SERVICES */}

<div>

<h3 className="text-white font-semibold mb-3">
Services
</h3>

<ul className="space-y-2 text-sm">

{footerServices.map((service) => (
<li key={service}>
<button
type="button"
onClick={() => handleServiceClick(service)}
className="text-left hover:text-yellow-400 transition"
>
{service}
</button>
</li>
))}

</ul>

</div>


{/* QUICK LINKS */}

<div>

<h3 className="text-white font-semibold mb-3">
Quick Links
</h3>

<ul className="space-y-2 text-sm">

<li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
<li><Link to="/services" className="hover:text-yellow-400 transition">Services</Link></li>
<li><Link to="/pricing" className="hover:text-yellow-400 transition">Pricing</Link></li>
<li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>

</ul>

</div>


{/* CONTACT */}

<div className="col-span-2 md:col-span-1">

<h3 className="text-white font-semibold mb-3">
Contact
</h3>

<ul className="space-y-2 text-sm">

<li>📍 Sector-45, Gurgaon</li>

<li>
<a href="tel:+918368385923" className="hover:text-yellow-400 transition">
📞 +91 8368385923
</a>
</li>

<li>
<a href="mailto:support.zcoated@gmail.com" className="break-all hover:text-yellow-400 transition">
📧 support.zcoated@gmail.com
</a>
</li>

<li>🕒 Mon – Sun : 10 AM – 8 PM</li>

</ul>
<button
onClick={() => navigate("/pickup-form")}    
className="mt-4 px-4 py-2 bg-[#FE9874] h
over:bg-red-400 text-white rounded-lg text-sm transition"
  >
     Add Pickup
  </button>

</div>

</div>


{/* BOTTOM */}

<div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">

<div className="flex items-center justify-center gap-2">
<img
src="/zcoated.png"
alt="Zcoated logo"
className="h-5 w-6 object-contain"
/>
<span>© {year} Zcoated. All rights reserved.</span>
</div>

</div>

</footer>

{showPopup && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
<div className="relative w-full max-w-md rounded-xl bg-white p-5">
<button
type="button"
onClick={() => {
setShowPopup(false);
setSelectedService("");
}}
className="absolute right-3 top-2 text-xl text-gray-500"
>
×
</button>
<RegisterForm scheduleMode={true} prefilledService={selectedService} />
</div>
</div>
)}

</>

  );
};

export default Footer;
