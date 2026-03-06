
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
    console.log("Submitting form", form);

    if (!validate()) return;

    setLoading(true);

    try {

      const response = await fetch("http://127.0.0.1:8000/quick-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.detail || "Registration failed");
        setLoading(false);
        return;
      }

      setShowPopup(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        address: ""
      });

    } catch (error) {

      console.error(error);
      alert("Server error");

    }

    setLoading(false);
  };

  return (

    <div className="flex justify-center items-center">

      {/* CARD */}

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl w-[320px]">

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
            className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>
      </div>

      {/* SUCCESS POPUP */}

      {showPopup && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-white p-6 rounded-xl text-center shadow-xl w-[300px]">

            <h3 className="text-xl font-bold mb-2">
              🎉 Registration Successful
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Thanks for registering!  
              Scroll down and book your time slot.  
              Our team will contact you soon.
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
