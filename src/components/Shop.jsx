import Api from "./Api.jsx";
import Navbar from "./Navbar.jsx";

const Shop = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
   <section className="pt-35 px-10 bg-[#faf6f2] lg:px-20">
  <div className="relative overflow-hidden rounded-[40px] h-[600px] shadow-2xl">

    <img
      src="/banner.jpg"
      alt="Summer Collection"
      className="w-full h-full object-cover"
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>

    {/* Content */}
    <div className="absolute inset-0 flex items-center px-16 lg:px-24">

      <div className="max-w-xl">

        <p className="uppercase tracking-[8px] text-[#D6E2D0] text-sm font-medium mb-4">
          New Season • 2026
        </p>

        <h1 className="text-6xl lg:text-7xl font-serif font-bold leading-tight text-white">
          Discover
          <br />
          Timeless Beauty
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-200 max-w-lg">
          Elevate your everyday routine with thoughtfully curated
          products designed for effortless elegance and lasting quality.
        </p>

        <div className="flex gap-5 mt-10">

          <button className="rounded-full bg-[#40879b] px-10 py-4 text-white font-semibold transition duration-300 hover:bg-[#3a7a8c] hover:scale-105">
            Shop Collection
          </button>

          <button className="rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-10 py-4 text-white font-semibold transition duration-300 hover:bg-white hover:text-[#384A37]">
            Explore More
          </button>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Products Section */}
   <section className="px-10 lg:px-20 py-24 bg-[#F8F5F0]">

 <div className="flex flex-col items-center text-center mb-16">

  <span className="uppercase tracking-[8px] text-[#B38B59] text-sm">
    Exclusive Collection
  </span>

  <h2 className="mt-4 text-6xl font-serif font-bold text-[#111111]">
    Featured Products
  </h2>

  <p className="mt-5 text-gray-500 max-w-xl">
    Carefully selected products designed with quality and elegance in mind.
  </p>

</div>

  <div className="mt-10">
    <Api />
  </div>

</section>
    </>
  );
};

export default Shop;