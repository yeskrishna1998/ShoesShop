const TopBar = () => {
  return (
    <div className="w-full border-b border-white/10 bg-black px-4 py-2.5 text-[11px] text-white sm:text-xs">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 text-center tracking-wide">
        <a
          href="https://wa.me/918368385923"
          target="_blank"
          rel="noreferrer"
          className="font-medium transition hover:text-emerald-300"
        >
          WhatsApp: <span className="font-semibold text-emerald-400">8368385923</span>
        </a>
        <a
          href="mailto:support.zcoated@gmail.com"
          className="break-all font-medium transition hover:text-emerald-300"
        >
          Email: <span className="font-semibold text-emerald-400">support.zcoated@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
