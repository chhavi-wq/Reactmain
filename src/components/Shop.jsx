import Api from "./Api.jsx";
import Navbar from "./Navbar.jsx";

const Shop = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="mt-20 px-6">
  <div className="relative h-[500px] rounded-3xl overflow-hidden">
    <img
      src="/banner.jpg"
      alt="Banner"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-16">
      <h1 className="text-6xl font-bold text-white">
        Summer Collection
      </h1>

      <p className="text-white text-xl mt-4 max-w-lg">
        Discover the latest trends and premium essentials.
      </p>

      <button className="mt-8 w-fit bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200">
        Shop Now
      </button>
    </div>
  </div>
</section>

      {/* Products Section */}
     <section className="px-6 pb-20">
  <div className="flex justify-center font-mono mt-20 items-center text-center mb-8">
    <h2 className="text-6xl font-bold">Featured Products</h2>

  </div>

  <Api />
</section>
    </>
  );
};

export default Shop;