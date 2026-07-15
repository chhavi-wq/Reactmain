import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <Link to={`/apis/${product.id}`}>
   <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">

  <div className="overflow-hidden bg-[#F8F4EC]">
   {product.rating > 2.96 ? (
  <span className="rounded-full absolute right-2 top-2 bg-[#FFFFF0] px-4 py-1 border-gray-200 text-sm font-semibold text-black">
    Best Seller
  </span>
) : null}
    <img
      className="h-80 w-full hover:scale-110 duration-300 transition object-contain"
      src={product.images[0]}
      alt={product.title}
    />
  </div>

  <div className="p-4 hover:shadow-md ">
    <h2 className="capitalize">{product.category}</h2>
    <h2 className="text-lg font-sans font-semibold text-[#1F2C26]">
        {product.brand}
    </h2>

    <h1 className="my-2 flex text-yellow-500">
  {product.rating > 2.96 ? (
    <>
      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    </>
  ) : (
    <>
      <FaStar /><FaStar />
    </>
  )}
</h1>

    <p className="mb-4 text-sm text-gray-500">
      {product.review}
    </p>

    <div className="flex items-center justify-between">
      <p className="text-xl font-serif font-bold text-[#374151]">
        ₹{Math.floor(product.price * 100)}
      </p>

      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2C26] text-xl text-white transition hover:bg-[#3F5F45]">
        +
      </button>
    </div>
  </div>
</div>
</Link>
  );
}
export default ProductCard;