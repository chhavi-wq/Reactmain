import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartslice";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Apidetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const full = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();

      setData(result);
      setLoading(false);
    };

    full();
  }, [id]);
  console.log(data);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-serif">
        Loading...
      </div>
    );
  }
  const handleclick = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <>
      <Navbar />

    <div
  className={`min-h-screen px-4 sm:px-6 md:px-10 lg:!px-12 py-24 sm:py-28 lg:!py-32 transition-colors duration-300 ${
    darkMode ? "bg-[#141916] text-[#E0E6E1]" : "bg-[#F8F5F0]"
  }`}
>
  {/* ================= PREVIOUS ================= */}
  <button
    className={`absolute left-2 sm:left-4 lg:!left-6 top-1/2 -translate-y-1/2 z-10
      p-2 sm:p-3 lg:!p-4 rounded-full shadow-md transition text-2xl sm:text-3xl lg:!text-5xl ${
        darkMode
          ? "bg-[#1B211D] text-[#C8D3CA] border border-[#354238] hover:bg-[#5F745B] hover:text-white"
          : "bg-white hover:bg-[#5F745B] hover:text-white"
      }`}
    onClick={() => navigate(`/apis/${Number(id) - 1}`)}
  >
    <GrFormPrevious />
  </button>

  {/* ================= NEXT ================= */}
  <button
    className={`absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10
      p-2 sm:p-3 lg:!p-4 rounded-full shadow-md transition text-2xl sm:text-3xl lg:!text-5xl ${
        darkMode
          ? "bg-[#1B211D] text-[#C8D3CA] border border-[#354238] hover:bg-[#5F745B] hover:text-white"
          : "bg-white hover:bg-[#5F745B] hover:text-white"
      }`}
    onClick={() => navigate(`/apis/${Number(id) + 1}`)}
  >
    <GrFormNext />
  </button>

  {/* ================= PRODUCT ================= */}
  <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12 lg:!flex-row lg:!items-start lg:!gap-12">

    {/* ================= PRODUCT IMAGE ================= */}
    <div
      className={`w-full overflow-hidden rounded-[28px] sm:rounded-[32px] lg:!w-[48%] lg:rounded-[40px] shadow-lg transition-colors duration-300 ${
        darkMode
          ? "bg-[#1B211D] border border-[#354238]"
          : "bg-white border border-[#D6E2D0]"
      }`}
    >
      <img
        className="h-[300px] w-full object-contain sm:h-[450px] md:h-[500px] lg:!h-[600px]"
        src={data.images[0]}
        alt={data.title}
      />
    </div>

    {/* ================= PRODUCT DETAILS ================= */}
    <div className="w-full lg:!w-[52%]">

      {/* Category */}
      <p
        className={`uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm ${
          darkMode ? "text-[#8FA58F]" : "text-[#7A7A7A]"
        }`}
      >
        {data.category}
      </p>

      {/* Title */}
      <h2
        className={`mt-3 text-2xl sm:text-3xl md:text-4xl font-medium leading-tight ${
          darkMode ? "text-[#E3E9E4]" : "text-gray-900"
        }`}
      >
        {data.title}
      </h2>

      {/* ================= RATING ================= */}
      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="flex text-sm sm:text-base text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={
                index < Math.round(data.rating)
                  ? "text-yellow-500"
                  : darkMode
                    ? "text-[#4B554E]"
                    : "text-gray-300"
              }
            />
          ))}
        </div>

        <span
          className={`text-sm sm:text-base ${
            darkMode ? "text-[#929D95]" : "text-gray-500"
          }`}
        >
          {data.rating} / 5
        </span>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <p
        className={`mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:!max-w-7xl leading-7 sm:leading-8 max-w-6xl ${
          darkMode ? "text-[#AEB8B1]" : "text-gray-600"
        }`}
      >
        {data.description}
      </p>

      {/* ================= PRICE ================= */}
      <h1
        className={`mt-5 text-3xl sm:text-4xl md:text-5xl font-bold ${
          darkMode ? "text-[#C7D6C9]" : "text-[#384A37]"
        }`}
      >
        ₹{Math.floor(data.price * 100).toLocaleString("en-IN")}
      </h1>

      {/* ================= STOCK ================= */}
      <div className="mt-5 sm:mt-6">
        <span
          className={`inline-block rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold ${
            data.availabilityStatus === "Low Stock"
              ? "bg-red-500/20 text-red-400 border border-red-500/30"
              : darkMode
                ? "bg-[#33443A] text-[#AFC2B2] border border-[#4A5B50]"
                : "bg-[#E8EFE4] text-[#5F745B]"
          }`}
        >
          {data.availabilityStatus}
        </span>
      </div>

      {/* ================= PRODUCT INFO ================= */}
      <div
        className={`mt-8 sm:mt-10 border-t pt-4 space-y-4 ${
          darkMode ? "border-[#354238]" : "border-gray-200"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className={`text-sm sm:text-base ${
              darkMode ? "text-[#89958D]" : "text-gray-500"
            }`}
          >
            Stock
          </span>

          <span
            className={`text-right text-sm sm:text-base ${
              darkMode ? "font-medium text-[#D2DAD4]" : "font-medium"
            }`}
          >
            {data.stock} Units
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <span
            className={`text-sm sm:text-base ${
              darkMode ? "text-[#89958D]" : "text-gray-500"
            }`}
          >
            Shipping
          </span>

          <span
            className={`text-right text-sm sm:text-base ${
              darkMode ? "font-medium text-[#D2DAD4]" : "font-medium"
            }`}
          >
            {data.shippingInformation}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <span
            className={`text-sm sm:text-base ${
              darkMode ? "text-[#89958D]" : "text-gray-500"
            }`}
          >
            Minimum Order
          </span>

          <span
            className={`text-right text-sm sm:text-base ${
              darkMode ? "font-medium text-[#D2DAD4]" : "font-medium"
            }`}
          >
            {data.minimumOrderQuantity}
          </span>
        </div>
      </div>

      {/* ================= TAGS ================= */}
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm ${
              darkMode
                ? "bg-[#29362E] text-[#AFC2B2] border border-[#3B4B41]"
                : "bg-[#E8EFE4] text-[#5F745B]"
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
        {/* Buy Now */}
        <button
          className={`w-full sm:w-auto px-8 sm:px-10 lg:!px-12 py-3 sm:py-4 border-2 rounded-full text-base sm:text-lg font-semibold transition ${
            darkMode
              ? "border-[#697D6D] text-[#C7D2C9] hover:bg-[#4E6B57] hover:border-[#4E6B57] hover:text-white"
              : "border-[#384A37] text-[#384A37] hover:bg-[#384A37] hover:text-white"
          }`}
        >
          Buy Now
        </button>

        {/* Add to Basket */}
        <button
          onClick={() => handleclick(data)}
          className={`w-full sm:w-auto px-8 sm:px-10 lg:!px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white transition ${
            darkMode
              ? "bg-[#4E6B57] hover:bg-[#637F69]"
              : "bg-[#5F745B] hover:bg-[#4B5F48]"
          }`}
        >
          Add to Basket
        </button>
      </div>
    </div>
  </div>

  {/* ================= REVIEWS ================= */}
  <div className="mx-auto mt-16 sm:mt-20 lg:!mt-24 max-w-6xl">
    <h2
      className={`mb-8 sm:mb-10 text-2xl sm:text-3xl lg:!text-4xl font-bold ${
        darkMode ? "text-[#B8C9BA]" : "text-[#384A37]"
      }`}
    >
      Customer Reviews
    </h2>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:!grid-cols-3 sm:gap-6 lg:!gap-8">
      {data.reviews.map((review, index) => (
        <div
          key={index}
          className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:!p-8 shadow-sm transition-colors duration-300 ${
            darkMode
              ? "bg-[#1B211D] border border-[#354238]"
              : "bg-white"
          }`}
        >
          {/* Reviewer */}
          <h3
            className={`text-lg sm:text-xl font-semibold ${
              darkMode ? "text-[#DDE5DE]" : "text-gray-900"
            }`}
          >
            {review.reviewerName}
          </h3>

          {/* Email */}
          <p
            className={`mt-1 text-sm sm:text-base ${
              darkMode ? "text-[#7F8B83]" : "text-gray-500"
            }`}
          >
            {review.reviewerEmail}
          </p>

          {/* Review Stars */}
          <div className="mt-3 sm:mt-4 flex text-sm sm:text-base text-yellow-500">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>

          {/* Review */}
          <p
            className={`mt-4 sm:mt-5 text-sm sm:text-base leading-7 ${
              darkMode ? "text-[#AEB8B1]" : "text-gray-600"
            }`}
          >
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
    </>
  );
};

export default Apidetail;
