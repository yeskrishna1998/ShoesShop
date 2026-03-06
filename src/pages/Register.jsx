
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
  const submit = async (e) => {
  e.preventDefault();

  console.log("Submit button clicked");

  if (!validate()) {
    console.log("Validation failed");
    return;
  }

  setLoading(true);

  try {
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      address: form.address,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
    };

    console.log("Sending data:", payload);

    const response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("API Response:", response);

    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      throw new Error(data.detail || "Registration failed");
    }

    alert("Account created successfully 🎉");
    navigate("/login");

  } catch (error) {
    console.error("API error:", error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Create <span className="text-purple-600">Account</span>
          </h1>
        </div>

        <form onSubmit={submit} className="space-y-6">

          <Input label="Full Name"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            error={errors.name} />

          <Input label="Email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            error={errors.email} />

          <Input label="Phone"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            error={errors.phone} />

          <div className="grid grid-cols-2 gap-4">
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

          <Input label="Address"
            value={form.address}
            onChange={(v) => setForm({ ...form, address: v })}
            error={errors.address} />

          <div className="grid grid-cols-3 gap-4">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, error, type = "text" }) {
  return (
    <div>
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border text-sm
        ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}