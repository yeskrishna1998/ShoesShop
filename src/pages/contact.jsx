import { useState } from "react";

const contactHighlights = [
  {
    title: "Call Us",
    value: "+91 8368385923",
    href: "tel:+918368385923",
    note: "Quick assistance for bookings and service questions.",
  },
  {
    title: "Email",
    value: "support.zcoated@gmail.com",
    href: "mailto:support.zcoated@gmail.com",
    note: "Best for pickup details, pricing, and custom requests.",
  },
  {
    title: "Visit Area",
    value: "Sector 45, Gurgaon",
    href: "https://www.google.com/maps?q=Gurgaon+Sector+45+Haryana+122003",
    note: "Serving Gurgaon with pickup and delivery support.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) err.name = "Name required";
    if (!form.email.trim()) err.email = "Email required";
    else if (!emailRegex.test(form.email)) err.email = "Invalid email";
    if (!form.mobile.trim()) err.mobile = "Mobile required";
    else if (form.mobile.length !== 10) err.mobile = "10 digits only";
    if (!form.address.trim()) err.address = "Address required";
    if (!form.message.trim()) err.message = "Message required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSuccess(true);
    setForm({ name: "", email: "", mobile: "", address: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-[#060606] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(254,152,116,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,214,102,0.16),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200">
            Contact Z Coated
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Bring Your Favorite Pair Back to Life
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Share your shoe cleaning, repair, or restoration requirement and our team will help you with pickup, pricing, and the right care plan.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {contactHighlights.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 text-left backdrop-blur-xl transition hover:border-[#FE9874]/40 hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                    {item.title}
                  </p>
                  <p className="mt-3 break-all text-base font-semibold text-white sm:text-lg">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.note}
                  </p>
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/6 backdrop-blur-xl">
              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-white/10 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-6 md:border-b-0 md:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                    Why Contact Us
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Fast help for bookings, pricing, and pickup support
                  </h2>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-300">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-semibold text-white">Pickup Available</p>
                      <p className="mt-1 text-gray-400">
                        Doorstep pickup and delivery support across Gurgaon.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-semibold text-white">Working Hours</p>
                      <p className="mt-1 text-gray-400">Mon - Sat | 9:00 AM - 8:00 PM</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-semibold text-white">WhatsApp Friendly</p>
                      <p className="mt-1 text-gray-400">
                        Send shoe photos and get a faster service estimate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-h-[260px] sm:min-h-[300px]">
                  <iframe
                    title="Z Coated Gurgaon location"
                    src="https://www.google.com/maps?q=Gurgaon+Sector+45+Haryana+122003&output=embed"
                    className="h-full min-h-[260px] w-full sm:min-h-[300px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[30px] border border-white/10 bg-[#121212]/95 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] sm:p-6 lg:p-7">
            {success && (
              <div className="mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-200">
                Thanks! We&apos;ll contact you soon.
              </div>
            )}

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                Send Message
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Tell us what your pair needs
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Fill in your details and our team will get back to you shortly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-gray-300">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#FE9874]"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-gray-300">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#FE9874]"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-gray-300">Mobile</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#FE9874]"
                />
                {errors.mobile && <p className="mt-1 text-xs text-red-400">{errors.mobile}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-gray-300">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Pickup address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#FE9874]"
                />
                {errors.address && <p className="mt-1 text-xs text-red-400">{errors.address}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about the shoe issue, service you need, or preferred pickup timing"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#FE9874]"
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#FE9874] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f07f56]"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
