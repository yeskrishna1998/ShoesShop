const FloatingWhatsApp = () => {

  return(

<div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">

<a
href="https://wa.me/918368385923"
target="_blank"
rel="noreferrer"
className="relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-500 pl-3 pr-4 md:pl-4 md:pr-5 py-2.5 md:py-3.5 rounded-full border border-white/25 shadow-[0_12px_28px_-8px_rgba(34,197,94,0.75)]"
>

<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
className="w-5 h-5 md:w-6 md:h-6 drop-shadow"
/>

<span className="text-sm md:text-base font-bold text-white tracking-wide">
WhatsApp
</span>

</a>

</div>

  );
};

export default FloatingWhatsApp;
