import { useState } from "react";

function PickupForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all fields");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(
        "https://shoes-backend-1lip.onrender.com/pickups",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", address: "" });

        setTimeout(() => {
          setSuccess(false);
        }, 2500);
      } else {
        alert("Error submitting");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gray-100 flex items-center justify-center">

      {/* Card */}
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold text-center mb-4">
          Request Pickup
        </h2>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 
          ${
            submitting
              ? "bg-gray-400"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 active:scale-95"
          }`}
        >
          {submitting ? "Processing..." : "🚀 Submit Pickup"}
        </button>
      </div>

      {/* LOADING OVERLAY */}
      {submitting && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white px-6 py-4 rounded-xl shadow-xl text-center">
            <div className="animate-spin text-3xl mb-2">⏳</div>
            Submitting...
          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl text-center animate-scaleIn">
            
            <div className="text-green-500 text-5xl mb-3 animate-bounce">
              ✅
            </div>

            <h3 className="text-lg font-bold mb-1">
              Pickup Booked!
            </h3>

            <p className="text-gray-500 text-sm">
              Our team will contact you soon 🚀
            </p>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes scaleIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default PickupForm;