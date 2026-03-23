import { useEffect, useState } from "react";

const RegisterForm = ({ scheduleMode = true, prefilledService = "" }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    requirement: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (!prefilledService) return;
    setForm((prev) => ({ ...prev, service: prefilledService }));
  }, [prefilledService]);

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

    if (!form.service.trim())
      newErrors.service = "Please choose a service";

    if (!form.requirement.trim())
      newErrors.requirement = "Please tell us what you want";

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

    const message = `New Shoe Service Request

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service Needed: ${form.service}
Shoe Requirement: ${form.requirement}
Address: ${form.address}`;

    const whatsappURL = `https://wa.me/918368385923?text=${encodeURIComponent(message)}`;
    const whatsappTab = window.open(whatsappURL, "_blank", "noopener,noreferrer");
    if (!whatsappTab) {
      window.location.href = whatsappURL;
    }

    // API only for Schedule Pickup
    if (scheduleMode) {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service.trim(),
        requirement: form.requirement.trim(),
        address: form.address.trim(),
      };

      try {
        console.log("Quick register API start", payload);
        const response = await fetch("https://shoes-backend-1lip.onrender.com/quick-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        console.log("Quick register API response", response.status, response.ok);
      } catch (error) {
        console.error("Quick register API error", error);
      }

    }

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      requirement: "",
      address: "",
    });

  };

  return (

<div className="flex justify-center items-center w-full">

{/* FORM CARD */}

<div className="bg-gradient-to-br from-white via-orange-50 to-[#ffe7de] border border-[#f6c9b7] p-5 md:p-6 rounded-2xl shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)] w-full max-w-md transition hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.55)] relative">

<h2 className="text-xl md:text-2xl font-bold text-center mb-1 text-[#2a120a]">
Schedule Free Pickup
</h2>

<p className="text-center text-[#8a5b4b] text-xs mb-4">
Doorstep shoe repair service
</p>

<form onSubmit={handleSubmit} className="space-y-3.5">

{/* NAME */}

<div>

<input
type="text"
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border bg-white/90 outline-none text-sm md:text-base ${
errors.name ? "border-red-500" : "border-[#e6c2b3] focus:border-[#FE9874]"
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
className={`w-full py-2.5 px-3 rounded-lg border bg-white/90 outline-none text-sm md:text-base ${
errors.email ? "border-red-500" : "border-[#e6c2b3] focus:border-[#FE9874]"
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
className={`w-full py-2.5 px-3 rounded-lg border bg-white/90 outline-none text-sm md:text-base ${
errors.phone ? "border-red-500" : "border-[#e6c2b3] focus:border-[#FE9874]"
}`}
/>

{errors.phone && (
<p className="text-red-500 text-xs mt-1">{errors.phone}</p>
)}

</div>

{/* SERVICE */}

<div>

<select
name="service"
value={form.service}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border outline-none text-sm md:text-base bg-white/90 ${
errors.service ? "border-red-500" : "border-[#e6c2b3] focus:border-[#FE9874]"
}`}
>
<option value="">Select Service Needed</option>
<option value="Shoe Cleaning">Shoe Cleaning</option>
<option value="Shoe Repair">Shoe Repair</option>
<option value="Bag Cleaning and Repair">Bag Cleaning and Repair</option>
<option value="Sneaker Restoration">Sneaker Restoration</option>
<option value="Other">Other</option>
</select>

{errors.service && (
<p className="text-red-500 text-xs mt-1">{errors.service}</p>
)}

</div>

{/* REQUIREMENT */}

<div>

<textarea
name="requirement"
placeholder="What exactly do you want in your shoes? (stain removal, sole repair, whitening, polish...)"
rows="2"
value={form.requirement}
onChange={handleChange}
className={`w-full py-2.5 px-3 rounded-lg border bg-white/90 outline-none text-sm md:text-base ${
errors.requirement ? "border-red-500" : "border-[#e6c2b3] focus:border-[#FE9874]"
}`}
/>

{errors.requirement && (
<p className="text-red-500 text-xs mt-1">{errors.requirement}</p>
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
className={`w-full py-2.5 px-3 rounded-lg border bg-white/90 outline-none text-sm md:text-base ${
errors.address ? "border-red-500" : "border-[#e6c2b3] focus:border-[#FE9874]"
}`}
/>

{errors.address && (
<p className="text-red-500 text-xs mt-1">{errors.address}</p>
)}

</div>

{/* BUTTON */}

<button
type="submit"
className="w-full py-3 rounded-lg bg-[#FE9874] text-white font-semibold hover:bg-[#f07f56] transition text-sm md:text-base shadow-[0_10px_22px_-10px_rgba(254,152,116,0.9)]"
>
Book Pickup

</button>

</form>

</div>

{/* SUCCESS POPUP */}

</div>

  );

};

export default RegisterForm;
