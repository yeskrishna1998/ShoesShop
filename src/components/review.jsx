import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Ananya Sharma",
    location: "Gurgaon",
    review:
      "Really loved the service! My white sneakers were completely restored. They look almost brand new now.",
  },
  {
    name: "Ritika Mehra",
    location: "Delhi",
    review:
      "Very professional shoe repair service. The polish and stitching work was excellent.",
  },
  {
    name: "Rahul Khanna",
    location: "Gurgaon",
    review:
      "Great quality repair work. My formal shoes were fixed perfectly and delivered on time.",
  },
  {
    name: "Sneha Kapoor",
    location: "Delhi",
    review:
      "Amazing service! My favorite heels were repaired so well that they look fresh again.",
  },
  {
    name: "Arjun Malhotra",
    location: "Gurgaon",
    review:
      "Highly recommended. Affordable pricing and very skilled cobblers.",
  },
  {
    name: "Priya Bansal",
    location: "Delhi",
    review:
      "Very happy with the service. My leather boots were cleaned and polished beautifully.",
  },
  {
    name: "Karan Arora",
    location: "Gurgaon",
    review:
      "Quick and reliable repair service. My sneaker sole repair was done perfectly.",
  },
  {
    name: "Neha Verma",
    location: "Delhi",
    review:
      "Friendly staff and great quality work. Definitely coming back again!",
  },
  {
    name: "Rohit Yadav",
    location: "Gurgaon",
    review:
      "Excellent shoe repair service. My old shoes look fresh and comfortable again.",
  },
  {
    name: "Simran Kaur",
    location: "Delhi",
    review:
      "Really impressed with the repair quality. My shoes look almost new again!",
  },
];

const gradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-500 to-pink-500",
  "from-green-400 to-teal-500",
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [pause]);

  const review = reviews[index];

  return (
    <section className="py-16 bg-gradient-to-r bg-[fff]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Customers Say
          </span>
        </h2>

        <p className="text-gray-600 mb-10 text-sm">
          Trusted by customers across Gurgaon & Delhi
        </p>

        {/* Slider Card */}
        <div
          className="relative"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >

          <div className="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl cursor-pointer">

            {/* Gradient Border */}
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                gradients[index % gradients.length]
              }`}
            />

            {/* Stars */}
            <div className="text-yellow-400 mb-4 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Review */}
            <p className="text-gray-700 italic mb-6 text-lg">
              "{review.review}"
            </p>

            {/* User */}
            <div className="flex justify-center items-center gap-3">

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${
                  gradients[index % gradients.length]
                }`}
              >
                {review.name.charAt(0)}
              </div>

              <div className="text-left">
                <div className="font-semibold">{review.name}</div>
                <div className="text-xs text-gray-500">
                  {review.location}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Reviews;