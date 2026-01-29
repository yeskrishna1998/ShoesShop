import { useState } from "react";

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
      {/* BLURRED BACKGROUND */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4 py-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-[slideUp_0.3s_ease-out] max-h-[90vh] overflow-y-auto">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Create <span className="text-emerald-400">Account</span>
            </h1>
            <p className="text-gray-400 text-xs mt-1">
              Join us for premium services 👟
            </p>
          </div>

          <form onSubmit={submit} className="space-y-3">

            {/* ACCOUNT INFO HEADER */}
            <p className="text-emerald-400 text-xs font-semibold tracking-wide">
              Account Information
            </p>

            {/* NAME */}
            <Input label="Full Name" value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              error={errors.name} />

            {/* EMAIL */}
            <Input label="Email Address" value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              error={errors.email} />

            {/* PHONE */}
            <Input label="Mobile Number" value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              error={errors.phone} />

            {/* PASSWORD FIELDS - GRID */}
            <div className="grid grid-cols-2 gap-2">
              <Input label="Password" type="password"
                value={form.password}
                onChange={(v) => setForm({ ...form, password: v })}
                error={errors.password} />

              <Input label="Confirm" type="password"
                value={form.confirmPassword}
                onChange={(v) =>
                  setForm({ ...form, confirmPassword: v })}
                error={errors.confirmPassword} />
            </div>

            {/* DELIVERY INFO HEADER */}
            <p className="text-emerald-400 text-xs font-semibold tracking-wide mt-4">
              Delivery Address
            </p>

            {/* ADDRESS */}
            <Input label="Address (House / Street)"
              value={form.address}
              onChange={(v) => setForm({ ...form, address: v })}
              error={errors.address} />

            {/* CITY, STATE, PINCODE - GRID */}
            <div className="grid grid-cols-3 gap-2">
              <Input label="City"
                value={form.city}
                onChange={(v) => setForm({ ...form, city: v })}
                error={errors.city} />

              <Input label="State"
                value={form.state}
                onChange={(v) => setForm({ ...form, state: v })}
                error={errors.state} />

              <Input label="Pincode"
                value={form.pincode}
                onChange={(v) => setForm({ ...form, pincode: v })}
                error={errors.pincode} />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600
                         text-black font-semibold tracking-wide transition
                         active:scale-[0.98] disabled:opacity-60 text-sm mt-4"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-400 text-xs mt-4">
            Already have an account?{" "}
            <button
              onClick={onClose}
              className="text-emerald-400 hover:text-emerald-300 font-bold transition"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

/* ================= COMPONENTS ================= */

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
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          transition`}
      />
      {error && (
        <p className="text-red-400 text-xs mt-0.5">{error}</p>
      )}
    </div>
  );
}
