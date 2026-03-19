import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "zcoated_customer_reviews";

const initialReviews = [
  {
    name: "Aarav Sharma",
    handle: "@aaravsharma",
    email: "aarav@example.com",
    review:
      "My white sneakers had deep stains, but after cleaning they looked almost brand new. Great shoe-care quality.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    handle: "@priyaverma",
    email: "priya@example.com",
    review:
      "Heel repair and finishing were perfect. The pair came back polished, clean, and neatly packed.",
    rating: 4,
  },
  {
    name: "Rohan Mehta",
    handle: "@rohanmehta",
    email: "rohan@example.com",
    review:
      "I sent two formal shoes for sole repair. Stitching and comfort both feel excellent now.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    handle: "@snehakapoor",
    email: "sneha@example.com",
    review:
      "Very smooth pickup and delivery. My suede pair was cleaned carefully without any color damage.",
    rating: 5,
  },
  {
    name: "Kunal Bansal",
    handle: "@kunalbansal",
    email: "kunal@example.com",
    review:
      "Sneaker restoration was top class. Yellowing removed and midsole looked fresh again.",
    rating: 4,
  },
  {
    name: "Neha Gupta",
    handle: "@nehagupta",
    email: "neha@example.com",
    review:
      "Reliable service for premium footwear. They handled leather care and finishing with real expertise.",
    rating: 5,
  },
];

const makeHandle = (name, email) => {
  const fromEmail = email.split("@")[0]?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (fromEmail) return `@${fromEmail}`;
  return `@${name.toLowerCase().replace(/[^a-z]/g, "") || "customer"}`;
};

const ReviewCard = ({ review, onPause, onResume }) => {
  return (
    <article
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      className="w-[300px] sm:w-[340px] flex-shrink-0 rounded-2xl border border-fuchsia-500/25 bg-gradient-to-br from-[#1a0011] via-[#0f0813] to-[#12000a] p-5 shadow-[0_0_0_1px_rgba(236,72,153,0.08),0_16px_40px_-24px_rgba(236,72,153,0.6)] text-left cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold">
          {review.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="font-semibold text-white leading-tight">
            {review.name}
            <span className="ml-1 text-sky-400">●</span>
          </div>
          <div className="text-sm text-slate-400">{review.handle}</div>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-slate-300 min-h-[96px]">{review.review}</p>

      <div className="mt-5 text-amber-300 tracking-wide">{"★".repeat(review.rating || 5)}</div>
    </article>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) && parsed.length ? parsed : initialReviews;
    } catch {
      return initialReviews;
    }
  });
  const [showForm, setShowForm] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", rating: 5 });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // Ignore storage write errors
    }
  }, [reviews]);

  const [rowOne, rowTwo] = useMemo(() => {
    const base = reviews.length ? reviews : initialReviews;
    const first = [...base, ...base];
    const split = Math.ceil(base.length / 2);
    const rotated = [...base.slice(split), ...base.slice(0, split)];
    const second = [...rotated, ...rotated];
    return [first, second];
  }, [reviews]);

  const onChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const newReview = {
      name: form.name.trim(),
      email: form.email.trim(),
      handle: makeHandle(form.name.trim(), form.email.trim()),
      review: form.message.trim(),
      rating: Number(form.rating) || 5,
    };

    setReviews((prev) => [newReview, ...prev]);
    setForm({ name: "", email: "", message: "", rating: 5 });
    setShowForm(false);
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-3">
          What Our <span className="text-white">Customers Say</span>
        </h2>

        <p className="text-gray-400 mb-6 text-sm md:text-base">Trusted by customers across India</p>

        <button
          onClick={() => setShowForm(true)}
          className="mb-12 px-6 py-3 rounded-full bg-[#FE9874] text-white font-semibold hover:bg-[#f07f56] transition"
        >
          Give Review
        </button>

        <div className="space-y-6">
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-6 animate-marquee"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {rowOne.map((review, i) => (
                <ReviewCard
                  key={`r1-${review.handle}-${i}`}
                  review={review}
                  onPause={() => setIsPaused(true)}
                  onResume={() => setIsPaused(false)}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex w-max gap-6 animate-marquee-reverse"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {rowTwo.map((review, i) => (
                <ReviewCard
                  key={`r2-${review.handle}-${i}`}
                  review={review}
                  onPause={() => setIsPaused(true)}
                  onResume={() => setIsPaused(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm px-4 flex items-center justify-center">
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md rounded-2xl border border-white/15 bg-[#141414] p-6 text-left shadow-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold text-white">Share Your Review</h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close review form"
              >
                ✕
              </button>
            </div>

            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full mb-2 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-white outline-none focus:border-orange-400"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-400 mb-3">{errors.name}</p>}

            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
              className="w-full mb-2 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-white outline-none focus:border-orange-400"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-400 mb-3">{errors.email}</p>}

            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => onChange("message", e.target.value)}
              rows={4}
              className="w-full mb-2 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-white outline-none focus:border-orange-400 resize-none"
              placeholder="Write your shoe cleaning/repair experience"
            />
            {errors.message && <p className="text-xs text-red-400 mb-4">{errors.message}</p>}

            <label className="block text-sm text-gray-300 mb-1">Rating</label>
            <select
              value={form.rating}
              onChange={(e) => onChange("rating", Number(e.target.value))}
              className="w-full mb-5 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-white outline-none focus:border-orange-400"
            >
              <option value={5}>5 Star</option>
              <option value={4}>4 Star</option>
              <option value={3}>3 Star</option>
              <option value={2}>2 Star</option>
              <option value={1}>1 Star</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-full bg-[#FE9874] py-2.5 text-white font-semibold"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Reviews;
