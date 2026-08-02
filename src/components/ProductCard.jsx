import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
function ProductCard({ product }) {
const { darkMode,toggletheme} = useContext(ThemeContext)
  return (
    <Link to={`/apis/${product.id}`}>
   <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">

 <div
  className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
    darkMode
      ? "bg-[#242424] text-white"
      : "bg-[#F3EFE7] text-[#1F2C26]"
  }`}
>

  {/* Image */}
  <div
    className={`relative overflow-hidden ${
      darkMode
        ? "bg-[#303030]"
        : "bg-[#EAE5DB]"
    }`}
  >

    {product.rating > 2.96 ? (
      <span
        className={`absolute right-2 top-2 z-10 rounded-full px-4 py-1 text-sm font-semibold ${
          darkMode
            ? "bg-[#454545] text-white border border-[#5A5A5A]"
            : "bg-[#FFFFF0] text-black border border-gray-200"
        }`}
      >
        Best Seller
      </span>
    ) : null}

    <img
      className="h-80 w-full object-contain transition duration-300 hover:scale-110"
      src={product.images[0]}
      alt={product.title}
    />

  </div>


  {/* Content */}
  <div
    className={`p-4 transition-colors duration-300 ${
      darkMode
        ? "bg-[#242424] text-white"
        : "bg-[#F3EFE7] text-[#1F2C26]"
    }`}
  >

    <h2
      className={
        darkMode
          ? "text-gray-300"
          : "text-[#1F2C26]"
      }
    >
      {product.category}
    </h2>


    <h2
      className={`text-lg font-sans font-semibold ${
        darkMode
          ? "text-[#F1F1F1]"
          : "text-[#1F2C26]"
      }`}
    >
      {product.brand}
    </h2>


    {/* Rating */}
    <h1 className="my-2 flex text-yellow-500">
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
    </h1>


    <p
      className={`mb-4 text-sm ${
        darkMode
          ? "text-[#A8A8A8]"
          : "text-gray-500"
      }`}
    >
      {product.review}
    </p>


    {/* Price + Button */}
    <div className="flex items-center justify-between">

      <p
        className={`text-xl font-serif font-bold ${
          darkMode
            ? "text-[#F5F5F5]"
            : "text-[#374151]"
        }`}
      >
        ₹{Math.floor(product.price * 100)}
      </p>


      <button
        className={`flex h-10 w-10 items-center justify-center rounded-full text-xl text-white transition ${
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
 
</div>
</Link>
  );
}
export default ProductCard;