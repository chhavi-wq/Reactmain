import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import "../App.css";
import { FaCartShopping } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { IoIosReturnLeft } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowRightLong } from "react-icons/fa6";

import { CiDeliveryTruck } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useEffect, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";

import { IoIosPricetag } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    const full = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProduct(result.products);
    };
    full();
  }, []);

  const beautyProducts = product.filter(
    (item) => item.category === "fragrances",
  );
  const randomProduct = Math.floor(Math.random() * beautyProducts.length);
  const featuredProducts = beautyProducts[randomProduct];

  const freshProduct = product.filter(
    (item) => item.tags[0] === "fruits" || item.tags[0] === "vegetables",
  );
  const groceryProduct = Math.floor(Math.random() * freshProduct.length);
  const grocery = freshProduct[groceryProduct];

  const shopProducts = product.filter((item) => item.category === "beauty");
  const randomShop = Math.floor(Math.random() * shopProducts.length);
  const addCartProduct = shopProducts[randomShop];

  const collections = [
    {
      id: 1,
      title: "Beauty",
      image: "./cream.jpg",
    },
    {
      id: 2,
      title: "Fragrances",
      image: "./frag.jpg",
    },
    {
      id: 3,
      title: "Groceries",
      image: "./vegetables.jpg",
    },
    {
      id: 4,
      title: "Furniture",
      image: "./chair.jpg",
    },
  ];

  const benefits = [
    {
      icons: <CiDeliveryTruck />,
      about: "Timely Delivery",
      description:
        "Get your orders delivered quickly with safe and on-time shipping to your doorstep.",
    },
    {
      icons: <GrSecure />,
      about: "Secure Payments",
      description:
        "Shop confidently with encrypted payments and trusted payment methods.",
    },
    {
      icons: <LuBadgeCheck />,
      about: "Premium Quality",
      description:
        "Every product is carefully selected to ensure excellent quality and lasting value.",
    },
    {
      icons: <IoIosReturnLeft />,
      about: "Easy Returns",
      description:
        "Not satisfied? Enjoy a simple return and refund process for a worry-free shopping experience.",
    },
    {
      icons: <BiSupport />,
      about: "24/7 Customer Support",
      description:
        "Our support team is available around the clock to answer your questions and assist you.",
    },
    {
      icons: <GiShoppingCart />,
      about: "Wide Product Range",
      description:
        "From fashion and furniture to beauty, groceries, and pet care—find it all in one store.",
    },
    {
      icons: <FaLeaf />,
      about: "Eco-Friendly Products",
      description:
        "Discover environmentally friendly products that are good for you and the planet.",
    },
    {
      icons: <IoIosPricetag />,
      about: "Best Prices",
      description:
        "Enjoy competitive prices, exclusive discounts, and amazing offers across all categories",
    },
  ];

  return (
    <>
      <Navbar />
     <div
  className={`mx-auto ${
    darkMode
      ? "bg-[#121814]"
      : "bg-[#FCFAF7]"
  }`}
>
        {/* hero-page */}
        <div className="mx-auto ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="h-screen"
          >
            <SwiperSlide>
              <div
                className={`flex min-h-screen transition-colors duration-300 ${
                  darkMode ? "bg-[#141916]" : "bg-[#F8F5F0]"
                }`}
              >
                <div className="flex w-1/2 flex-col justify-center px-20">
                  <h1
                    className={`mt-6 text-7xl font-light leading-tight ${
                      darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                    }`}
                  >
                    Furniture that <br />
                    <span className="font-bold">Feels Like Home </span>
                  </h1>

                  <p
                    className={`mt-8 max-w-lg text-md leading-8 ${
                      darkMode ? "text-[#A9ADA7]" : "text-[#5F544C]"
                    }`}
                  >
                    Discover thoughtfully crafted furniture that combines
                    timeless design, exceptional comfort, and lasting quality
                    for every corner of your home.
                  </p>

                  <button
                    onClick={() => navigate("/shop")}
                    className={`mt-10 flex w-fit items-center gap-3 rounded-full px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      darkMode
                        ? "bg-[#4E6B57] hover:bg-[#3F5948]"
                        : "bg-[#5B4A3F] hover:bg-[#43362E]"
                    }`}
                  >
                    Explore Collection
                    <GrLinkNext />
                  </button>

                  <div className="mt-10 flex items-center gap-6">
                    <div
                      className={`rounded-2xl border px-6 py-4 shadow-sm ${
                        darkMode
                          ? "border-[#2A332D] bg-[#181D1A]"
                          : "border-[#DDD2C6] bg-[#FCFAF7]"
                      }`}
                    >
                      <p
                        className={`text-2xl font-light ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                        }`}
                      >
                        500K+
                      </p>

                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#A9ADA7]" : "text-[#7B7067]"
                        }`}
                      >
                        Happy Customers
                      </p>
                    </div>

                    <div
                      className={`rounded-2xl border px-6 py-4 shadow-sm ${
                        darkMode
                          ? "border-[#2A332D] bg-[#181D1A]"
                          : "border-[#DDD2C6] bg-[#FCFAF7]"
                      }`}
                    >
                      <p
                        className={`text-2xl font-light ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                        }`}
                      >
                        4.9★
                      </p>

                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#A9ADA7]" : "text-[#7B7067]"
                        }`}
                      >
                        Customer Rating
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[13px] absolute bottom-8 uppercase tracking-[4px] ${
                      darkMode ? "text-white/40" : "text-black/60"
                    }`}
                  >
                    02 / Furntiure Collection
                  </span>
                  <span className="uppercase tracking-[4px] absolute top-1/2 text-white -rotate-[90deg] -right-14 text-[13px]">
                    Comfortable Furniture ever
                  </span>
                  <div className="pointer-events-none absolute -left-32 -top-32">
                    {/* Outer circle */}
                    <div
                      className={`h-[500px] w-[500px] rounded-full border ${
                        darkMode ? "border-white/[0.14]" : "border-black/[0.10]"
                      }`}
                    />

                    {/* Inner circle */}
                    <div
                      className={`absolute left-[75px] top-[75px] h-[350px] w-[350px] rounded-full border ${
                        darkMode ? "border-white/[0.14]" : "border-black/[0.10]"
                      }`}
                    />
                  </div>
                </div>

                <div className="w-1/2 overflow-hidden">
                  <img
                    src="/furniture.jpeg"
                    alt="Furniture"
                    className="h-screen w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`relative h-screen overflow-hidden bg-cover bg-center ${
                  darkMode ? "bg-[#111412]" : "bg-[#F8F5F0]"
                }`}
                style={{ backgroundImage: "url('/groceries.jpg')" }}
              >
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-r from-black/75 via-black/40 to-transparent"
                      : "bg-gradient-to-r from-black/75 via-black/40 to-transparent"
                  }`}
                />

                <p
                  className={`pointer-events-none absolute left-25 top-1/2 -translate-y-1/2 -rotate-[18deg]
      text-[200px] font-bold tracking-[20px]  ${
        darkMode ? "text-white/[0.15]" : "text-white/[0.12]"
      }`}
                >
                  ORGANIC
                </p>

                <div
                  className={`pointer-events-none absolute -right-32 -top-32
      h-[500px] w-[500px] rounded-full border ${
        darkMode ? "border-white/[0.20]" : "border-white/[0.30]"
      }`}
                />

                <div
                  className={`pointer-events-none absolute -right-20 -top-20
      h-[350px] w-[350px] rounded-full border ${
        darkMode ? "border-white/[0.20]" : "border-white/[0.30]"
      }`}
                />

                <div className="relative z-10 flex h-full items-center px-20">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-px w-10 ${
                          darkMode ? "bg-[#78917C]" : "bg-white/70"
                        }`}
                      />

                      <p
                        className={`text-sm uppercase tracking-[0.35em] ${
                          darkMode ? "text-[#B9C8BB]" : "text-white"
                        }`}
                      >
                        Farm Fresh
                      </p>
                    </div>

                    <h1
                      className={`mt-6 text-7xl font-semibold leading-[1.05] ${
                        darkMode ? "text-[#F2EEE6]" : "text-white"
                      }`}
                    >
                      Fresh & Organic
                      <br />
                      <span className="font-light">Goodness</span>
                    </h1>

                    <p
                      className={`mt-6 max-w-lg text-lg leading-8 ${
                        darkMode ? "text-[#B8C0BA]" : "text-white/90"
                      }`}
                    >
                      Carefully selected organic fruits and vegetables,
                      delivered fresh to your doorstep with quality you can
                      trust.
                    </p>

                    <button
                      onClick={() => navigate("/shop")}
                      className={`mt-9 flex items-center gap-3 rounded-full px-8 py-4
          text-white transition-all duration-300
          hover:-translate-y-1 hover:shadow-2xl ${
            darkMode
              ? "bg-green-800 hover:bg-green-900"
              : "bg-green-800 hover:bg-green-900"
          }`}
                    >
                      Shop Fresh Picks
                      <FaCartShopping />
                    </button>

                    <div className="mt-12 flex items-center gap-8">
                      <div>
                        <h3
                          className={`text-3xl font-light ${
                            darkMode ? "text-[#F0EEE7]" : "text-white"
                          }`}
                        >
                          15K+
                        </h3>

                        <p
                          className={`mt-1 text-xs uppercase tracking-[3px] ${
                            darkMode ? "text-[#9FA9A1]" : "text-white/70"
                          }`}
                        >
                          Happy Customers
                        </p>
                      </div>

                      <div
                        className={`h-10 w-px ${
                          darkMode ? "bg-white/15" : "bg-white/30"
                        }`}
                      />

                      <div>
                        <h3
                          className={`text-3xl font-light ${
                            darkMode ? "text-[#F0EEE7]" : "text-white"
                          }`}
                        >
                          120+
                        </h3>

                        <p
                          className={`mt-1 text-xs uppercase tracking-[3px] ${
                            darkMode ? "text-[#9FA9A1]" : "text-white/70"
                          }`}
                        >
                          Organic Products
                        </p>
                      </div>
                    </div>

                    <div
                      className={`mt-8 flex items-center gap-3 text-sm ${
                        darkMode ? "text-[#A9ADA7]" : "text-white/70"
                      }`}
                    >
                      <span className="flex h-2 w-2 rounded-full bg-[#78917C]" />
                      Freshly sourced every morning
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-12 right-40 z-30">
                  {grocery && (
                    <Link to={`/apis/${grocery.id}`}>
                      <div
                        className={`
              group w-80 rounded-[32px] border p-6
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(0,0,0,0.30)]
              transition-all duration-500
              hover:-translate-y-3
              hover:scale-[1.02]
              ${
                darkMode
                  ? "border-white/10 bg-[#181D1A]/75"
                  : "border-white/30 bg-white/75"
              }
            `}
                      >
                        <div className="flex items-center justify-between">
                          <p
                            className={`text-xs uppercase tracking-[0.25em] ${
                              darkMode ? "text-[#9FB2A2]" : "text-[#607064]"
                            }`}
                          >
                            Featured Product
                          </p>

                          <span
                            className={`h-2 w-2 rounded-full ${
                              darkMode ? "bg-[#78917C]" : "bg-[#4E6B57]"
                            }`}
                          />
                        </div>

                        <div
                          className={`mx-auto mt-5 flex h-52 w-52
              items-center justify-center rounded-full transition-all duration-500
              group-hover:scale-105 ${
                darkMode ? "bg-[#27352B]" : "bg-[#EEF1E9]"
              }`}
                        >
                          <img
                            src={grocery.images[0]}
                            alt={grocery.title}
                            className="h-44 w-44 object-contain"
                          />
                        </div>

                        <div className="mt-5">
                          <p
                            className={`text-sm ${
                              darkMode ? "text-[#8FA494]" : "text-[#718075]"
                            }`}
                          >
                            Organic Collection
                          </p>

                          <h2
                            className={`mt-2 text-2xl font-light line-clamp-1 ${
                              darkMode ? "text-[#F0EEE7]" : "text-[#23332B]"
                            }`}
                          >
                            {grocery.title}
                          </h2>

                          <div className="mt-4 flex items-center justify-between">
                            <h3
                              className={`text-2xl font-light ${
                                darkMode ? "text-[#F0EEE7]" : "text-[#23332B]"
                              }`}
                            >
                              ₹
                              {Math.floor(grocery.price * 100).toLocaleString(
                                "en-IN",
                              )}
                            </h3>

                            <span
                              className={`rounded-full px-4 py-2 text-xs text-white transition-all duration-300 ${
                                darkMode
                                  ? "bg-[#4E6B57] group-hover:bg-[#3F5948]"
                                  : "bg-[#4E6B57] group-hover:bg-[#32473D]"
                              }`}
                            >
                              View
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>

                <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2">
                  <p
                    className={`rotate-90 text-[10px] uppercase tracking-[5px] ${
                      darkMode ? "text-white/40" : "text-white/70"
                    }`}
                  >
                    Fresh Daily
                  </p>
                </div>

                <div className="absolute bottom-8 left-20 z-20 flex items-center gap-3">
                  <div
                    className={`h-px w-10 ${
                      darkMode ? "bg-white/20" : "bg-white/40"
                    }`}
                  />

                  <span
                    className={`text-[10px] uppercase tracking-[4px] ${
                      darkMode ? "text-white/40" : "text-white/60"
                    }`}
                  >
                    01 / Fresh Collection
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`relative flex min-h-screen bg-cover bg-center ${
                  darkMode ? "bg-[#111412]" : "bg-[#F8F5F0]"
                }`}
                style={{ backgroundImage: "url('/skin.jpg')" }}
              >
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-r from-[#111412]/95 via-[#111412]/65 to-transparent"
                      : "bg-gradient-to-r from-[#F8F5F0]/70 via-[#F8F5F0]/20 to-transparent"
                  }`}
                />

                <div className="pointer-events-none absolute left-[100px] top-1/2 z-0 -translate-y-1/2 -rotate-[18deg]"></div>

                <div className="relative z-10 flex w-1/2 flex-col justify-center px-20">
                  <span
                    className={`w-fit rounded-full border px-10 py-2 text-sm tracking-wide backdrop-blur-md ${
                      darkMode
                        ? "border-white/10 bg-white/10 text-[#D5DED7]"
                        : "border-white/30 bg-white/40 text-[#5B4A3F]"
                    }`}
                  >
                    ✨ Botanical Skincare
                  </span>

                  <div className="mt-12 flex items-center gap-10">
                    <div>
                      <h2
                        className={`text-3xl font-light ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                        }`}
                      >
                        4.9★
                      </h2>

                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#A9ADA7]" : "text-[#6F655D]"
                        }`}
                      >
                        Average Rating
                      </p>
                    </div>

                    <div
                      className={`h-12 w-px ${
                        darkMode ? "bg-white/15" : "bg-[#CFC5BA]"
                      }`}
                    />

                    <div>
                      <h2
                        className={`text-3xl font-light ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                        }`}
                      >
                        25K+
                      </h2>

                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#A9ADA7]" : "text-[#6F655D]"
                        }`}
                      >
                        Happy Customers
                      </p>
                    </div>

                    <div
                      className={`h-12 w-px ${
                        darkMode ? "bg-white/15" : "bg-[#CFC5BA]"
                      }`}
                    />

                    <div>
                      <h2
                        className={`text-3xl font-light ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                        }`}
                      >
                        100%
                      </h2>

                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#A9ADA7]" : "text-[#6F655D]"
                        }`}
                      >
                        Botanical Formula
                      </p>
                    </div>
                  </div>

                  <h1
                    className={`mt-6 text-7xl font-light leading-tight ${
                      darkMode ? "text-[#F2EEE6]" : "text-[#3E2E24]"
                    }`}
                  >
                    Nourish
                    <br />
                    <span className="font-normal">Your Skin</span>
                  </h1>

                  <p
                    className={`mt-8 max-w-lg text-lg leading-8 ${
                      darkMode ? "text-[#B7BDB8]" : "text-[#5F544C]"
                    }`}
                  >
                    Discover luxurious skincare crafted with botanical extracts,
                    designed to restore, protect and reveal your natural glow.
                  </p>

                  <button
                    onClick={() => navigate("/shop")}
                    className={`mt-10 flex w-fit items-center gap-3 rounded-full px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      darkMode
                        ? "bg-[#4E6B57] hover:bg-[#3F5948]"
                        : "bg-[#5B4A3F] hover:bg-[#43362E]"
                    }`}
                  >
                    Explore Collection
                    <GrLinkNext />
                  </button>
                </div>

                <div className="absolute bottom-20 right-60 z-30">
                  {addCartProduct && (
                    <Link to={`/apis/${addCartProduct.id}`}>
                      <div
                        className={`
              group w-80 rounded-[30px] border p-6
              backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.30)]
              transition-all duration-500
              hover:-translate-y-3
              hover:scale-[1.02]
              ${
                darkMode
                  ? "border-white/10 bg-[#181D1A]/75"
                  : "border-white/30 bg-white/40"
              }
            `}
                      >
                        <div
                          className={`mx-auto flex h-48 w-48 items-center justify-center rounded-full ${
                            darkMode ? "bg-[#242C27]" : "bg-white/30"
                          }`}
                        >
                          <img
                            src={addCartProduct.images[0]}
                            alt={addCartProduct.title}
                            className="h-40 w-40 object-contain transition duration-500 group-hover:scale-110"
                          />
                        </div>

                        <h2
                          className={`mt-5 text-2xl font-light line-clamp-1 ${
                            darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                          }`}
                        >
                          {addCartProduct.title}
                        </h2>

                        <div className="mt-4 flex items-center justify-between">
                          <p
                            className={`text-2xl ${
                              darkMode ? "text-[#A8C0AD]" : "text-[#5B4A3F]"
                            }`}
                          >
                            ₹
                            {Math.floor(
                              addCartProduct.price * 100,
                            ).toLocaleString("en-IN")}
                          </p>

                          <span
                            className={`rounded-full px-4 py-2 text-sm text-white ${
                              darkMode ? "bg-[#4E6B57]" : "bg-[#5B4A3F]"
                            }`}
                          >
                            View
                          </span>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>

                <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2">
                  <p
                    className={`rotate-90 text-[15px] uppercase tracking-[5px] ${
                      darkMode ? "text-white/35" : "text-[#3E2E24]/50"
                    }`}
                  >
                    Natural Beauty
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`relative h-screen overflow-hidden bg-cover bg-center ${
                  darkMode ? "bg-[#111412]" : "bg-[#F8F5F0]"
                }`}
                style={{ backgroundImage: "url('/perfume.jpg')" }}
              >
                <div
                  className={`absolute inset-0 ${
                    darkMode ? "bg-black/45" : "bg-black/25"
                  }`}
                />

                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-r from-[#111412]/95 via-[#111412]/50 to-transparent"
                      : "bg-gradient-to-r from-[#15110F]/75 via-[#15110F]/30 to-transparent"
                  }`}
                />

                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-t from-[#111412]/70 to-transparent"
                      : "bg-gradient-to-t from-[#15110F]/40 to-transparent"
                  }`}
                />

                <div className="pointer-events-none absolute -right-20 top-1/2 z-0 -translate-y-1/2 -rotate-[18deg]"></div>

                <div className="relative z-20 flex h-full items-center justify-between px-20">
                  <div>
                    <div
                      className={`inline-flex items-center rounded-full border px-5 py-2 backdrop-blur-md ${
                        darkMode
                          ? "border-white/10 bg-white/10"
                          : "border-white/20 bg-white/10"
                      }`}
                    >
                      <span
                        className={`text-xs uppercase tracking-[0.35em] ${
                          darkMode ? "text-[#A8C0AD]" : "text-[#D6B17B]"
                        }`}
                      >
                        NEW COLLECTION 2026
                      </span>
                    </div>

                    <h1
                      className={`mt-8 text-7xl font-bold leading-[0.9] ${
                        darkMode ? "text-[#F2EEE6]" : "text-white"
                      }`}
                    >
                      Elegance
                      <br />
                      <span className="font-light">In Every Scent</span>
                    </h1>

                    <p
                      className={`mt-6 py-3 text-xl ${
                        darkMode ? "text-[#B9C0BB]" : "text-[#DDD5CB]"
                      }`}
                    >
                      Discover timeless fragrances crafted from the world's
                      finest ingredients, <br />
                      designed to leave a signature that lingers long after
                      you've left the room.
                    </p>

                    <button
                      onClick={() => navigate("/shop")}
                      className={`group mt-12 flex items-center gap-4 rounded-full border px-8 py-4 backdrop-blur-xl transition-all duration-300 ${
                        darkMode
                          ? "border-white/15 bg-white/10 text-[#F0EEE7] hover:bg-[#4E6B57] hover:text-white"
                          : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      <span>Explore Collection</span>

                      <span className="text-xl transition group-hover:translate-x-2">
                        →
                      </span>
                    </button>

                    <div className="mt-10 flex gap-14">
                      <div>
                        <h2
                          className={`text-4xl font-light ${
                            darkMode ? "text-[#F0EEE7]" : "text-white"
                          }`}
                        >
                          4.9★
                        </h2>

                        <p
                          className={`mt-2 text-xs uppercase tracking-[0.25em] ${
                            darkMode ? "text-[#9FA9A1]" : "text-[#C8BAA6]"
                          }`}
                        >
                          Rating
                        </p>
                      </div>

                      <div
                        className={`h-14 w-px ${
                          darkMode ? "bg-white/15" : "bg-white/20"
                        }`}
                      />

                      <div>
                        <h2
                          className={`text-4xl font-light ${
                            darkMode ? "text-[#F0EEE7]" : "text-white"
                          }`}
                        >
                          120+
                        </h2>

                        <p
                          className={`mt-2 text-xs uppercase tracking-[0.25em] ${
                            darkMode ? "text-[#9FA9A1]" : "text-[#C8BAA6]"
                          }`}
                        >
                          Fragrances
                        </p>
                      </div>

                      <div
                        className={`h-14 w-px ${
                          darkMode ? "bg-white/15" : "bg-white/20"
                        }`}
                      />

                      <div>
                        <h2
                          className={`text-4xl font-light ${
                            darkMode ? "text-[#F0EEE7]" : "text-white"
                          }`}
                        >
                          50K+
                        </h2>

                        <p
                          className={`mt-2 text-xs uppercase tracking-[0.25em] ${
                            darkMode ? "text-[#9FA9A1]" : "text-[#C8BAA6]"
                          }`}
                        >
                          Happy Clients
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-[420px] flex-col items-end">
                    {featuredProducts && (
                      <Link to={`/apis/${featuredProducts.id}`}>
                        <div
                          className={`
                group relative mt-40 w-[360px]
                rounded-[40px]
                border
                px-8 pb-8 pt-36
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                transition duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
                ${
                  darkMode
                    ? "border-white/10 bg-[#181D1A]/75"
                    : "border-white/20 bg-white/10"
                }
              `}
                        >
                          <div
                            className={`absolute left-1/2 top-[-70px] flex h-52 w-52 -translate-x-1/2 items-center justify-center rounded-full ${
                              darkMode ? "bg-[#252E28]/80" : "bg-white/10"
                            }`}
                          >
                            <img
                              src={featuredProducts.images[0]}
                              alt={featuredProducts.title}
                              className="h-56 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-110"
                            />
                          </div>

                          <p
                            className={`text-center text-xs uppercase tracking-[0.3em] ${
                              darkMode ? "text-[#A8C0AD]" : "text-[#D6B17B]"
                            }`}
                          >
                            Signature Pick
                          </p>

                          <h2
                            className={`mt-5 line-clamp-1 text-center text-2xl font-light ${
                              darkMode ? "text-[#F0EEE7]" : "text-white"
                            }`}
                          >
                            {featuredProducts.title}
                          </h2>

                          <div className="mt-8 flex items-center justify-between">
                            <div>
                              <p
                                className={`text-sm ${
                                  darkMode ? "text-[#929B95]" : "text-[#CFC2B5]"
                                }`}
                              >
                                Starting From
                              </p>

                              <h3
                                className={`text-3xl font-light ${
                                  darkMode ? "text-[#F0EEE7]" : "text-white"
                                }`}
                              >
                                ₹
                                {Math.floor(
                                  featuredProducts.price * 100,
                                ).toLocaleString("en-IN")}
                              </h3>
                            </div>

                            <button
                              className={`rounded-full border px-6 py-3 transition ${
                                darkMode
                                  ? "border-white/15 bg-[#4E6B57] text-white hover:bg-[#3F5948]"
                                  : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-black"
                              }`}
                            >
                              View →
                            </button>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2">
                  <p
                    className={`rotate-90 text-[10px] uppercase tracking-[5px] ${
                      darkMode ? "text-white/35" : "text-white/60"
                    }`}
                  >
                    Signature Fragrance
                  </p>
                </div>

                <div className="absolute bottom-8 left-20 z-20 flex items-center gap-3">
                  <div
                    className={`h-px w-10 ${
                      darkMode ? "bg-white/20" : "bg-white/40"
                    }`}
                  />

                  <span
                    className={`text-[10px] uppercase tracking-[4px] ${
                      darkMode ? "text-white/40" : "text-white/60"
                    }`}
                  >
                    02 / Signature Collection
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
         
        </div>

        {/* benefits */}
        <section
          className={`relative overflow-hidden py-28 ${
            darkMode ? "bg-[#141916]" : "bg-[#FCFAF7]"
          }`}
        >
           <div className="flex absolute right-5 flex-col top-10 items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7C8B73]">
  <span>Scroll to explore</span>
  <span className="text-lg">↓</span>
</div>
          <div className="pointer-events-none absolute -right-40 -top-40">
            <div
              className={`h-[600px] w-[600px] border border-dotted rounded-full border ${
                darkMode ? "border-white/[0.25]" : "border-[#32473D]/[0.25]"
              }`}
            />
            <div
              className={`absolute left-[100px] border border-dotted top-[100px] h-[400px] w-[400px] rounded-full border ${
                darkMode ? "border-white/[0.25]" : "border-[#32473D]/[0.20]"
              }`}
            />
          </div>

          <div className="pointer-events-none absolute -bottom-48 -left-48">
            <div
              className={`h-[500px] w-[500px] rounded-full border ${
                darkMode ? "border-white/[0.025]" : "border-[#32473D]/[0.04]"
              }`}
            />

            <div
              className={`absolute left-[90px] top-[90px] h-[320px] w-[320px] rounded-full border ${
                darkMode ? "border-white/[0.02]" : "border-[#32473D]/[0.03]"
              }`}
            />
          </div>

          <div className="relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p
                className={`text-sm uppercase tracking-[0.35em] ${
                  darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
                }`}
              >
                Why Choose SAGE
              </p>

              <h2
                className={`mt-5 text-5xl font-light ${
                  darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                }`}
              >
                Thoughtfully Crafted
                <br />
                For Everyday Living
              </h2>

              <p
                className={`mt-6 text-lg leading-8 ${
                  darkMode ? "text-[#A9ADA7]" : "text-[#6E6258]"
                }`}
              >
                Premium quality, timeless aesthetics, and exceptional service—
                everything designed to elevate your shopping experience.
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={`group rounded-[32px] border p-10 transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl ${
            darkMode
              ? "border-[#2A332D] bg-[#1B211D] hover:border-[#4E6B57]"
              : "border-[#E8DED3] bg-[#FFFCF8] hover:border-[#CDBAA6] hover:shadow-xl"
          }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition duration-300 ${
                      darkMode
                        ? "bg-[#252E28] text-[#8FA494] group-hover:bg-[#4E6B57] group-hover:text-white"
                        : "bg-[#F5EFE7] text-[#7C8B73] group-hover:bg-[#5B4A3F] group-hover:text-white"
                    }`}
                  >
                    {item.icons}
                  </div>

                  <h2
                    className={`mt-8 text-2xl font-light ${
                      darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                    }`}
                  >
                    {item.about}
                  </h2>

                  <div
                    className={`mt-4 h-px w-12 ${
                      darkMode ? "bg-[#4E6B57]" : "bg-[#D8CEC3]"
                    }`}
                  />

                  <p
                    className={`mt-5 leading-8 ${
                      darkMode ? "text-[#A9ADA7]" : "text-[#6F655D]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
                    <div className="flex absolute left-5 -bottom-16 items-center gap-3">
        <span className="flex h-8 font-mono w-8 items-center justify-center rounded-full border border-[#CFC7BB] text-xs text-[#6F806A]">
          02
        </span>

        <span className="text-sm uppercase font-mono tracking-[0.25em] text-[#6F806A]">
          WHY CHOOSE SAGE
        </span>
      </div>
          </div>
        </section>

        {/* shop-by-category */}

        <section
          className={`relative overflow-hidden mb-40 ${
            darkMode ? "bg-[#141916]" : "bg-[#FCFAF7]"
          }`}
        >
          <div className="pointer-events-none absolute -right-48 -top-48">
            <div
              className={`h-[600px] w-[600px] rounded-full border ${
                darkMode ? "border-white/[0.025]" : "border-[#32473D]/[0.04]"
              }`}
            />

            <div
              className={`absolute left-[100px] top-[100px] h-[400px] w-[400px] rounded-full border ${
                darkMode ? "border-white/[0.02]" : "border-[#32473D]/[0.03]"
              }`}
            />
          </div>
          <div className="relative z-10 mx-auto mb-16 max-w-7xl text-center">
            <p
              className={`text-sm uppercase tracking-[0.35em] ${
                darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
              }`}
            >
              Collections
            </p>

            <h1
              className={`mt-5 text-5xl font-light ${
                darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
              }`}
            >
              Shop by Category
            </h1>

            <p
              className={`mt-6 text-lg leading-8 ${
                darkMode ? "text-[#A9ADA7]" : "text-[#6E6258]"
              }`}
            >
              Carefully curated collections designed to complement every
              lifestyle and every home.
            </p>
          </div>

          <div className="relative z-10 grid max-w-8xl mx-auto gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((item) => (
              <div
                key={item.id}
                className={`group overflow-hidden rounded-[30px] border transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "border-[#2A332D] bg-[#1B211D] hover:border-[#4E6B57] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
                    : "border-[#E6DDD2] bg-white hover:shadow-xl"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      darkMode
                        ? "bg-black/0 group-hover:bg-black/20"
                        : "bg-black/0 group-hover:bg-black/10"
                    }`}
                  />

                  <div
                    className={`absolute right-5 top-5 h-9 w-9 rounded-full border opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                      darkMode ? "border-white/20" : "border-white/50"
                    }`}
                  />
                </div>

                {/* CONTENT */}

                <div className="p-7">
                  <h2
                    className={`text-2xl font-light ${
                      darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                    }`}
                  >
                    {item.title}
                  </h2>

                  <div
                    className={`mt-4 h-px w-10 transition-all duration-500 group-hover:w-16 ${
                      darkMode ? "bg-[#4E6B57]" : "bg-[#D8CEC3]"
                    }`}
                  />

                  <button
                    onClick={() => navigate("/shop")}
                    className={`mt-5 flex items-center gap-3 transition-all duration-300 group-hover:gap-5 ${
                      darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
                    }`}
                  >
                    Explore
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* discount */}

        <section
          className={`my-20 overflow-hidden ${
            darkMode ? "bg-[#151B17]" : "bg-[#E8E2D8]"
          }`}
        >
          <div className="flex items-center">
            {/* Left Content */}
            <div className="w-[45%] px-20">
              <p
                className={`mb-10 mt-10 max-w-sm text-xl italic leading-8 ${
                  darkMode ? "text-[#AAB5AC]" : "text-[#6E6258]"
                }`}
              >
                “Lighting shapes the atmosphere before a single word is spoken.”
              </p>

              <p
                className={`uppercase tracking-[0.35em] text-sm ${
                  darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
                }`}
              >
                Inspired Living
              </p>

              <h1
                className={`mt-5 text-6xl font-light tracking-tight ${
                  darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                }`}
              >
                Enlighten
                <br />
                Your Home
              </h1>

              <p
                className={`mt-8 text-lg leading-8 max-w-xl ${
                  darkMode ? "text-[#AEB5AF]" : "text-[#6E6258]"
                }`}
              >
                Bring warmth and sophistication into every room with timeless
                lighting pieces that blend modern elegance with everyday
                comfort.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className={`mt-8 rounded-full px-8 py-4 transition-all duration-300 ${
                  darkMode
                    ? "bg-[#4E6B57] text-[#F5F3ED] hover:bg-[#617D69] hover:shadow-[0_10px_30px_rgba(78,107,87,0.25)]"
                    : "bg-[#536650] text-white hover:bg-[#435342] hover:shadow-lg"
                }`}
              >
                Explore Collection
              </button>
            </div>

            {/* Right Image */}
            <div className="w-[55%] relative">
              <img
                src="/interior.jpg"
                alt="Interior"
                className="h-[650px] w-full object-cover"
              />
              <p className="absolute -right-5 top-1/2 font-mono -translate-y-1/2 z-80 rotate-90 text-sm tracking-[0.4em] text-black/60">
  SAGE LIVING
</p>
            </div>
          
          </div>
        </section>

        {/* Best Sellers */}

        <section
          className={`py-24 relative overflow-hidden transition-colors duration-500 ${
            darkMode ? "bg-[#121814]" : "bg-[#FCFAF7]"
          }`}
        >
     <div className="pointer-events-none absolute -right-60 top-10">
            <div
              className={`h-[600px] w-[600px] border border-dotted rounded-full border ${
                darkMode ? "border-white/[0.35]" : "border-[#32473D]/[0.35]"
              }`}
            />
            <div
              className={`absolute left-[100px] border border-dotted top-[100px] h-[400px] w-[400px] rounded-full border ${
                darkMode ? "border-white/[0.35]" : "border-[#32473D]/[0.35]"
              }`}
            />

          </div>
          
          <div className="mx-auto max-w-8xl px-8">
            {/* Heading */}
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p
                  className={`text-sm uppercase tracking-[0.35em] ${
                    darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
                  }`}
                >
                  Customer Favorites
                </p>

                <h1
                  className={`mt-4 text-5xl font-light tracking-tight ${
                    darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                  }`}
                >
                  Best Sellers
                </h1>

                <p
                  className={`mt-5 max-w-xl text-lg leading-8 ${
                    darkMode ? "text-[#A8B0AA]" : "text-[#6E6258]"
                  }`}
                >
                  Discover our most-loved pieces, chosen by thousands of
                  customers for their timeless quality and exceptional
                  craftsmanship.
                </p>
              </div>

              {/* View All */}
              <button
                onClick={() => navigate("/shop")}
                className={`group flex items-center gap-3 rounded-full border px-7 py-3 transition-all duration-300 ${
                  darkMode
                    ? "border-[#3A493F] text-[#A8B8AC] hover:border-[#4E6B57] hover:bg-[#4E6B57] hover:text-[#F5F3ED]"
                    : "border-[#D9CDC1] text-[#536650] hover:bg-[#536650] hover:text-white"
                }`}
              >
                View All
                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={4}
              spaceBetween={24}
              className="pb-8"
            >
              {product.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section
          className={`py-20 transition-colors duration-500 ${
            darkMode ? "bg-[#121814]" : "bg-[#FCFAF7]"
          }`}
        >
          <div className="mx-auto px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* ================= LEFT CARD ================= */}

              <div className="group relative overflow-hidden rounded-[30px] border border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-[600px] bg-[url('/frag.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-[1.01]">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111713]/90 via-[#182019]/45 to-black/10" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-center p-20 text-white">
                    <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#B3C1B5]">
                      Limited Time Offer
                    </p>

                    <h2 className="mt-4 text-6xl font-light leading-tight tracking-tight">
                      Get
                      <span className="text-[#A8BEAD]"> 30% OFF</span>
                      <br />
                      Your First Order
                    </h2>

                    <p className="mt-5 max-w-md text-lg leading-8 text-white/75">
                      Experience our signature collection crafted with timeless
                      elegance. Elevate your lifestyle with exclusive designs
                      made for modern living.
                    </p>

                    {/* CTA */}
                    <button
                      onClick={() => navigate("/shop")}
                      className="mt-7 w-fit rounded-full bg-[#F5F3ED] px-8 py-4 font-medium text-[#34483B] transition-all duration-300 hover:scale-105 hover:bg-[#DDE5DE] hover:shadow-xl"
                    >
                      Shop Collection →
                    </button>

                    {/* Small Note */}
                    <p className="mt-6 text-sm tracking-wide text-white/50">
                      Offer valid until August 31 • Terms & Conditions Apply
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT CARD ================= */}

              <div className="group relative overflow-hidden rounded-[30px] border border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-[600px] bg-[url('/beauty.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-[1.01]">
                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111713]/90 via-[#182019]/45 to-black/10" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-center p-20 text-white">
                    <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#B3C1B5]">
                      Exclusive Coupon
                    </p>

                    <h2 className="mt-4 text-6xl font-light leading-tight tracking-tight">
                      Save More
                      <br />
                      Every Order
                    </h2>

                    {/* Coupon */}
                    <div className="mt-6 inline-flex w-fit items-center rounded-2xl border border-[#DCE5DE]/20 bg-[#314338]/40 px-7 py-3 backdrop-blur-xl">
                      <span className="text-3xl font-semibold tracking-widest text-[#EDF2ED]">
                        SAGE30
                      </span>
                    </div>

                    <p className="mt-5 max-w-lg text-lg leading-8 text-white/75">
                      Apply this exclusive code during checkout and enjoy
                      instant savings on our handcrafted premium collection.
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => {
                        return toast.success("coupon copied");
                      }}
                      className="mt-8 w-fit rounded-full border border-[#DCE5DE]/50 bg-[#314338]/40 px-8 py-4 text-[#F3F5F1] backdrop-blur-md transition-all duration-300 hover:border-[#F3F5F1] hover:bg-[#F3F5F1] hover:text-[#34483B]"
                    >
                      Copy Coupon →
                    </button>

                    <p className="mt-6 text-sm text-white/50">
                      Valid until August 31 • One use per customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact-us */}

        <section
          className={`py-24 ${darkMode ? "bg-[#121814]" : "bg-[#FCFAF7]"}`}
        >
          <div
            className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-[40px] px-12 py-16 lg:flex-row ${
              darkMode
                ? "bg-[#1C251F] border border-[#2B352E]"
                : "bg-[#E8E2D8] border border-[#DDD5C9]"
            }`}
          >
            {/* Content */}
            <div>
              <p
                className={`uppercase tracking-[4px] text-sm font-semibold ${
                  darkMode ? "text-[#8FA494]" : "text-[#6F806A]"
                }`}
              >
                We're Here to Help
              </p>

              <h2
                className={`mt-3 text-5xl font-light tracking-tight ${
                  darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                }`}
              >
                Need Assistance?
              </h2>

              <p
                className={`mt-5 max-w-xl text-lg leading-8 ${
                  darkMode ? "text-[#AAB3AC]" : "text-[#6E6258]"
                }`}
              >
                Have questions about your order, products, or delivery? Our team
                is always ready to help you with quick and friendly support.
              </p>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className={`rounded-full px-12 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-[#4E6B57] text-[#F5F3ED] hover:bg-[#617D69] hover:shadow-[0_12px_30px_rgba(78,107,87,0.25)]"
                  : "bg-[#536650] text-white hover:bg-[#435342] hover:shadow-lg"
              }`}
            >
              Contact Us →
            </Link>
          </div>
        </section>

        {/* footer */}
        <footer className="bg-[#1F1F1F] text-white">
          <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-5xl font-serif tracking-wider">SAGE</h2>

              <p className="mt-6 text-gray-400 leading-7">
                Discover premium beauty, stylish furniture, everyday groceries,
                fragrances, and more—all in one place.
              </p>

              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6B89D] transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6B89D] transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6B89D] transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6B89D] transition"
                >
                  <FaPinterestP />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Shop</h3>

              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-white cursor-pointer">Beauty</li>
                <li className="hover:text-white cursor-pointer">Furniture</li>
                <li className="hover:text-white cursor-pointer">Groceries</li>
                <li className="hover:text-white cursor-pointer">Fragrances</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>

              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Our Story</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Support</h3>

              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">Shipping</li>
                <li className="hover:text-white cursor-pointer">Returns</li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2026 SAGE. All rights reserved.</p>

              <div className="flex gap-6 mt-4 md:mt-0">
                <p className="hover:text-white cursor-pointer">Privacy</p>
                <p className="hover:text-white cursor-pointer">Terms</p>
                <p className="hover:text-white cursor-pointer">Cookies</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
