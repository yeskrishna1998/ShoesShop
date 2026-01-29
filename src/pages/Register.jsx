import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

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
      navigate("/login");
    }, 1500);
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Account</span>
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Join us and get premium shoe services 👟
          </p>
        </div>

        <form onSubmit={submit} className="space-y-6">

          {/* ACCOUNT INFO HEADER */}
          <p className="text-purple-600 text-sm font-semibold tracking-wide">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Password" type="password"
              value={form.password}
              onChange={(v) => setForm({ ...form, password: v })}
              error={errors.password} />

            <Input label="Confirm Password" type="password"
              value={form.confirmPassword}
              onChange={(v) =>
                setForm({ ...form, confirmPassword: v })}
              error={errors.confirmPassword} />
          </div>

          {/* DELIVERY INFO HEADER */}
          <p className="text-purple-600 text-sm font-semibold tracking-wide mt-4">
            Delivery Address
          </p>

          {/* ADDRESS */}
          <Input label="Address (House / Street)"
            value={form.address}
            onChange={(v) => setForm({ ...form, address: v })}
            error={errors.address} />

          {/* CITY, STATE, PINCODE - GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white
                       font-semibold tracking-wide transition hover:opacity-90
                       active:scale-[0.98] disabled:opacity-60 text-base mt-4"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 hover:text-pink-500 font-bold transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
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
        className={`w-full px-4 py-3 rounded-xl bg-white text-gray-900 border text-sm
          ${error ? "border-red-500" : "border-gray-300"}
          focus:outline-none focus:ring-2 focus:ring-purple-600
          transition`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
