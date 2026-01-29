import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300
      ${dark ? "bg-black/70 text-white" : "bg-white/70 text-black"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold">
          Shoes<span className="text-yellow-400">Repair</span> 👟
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300
                ${dark ? "bg-yellow-400" : "bg-purple-600"}`}
              />
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE CONTROLS */}
        <div className="hidden md:flex items-center gap-5">
          
          {/* THEME TOGGLE SWITCH */}
          <div
            onClick={() => setDark(!dark)}
            className={`w-12 h-6 flex items-center rounded-full cursor-pointer p-1 transition
            ${dark ? "bg-yellow-400" : "bg-gray-300"}`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-md transform transition
              ${dark ? "translate-x-6" : "translate-x-0"}`}
            />
          </div>

          <Link
            to="/login"
            className="px-4 py-2 rounded-full border hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          className={`flex flex-col gap-4 px-6 py-4 backdrop-blur-md
          ${dark ? "bg-black/80 text-white" : "bg-white/90 text-black"}`}
        >
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="border-b pb-2"
            >
              {item}
            </Link>
          ))}

          {/* MOBILE TOGGLE */}
          <div
            onClick={() => setDark(!dark)}
            className={`w-12 h-6 flex items-center rounded-full cursor-pointer p-1 transition mx-auto
            ${dark ? "bg-yellow-400" : "bg-gray-300"}`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-md transform transition
              ${dark ? "translate-x-6" : "translate-x-0"}`}
            />
          </div>

          <Link to="/login" className="py-2 text-center border rounded">
            Login
          </Link>
          <Link
            to="/signup"
            className="py-2 text-center rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
