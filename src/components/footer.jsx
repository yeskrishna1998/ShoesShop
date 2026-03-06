
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 md:col-span-1">
          <h2 className="text-xl font-extrabold">
            Shoes<span className="text-black">Repair</span> 👟
          </h2>

          <p className="mt-2 text-sm text-white/90">
            Professional shoe repairing service.
            We make your old shoes feel brand new again.
          </p>

          <p className="mt-2 text-sm font-semibold">
            🚚 Free Home Pickup & Delivery
          </p>
        </div>


        {/* Services */}
        <div>
          <h3 className="font-bold mb-2">Services</h3>

          <ul className="space-y-1 text-sm">

            <li>
              <Link to="/booking?service=sole-repair" className="hover:text-black transition duration-200 active:scale-90">
                👞 Sole Repair
              </Link>
            </li>

            <li>
              <Link to="/booking?service=heel-repair" className="hover:text-black transition duration-200 active:scale-90">
                👠 Heel Repair
              </Link>
            </li>

            <li>
              <Link to="/booking?service=polishing" className="hover:text-black transition duration-200 active:scale-90">
                ✨ Shoe Polishing
              </Link>
            </li>

            <li>
              <Link to="/booking?service=leather-fix" className="hover:text-black transition duration-200 active:scale-90">
                🧴 Leather Fix
              </Link>
            </li>

            <li>
              <Link to="/booking?service=cleaning" className="hover:text-black transition duration-200 active:scale-90">
                🧼 Shoe Cleaning
              </Link>
            </li>

            <li>
              <Link to="/booking?service=stitching" className="hover:text-black transition duration-200 active:scale-90">
                🪡 Shoe Stitching
              </Link>
            </li>

          </ul>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>

          <ul className="space-y-1 text-sm">

            <li>
              <Link to="/" className="hover:text-black transition duration-200 active:scale-90">
                🏠 Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-black transition duration-200 active:scale-90">
                🛠 Services
              </Link>
            </li>

            <li>
              <Link to="/pricing" className="hover:text-black transition duration-200 active:scale-90">
                💰 Pricing
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-black transition duration-200 active:scale-90">
                📞 Contact
              </Link>
            </li>

          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-bold mb-2">Contact</h3>

          <ul className="space-y-1 text-sm">

            <li>
              📍 Sector-45, Gurgaon, Haryana
            </li>

            <li>
              <a href="tel:+916393072928" className="hover:text-black transition">
                📞 +91 6393072928
              </a>
            </li>

            <li>
              <a href="mailto:shoesrepair@gmail.com" className="hover:text-black transition">
                📧 shoesrepair@gmail.com
              </a>
            </li>

            <li>
              🕒 Mon – Sat : 10 AM – 8 PM
            </li>

          </ul>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="backdrop-blur-md bg-black/20 text-center py-3 text-xs">

        <p>
          © {new Date().getFullYear()} ShoesRepair. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;

