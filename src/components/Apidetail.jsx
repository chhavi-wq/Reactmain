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
        className={`min-h-screen px-20 py-35 transition-colors duration-300 ${
          darkMode ? "bg-[#141916] text-[#E0E6E1]" : "bg-[#F8F5F0]"
        }`}
      >
        {/* Previous */}
        <button
          className={`absolute left-5 top-[50%] text-5xl p-4 rounded-full shadow-md transition ${
            darkMode
              ? "bg-[#1B211D] text-[#C8D3CA] border border-[#354238] hover:bg-[#5F745B] hover:text-white"
              : "bg-white hover:bg-[#5F745B] hover:text-white"
          }`}
          onClick={() => navigate(`/apis/${Number(id) - 1}`)}
        >
          <GrFormPrevious />
        </button>

        {/* Next */}
        <button
          className={`absolute right-5 top-[50%] text-5xl p-4 rounded-full shadow-md transition ${
            darkMode
              ? "bg-[#1B211D] text-[#C8D3CA] border border-[#354238] hover:bg-[#5F745B] hover:text-white"
              : "bg-white hover:bg-[#5F745B] hover:text-white"
          }`}
          onClick={() => navigate(`/apis/${Number(id) + 1}`)}
        >
          <GrFormNext />
        </button>

        <div className="flex gap-20">
          {/* ================= PRODUCT IMAGE ================= */}
          <div
            className={`w-[600px] h-[700px] rounded-[40px] shadow-lg overflow-hidden transition-colors duration-300 ${
              darkMode
                ? "bg-[#1B211D] border border-[#354238]"
                : "bg-white border border-[#D6E2D0]"
            }`}
          >
            <img
              className="w-full h-[600px] object-cover"
              src={data.images[0]}
              alt=""
            />
          </div>

          {/* ================= PRODUCT DETAILS ================= */}
          <div className="w-1/2">
            {/* Category */}
            <p
              className={`uppercase tracking-[5px] text-sm ${
                darkMode ? "text-[#8FA58F]" : "text-[#7A7A7A]"
              }`}
            >
              {data.category}
            </p>

            {/* Title */}
            <h2
              className={`text-3xl font-medium mt-3 ${
                darkMode ? "text-[#E3E9E4]" : "text-gray-900"
              }`}
            >
              {data.title}
            </h2>

            {/* ================= RATING ================= */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex text-yellow-500">
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

              <span className={darkMode ? "text-[#929D95]" : "text-gray-500"}>
                {data.rating} / 5
              </span>
            </div>

            {/* Description */}
            <p
              className={`mt-8 text-lg leading-8 w-[90%] ${
                darkMode ? "text-[#AEB8B1]" : "text-gray-600"
              }`}
            >
              {data.description}
            </p>

            {/* ================= PRICE ================= */}
            <h1
              className={`text-5xl font-bold mt-5 ${
                darkMode ? "text-[#C7D6C9]" : "text-[#384A37]"
              }`}
            >
              ₹{Math.floor(data.price * 100).toLocaleString("en-IN")}
            </h1>

            {/* ================= STOCK ================= */}
            <div className="mt-6">
              <span
                className={`px-4 py-2 rounded-full font-semibold ${
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
              className={`mt-10 border-t pt-3 space-y-4 ${
                darkMode ? "border-[#354238]" : "border-gray-200"
              }`}
            >
              <div className="flex justify-between">
                <span className={darkMode ? "text-[#89958D]" : "text-gray-500"}>
                  Stock
                </span>

                <span
                  className={
                    darkMode ? "font-medium text-[#D2DAD4]" : "font-medium"
                  }
                >
                  {data.stock} Units
                </span>
              </div>

              <div className="flex justify-between">
                <span className={darkMode ? "text-[#89958D]" : "text-gray-500"}>
                  Shipping
                </span>

                <span
                  className={
                    darkMode ? "font-medium text-[#D2DAD4]" : "font-medium"
                  }
                >
                  {data.shippingInformation}
                </span>
              </div>

              <div className="flex justify-between">
                <span className={darkMode ? "text-[#89958D]" : "text-gray-500"}>
                  Minimum Order
                </span>

                <span
                  className={
                    darkMode ? "font-medium text-[#D2DAD4]" : "font-medium"
                  }
                >
                  {data.minimumOrderQuantity}
                </span>
              </div>
            </div>

            {/* ================= TAGS ================= */}
            <div className="flex flex-wrap gap-3 mt-8">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
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
            <div className="flex gap-6 mt-5">
              {/* Buy Now */}
              <button
                className={`px-12 py-4 border-2 rounded-full text-lg font-semibold transition ${
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
                className={`px-12 py-4 rounded-full text-lg font-semibold text-white transition ${
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
        <div className="mt-24">
          <h2
            className={`text-4xl font-bold mb-10 ${
              darkMode ? "text-[#B8C9BA]" : "text-[#384A37]"
            }`}
          >
            Customer Reviews
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {data.reviews.map((review, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 shadow-sm transition-colors duration-300 ${
                  darkMode ? "bg-[#1B211D] border border-[#354238]" : "bg-white"
                }`}
              >
                {/* Reviewer */}
                <h3
                  className={`font-semibold text-xl ${
                    darkMode ? "text-[#DDE5DE]" : "text-gray-900"
                  }`}
                >
                  {review.reviewerName}
                </h3>

                {/* Email */}
                <p
                  className={`mt-1 ${
                    darkMode ? "text-[#7F8B83]" : "text-gray-500"
                  }`}
                >
                  {review.reviewerEmail}
                </p>

                {/* Review Stars */}
                <div className="flex text-yellow-500 mt-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>

                {/* Review */}
                <p
                  className={`mt-5 leading-7 ${
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
