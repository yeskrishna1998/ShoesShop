import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LoginModal({ isOpen, onClose }) {
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

    // Fake API call
    setTimeout(() => {
      setLoading(false);
      alert("Login Success ✅");
      onClose(); // Close modal on success
      setForm({ email: "", password: "" });
      setShowPass(false);
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
      onClose(); // Close modal on success
      setForm({ email: "", password: "" });
      setShowPass(false);
    } catch (err) {
      console.error(err);
      alert("Google login failed ❌");
    } finally {
      setGoogleLoading(false);
    }
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
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-[slideUp_0.3s_ease-out]">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
          >
            ✕
          </button>

          {/* BRAND */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Shoes<span className="text-emerald-400">Shop</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">
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
                className={`w-full px-4 py-3 rounded-xl bg-black/50 text-white border 
                  ${errors.email ? "border-red-500" : "border-gray-700"}
                  focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-black/50 text-white border 
                  ${errors.password ? "border-red-500" : "border-gray-700"}
                  focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition"
              >
                {showPass ? "👁️" : "👁️‍🗨️"}
              </button>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-600" />
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-600" />
          </div>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-3 rounded-xl bg-white/20 hover:bg-white/30 transition text-white font-bold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {googleLoading ? (
              <>
                <span className="animate-spin">⏳</span> Signing in...
              </>
            ) : (
              <>
                <span>🔴</span> Login with Google
              </>
            )}
          </button>

          {/* SIGNUP LINK */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{" "}
            <button
              onClick={onClose}
              className="text-emerald-400 hover:text-emerald-300 font-bold transition"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
