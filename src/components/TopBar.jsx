const TopBar = () => {
  return (
    <div className="w-full bg-black text-[11px] sm:text-xs text-white py-1.5 px-4 flex items-center justify-center gap-2 border-b border-white/10">
      <span className="text-emerald-400">📞</span>
      <p className="tracking-wide text-center">
        WhatsApp To Book A Service <span className="font-semibold text-emerald-400">(99872-74034)</span>
      </p>
    </div>
  );
};

export default TopBar;
