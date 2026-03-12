import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

<header className="sticky top-0 z-50 backdrop-blur-xl border-b border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black shadow-xl">

<nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

{/* Logo */}

<Link to="/" className="flex flex-col leading-tight group">

<div className="text-2xl md:text-3xl font-extrabold tracking-wide flex items-center">

<span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
Z
</span>

<span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
Coated
</span>

</div>

<span className="text-[10px] md:text-xs text-gray-400 italic tracking-wide">
Premium Shoe Care
</span>

</Link>


{/* Desktop Menu */}

<div className="hidden md:flex items-center gap-10 font-semibold text-sm uppercase tracking-wide text-gray-200">

<Link to="/" className="hover:text-yellow-400 transition">
Home
</Link>

<Link to="/services" className="hover:text-yellow-400 transition">
Services
</Link>

<Link to="/pricing" className="hover:text-yellow-400 transition">
Pricing
</Link>

<Link to="/contact" className="hover:text-yellow-400 transition">
Contact
</Link>

</div>


{/* Right Buttons */}

<div className="hidden md:flex items-center gap-4">

<Link
to="/booking"
className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
>
🚚 Book Now
</Link>

<Link
to="/admin-login"
className="px-5 py-2 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700"
>
🛠 Admin
</Link>

</div>


{/* Mobile Menu Button */}

<button
className="md:hidden text-3xl text-white"
onClick={() => setOpen(!open)}
>
☰
</button>

</nav>


{/* Mobile Menu */}

{open && (

<div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black text-white">

<Link to="/" onClick={() => setOpen(false)}>Home</Link>
<Link to="/services" onClick={() => setOpen(false)}>Services</Link>
<Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
<Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

<Link
to="/booking"
onClick={() => setOpen(false)}
className="text-center py-2 rounded-full bg-yellow-400 text-black font-bold"
>
Book Now
</Link>

<Link
to="/admin-login"
onClick={() => setOpen(false)}
className="text-center py-2 rounded-full bg-gray-800 text-white"
>
Admin
</Link>

</div>

)}

</header>

  );

};

export default Navbar;