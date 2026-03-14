import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

<header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

<nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* LOGO */}

<Link to="/" className="flex items-center gap-3 group">

{/* Icon */}
<div className="w-10 h-10 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl">
Z
</div>

{/* Text */}
<div className="flex flex-col leading-tight">

<span className="text-2xl font-bold text-gray-900 tracking-wide">
ZCoated
</span>

<span className="text-[11px] text-gray-500 tracking-[0.25em] uppercase">
Premium Shoe Care
</span>

</div>

</Link>

{/* DESKTOP MENU */}

<div className="hidden md:flex items-center gap-10 font-semibold text-sm uppercase tracking-wide text-gray-700">

<Link to="/" className="relative hover:text-orange-500 transition group">
Home
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link to="/services" className="relative hover:text-orange-500 transition group">
Services
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link to="/pricing" className="relative hover:text-orange-500 transition group">
Pricing
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link to="/about" className="relative hover:text-orange-500 transition group">
About
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link to="/contact" className="relative hover:text-orange-500 transition group">
Contact
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</Link>

</div>

{/* RIGHT BUTTON */}

<div className="hidden md:flex items-center gap-4">

<Link
to="/booking"
className="relative inline-flex items-center justify-center px-7 py-3 font-bold text-black transition-all duration-300 rounded-full group bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 hover:scale-105"
>

<span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 blur-lg opacity-60 group-hover:opacity-90 transition duration-300"></span>

<span className="relative flex items-center gap-2">
Book Now
</span>

</Link>

</div>

{/* MOBILE BUTTON */}

<button
className="md:hidden text-gray-800"
onClick={() => setOpen(!open)}
>
{open ? <X size={28}/> : <Menu size={28}/>}
</button>

</nav>

{/* MOBILE MENU */}

<div
className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
open ? "max-h-96 py-6" : "max-h-0 overflow-hidden"
}`}
>

<div className="flex flex-col items-center gap-5 text-gray-800 font-medium">

<Link to="/" onClick={() => setOpen(false)}>Home</Link>

<Link to="/services" onClick={() => setOpen(false)}>Services</Link>

<Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>

<Link to="/about" onClick={() => setOpen(false)}>About</Link>

<Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

<Link
to="/booking"
onClick={() => setOpen(false)}
className="px-6 py-2 rounded-full bg-yellow-400 text-black font-bold"
>
Book Now
</Link>

</div>

</div>

</header>
  );
};

export default Navbar;