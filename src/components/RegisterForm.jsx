import { useState } from "react";

const RegisterForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name";

    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid number";

    if (!form.address.trim())
      newErrors.address = "Address required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const message = `New Shoe Repair Pickup

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}`;

    const whatsappURL =
      `https://wa.me/916393072928?text=${encodeURIComponent(message)}`;

    try {

      await fetch(
        "https://shoes-backend-1lip.onrender.com/quick-register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

    } catch (error) {

      console.log("API error");

    }

    setShowPopup(true);

    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

    setLoading(false);
  };

  return (

    <div className="flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl w-[380px] transition hover:scale-[1.02]">

        <h2 className="text-2xl font-bold text-center mb-1 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Schedule Free Pickup
        </h2>

        <p className="text-center text-gray-200 text-xs mb-3">
          Doorstep shoe repair service
        </p>

        <form onSubmit={handleSubmit} className="space-y-2.5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="address"
            placeholder="Pickup Address"
            rows="2"
            value={form.address}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-green-500/30"
          >
            {loading ? "Processing..." : "🚚 Book Pickup"}
          </button>

        </form>

      </div>


      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-bounce">

            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Booking Confirmed!
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              Our team will contact you shortly to confirm your pickup.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-black text-white px-6 py-2 rounded-lg"
            >
              OK
            </button>

          </div>

        </div>
      )}

    </div>

  );
};

export default RegisterForm;