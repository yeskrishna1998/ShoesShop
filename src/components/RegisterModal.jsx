import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterModal({ isOpen, onClose }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ================= VALIDATION =================

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required";

    if (!form.email)
      e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email address";

    if (!form.phone)
      e.phone = "Mobile number required";
    else if (!/^[6-9]\d{9}$/.test(form.phone))
      e.phone = "Enter valid 10-digit number";

    if (!form.password)
      e.password = "Password required";
    else if (form.password.length < 6)
      e.password = "Minimum 6 characters";

    if (!form.confirmPassword)
      e.confirmPassword = "Confirm your password";
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    if (!form.address.trim()) e.address = "Delivery address required";
    if (!form.city.trim()) e.city = "City required";
    if (!form.state.trim()) e.state = "State required";

    if (!form.pincode)
      e.pincode = "Pincode required";
    else if (!/^\d{6}$/.test(form.pincode))
      e.pincode = "Enter valid 6-digit pincode";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ================= SUBMIT =================

  const submit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      alert("Account created successfully 🎉");

      onClose();

      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });

    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* BACKDROP */}

      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* MODAL */}

      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">

        <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">

          <div className="grid md:grid-cols-5">

            {/* LEFT SIDE FORM */}

            <div className="md:col-span-3 p-8 max-h-[90vh] overflow-y-auto">

              <div className="flex justify-between items-center mb-6">

                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  ← Home
                </Link>

                <button
                  onClick={onClose}
                  className="text-white text-xl hover:text-gray-300"
                >
                  ✕
                </button>

              </div>

              <div className="text-center mb-6">

                <h1 className="text-3xl font-extrabold text-white">
                  Create <span className="text-emerald-400">Account</span>
                </h1>

                <p className="text-gray-400 text-xs mt-1">
                  Join us for premium sneaker shopping
                </p>

              </div>

              <form onSubmit={submit} className="space-y-3">

                <p className="text-emerald-400 text-xs font-semibold tracking-wide">
                  Account Information
                </p>

                <Input
                  label="Full Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                />

                <Input
                  label="Email Address"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                />

                <Input
                  label="Mobile Number"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                />

                <div className="grid grid-cols-2 gap-2">

                  <Input
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={(v) => setForm({ ...form, password: v })}
                    error={errors.password}
                  />

                  <Input
                    label="Confirm Password"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(v) =>
                      setForm({ ...form, confirmPassword: v })
                    }
                    error={errors.confirmPassword}
                  />

                </div>

                <p className="text-emerald-400 text-xs font-semibold tracking-wide mt-4">
                  Delivery Address
                </p>

                <Input
                  label="Address"
                  value={form.address}
                  onChange={(v) => setForm({ ...form, address: v })}
                  error={errors.address}
                />

                <div className="grid grid-cols-3 gap-2">

                  <Input
                    label="City"
                    value={form.city}
                    onChange={(v) => setForm({ ...form, city: v })}
                    error={errors.city}
                  />

                  <Input
                    label="State"
                    value={form.state}
                    onChange={(v) => setForm({ ...form, state: v })}
                    error={errors.state}
                  />

                  <Input
                    label="Pincode"
                    value={form.pincode}
                    onChange={(v) => setForm({ ...form, pincode: v })}
                    error={errors.pincode}
                  />

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition disabled:opacity-60 mt-4"
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>

              </form>

              <p className="text-center text-gray-400 text-xs mt-4">

                Already have an account?

                <Link
                  to="/login"
                  className="text-emerald-400 hover:text-emerald-300 font-bold ml-1"
                >
                  Login
                </Link>

              </p>

            </div>

            {/* RIGHT SIDE WHY CHOOSE US */}

            <div className="md:col-span-2 bg-gradient-to-br from-emerald-500/20 to-black p-8 text-white flex flex-col justify-center">

              <h2 className="text-3xl font-bold mb-6">
                Why <span className="text-emerald-400">Choose Us</span>
              </h2>

              <div className="space-y-5 text-sm text-gray-300">

                <div>
                  <h3 className="font-semibold text-white">🚀 Fast Delivery</h3>
                  <p>
                    Get your sneakers delivered quickly with our fast
                    and reliable shipping service across India.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">💎 Premium Quality</h3>
                  <p>
                    We offer only authentic and premium quality
                    sneakers from top brands.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">🔒 Secure Payments</h3>
                  <p>
                    Safe and secure payment gateway with trusted
                    payment partners.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">⭐ Trusted Store</h3>
                  <p>
                    Thousands of happy customers trust us for quality
                    products and great service.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">🎁 Exclusive Offers</h3>
                  <p>
                    Members get exclusive discounts, early sales
                    access and premium deals.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

/* INPUT COMPONENT */

function Input({ label, value, onChange, error, type = "text" }) {

  return (
    <div>

      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 rounded-lg bg-black/50 text-white border text-sm
        ${error ? "border-red-500" : "border-gray-700"}
        focus:outline-none focus:ring-2 focus:ring-emerald-500`}
      />

      {error && (
        <p className="text-red-400 text-xs mt-0.5">
          {error}
        </p>
      )}

    </div>
  );
}