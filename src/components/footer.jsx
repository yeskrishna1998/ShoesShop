import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();

  return (

<footer className="bg-gray-900 text-gray-300">

<div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

{/* BRAND */}

<div className="col-span-2 md:col-span-1">

<div className="flex items-center gap-3">
<div className="flex h-10 w-12 items-center justify-center overflow-hidden rounded-lg bg-black shadow-lg shadow-black/20">
<img
src="/zcoated.png"
alt="Z Coated logo"
className="h-full w-full object-contain scale-125"
/>
</div>

<h2 className="text-2xl font-bold text-white">
Z<span className="text-yellow-400">Coated</span>
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
href="https://wa.me/916393072928"
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
href="tel:+916393072928"
className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm transition"
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

<li><Link to="/booking?service=sole-repair" className="hover:text-yellow-400 transition">Sole Repair</Link></li>
<li><Link to="/booking?service=heel-repair" className="hover:text-yellow-400 transition">Heel Repair</Link></li>
<li><Link to="/booking?service=polishing" className="hover:text-yellow-400 transition">Shoe Polishing</Link></li>
<li><Link to="/booking?service=leather-fix" className="hover:text-yellow-400 transition">Leather Fix</Link></li>
<li><Link to="/booking?service=cleaning" className="hover:text-yellow-400 transition">Shoe Cleaning</Link></li>
<li><Link to="/booking?service=stitching" className="hover:text-yellow-400 transition">Shoe Stitching</Link></li>

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
<a href="tel:+916393072928" className="hover:text-yellow-400 transition">
📞 +91 6393072928
</a>
</li>

<li>
<a href="mailto:shoesrepair@gmail.com" className="break-all hover:text-yellow-400 transition">
📧 shoesrepair@gmail.com
</a>
</li>

<li>🕒 Mon – Sat : 10 AM – 8 PM</li>

</ul>

</div>

</div>


{/* BOTTOM */}

<div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">

<div className="flex items-center justify-center gap-2">
<img
src="/zcoated.png"
alt="Z Coated logo"
className="h-5 w-6 object-contain"
/>
<span>© {year} Z Coated. All rights reserved.</span>
</div>

</div>

</footer>

  );
};

export default Footer;
