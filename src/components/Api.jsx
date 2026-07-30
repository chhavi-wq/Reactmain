import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../SearchProvider";
import { FaSearch } from "react-icons/fa";
import {addToCart} from "../redux/slice/cartslice";
import {useDispatch} from "react-redux";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
   const dispatch = useDispatch();

  const { search, setSearch } = useContext(SearchContext);
  const [rating,setRating] = useState([]);
  const[price,setPrice] = useState("all")
 
  const[stock,setStock] = useState("all");
  const [brand,setBrand] = useState("all");
  
 
 useEffect(() => {
    const full = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result.products);
      setLoading(false);
    };
    full();
  }, []);
  if (loading) {
    return <p>Loading....</p>;
  }

  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      rating === "all" ? true : Number(item.rating) >= rating
    )
    .filter((item)=>
    brand === "all" ? true : item.brand === brand)
    .filter((item)=>{
      const productPrice = Math.floor(item.price *100)
    if(price === "all"){
      return true;
    }
    if(price === "100-2000"){
      return productPrice >=100 && productPrice <=2000
    }
    if(price === "2000-20000"){
      return productPrice >=2000 && productPrice <=20000
    }
    if(price === "20000-30000"){
      return productPrice >=20000 && productPrice <=30000
    }
    return true;
})
    .filter((item) =>
      category === "all" ? true : item.category === category
    )
    .filter((item)=>
      stock === "all" ? true : item.availabilityStatus === stock
    );

    const priceRanges = [
  { label: "₹100 - ₹2k", value: "100-2000"},
  { label: "₹2k - ₹20k", value: "2000-20000"},
  { label: "₹20k - ₹30k", value: "20000-30000"},
];

  return (
    <>
<div className="flex flex-row gap-4 items-start">
<div className="w-72 sticky top-16 self-start">
   <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 space-y-8  overflow-y-auto">
<div className="mb-6 flex items-center gap-1">

  <div>
    <h1 className="text-3xl font-extrabold tracking-wide text-[#0f4554]">
      Filters
    </h1>
    <p className="text-sm text-gray-500">
      Find your perfect product
    </p>
    <button onClick={()=>{
      setBrand("all") 
      setCategory("all")
      setRating("all")
      setPrice("all")
      setStock("all")
    }} className="rounded-xl border px-3 py-1 text-sm bg-gray-500 text-white mt-2 hover:scale-110 duration-500 hover:bg-gray-600 cursor-pointer transition">Clear All</button>
  </div>
</div>
  {/* Rating */}
  <div className="space-y-2">
    <h2 className="text-xl font-bold text-[#0f4554] border-b border-blue-100 pb-1">
      Rating
    </h2>

    {[4, 3, 2].map((item) => (
      <label
        key={item}
        className="flex items-center gap-3 cursor-pointer rounded-lg px-3 hover:bg-blue-50 transition"
      >
        <input
          type="checkbox"
          className="hidden"
          checked={rating === item}
          onChange={() =>
            setRating(rating === item ? "all" : item)
          }
        />

        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition
          ${
            rating === item
              ? "bg-blue-600 border-blue-600 text-white shadow"
              : "border-gray-300 bg-white"
          }`}
        >
          {rating === item && (
            <span className="text-xs font-bold">✓</span>
          )}
        </div>

        <span className="text-lg text-yellow-500">
          {"★".repeat(item)}
          <span className="text-gray-300">
            {"☆".repeat(5 - item)}
          </span>
        </span>
      </label>
    ))}
  </div>

  {/* Price */}
  <div className="space-y-2">
    <h2 className="text-xl font-bold text-[#0f4554] border-b border-blue-100 pb-1">
      Price
    </h2>

    {priceRanges.map((item) => (
      <label
        key={item.value}
        className="flex items-center gap-3 cursor-pointer rounded-lg px-3 hover:bg-blue-50 transition"
      >
        <input
          type="checkbox"
          className="hidden"
          checked={price === item.value}
          onChange={() =>
            setPrice(price === item.value ? "all" : item.value)
          }
        />

        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition
          ${
            price === item.value
              ? "bg-blue-600 border-blue-600 text-white shadow"
              : "border-gray-300 bg-white"
          }`}
        >
          {price === item.value && (
            <span className="text-xs font-bold">✓</span>
          )}
        </div>

        <span className="text-gray-700 font-medium">
          {item.label}
        </span>
      </label>
    ))}
  </div>

  {/* Stock */}
  <div className="space-y-2">
    <h2 className="text-xl font-bold text-[#0f4554] border-b border-blue-100 pb-1">
      Stock
    </h2>

    {["In Stock", "Low Stock"].map((item) => (
      <label
        key={item}
        className="flex items-center gap-3 cursor-pointer rounded-lg px-3 hover:bg-blue-50 transition"
      >
        <input
          type="checkbox"
          className="hidden"
          checked={stock === item}
          onChange={() =>
            setStock(stock === item ? "all" : item)
          }
        />

        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition
          ${
            stock === item
              ? "bg-blue-600 border-blue-600 text-white shadow"
              : "border-gray-300 bg-white"
          }`}
        >
          {stock === item && (
            <span className="text-xs font-bold">✓</span>
          )}
        </div>

        <span className="text-gray-700 font-medium">
          {item}
        </span>
      </label>
    ))}
  </div>

  {/* Top Brands */}
  <div className="space-y-2">
    <h2 className="text-xl font-bold text-[#0f4554] border-b border-blue-100 pb-1">
      Top Brands
    </h2>

    {[
      "Chanel",
      "Dior",
      "Calvin Klein",
      "Gucci",
    ].map((item) => (
      <label
        key={item}
        className="flex items-center gap-3 cursor-pointer rounded-lg px-3 hover:bg-blue-50 transition"
      >
        <input
          type="checkbox"
          className="hidden"
          checked={brand === item}
          onChange={() =>
            setBrand(brand === item ? "all" : item)
          }
        />

        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition
          ${
            brand === item
              ? "bg-blue-600 border-blue-600 text-white shadow"
              : "border-gray-300 bg-white"
          }`}
        >
          {brand === item && (
            <span className="text-xs font-bold">✓</span>
          )}
        </div>

        <span className="text-gray-700 font-medium">
          {item}
        </span>
      </label>
    ))}
  </div>

</div>
</div>
      <div className="max-w-7xl  mx-auto px-6 py-10">

  {/* Search */}
<div className="flex flex-col lg:flex-row items-center justify-center gap-5 mb-16">

  <div className="relative w-full max-w-xl">

    <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#72876D] text-lg" />

    <input
      type="text"
      value={search}
      placeholder="Search premium products..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-full border border-[#ecb6a3] bg-white py-4 pl-14 pr-6 text-[#384A37] placeholder:text-[#8FA287] shadow-md outline-none transition duration-300 focus:ring-2 focus:ring-[#d2d3ce]"
    />

  </div>

  <button className="rounded-full bg-[#cf4919] px-10 py-4 font-semibold text-white shadow-md transition duration-300 hover:bg-[#4B5F48] hover:scale-105">
    Search
  </button>

</div>
  {/* Categories */}

  <div className="flex justify-center flex-wrap gap-4 mb-16">

  {["all", "beauty", "fragrances", "furniture", "groceries"].map(
    (cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        className={`capitalize rounded-full px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300
        ${
          category === cat
            ? "bg-[#4b5039] text-white shadow-lg shadow-[#5F745B]/30 scale-105"
            : "border border-[#D6E2D0] bg-white text-[#384A37] hover:bg-[#4b5039] hover:text-white hover:border-[#5F745B] hover:scale-105"
        }`}
      >
        {cat}
      </button>
    )
  )}

</div>

  {/* Products */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

  {filteredData.slice(0, 30).map((item) => (

    <div
      key={item.id}
      className="group overflow-hidden rounded-[32px] border border-[#E3E8DF] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >

      <Link to={`/apis/${item.id}`}>

        <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#f7f8f8]">

          {/* Discount Badge */}
          <span className="absolute left-5 top-5 rounded-full bg-[#0f4554] px-4 py-2 text-xs font-semibold tracking-wider text-white">
            {Math.round(item.discountPercentage)}% OFF
          </span>


          <img
            src={item.images[0]}
            alt={item.title}
            className="h-60 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
          />

        </div>

      </Link>

      <div className="p-6">

        <p className="text-sm uppercase tracking-[3px] text-[#72876D]">
          {item.brand}
        </p>

        <h2 className="mt-2 text-xl font-semibold text-[#384A37] line-clamp-1">
          {item.title}
        </h2>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-1 text-yellow-500">

            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={
                  index < Math.floor(item.rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}

            <span className="ml-2 text-sm text-gray-500">
              {Math.floor(item.rating)}
            </span>

          </div>

          <span className={`rounded-full bg-[#E8EFE4] ${
                  item.availabilityStatus === "Low Stock"
                    ? "bg-red-400 border-[#3E2723] text-white"
                    : "border-gray-400"
                } px-3 py-1 text-xs font-medium text-[#5F745B]`}>
            {item.availabilityStatus === "Low Stock" ? "Low Stock" : "In Stock"}
          </span>

        </div>

        {/* Price */}
        <div className="mt-6 flex items-end gap-3">

          <h2 className="text-3xl font-bold text-[#384A37]">
            ₹{Math.floor(item.price * 100).toLocaleString("en-IN")}
          </h2>

          <span className="text-gray-400 line-through">
            ₹{Math.floor((item.price * 100) * 1.2).toLocaleString("en-IN")}
          </span>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">

          <Link
            to={`/apis/${item.id}`}
            className="flex-1"
          >
            <button className="w-full rounded-full border border-[#5F745B] py-3 font-semibold text-[#384A37] transition hover:bg-[#5F745B] hover:text-white">
              View Details
            </button>
          </Link>

          <button
            onClick={() => dispatch(addToCart(item))}
            className="flex-1 rounded-full bg-[#205361] py-3 font-semibold text-white transition hover:bg-[#4B5F48]"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

</div>
</div>

    </>
  );
};

export default Api;