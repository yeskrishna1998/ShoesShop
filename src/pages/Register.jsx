import { useState, useEffect } from "react";
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

  const submit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

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

      const response = await fetch("https://shoes-backend-liip.onrender.com/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Registration failed");
      }

      alert("Account created successfully 🎉");
      navigate("/login");

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-5xl grid md:grid-cols-5 gap-8">

        {/* FORM CARD */}

        <div className="md:col-span-3 bg-white rounded-3xl shadow-2xl p-10">


      <div className="mb-6">
  <Link
    to="/"
    className="inline-block text-m text-green-600 font-semibold transform transition duration-200 hover:scale-110"
  >
    ← Back to Home
  </Link>
</div>

          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Create Your <span className="text-purple-600">Zcoated</span> Account
          </h1>

          <p className="mb-6 text-sm text-gray-600">
            Sign up to book pickups, manage your details, and stay connected with Zcoated.
          </p>

          <form onSubmit={submit} className="space-y-4">

            <Input label="Full Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              error={errors.name}
            />

            <Input label="Email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              error={errors.email}
            />

            <Input label="Phone"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              error={errors.phone}
            />

            <div className="grid grid-cols-2 gap-4">

              <Input label="Password"
                type="password"
                value={form.password}
                onChange={(v) => setForm({ ...form, password: v })}
                error={errors.password}
              />

              <Input label="Confirm Password"
                type="password"
                value={form.confirmPassword}
                onChange={(v) =>
                  setForm({ ...form, confirmPassword: v })
                }
                error={errors.confirmPassword}
              />

            </div>

            <Input label="Address"
              value={form.address}
              onChange={(v) => setForm({ ...form, address: v })}
              error={errors.address}
            />

            <div className="grid grid-cols-3 gap-4">

              <Input label="City"
                value={form.city}
                onChange={(v) => setForm({ ...form, city: v })}
                error={errors.city}
              />

              <Input label="State"
                value={form.state}
                onChange={(v) => setForm({ ...form, state: v })}
                error={errors.state}
              />

              <Input label="Pincode"
                value={form.pincode}
                onChange={(v) => setForm({ ...form, pincode: v })}
                error={errors.pincode}
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?
            <Link to="/login" className="text-purple-600 font-bold ml-1">
              Login
            </Link>
          </p>

        </div>

        {/* RIGHT CARD */}

        <div className="md:col-span-2 bg-gradient-to-br from-purple-700 to-pink-600 text-white p-10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer">

          <h2 className="text-2xl font-semibold mb-10 text-black-800">
       🚀  <TypingTitle />
       </h2>

          <div className="relative h-[320px] overflow-hidden">

            <div className="scroll-container space-y-6 text-sm">

              {items.map((item, i) => (
                <Feature key={i} title={item.title} text={item.text} />
              ))}

              {items.map((item, i) => (
                <Feature key={"dup"+i} title={item.title} text={item.text} />
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

const items = [
  {title:"🚀 Fast Delivery", text:"Get your orders delivered quickly across India."},
  {title:"💎 Premium Quality", text:"We provide only genuine and premium products."},
  {title:"🔒 Secure Payments", text:"Safe and trusted payment gateways protect your transactions."},
  {title:"⭐ Trusted Store", text:"Thousands of satisfied customers trust our platform."},
  {title:"🎁 Exclusive Deals", text:"Members enjoy special discounts and early access offers."}
];

function Feature({title,text}){
  return(
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function TypingTitle(){

  const text="Why Choose Us";
  const [display,setDisplay]=useState("");
  const [index,setIndex]=useState(0);

  useEffect(()=>{

    if(index<text.length){

      const timer=setTimeout(()=>{
        setDisplay(prev=>prev+text[index]);
        setIndex(index+1);
      },120);

      return ()=>clearTimeout(timer);

    }else{

      setTimeout(()=>{
        setDisplay("");
        setIndex(0);
      },3000);

    }

  },[index]);

  return <span>{display}</span>
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
        <p className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
