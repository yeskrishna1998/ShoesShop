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

  // ================= VALIDATION =================
  const validate = () => {

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name required";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Valid email required";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= INPUT CHANGE =================
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

  // ================= FORM SUBMIT =================
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // WhatsApp message
    const message = `New Shoe Repair Booking

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}`;

    const whatsappURL =
      `https://wa.me/916393072928?text=${encodeURIComponent(message)}`;

    try {

      // Backend API try karega
      await fetch("https://shoes-backend-liip.onrender.com/quick-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

    } catch (error) {

      console.log("API server not running");

    }

    // Popup show
    setShowPopup(true);

    // WhatsApp open
    window.open(whatsappURL, "_blank");

    // Form reset
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

      {/* CARD */}

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl w-[380px]">

        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Register Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black outline-none"
            />

            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black outline-none"
            />

            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black outline-none"
            />

            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* ADDRESS */}
          <div>
            <textarea
              name="address"
              placeholder="Address"
              rows="2"
              value={form.address}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black outline-none"
            />

            {errors.address && (
              <p className="text-red-400 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          {/* BUTTON */}
         <button
  type="submit"
  disabled={loading}
  className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold text-lg hover:bg-yellow-500 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2">
  {loading ? "Processing..." : "🚚 Schedule Free Pickup"}
</button>

        </form>

      </div>

      {/* SUCCESS POPUP */}

      {showPopup && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-white p-6 rounded-xl text-center shadow-xl w-[300px]">

            <h3 className="text-xl font-bold mb-2 text-green-600 flex items-center justify-center gap-2">
              <span className="text-2xl">✅</span>
              Registration Successful
            </h3>

            <p className="text-gray-700 text-sm mb-4 text-center leading-relaxed">
              WhatsApp is opening to confirm your booking.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-black text-white px-5 py-2 rounded-lg"
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