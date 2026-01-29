const CTA = ({ setShowLoginModal, setShowRegisterModal }) => {
  return (
    <section className="py-14 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Need Shoe Repair Today?
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm">
          Contact us now for fast, affordable, and professional shoe repairing services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Login Button */}
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            🔐 Login
          </button>

          {/* Signup Button */}
          <button
            onClick={() => setShowRegisterModal(true)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:opacity-90 transition"
          >
            ✨ Signup
          </button>

          {/* Call Button */}
          <a
            href="tel:6393072928"
            className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            📞 Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916393072928"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            💬 WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTA;
