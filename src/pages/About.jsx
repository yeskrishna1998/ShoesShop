import React from "react";

const About = () => {
  return (

<div className="bg-black text-white min-h-screen">

{/* HERO */}

<section className="max-w-6xl mx-auto px-6 py-20 text-center">

<h1 className="text-4xl md:text-5xl font-bold mb-6">
About <span className="text-yellow-400">ZCoated</span>
</h1>

<p className="text-gray-300 max-w-3xl mx-auto text-lg">
ZCoated is a premium shoe care startup dedicated to bringing life back to
your favorite sneakers and footwear. Our goal is to provide professional
cleaning, restoration, and protection services that keep your shoes looking
brand new.
</p>

</section>

{/* STORY */}

<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-3xl font-bold mb-4 text-yellow-400">
Our Startup Story
</h2>

<p className="text-gray-300 leading-relaxed">
ZCoated started with a simple idea — people love their shoes, but they often
don't have the time or tools to maintain them properly.
We built ZCoated to solve that problem by offering professional sneaker
cleaning and restoration services with pickup and delivery.
</p>

<p className="text-gray-300 mt-4">
Our mission is to make premium shoe care affordable and accessible while
helping customers extend the life of their favorite footwear.
</p>

</div>

<div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-1 rounded-xl">
<div className="bg-black p-10 rounded-xl text-center">
<h3 className="text-2xl font-bold mb-2">Why Choose ZCoated?</h3>

<ul className="text-gray-300 space-y-2">
<li>✔ Professional Sneaker Cleaning</li>
<li>✔ Shoe Restoration</li>
<li>✔ Pickup & Delivery Service</li>
<li>✔ Premium Protection Coating</li>
</ul>
</div>
</div>

</section>

{/* SERVICES */}

<section className="bg-gray-900 py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Our Services
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
<h3 className="text-xl font-semibold mb-3">Deep Cleaning</h3>
<p className="text-gray-400">
Complete sneaker cleaning to remove dirt, stains, and odors.
</p>
</div>

<div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
<h3 className="text-xl font-semibold mb-3">Shoe Repair</h3>
<p className="text-gray-400">
Professional repair services to restore damaged footwear.
</p>
</div>

<div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
<h3 className="text-xl font-semibold mb-3">Protection Coating</h3>
<p className="text-gray-400">
Special coating to protect shoes from water and stains.
</p>
</div>

</div>

</div>

</section>

</div>

  );
};

export default About;