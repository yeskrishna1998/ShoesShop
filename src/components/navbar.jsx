import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-y border-black/10 bg-white/95 backdrop-blur-xl shadow-[0_12px_40px_-30px_rgba(0,0,0,0.4)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-b from-yellow-300 via-yellow-400 to-orange-400 flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-yellow-500/25">
            Z
          </div>

          <div className="flex flex-col leading-tight -mt-0.5 sm:-mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-wide">ZCoated</span>
            <span className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-500 tracking-[0.24em] uppercase -mt-0.5">
              Premium Shoe Care
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[13px] lg:text-sm font-semibold uppercase tracking-[0.14em] text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="group relative transition-colors duration-300 hover:text-orange-500">
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            to="/booking"
            className="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white rounded-full bg-[#FE9874] hover:bg-[#f07f56] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(249,115,22,0.65)]"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-gray-800 p-1.5 rounded-md border border-gray-300 bg-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden border-t border-black/10 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          open ? "max-h-96 py-5" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-5 flex flex-col gap-3 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm tracking-wide"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="mt-1 w-full text-center px-6 py-2.5 rounded-full bg-[#FE9874] hover:bg-[#f07f56] text-white font-bold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
