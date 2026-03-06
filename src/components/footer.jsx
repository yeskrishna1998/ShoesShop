
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold">
            Shoes<span className="text-black">Repair</span> 👟
          </h2>

          <p className="mt-3 text-sm text-white/90">
            Professional shoe repairing service.
            We make your old shoes feel brand new again.
          </p>

          <p className="mt-4 text-sm font-semibold">
            🚚 Free Home Pickup & Delivery
          </p>
        </div>


        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>

          <ul className="space-y-2 text-sm">

            <li>
  <Link to="/booking?service=sole-repair" className="hover:underline hover:text-black">
    👞 Sole Repair
  </Link>
</li>

<li>
  <Link to="/booking?service=heel-repair" className="hover:underline hover:text-black">
    👠 Heel Repair
  </Link>
</li>

<li>
  <Link to="/booking?service=polishing" className="hover:underline hover:text-black">
    ✨ Shoe Polishing
  </Link>
</li>

<li>
  <Link to="/booking?service=leather-fix" className="hover:underline hover:text-black">
    🧴 Leather Fix
  </Link>
</li>

<li>
  <Link to="/booking?service=cleaning" className="hover:underline hover:text-black">
    🧼 Shoe Cleaning
  </Link>
</li>

<li>
  <Link to="/booking?service=stitching" className="hover:underline hover:text-black">
    🪡 Shoe Stitching
  </Link>
</li>

          </ul>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/" className="hover:underline hover:text-black">
                🏠 Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:underline hover:text-black">
                🛠 Services
              </Link>
            </li>

            <li>
              <Link to="/pricing" className="hover:underline hover:text-black">
                💰 Pricing
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline hover:text-black">
                📞 Contact
              </Link>
            </li>

          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>

          <ul className="space-y-2 text-sm">

            <li>
              📍 1306, Block-C, Sector-45, Gurgaon, Haryana, India
            </li>

            <li>
              <a
                href="tel:+916393072928"
                className="hover:underline hover:text-black"
              >
                📞 +91 6393072928
              </a>
            </li>

            <li>
              <a
                href="mailto:shoesrepair@gmail.com"
                className="hover:underline hover:text-black"
              >
                📧 shoesrepair@gmail.com
              </a>
            </li>

            <li>
              🕒 Mon – Sat : 10:00 AM – 8:00 PM
            </li>

          </ul>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="backdrop-blur-md bg-black/20 text-center py-4 text-sm">

        <p>
          © {new Date().getFullYear()} ShoesRepair. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
