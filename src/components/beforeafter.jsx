// import { useState } from "react";

// import b1 from "../assets/shoe1.jpg";
// import a1 from "../assets/shoe2.jpg";
// // import b2 from "../assets/beforeafter/shoe2_before.jpg";
// // import a2 from "../assets/beforeafter/shoe2_after.jpg";
// // import b3 from "../assets/beforeafter/shoe3_before.jpg";
// // import a3 from "../assets/beforeafter/shoe3_after.jpg";
// // import b4 from "../assets/beforeafter/shoe4_before.jpg";
// // import a4 from "../assets/beforeafter/shoe4_after.jpg";

// const items = [
//   { before: b1, after: a1, title: "Sole Repair" },

// ];

// const BeforeAfter = () => {
//   const [index, setIndex] = useState(0);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         <h2 className="text-2xl md:text-4xl font-bold mb-4">
//           Before & After Shoe Repair
//         </h2>
//         <p className="text-gray-600 mb-10">
//           See the transformation after our professional repair service
//         </p>

//         <div className="relative bg-white rounded-2xl shadow-xl p-6">
          
//           <h3 className="text-lg font-semibold mb-4">
//             {items[index].title}
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

//             {/* BEFORE */}
//             <div>
//               <p className="mb-2 font-semibold text-red-500">Before</p>
//               <img
//                 src={items[index].before}
//                 className="rounded-xl shadow-md w-full object-contain"
//               />
//             </div>

//             {/* AFTER */}
//             <div>
//               <p className="mb-2 font-semibold text-green-600">After</p>
//               <img
//                 src={items[index].after}
//                 className="rounded-xl shadow-md w-full object-contain"
//               />
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="mt-6 flex justify-center gap-3">
//             {items.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`w-3 h-3 rounded-full ${
//                   i === index ? "bg-black" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeforeAfter;
