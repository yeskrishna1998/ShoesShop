import { useState } from "react";

const RegisterForm = ({ scheduleMode = true }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {

    let newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Please enter your name";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.phone.trim())
      newErrors.phone = "Mobile number required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit number";

    if (!form.address.trim())
      newErrors.address = "Address required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const message = `New Shoe Service Request

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}`;

    const whatsappURL =
      `https://wa.me/916393072928?text=${encodeURIComponent(message)}`;

    // ✅ API only when schedule pickup
    if (scheduleMode) {

      try {

        await fetch(
          "https://shoes-backend-1lip.onrender.com/quick-register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
          }
        );

      } catch (error) {
        console.log("API error");
      }

    }

    setShowPopup(true);

    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

    setLoading(false);
  };

  return (

<div className="flex justify-center items-center">

<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xl w-[380px] transition hover:shadow-2xl">

<h2 className="text-2xl font-bold text-center mb-1 text-black">
Schedule Free Pickup
</h2>

<p className="text-center text-gray-500 text-xs mb-4">
Doorstep shoe repair service
</p>

<form onSubmit={handleSubmit} className="space-y-3">

{/* NAME */}

<div>
<input
type="text"
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border outline-none ${
errors.name ? "border-red-500" : "focus:border-black"
}`}
/>

{errors.name && (
<p className="text-red-500 text-xs mt-1">{errors.name}</p>
)}
</div>

{/* EMAIL */}

<div>
<input
type="email"
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border outline-none ${
errors.email ? "border-red-500" : "focus:border-black"
}`}
/>

{errors.email && (
<p className="text-red-500 text-xs mt-1">{errors.email}</p>
)}
</div>

{/* PHONE */}

<div>
<input
type="text"
name="phone"
placeholder="Mobile Number"
value={form.phone}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border outline-none ${
errors.phone ? "border-red-500" : "focus:border-black"
}`}
/>

{errors.phone && (
<p className="text-red-500 text-xs mt-1">{errors.phone}</p>
)}
</div>

{/* ADDRESS */}

<div>
<textarea
name="address"
placeholder="Pickup Address"
rows="2"
value={form.address}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border outline-none ${
errors.address ? "border-red-500" : "focus:border-black"
}`}
/>

{errors.address && (
<p className="text-red-500 text-xs mt-1">{errors.address}</p>
)}
</div>

<button
type="submit"
disabled={loading}
className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition"
>

{loading ? "Processing..." : "Book Pickup"}

</button>

</form>

</div>

{/* SUCCESS POPUP */}

{showPopup && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

<div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">

<h2 className="text-2xl font-bold text-black mb-2">
Booking Confirmed!
</h2>

<p className="text-gray-600 text-sm mb-4">
Our team will contact you shortly to confirm your pickup.
</p>

<button
onClick={() => setShowPopup(false)}
className="bg-black text-white px-6 py-2 rounded-lg"
>
OK
</button>

</div>

</div>

)}

</div>

  );
};

export default RegisterForm;