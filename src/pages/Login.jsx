import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // ================= VALIDATION =================
  const validate = () => {
    const e = {};

    if (!form.email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email address";

    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6)
      e.password = "Minimum 6 characters required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ================= LOGIN API =================
  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("https://shoes-backend-liip.onrender.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: form.email,
    password: form.password,
  }),
});

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed");
      }

      alert("Login Success ✅");

      console.log("User data:", data);

      navigate("/");

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE LOGIN =================
  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google User:", user);

      alert(`Welcome ${user.displayName} 👟`);
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Google login failed ❌");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            <span className="text-purple-600">Zcoated</span>
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Log in to manage your Zcoated bookings and account.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-300"
            />

            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-3.5 text-xs cursor-pointer"
            >
              {showPass ? "HIDE" : "SHOW"}
            </span>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-600">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full py-3 rounded-xl bg-gray-100"
        >
          {googleLoading ? "Connecting Google..." : "Continue with Google"}
        </button>

        <p className="text-center text-gray-600 text-sm mt-6">
          New here?{" "}
          <Link to="/register" className="text-purple-600 font-bold">
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
}
