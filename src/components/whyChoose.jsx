import img from "../assets/slider/p-9.jpg";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Sneaker Specialists",
    desc: "Dedicated experts for premium sneakers, formal shoes, and luxury bags.",
    icon: "👟",
  },
  {
    title: "Free Pickup & Delivery",
    desc: "Doorstep pickup and safe return with easy scheduling and live support.",
    icon: "🚚",
  },
  {
    title: "Laboratory-Grade Cleaning",
    desc: "Safe solutions for stain removal, odor control, and material protection.",
    icon: "🧼",
  },
  {
    title: "Repair & Restoration",
    desc: "Sole work, stitching, recoloring, and full restoration for like-new finish.",
    icon: "🛠️",
  },
  {
    title: "Trusted Process",
    desc: "Quality checks at every stage to ensure premium and consistent results.",
    icon: "✅",
  },
  {
    title: "Fast Turnaround",
    desc: "Quick delivery timeline without compromising care and craftsmanship.",
    icon: "⚡",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🖼 LEFT IMAGE */}
        <div className="relative">
          <img
            src={img}
            alt="service"
            className="w-full rounded-3xl shadow-2xl border border-white/15"
          />
          <div className="absolute -bottom-5 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-sm">
            4,200+ Pairs Restored
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300/40 bg-orange-500/15 text-xs sm:text-sm tracking-[0.16em] text-orange-200 uppercase font-semibold mb-4 shadow-[0_0_24px_-10px_rgba(251,146,60,0.9)]">
            <Sparkles size={14} className="text-orange-200" />
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Premium Care Backed By Real Craftsmanship
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl">
            From pickup to final delivery, every pair is handled with a structured process, trained experts, and material-safe methods.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-4 hover:bg-white/10 transition"
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
