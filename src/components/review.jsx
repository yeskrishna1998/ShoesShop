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
  {
    name: "Kabir Malhotra",
    handle: "@kabirmalhotra",
    email: "kabir@example.com",
    review:
      "Pickup was on time and my sneakers came back noticeably brighter with neat finishing.",
    rating: 5,
  },
  {
    name: "Ishita Arora",
    handle: "@ishitaarora",
    email: "ishita@example.com",
    review:
      "My suede shoes were handled carefully and the cleaning results were genuinely impressive.",
    rating: 4,
  },
  {
    name: "Dev Khanna",
    handle: "@devkhanna",
    email: "dev@example.com",
    review:
      "Excellent restoration work on an old pair. The shape, sole, and color all looked refreshed.",
    rating: 5,
  },
  {
    name: "Tanya Sethi",
    handle: "@tanyasethi",
    email: "tanya@example.com",
    review:
      "Very convenient service. Booking, pickup, and delivery all felt smooth and professional.",
    rating: 5,
  },
  {
    name: "Rahul Bedi",
    handle: "@rahulbedi",
    email: "rahul@example.com",
    review:
      "They repaired the sole and cleaned the upper perfectly. My formal shoes feel new again.",
    rating: 4,
  },
  {
    name: "Meera Nanda",
    handle: "@meerananda",
    email: "meera@example.com",
    review:
      "Loved the care they took with my premium pair. Great communication and clean packaging too.",
    rating: 5,
  },
  {
    name: "Samar Juneja",
    handle: "@samarjuneja",
    email: "samar@example.com",
    review:
      "Very solid cleaning quality. My running shoes came back fresh and stain-free.",
    rating: 4,
  },
  {
    name: "Ritika Ahuja",
    handle: "@ritikaahuja",
    email: "ritika@example.com",
    review:
      "The white sole cleanup was excellent and the pair looked much brighter after service.",
    rating: 5,
  },
  {
    name: "Yash Oberoi",
    handle: "@yashoberoi",
    email: "yash@example.com",
    review:
      "Fast turnaround and nice finishing. The pickup experience was smooth from start to end.",
    rating: 5,
  },
  {
    name: "Niharika Sood",
    handle: "@niharikasood",
    email: "niharika@example.com",
    review:
      "My leather pair was cleaned very carefully and the polish finish looked premium.",
    rating: 4,
  },
  {
    name: "Arjun Talwar",
    handle: "@arjuntalwar",
    email: "arjun@example.com",
    review:
      "Good service and clear updates. The repair work on the sole was neat and durable.",
    rating: 5,
  },
  {
    name: "Simran Kohli",
    handle: "@simrankohli",
    email: "simran@example.com",
    review:
      "Really liked the restoration quality. My pair looked cleaner without losing its original texture.",
    rating: 5,
  },
  {
    name: "Harsh Vardhan",
    handle: "@harshvardhan",
    email: "harsh@example.com",
    review:
      "One of the better shoe-care services I have used. Delivery and finishing both were on point.",
    rating: 4,
  },
  {
    name: "Palak Jain",
    handle: "@palakjain",
    email: "palak@example.com",
    review:
      "Bag and sneaker cleaning both were handled well. The results felt premium and reliable.",
    rating: 5,
  },
];

const dedupeReviews = (items) => {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.email || ""}-${item.name || ""}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

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
      className="w-[235px] sm:w-[260px] lg:w-[285px] flex-shrink-0 rounded-2xl border border-fuchsia-500/25 bg-gradient-to-br from-[#1a0011] via-[#0f0813] to-[#12000a] p-4 shadow-[0_0_0_1px_rgba(236,72,153,0.08),0_16px_40px_-24px_rgba(236,72,153,0.6)] text-left cursor-pointer"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white sm:h-11 sm:w-11">
          {review.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="text-sm font-semibold leading-tight text-white sm:text-base">
            {review.name}
            <span className="ml-1 text-sky-400">●</span>
          </div>
          <div className="text-xs text-slate-400 sm:text-sm">{review.handle}</div>
        </div>
      </div>

      <p className="min-h-[84px] text-sm leading-relaxed text-slate-300">{review.review}</p>

      <div className="mt-3 text-sm tracking-wide text-amber-300">{"★".repeat(review.rating || 5)}</div>
    </article>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) && parsed.length ? dedupeReviews(parsed) : initialReviews;
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

    setReviews((prev) => dedupeReviews([newReview, ...prev]));
    setForm({ name: "", email: "", message: "", rating: 5 });
    setShowForm(false);
  };

  return (
    <section className="bg-black py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
          What Our <span className="text-white">Customers Say</span>
        </h2>

        <p className="mb-5 text-sm text-gray-400">Trusted by customers across India</p>

        <button
          onClick={() => setShowForm(true)}
          className="mb-6 rounded-full bg-[#FE9874] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#f07f56]"
        >
          Give Review
        </button>

        <div className="space-y-3 sm:space-y-4">
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-4 sm:gap-5 lg:gap-6 animate-marquee"
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
              className="flex w-max gap-4 sm:gap-5 lg:gap-6 animate-marquee-reverse"
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
