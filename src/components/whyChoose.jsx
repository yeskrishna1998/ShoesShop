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
    <section className="bg-black py-12 sm:py-14 lg:py-12 text-white">

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">

        {/* 🖼 LEFT IMAGE */}
        <div className="relative lg:max-w-[620px] lg:justify-self-center">
          <img
            src={img}
            alt="service"
            className="h-[280px] w-full rounded-3xl border border-white/15 object-cover shadow-2xl sm:h-[360px] lg:h-auto lg:max-h-[620px]"
          />
          <div className="absolute -bottom-3 right-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm backdrop-blur-md">
            4,200+ Pairs Restored
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200 shadow-[0_0_24px_-10px_rgba(251,146,60,0.9)] sm:text-sm">
            <Sparkles size={14} className="text-orange-200" />
            Why Choose Us
          </p>

          <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]">
            Premium Care Backed By Real Craftsmanship
          </h2>

          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-[15px]">
            From pickup to final delivery, every pair is handled with a structured process, trained experts, and material-safe methods.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-2.5">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-md transition hover:bg-white/10 sm:p-4 lg:p-3"
              >
                <p className="mb-2 text-xl sm:text-2xl">{item.icon}</p>
                <h3 className="mb-1 text-sm font-semibold sm:text-base lg:text-[15px]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-300 sm:text-sm lg:text-[13px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
