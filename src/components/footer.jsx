const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold">
            Shoes<span className="text-black">Repair</span> 👟
          </h2>
          <p className="mt-3 text-sm text-white/90">
            Professional shoe repairing service.  
            We make your old shoes feel brand new again.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Sole Repair</li>
            <li>Heel Repair</li>
            <li>Shoe Polishing</li>
            <li>Leather Fix</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Delhi, India</li>
            <li>📞 +91 6393072928</li>
            <li>📧 shoesrepair@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="backdrop-blur-md bg-black/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} ShoesRepair. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
