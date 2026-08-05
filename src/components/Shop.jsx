import Api from "./Api.jsx";
import Navbar from "./Navbar.jsx";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";

const Shop = () => {
  const {darkMode,toogleTheme} = useContext(ThemeContext);
  return (
    <>
      <Navbar />

      {/* Hero Section */}
  <section
  className={`lg:!py-35 py-25 lg:!px-10 px-4 transition-colors duration-500 ${
    darkMode ? "bg-[#111512]" : "bg-[#faf6f2]"
  }`}
>
  <div className="relative h-[600px] overflow-hidden rounded-[40px] shadow-2xl">

    {/* Background Image */}
    <img
      src="/banner.jpg"
      alt="Summer Collection"
      className="h-full w-full object-cover"
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
  
    {/* ================= 01 LABEL ================= */}

    <div className="absolute hidden lg:!flex right-10 top-10 flex items-center gap-3 text-white/70">

      <span className="h-px w-10 bg-white/30" />

      <span className="text-xs tracking-[0.35em]">
        01
      </span>

    </div>


    {/* Content */}
    <div className="absolute inset-0 flex items-center px-4 lg:!px-24">

      <div className="max-w-xl">

        <p className="mb-4 lg:!text-sm text-xs font-medium uppercase tracking-[8px] text-[#D6E2D0]">
          New Season • 2026
        </p>

        <h1
          className={`text-5xl sm:!text-6xl md:!text-7xl font-serif font-bold leading-tight lg:!text-7xl ${
            darkMode ? "text-[#F5F1E8]" : "text-white"
          }`}
        >
          Discover
          <br />
          Timeless Beauty
        </h1>

        <p className="mt-8 max-w-lg lg:!text-lg text-md leading-8 text-gray-200">
          Elevate your everyday routine with thoughtfully curated
          products designed for effortless elegance and lasting quality.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="rounded-full whitespace-nowrap lg:!whitespace-nowrap bg-[#40879b] lg:!px-10 px-5 py-1 lg:!py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#3a7a8c]">
            Shop Collection
          </button>

          <button className="rounded-full whitespace-nowrap lg:!whitespace-nowrap border border-white/40 bg-white/10 lg:!px-10 px-7 py-2 lg:!py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#384A37]">
            Explore More
          </button>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Products Section */}
 <section
  className={`relative px-3 transition-colors duration-500 lg:!px-12 ${
    darkMode
      ? "bg-[#111512]"
      : "bg-[#F8F5F0]"
  }`}
>


  {/* Small section number */}
  <div className="relative z-10 mb-8 flex items-center justify-center gap-3">

    <span
      className={`h-px w-10 ${
        darkMode
          ? "bg-[#78917C]/40"
          : "bg-[#B38B59]/40"
      }`}
    />

    <span
      className={`text-xs tracking-[0.35em] ${
        darkMode
          ? "text-[#78917C]"
          : "text-[#B38B59]"
      }`}
    >
      02
    </span>

    <span
      className={`h-px w-10 ${
        darkMode
          ? "bg-[#78917C]/40"
          : "bg-[#B38B59]/40"
      }`}
    />

  </div>


  {/* Heading */}
  <div className="relative z-10 mb-10 flex flex-col items-center text-center">

    <span
      className={`text-sm uppercase tracking-[8px] ${
        darkMode
          ? "text-[#8FA494]"
          : "text-[#B38B59]"
      }`}
    >
      Exclusive Collection
    </span>


    <h2
      className={` lg:!text-6xl py-4 text-4xl sm:!text-5xl font-serif font-bold ${
        darkMode
          ? "text-[#F0EEE7]"
          : "text-[#111111]"
      }`}
    >
      Featured Products
    </h2>


    <p
      className={`lg:!text-lg text-md max-w-xl ${
        darkMode
          ? "text-[#A9ADA7]"
          : "text-gray-500"
      }`}
    >
      Carefully selected products designed with quality and elegance in mind.
    </p>

  </div>


  {/* Products */}
  <div className="relative z-10 mt-10">
    <Api />
  </div>

</section>
    </>
  );
};

export default Shop;