import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../SearchProvider";
import { FaSearch } from "react-icons/fa";
import { addToCart } from "../redux/slice/cartslice";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../ThemeContext";
const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  const[filterOpen,setFilterOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const { search, setSearch } = useContext(SearchContext);
  const [rating, setRating] = useState([]);
  const [price, setPrice] = useState("all");

  const [stock, setStock] = useState("all");
  const [brand, setBrand] = useState("all");

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
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (rating === "all" ? true : Number(item.rating) >= rating))
    .filter((item) => (brand === "all" ? true : item.brand === brand))
    .filter((item) => {
      const productPrice = Math.floor(item.price * 100);
      if (price === "all") {
        return true;
      }
      if (price === "100-2000") {
        return productPrice >= 100 && productPrice <= 2000;
      }
      if (price === "2000-20000") {
        return productPrice >= 2000 && productPrice <= 20000;
      }
      if (price === "20000-30000") {
        return productPrice >= 20000 && productPrice <= 30000;
      }
      return true;
    })
    .filter((item) => (category === "all" ? true : item.category === category))
    .filter((item) =>
      stock === "all" ? true : item.availabilityStatus === stock,
    );

  const priceRanges = [
    { label: "₹100 - ₹2k", value: "100-2000" },
    { label: "₹2k - ₹20k", value: "2000-20000" },
    { label: "₹20k - ₹30k", value: "20000-30000" },
  ];

  return (
    <>
      <div className="flex flex-row gap-10 overflow-visible">
        {/* ================= FILTER SIDEBAR ================= */}
        <div className="sticky hidden lg:flex top-15 self-start lg:h-fit mb-6 ">
  <div
    className={`rounded-2xl w-52 lg:!w-62 border shadow-xl p-4 sm:p-5 lg:p-6 space-y-6 lg:space-y-8 transition-colors duration-300 ${
      darkMode
        ? "bg-[#1B211D] border-[#344139]"
        : "bg-white border-blue-100"
    }`}
  >
    {/* Filter Header */}
    <div className="mb-6 flex items-center gap-1">
      <div className="flex w-full items-center justify-between">
        <h1
          className={`text-2xl cursor pointer sm:text-3xl font-extrabold tracking-wide ${
            darkMode ? "text-[#A8C0AE]" : "text-[#0f4554]"
          }`}
        >
          Filters
        </h1>

        <button
          onClick={() => {
            setBrand("all");
            setCategory("all");
            setRating("all");
            setPrice("all");
            setStock("all");
          }}
          className={`cursor-pointer whitespace-nowrap lg:!whitespace-nowrap rounded-xl border px-3 py-2 text-sm text-white transition duration-300 hover:scale-105 ${
            darkMode
              ? "border-[#4E6B57] bg-[#3F5948] hover:bg-[#5A765F]"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Clear All
        </button>
      </div>
    </div>

    {/* ================= RATING ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Rating
      </h2>

      {[4, 3, 2].map((item) => (
        <label
          key={item}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={rating === item}
            onChange={() => setRating(rating === item ? "all" : item)}
          />

          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              rating === item
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {rating === item && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span className="text-base sm:text-lg text-yellow-500">
            {"★".repeat(item)}
            <span className={darkMode ? "text-[#59635C]" : "text-gray-300"}>
              {"☆".repeat(5 - item)}
            </span>
          </span>
        </label>
      ))}
    </div>

    {/* ================= PRICE ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Price
      </h2>

      {priceRanges.map((item) => (
        <label
          key={item.value}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
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
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              price === item.value
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {price === item.value && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-[#D1D8D2]" : "text-gray-700"
            }`}
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>

    {/* ================= STOCK ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Stock
      </h2>

      {["In Stock", "Low Stock"].map((item) => (
        <label
          key={item}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={stock === item}
            onChange={() => setStock(stock === item ? "all" : item)}
          />

          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              stock === item
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {stock === item && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-[#D1D8D2]" : "text-gray-700"
            }`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>

    {/* ================= TOP BRANDS ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Top Brands
      </h2>

      {["Chanel", "Dior", "Calvin Klein", "Gucci"].map((item) => (
        <label
          key={item}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={brand === item}
            onChange={() => setBrand(brand === item ? "all" : item)}
          />

          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              brand === item
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {brand === item && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-[#D1D8D2]" : "text-gray-700"
            }`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>
</div>

        {/* ================= PRODUCTS AREA ================= */}
        <div className="w-full mx-auto  px-1 lg:!py-10 py-1 flex flex-col">
          {/* ================= SEARCH ================= */}
          <div className="flex flex-row lg:flex-row items-center justify-center gap-5 mb-8 lg:!mb-16">
            <div className="relative w-full max-w-xl">
              <FaSearch
                className={`absolute left-5 top-1/2 -translate-y-1/2 text-lg ${
                  darkMode ? "text-[#8FA58F]" : "text-[#72876D]"
                }`}
              />

              <input
                type="text"
                value={search}
                placeholder="Search products..."
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full rounded-full lg:!py-4 py-2 pl-12 pr-3 lg:!pl-14 lg:!pr-6 outline-none shadow-md transition duration-300 ${
                  darkMode
                    ? "border border-gray-300 bg-[#1B211D] text-[#E3E8E3] placeholder:text-[#737D76] focus:ring-2 focus:ring-gray-300"
                    : "border border-gray-300 bg-white text-[#384A37] placeholder:text-[#8FA287] focus:ring-2 focus:ring-gray-300"
                }`}
              />
            </div>

            <button
              className={`rounded-full lg:!px-10 px-7 py-2  lg:!py-4 font-light lg:!font-semibold text-white shadow-md transition duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-[#4E6B57] hover:bg-[#617C67]"
                  : "bg-[#cf4919] hover:bg-[#4B5F48]"
              }`}
            >
              Search
            </button>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div className="flex justify-center flex-wrap lg:!gap-4 gap-2 mb-4 lg:!mb-16">
            {["all", "beauty", "fragrances", "furniture", "groceries"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`capitalize rounded-full lg:!px-8 lg:!py-3 py-1 px-5 lg:!text-sm text-xs font-semibold tracking-wide transition-all duration-300 ${
                    category === cat
                      ? darkMode
                        ? "bg-[#5F745B] text-white shadow-lg shadow-black/30 scale-105"
                        : "bg-[#4b5039] text-white shadow-lg shadow-[#5F745B]/30 scale-105"
                      : darkMode
                        ? "border border-[#3D4C42] bg-[#1B211D] text-[#C9D2CA] hover:bg-[#4E6B57] hover:text-white hover:border-[#5F745B] hover:scale-105"
                        : "border border-[#D6E2D0] bg-white text-[#384A37] hover:bg-[#4b5039] hover:text-white hover:border-[#5F745B] hover:scale-105"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>
          {/* filter for mobile and smaller screen */}
            <div className="flex lg:!hidden w-full">
            <button onClick={()=>setFilterOpen(true)} className="mb-6 cursor-pointer bg-black text-white flex items-center gap-2 border px-5 font-semibold text-sm rounded-full w- py-1"><GiHamburgerMenu /> Select Filters </button>
            {filterOpen&& (
  <div className="fixed inset-0 z-[100] bg-black/40">
    <div className="absolute left-0 z-[100] rounded-xl top-20 w-[50%]">

      <div
    className={`w-52 lg:!w-62 border shadow-xl p-4 sm:p-5 lg:p-6 space-y-6 lg:space-y-8 transition-colors duration-300 ${
      darkMode
        ? "bg-[#1B211D] border-[#344139]"
        : "bg-white border-blue-100"
    }`}
  >
    {/* Filter Header */}
    <div className="mb-6 flex items-center gap-1">
      <div className="flex flex-col w-full">

        <button className={`top-4 right-7 absolute font-bold ${darkMode ? "text-white" : "text-black"}`}
    onClick={()=>setFilterOpen(false)}><span className="font-bold text-2xl">X</span></button>

   <div className="flex flex-col w-full gap-4">
        <h1
          className={`text-2xl cursor pointer sm:text-3xl font-extrabold tracking-wide ${
            darkMode ? "text-[#A8C0AE]" : "text-[#0f4554]"
          }`}
        >
          Filters
        </h1>

        <button
          onClick={() => {
            setBrand("all");
            setCategory("all");
            setRating("all");
            setPrice("all");
            setStock("all");
          }}
          className={`cursor-pointer whitespace-nowrap lg:!whitespace-nowrap rounded-xl border px-3 py-2 text-sm text-white transition duration-300 hover:scale-105 ${
            darkMode
              ? "border-[#4E6B57] bg-[#3F5948] hover:bg-[#5A765F]"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Clear All
        </button>
        </div>
      </div>
    </div>

    {/* ================= RATING ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-1 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Rating
      </h2>

      {[4, 3, 2].map((item) => (
        <label
          key={item}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-1 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={rating === item}
            onChange={() => setRating(rating === item ? "all" : item)}
          />

          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              rating === item
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {rating === item && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span className="text-base sm:text-lg text-yellow-500">
            {"★".repeat(item)}
            <span className={darkMode ? "text-[#59635C]" : "text-gray-300"}>
              {"☆".repeat(5 - item)}
            </span>
          </span>
        </label>
      ))}
    </div>

    {/* ================= PRICE ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Price
      </h2>

      {priceRanges.map((item) => (
        <label
          key={item.value}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
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
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              price === item.value
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {price === item.value && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-[#D1D8D2]" : "text-gray-700"
            }`}
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>

    {/* ================= STOCK ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Stock
      </h2>

      {["In Stock", "Low Stock"].map((item) => (
        <label
          key={item}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={stock === item}
            onChange={() => setStock(stock === item ? "all" : item)}
          />

          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              stock === item
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {stock === item && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-[#D1D8D2]" : "text-gray-700"
            }`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>

    {/* ================= TOP BRANDS ================= */}
    <div>
      <h2
        className={`text-lg sm:text-xl font-bold border-b pb-2 ${
          darkMode
            ? "text-[#A8C0AE] border-[#344139]"
            : "text-[#0f4554] border-blue-100"
        }`}
      >
        Top Brands
      </h2>

      {["Chanel", "Dior", "Calvin Klein", "Gucci"].map((item) => (
        <label
          key={item}
          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition ${
            darkMode ? "hover:bg-[#273129]" : "hover:bg-blue-50"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={brand === item}
            onChange={() => setBrand(brand === item ? "all" : item)}
          />

          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition ${
              brand === item
                ? darkMode
                  ? "bg-[#5F745B] border-[#5F745B] text-white shadow"
                  : "bg-blue-600 border-blue-600 text-white shadow"
                : darkMode
                ? "border-[#536257] bg-[#222A25]"
                : "border-gray-300 bg-white"
            }`}
          >
            {brand === item && (
              <span className="text-[10px] sm:text-xs font-bold">✓</span>
            )}
          </div>

          <span
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-[#D1D8D2]" : "text-gray-700"
            }`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>
    </div>
  </div>
)}
            </div>
          {/* ================= PRODUCT GRID ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:!gap-10">
            {filteredData.slice(0, 30).map((item) => (
              <div
                key={item.id}
                className={`group overflow-hidden rounded-[32px] border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "border-[#354238] bg-[#1B211D] hover:shadow-black/40"
                    : "border-[#E3E8DF] bg-white"
                }`}
              >
                <Link to={`/apis/${item.id}`}>
                  {/* Product Image */}
                  <div
                    className={`relative flex h-50 lg:!h-80 items-center justify-center overflow-hidden ${
                      darkMode ? "bg-[#222A25]" : "bg-[#f7f8f8]"
                    }`}
                  >
                    {/* Discount Badge */}
                    <span
                      className={`absolute left-5 top-5 rounded-full lg:!px-4 px-2 py-1 lg:!py-2 text-xs font-semibold tracking-wider text-white ${
                        darkMode ? "bg-[#4E6B57]" : "bg-[#0f4554]"
                      }`}
                    >
                      {Math.round(item.discountPercentage)}% OFF
                    </span>

                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-60 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                </Link>

                {/* Product Information */}
                <div className="lg:!p-6 p-3">
                  <p
                    className={`lg:!text-sm text-xs uppercase tracking-[3px] ${
                      darkMode ? "text-[#8FA58F]" : "text-[#72876D]"
                    }`}
                  >
                    {item.brand}
                  </p>

                  <h2
                    className={`mt-2 lg:!text-xl text-sm font-semibold ${
                      darkMode ? "text-[#E0E6E1]" : "text-[#384A37]"
                    }`}
                  >
                    {item.title.split(" ").slice(0,2).join(" ")}
                  </h2>

                  {/* Rating */}
                  <div className="lg:!mt-4 mt-1 flex items-center justify-between">
                    <div className="flex text-xs lg:!text-lg lg:!flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={
                            index < Math.floor(item.rating)
                              ? "text-yellow-500"
                              : darkMode
                                ? "text-[#4B554E]"
                                : "text-gray-300"
                          }
                        />
                      ))}

                      <span
                        className={`ml-2 text-sm ${
                          darkMode ? "text-[#8E9991]" : "text-gray-500"
                        }`}
                      >
                        {Math.floor(item.rating)}
                      </span>
                    </div>

                    {/* Stock */}
                    <span
                      className={`rounded-full hidden lg:!block px-3 py-1 text-xs font-medium ${
                        item.availabilityStatus === "Low Stock"
                          ? "bg-red-400 border whitespace-nowrap text-white"
                          : darkMode
                            ? "bg-[#33443A] text-[#AFC2B2] border border-[#4A5B50]"
                            : "bg-[#E8EFE4] text-[#5F745B]"
                      }`}
                    >
                      {item.availabilityStatus === "Low Stock"
                        ? "Low Stock"
                        : "In Stock"}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="lg:!mt-6 mt-2 flex items-end gap-3">
                    <h2
                      className={`lg:!text-3xl text-lg font-bold ${
                        darkMode ? "text-[#DCE6DE]" : "text-[#384A37]"
                      }`}
                    >
                      ₹{Math.floor(item.price * 100).toLocaleString("en-IN")}
                    </h2>

                    <span
                      className={`line-through ${
                        darkMode ? "text-[#69736C]" : "text-gray-400"
                      }`}
                    >
                      ₹
                      {Math.floor(item.price * 100 * 1.2).toLocaleString(
                        "en-IN",
                      )}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="lg:!mt-8 flex gap-1 mt-4 lg:!gap-3">
                    <Link to={`/apis/${item.id}`} className="flex-1">
                      <button
                        className={`w-full rounded-full border text-[10px] lg:!px-0 px-1 whitespace-nowrap lg:!whitespace-nowrap lg:!text-sm py-2 lg:!py-3 font-semibold transition ${
                          darkMode
                            ? "border-[#5F745B] text-[#B9C8BB] hover:bg-[#5F745B] hover:text-white"
                            : "border-[#5F745B] text-[#384A37] hover:bg-[#5F745B] hover:text-white"
                        }`}
                      >
                        View Details
                      </button>
                    </Link>

                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className={`flex-1 rounded-full lg:!py-3 py-1 lg:!px-0 px-1 whitespace-nowrap lg:!whitespace-nowrap font-semibold lg:!text-sm text-[10px]  text-white transition ${
                        darkMode
                          ? "bg-[#4E6B57] hover:bg-[#637F69]"
                          : "bg-[#205361] hover:bg-[#4B5F48]"
                      }`}
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
