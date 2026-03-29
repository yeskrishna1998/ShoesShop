                                              import { useEffect, useMemo, useState } from "react";

                                              const STORAGE_KEY = "zcoated_customer_reviews";

                                              const REVIEWS_API_URL = "https://shoes-backend-1lip.onrender.com/reviews";

                                             const initialReviews = [];
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
                                                const [isSubmitting, setIsSubmitting] = useState(false);
                                                const [submissionError, setSubmissionError] = useState("");
                                                const [submissionSuccess, setSubmissionSuccess] = useState("");

                     useEffect(() => {
                  try {
               localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
                             } catch {
                                                    // Ignore storage write errors
                                   }
                                                }, [reviews]);


   useEffect(() => {
  fetch("https://shoes-backend-1lip.onrender.com/reviews")
    .then((res) => res.json())
    .then((data) => {
      const formatted = data.map((item) => ({
        name: item.name,
        email: item.email,
        handle: "@" + item.email.split("@")[0], // UI same
        review: item.message, // 🔥 important
        rating: item.rating,
      }));

      setReviews(formatted);
    })
    .catch((err) => console.error(err));
}, []);

                                        const [rowOne, rowTwo] = useMemo(() => {
  const base = reviews.length ? reviews : initialReviews;

  // 🔥 repeat more times for speed
const repeated = [...base, ...base];

  const first = repeated;
  const split = Math.ceil(repeated.length / 2);
  const rotated = [...repeated.slice(split), ...repeated.slice(0, split)];
  const second = rotated;

  return [first, second];
}, [reviews]);
                                                const onChange = (key, value) => {
                                                  setForm((prev) => ({ ...prev, [key]: value }));
                                                  setErrors((prev) => ({ ...prev, [key]: "" }));
                                                };

                                                const openForm = () => {
                                                  setSubmissionError("");
                                                  setSubmissionSuccess("");
                                                  setShowForm(true);
                                                };

                                                const onSubmit = async (e) => {
                                                  e.preventDefault();
                                                  setSubmissionError("");
                                                  setSubmissionSuccess("");

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

                                                  setIsSubmitting(true);
                                                  try {
                                                    const response = await fetch(REVIEWS_API_URL, {
                                                      method: "POST",
                                                      headers: {
                                                        "Content-Type": "application/json",
                                                      },
                                                     body: JSON.stringify({
  name: form.name,
  email: form.email,
  message: form.message, // 🔥 MUST
  rating: form.rating,
}),
                                                    });

                                                    if (!response.ok) {
                                                      const errorText = await response.text();
                                                      throw new Error(errorText || "Failed to submit review. Please try again.");
                                                    }

                                                    setReviews((prev) => dedupeReviews([newReview, ...prev]));
                                                    setForm({ name: "", email: "", message: "", rating: 5 });
                                                    setSubmissionSuccess("Thanks! Your review is saved.");
                                                    setTimeout(() => {
  setSubmissionSuccess("");
}, 2000);
                                                    setShowForm(false);
                                                  } catch (err) {
                                                    console.error(err);
                                                    setSubmissionError(err.message || "Unable to submit review. Please try later.");
                                                  } finally {
                                                    setIsSubmitting(false);
                                                  }
                                                };

                                                return (
                                                  <section className="bg-black py-10 sm:py-12 lg:py-14">
                                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                                      <h2 className="mb-2 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                                                        What Our <span className="text-white">Customers Say</span>
                                                      </h2>

                                                      <p className="mb-5 text-sm text-gray-400">Trusted by customers across India</p>

                                                      <button
                                                        onClick={openForm}
                                                        className="mb-2 rounded-full bg-[#FE9874] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#f07f56]"
                                                      >
                                                        Give Review
                                                      </button>
                                                      {submissionSuccess && (
                                                        <p className="text-sm text-emerald-400">{submissionSuccess}</p>
                                                      )}

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
                                                            disabled={isSubmitting}
                                                            className="w-full rounded-full bg-[#FE9874] py-2.5 text-white font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                                                          >
                                                            {isSubmitting ? "Submitting..." : "Submit Review"}
                                                          </button>
                                                          {submissionError && (
                                                            <p className="mt-3 text-xs text-red-400">{submissionError}</p>
                                                          )}
                                                        </form>
                                                      </div>
                                                    )}
                                                  </section>
                                                );
                                              };

                                              export default Reviews;
                  