import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter valid email");
      return;
    }

    setError("");
    alert("Reset link sent to email ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white/10 p-6 rounded-2xl border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center">
          Forgot Password
        </h2>
        <p className="text-gray-400 text-sm text-center mt-2">
          Enter your email to reset password
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-gray-600 focus:ring-2 focus:ring-emerald-500 outline-none"
          />

          {error && (
            <p className="text-red-400 text-xs">{error}</p>
          )}

          <button className="w-full py-3 bg-emerald-500 text-black font-semibold rounded-xl">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
