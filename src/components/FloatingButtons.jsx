import { Phone } from "lucide-react";

const FloatingButtons = () => {
  return (

<div className="fixed left-0 top-[52%] -translate-y-1/2 z-50 flex flex-col shadow-lg">
{/* WhatsApp */}

<a
href="https://wa.me/918368385923"
target="_blank"
rel="noreferrer"
className="bg-green-500 hover:bg-green-600 p-3 flex items-center justify-center"
>

<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
className="w-6 h-6"
/>

</a>

{/* Call */}

<a
href="tel:+918368385923"
className="bg-red-500 hover:bg-red-600 p-3 flex items-center justify-center"
>

<Phone className="text-white" size={22} />

</a>

</div>

  );
};

export default FloatingButtons;
