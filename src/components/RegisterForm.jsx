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

        {/* HEADING */}

        <h2 className="text-2xl font-bold text-center mb-1 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
  Schedule Free Pickup
</h2>

        <p className="text-center text-gray-200 text-xs mb-3">
          Doorstep shoe repair service
        </p>

        <form onSubmit={handleSubmit} className="space-y-2.5">

          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <textarea
              name="address"
              placeholder="Pickup Address"
              rows="2"
              value={form.address}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

        <button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-green-500/30"
>
  {loading ? "Processing..." : "🚚 Book Pickup"}
</button>

        </form>

      </div>

    </div>
  );
};

export default RegisterForm;