import pricingBg from "../assets/slider/p-9.jpg";

const pricingGroups = [
  {
    title: "Shoe Cleaning",
    description: "From light daily wear refresh to premium branded sneaker care.",
    items: [
      { service: "Basic Cleaning", price: "₹349", note: "Light dirt, daily use shoes" },
      { service: "Deep Cleaning", price: "₹449", note: "Most Popular", badge: "Popular" },
      { service: "Premium Sneaker Spa", price: "₹699", note: "Like-new finish, branded shoes", badge: "Premium" },
    ],
  },
  {
    title: "Shoe Repair",
    description: "Smart repair options for stitching, heels, soles, and full restoration.",
    items: [
      { service: "Minor Repair", price: "₹249", note: "Glue, stitching" },
      { service: "Heel Repair", price: "₹399", note: "Heels fix" },
      { service: "Sole Repair", price: "₹449", note: "Most demanded", badge: "Popular" },
      { service: "Full Restoration", price: "₹899 - ₹1299", note: "Complete makeover", badge: "Premium" },
    ],
  },
  {
    title: "Cleaning + Repair Combo",
    description: "Best-value bundles for customers who want cleaning and repair together.",
    items: [
      { service: "Basic Clean + Minor Repair", price: "₹699", note: "Best Seller", badge: "Best Seller" },
      { service: "Deep Clean + Repair", price: "₹899", note: "High value" },
      { service: "Premium + Full Restore", price: "₹1299", note: "Premium users", badge: "Premium" },
    ],
  },
  {
    title: "Multi Shoes Combo",
    description: "Better pricing for multiple pairs with strong margin and customer value.",
    items: [
      { service: "2 Shoes Basic", price: "₹649", note: "Value pack" },
      { service: "2 Shoes Deep", price: "₹799", note: "Most Popular", badge: "Popular" },
      { service: "3 Shoes Basic", price: "₹999", note: "Budget combo" },
      { service: "3 Shoes Deep", price: "₹1199", note: "High profit", badge: "Premium" },
    ],
  },
];

const badgeStyles = {
  Popular: "bg-amber-100 text-amber-800",
  Premium: "bg-white text-black",
  "Best Seller": "bg-[#FE9874] text-white",
};

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-black py-10 sm:py-12 lg:py-14">
      <img
        src={pricingBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.74))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:px-4 sm:text-[11px] sm:tracking-[0.24em]">
            Pricing Plans
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.35rem]">
            Transparent Pricing For Every Pair
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-gray-300">
            Choose from cleaning, repair, combo, and multi-pair services designed for daily wear, premium sneakers, and full restoration needs.
          </p>
        </div>

        <div className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-4">
          {pricingGroups.map((group) => (
            <div
              key={group.title}
              className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.94),rgba(20,20,20,0.92))] p-3.5 text-white shadow-[0_25px_50px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
                {group.description}
              </p>

              <div className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item.service}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {item.service}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-gray-400">
                          {item.note}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="whitespace-nowrap text-sm font-bold text-white sm:text-base">
                          {item.price}
                        </p>
                        {item.badge && (
                          <span
                            className={`mt-1.5 inline-flex rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
                              badgeStyles[item.badge]
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl sm:p-6">
          <h3 className="text-xl font-semibold sm:text-2xl">
            Pricing for premium shoe care in Gurgaon
          </h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-300 sm:text-base">
            This pricing section is designed for customers comparing shoe
            cleaning price in Gurgaon, sneaker cleaning price, shoe repair
            cost, and premium restoration packages. Zcoated keeps pricing clear
            so users can understand the difference between basic cleaning, deep
            cleaning, premium sneaker care, and full restoration support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
