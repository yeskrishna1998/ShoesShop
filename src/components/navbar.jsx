import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300
      ${dark ? "bg-black/80 border-yellow-500/20 text-white" : "bg-white/90 border-purple-200 text-black shadow-lg"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-black via-purple-600 to-yellow-500 dark:bg-gradient-to-r dark:from-white dark:via-yellow-300 dark:to-pink-300">
          Shoes<span className="text-yellow-500">Repair</span> 👟
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-sm uppercase tracking-wide">
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group transition-colors hover:text-yellow-500"
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full transition-all duration-300
                ${dark ? "bg-yellow-400" : "bg-gradient-to-r from-purple-600 to-pink-500"}`}
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
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold transform transition duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold transform transition duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50"
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
            className={`w-12 h-6 flex items-center rounded-full cursor-pointer p-1 transition mx-auto shadow-lg
            ${dark ? "bg-yellow-400" : "bg-gray-300"}`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-md transform transition
              ${dark ? "translate-x-6" : "translate-x-0"}`}
            />
          </div>

          <Link to="/login" className="py-2.5 text-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold transform transition duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50">
            Login
          </Link>
          <Link
            to="/signup"
            className="py-2.5 text-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
