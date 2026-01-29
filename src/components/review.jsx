const reviews = [
  {
    name: "Rahul Sharma",
    location: "Gurgaon",
    review:
      "Excellent shoe repair service. My shoes look brand new again. Highly recommended!",
  },
  {
    name: "Amit Verma",
    location: "Noida",
    review:
      "Very professional work and quick delivery. Affordable pricing with great quality.",
  },
  {
    name: "Neha Gupta",
    location: "Delhi",
    review:
      "Loved the service! Staff is friendly and repair quality is top-notch.",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-purple-600">Customers Say</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Trusted by customers across the city
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              {/* Stars */}
              <div className="text-yellow-400 mb-3">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-sm text-gray-700 mb-4">
                “{item.review}”
              </p>

              <div className="font-semibold">
                {item.name}
              </div>
              <div className="text-xs text-gray-500">
                {item.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
