  import { useState } from "react";
  import { Link } from "react-router-dom";

  const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-white shadow-lg">

        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
  <Link to="/" className="flex flex-col leading-tight group">

    {/* Brand Name */}
    <div className="text-2xl md:text-3xl font-extrabold tracking-wide flex items-center">

      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
        Z
      </span>

      <span className="bg-gradient-to-r from-orange-300 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
        Coated
      </span>

    </div>

    {/* Tagline */}
    <span className="text-[10px] md:text-xs text-gray-500 italic tracking-wide">
      Premium Shoe Care
    </span>

  </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-semibold text-sm uppercase tracking-wide">

            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>

            <Link to="/services" className="hover:text-yellow-500">
              Services
            </Link>

            <Link to="/pricing" className="hover:text-yellow-500">
              Pricing
            </Link>

            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>

          </div>

          {/* RIGHT SIDE BUTTON */}

          <div className="hidden md:flex items-center gap-4">

            {/* Book Now */}

            <Link
              to="/booking"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold hover:-translate-y-1 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              🚚 Book Now
            </Link>

            {/* Admin */}

            <Link
              to="/admin-login"
              className="px-5 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800"
            >
              🛠 Admin
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

        {/* Mobile Menu */}

        {open && (

          <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-full bg-yellow-400 font-bold"
            >
              Book Now
            </Link>

            <Link
              to="/admin-login"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-full bg-black text-white"
            >
              Admin
            </Link>

          </div>

        )}

      </header>

    );

  };

  export default Navbar;