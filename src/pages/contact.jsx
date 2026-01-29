import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return; // only numbers
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) err.name = "Name required";
    if (!form.email.trim()) err.email = "Email required";
    else if (!emailRegex.test(form.email)) err.email = "Invalid email";
    if (!form.mobile.trim()) err.mobile = "Mobile required";
    else if (form.mobile.length !== 10) err.mobile = "10 digits only";
    if (!form.address.trim()) err.address = "Address required";
    if (!form.message.trim()) err.message = "Message required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSuccess(true);
    setForm({ name: "", email: "", mobile: "", address: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 py-12">
      <div className="max-w-5xl mx-auto px-5 text-white">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-black">Us</span>
          </h1>
          <p className="text-white/90 text-sm mt-2">
            Fill the form & we’ll contact you shortly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-4">
            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Gurgaon+Sector+45+Haryana+122003&output=embed"
                className="w-full h-[200px]"
              ></iframe>
            </div>

            {/* Phone */}
            <div className="bg-white text-gray-800 rounded-lg p-4">
              <p className="font-semibold">📞 Phone</p>
              <a href="tel:6393072928" className="text-purple-600">
                +91 6393072928
              </a>
            </div>

            {/* Working Hours (CONFIRMED) */}
            <div className="bg-white text-gray-800 rounded-lg p-4">
              <p className="font-semibold">🕒 Working Hours</p>
              <p className="text-sm">Mon – Sat : 9:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-gray-800 rounded-lg p-6 relative space-y-2">
            <h3 className="text-lg font-semibold text-center mb-2">
              Send Message
            </h3>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border px-3 py-2 rounded text-sm"
            />
            {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border px-3 py-2 rounded text-sm"
            />
            {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}

            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              maxLength="10"
              className="w-full border px-3 py-2 rounded text-sm"
            />
            {errors.mobile && <p className="text-red-600 text-xs">{errors.mobile}</p>}

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border px-3 py-2 rounded text-sm"
            />
            {errors.address && <p className="text-red-600 text-xs">{errors.address}</p>}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="2"
              placeholder="Message"
              className="w-full border px-3 py-2 rounded text-sm"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-xs">{errors.message}</p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full mt-2 py-2 rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold"
            >
              Send Message
            </button>

            {/* Success Popup */}
            {success && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded text-sm">
                ✅ Thanks! We’ll contact you soon.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
