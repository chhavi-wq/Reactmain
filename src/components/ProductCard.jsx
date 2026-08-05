import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
function ProductCard({ product }) {
const { darkMode,toggletheme} = useContext(ThemeContext)
  return (
    <Link to={`/apis/${product.id}`} className="block w-full">
  <div
    className={`w-full overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl ${
      darkMode
        ? "bg-[#242424] text-white"
        : "bg-[#F3EFE7] text-[#1F2C26]"
    }`}
  >

    {/* IMAGE */}
    <div
      className={`relative aspect-square w-full overflow-hidden ${
        darkMode
          ? "bg-[#303030]"
          : "bg-[#EAE5DB]"
      }`}
    >

      {product.rating > 2.96 && (
        <span
          className={`absolute right-2 top-2 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs md:text-sm ${
            darkMode
              ? "border border-[#5A5A5A] bg-[#454545] text-white"
              : "border border-gray-200 bg-[#FFFFF0] text-black"
          }`}
        >
          Best Seller
        </span>
      )}

      <img
        src={product.images[0]}
        alt={product.title}
        className="h-full w-full object-contain p-3 transition duration-300 hover:scale-105 sm:p-4"
      />
    </div>

    {/* CONTENT */}
    <div className="p-3 sm:p-4">

      <p
        className={`truncate lg:!text-lg text-xs sm:text-sm ${
          darkMode
            ? "text-gray-400"
            : "text-gray-500"
        }`}
      >
        {product.category}
      </p>

      <h2
        className={`mt-1 truncate text-sm lg:!text-xl font-semibold sm:text-base md:text-lg ${
          darkMode
            ? "text-white"
            : "text-[#1F2C26]"
        }`}
      >
        {product.brand}
      </h2>

      {/* Rating */}
      <div className="my-2 flex text-xs text-yellow-500 sm:text-sm">
        {product.rating > 2.96 ? (
          <>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </>
        ) : (
          <>
            <FaStar />
            <FaStar />
          </>
        )}
      </div>

      <p
        className={`mb-3 truncate text-xs sm:text-sm ${
          darkMode
            ? "text-[#A8A8A8]"
            : "text-gray-500"
        }`}
      >
        {product.review}
      </p>

      {/* PRICE */}
      <div className="flex items-center justify-between gap-2">

        <p
          className={`text-base font-serif font-bold sm:text-lg md:text-xl ${
            darkMode
              ? "text-white"
              : "text-[#374151]"
          }`}
        >
          ₹{Math.floor(product.price * 100)}
        </p>

        <button
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base text-white sm:h-9 sm:w-9 md:h-10 md:w-10 md:text-xl ${
            darkMode
              ? "bg-[#3A3A3A] hover:bg-[#505050]"
              : "bg-[#1F2C26] hover:bg-[#3F5F45]"
          }`}
        >
          +
        </button>

      </div>
    </div>
  </div>
</Link>
  );
}
export default ProductCard;