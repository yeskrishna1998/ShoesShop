const TopBar = () => {
  return (
    <div className="w-full border-b border-white/10 bg-black px-2.5 py-1.5 text-[9px] text-white sm:px-4 sm:py-2.5 sm:text-xs">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-1.5 text-center tracking-wide sm:flex sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-2">
        <a
          href="https://wa.me/918368385923"
          target="_blank"
          rel="noreferrer"
          className="truncate rounded-full border border-white/10 px-2 py-0.5 font-medium transition hover:text-emerald-300 sm:rounded-none sm:border-0 sm:px-0 sm:py-0"
        >
          WhatsApp: <span className="font-semibold text-emerald-400">+91 83683 85923</span>
        </a>
        <a
          href="mailto:support.zcoated@gmail.com"
          className="truncate rounded-full border border-white/10 px-2 py-0.5 font-medium transition hover:text-emerald-300 sm:rounded-none sm:border-0 sm:px-0 sm:py-0"
        >
          Email: <span className="font-semibold text-emerald-400">support.zcoated@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
