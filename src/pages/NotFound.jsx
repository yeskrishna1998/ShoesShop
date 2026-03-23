import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#060606] px-4 py-16 text-white">
      <div className="w-full max-w-xl rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          This page is not available
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
          The link may be outdated, or the page may have moved. You can return
          to the homepage and continue exploring Zcoated services.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#FE9874] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f07f56]"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
