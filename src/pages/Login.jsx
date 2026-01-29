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

  // ================= EMAIL LOGIN (DUMMY) =================
  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Fake API call (backend yahin lagega)
    setTimeout(() => {
      setLoading(false);
      alert("Login Success ✅");
      navigate("/"); // redirect to home
    }, 1500);
  };

  // ================= GOOGLE LOGIN =================
  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google User:", user);

      alert(`Welcome ${user.displayName} 👟`);
      navigate("/"); // redirect after login
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

          {/* BRAND */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Shoes<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Shop</span>
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              Step into style. Login to continue 👟
            </p>
          </div>

          {/* EMAIL LOGIN FORM */}
          <form onSubmit={submit} className="space-y-5">
            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-white text-gray-900 border 
                  ${errors.email ? "border-red-500" : "border-gray-300"}
                  focus:outline-none focus:ring-2 focus:ring-purple-600`}
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
                className={`w-full px-4 py-3 rounded-xl bg-white text-gray-900 border 
                  ${errors.password ? "border-red-500" : "border-gray-300"}
                  focus:outline-none focus:ring-2 focus:ring-purple-600`}
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-3.5 text-xs text-gray-600 cursor-pointer hover:text-gray-900"
              >
                {showPass ? "HIDE" : "SHOW"}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* FORGOT */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-purple-600 hover:text-pink-500 transition"
              >
                Forgot password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-600">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-3 rounded-xl bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition disabled:opacity-60"
          >
            {googleLoading ? "Connecting Google..." : "Continue with Google"}
          </button>

          {/* SIGNUP */}
          <p className="text-center text-gray-600 text-sm mt-6">
            New here?{" "}
            <Link
              to="/register"
              className="text-purple-600 hover:text-pink-500 font-bold transition"
            >
              Create account
            </Link>
          </p>

        </div>
      </div>
    );
  }
