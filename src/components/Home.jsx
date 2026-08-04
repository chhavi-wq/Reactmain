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
        className={`min-h-screen w-full${
          darkMode ? "bg-[#121814]" : "bg-[#FCFAF7]"
        }`}
      >
        <div className="mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="min-h-[700px] md:min-h-[600px] lg:min-h-screen"
          >
            <SwiperSlide>
  <div
    className={`relative flex lg:min-h-screen min-h-screen flex-col transition-colors duration-300 lg:flex-row ${
      darkMode ? "bg-[#141916]" : "bg-[#F8F5F0]"
    }`}
  >


    <div className="order-1 h-[40vh] w-full overflow-hidden lg:order-2 lg:h-screen lg:w-1/2">
      <img
        src="/furniture.jpeg"
        alt="Furniture"
        className="h-full w-full object-cover"
      />
    </div>

   <div className="order-2 flex w-full flex-col justify-center px-6 py-3 sm:px-10 lg:order-1 lg:w-1/2 lg:!px-19 lg:py-0">
  
<h1
  className={`mt-6 text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:!text-[80px] ${
    darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
  }`}
>
  Furniture that <br />
  <span className="font-bold">Feels Like Home</span>
</h1>
  <p
    className={`mt-6 max-w-lg text-sm leading-7 sm:text-base sm:leading-8 lg:mt-8 ${
      darkMode ? "text-[#A9ADA7]" : "text-[#5F544C]"
    }`}
  
      >
        Discover thoughtfully crafted furniture that combines
        timeless design, exceptional comfort, and lasting quality
        for every corner of your home.
      </p>

      <button
        onClick={() => navigate("/shop")}
        className={`mt-8 flex w-fit items-center gap-3 rounded-full px-6 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base ${
          darkMode
            ? "bg-[#4E6B57] hover:bg-[#3F5948]"
            : "bg-[#5B4A3F] hover:bg-[#43362E]"
        }`}
      >
        Explore Collection
        <GrLinkNext />
      </button>

      <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">

        <div
          className={`rounded-2xl border px-4 py-3 shadow-sm sm:px-6 sm:py-4 ${
            darkMode
              ? "border-[#2A332D] bg-[#181D1A]"
              : "border-[#DDD2C6] bg-[#FCFAF7]"
          }`}
        >
          <p
            className={`text-xl font-light sm:text-2xl ${
              darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
            }`}
          >
            500K+
          </p>

          <p
            className={`text-xs sm:text-sm ${
              darkMode ? "text-[#A9ADA7]" : "text-[#7B7067]"
            }`}
          >
            Happy Customers
          </p>
        </div>

        <div
          className={`rounded-2xl border px-4 py-3 shadow-sm sm:px-6 sm:py-4 ${
            darkMode
              ? "border-[#2A332D] bg-[#181D1A]"
              : "border-[#DDD2C6] bg-[#FCFAF7]"
          }`}
        >
          <p
            className={`text-xl font-light sm:text-2xl ${
              darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
            }`}
          >
            4.9★
          </p>

          <p
            className={`text-xs sm:text-sm ${
              darkMode ? "text-[#A9ADA7]" : "text-[#7B7067]"
            }`}
          >
            Customer Rating
          </p>
        </div>

      </div>

   
      <span
        className={`mt-8 text-[10px] uppercase tracking-[3px] sm:mt-10 md:mt-10 sm:text-[13px] sm:tracking-[4px] lg:absolute lg:bottom-8 ${
          darkMode ? "text-white/40" : "text-black/60"
        }`}
      >
        02 / Furniture Collection
      </span>

      <span className="absolute right-[-55px] top-1/2 hidden -rotate-90 text-[13px] uppercase tracking-[4px] text-white lg:block">
        Comfortable Furniture ever
      </span>


      <div className="pointer-events-none absolute lg:-left-42 lg:-top-32 hidden lg:block">

        <div
          className={`h-[500px] w-[500px] rounded-full border ${
            darkMode
              ? "border-white/[0.14]"
              : "border-black/[0.10]"
          }`}
        />

        <div
          className={`absolute left-[75px] top-[75px] h-[350px] w-[350px] rounded-full border ${
            darkMode
              ? "border-white/[0.14]"
              : "border-black/[0.10]"
          }`}
        />

      </div>

    </div>

  </div>
</SwiperSlide>

            <SwiperSlide>
              <div
                className={`relative lg:!h-screen flex lg:flex-row flex-col min-h-screen overflow-hidden bg-cover bg-center ${
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

                <div className="relative z-10 flex w-full flex h-full items-center px-8 py-22 lg:!py-0 lg:!px-20">
                  <div className="max-w-xl">
                    <div className="flex hidden lg:!flex items-center gap-4">
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
                      className={`lg:!mt-6 lg:!text-7xl text-4xl lg:!py-0 py-2 font-semibold leading-[1.05] ${
                        darkMode ? "text-[#F2EEE6]" : "text-white"
                      }`}
                    >
                      Fresh & Organic
                      <br />
                      <span className="font-light">Goodness</span>
                    </h1>

                    <p
                      className={`lg:!mt-6 mt-3 max-w-lg lg:!text-lg text-sm leading-5 lg:!leading-8 ${
                        darkMode ? "text-[#B8C0BA]" : "text-white/90"
                      }`}
                    >
                      Carefully selected organic fruits and vegetables,
                      delivered fresh to your doorstep with quality you can
                      trust.
                    </p>

                    <button
                      onClick={() => navigate("/shop")}
                      className={`lg:!mt-9 mt-4 flex items-center text-sm gap-3 rounded-full lg:!px-8 py-2 px-6 lg:!py-4
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

                    <div className="mt-12 hidden lg:flex flex items-center gap-8">
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
                      className={`mt-8 hidden lg:!flex flex items-center gap-3 text-sm ${
                        darkMode ? "text-[#A9ADA7]" : "text-white/70"
                      }`}
                    >
                      <span className="flex h-2 w-2 rounded-full bg-[#78917C]" />
                      Freshly sourced every morning
                    </div>
                  </div>
                </div>

                <div className="items-center flex justify-center w-full z-30">
                  {grocery && (
                    <Link to={`/apis/${grocery.id}`}>
                      <div
                        className={`
                          group lg:!w-[400px] w-[300px] rounded-[32px] border p-6
                          backdrop-blur-2xl lg:!-translate-y-0 -translate-y-15
                          shadow-[0_25px_80px_rgba(0,0,0,0.20)]
                          transition-all duration-500
                          hover:-translate-y-18
                          hover:shadow-[0_35px_90px_rgba(0,0,0,0.28)]
                          ${
                            darkMode
                              ? "border-white/10 bg-[#181D1A]/80"
                              : "border-[#DDE3DC] bg-white/80"
                          }
                        `}
                      >
                     
                        <div className="flex items-center justify-between">
                          <div>
                            <p
                              className={`text-[10px] font-medium uppercase tracking-[0.28em] ${
                                darkMode ? "text-[#9FB2A2]" : "text-[#68776C]"
                              }`}
                            >
                              Featured Product
                            </p>

                            <p
                              className={`mt-1 lg:!text-[13px] text-[10px] ${
                                darkMode ? "text-[#718276]" : "text-[#9AA39B]"
                              }`}
                            >
                              From our organic collection
                            </p>
                          </div>

                          <span
                            className={`h-2 w-2 rounded-full ${
                              darkMode ? "bg-[#78917C]" : "bg-[#4E6B57]"
                            }`}
                          />
                        </div>

                       
                        <div
                          className={`
                            relative mx-auto mt-3 lg:!mt-6 flex lg:!h-52 h-40 w-40 lg:!w-52
                            items-center justify-center rounded-full
                            transition-all duration-500 
                            group-hover:scale-[1.04]
                            ${darkMode ? "bg-[#27352B]" : "bg-[#EEF1E9]"}
                          `}
                        >
                          <div
                            className={`absolute inset-4 rounded-full border ${
                              darkMode ? "border-white/5" : "border-white/70"
                            }`}
                          />

                          <img
                            src={grocery.images[0]}
                            alt={grocery.title}
                            className="relative lg:!h-44 lg:!w-44 h-38 w-38 object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                     
                        <div className="mt-6">
                          <p
                            className={`text-xs font-medium uppercase tracking-[0.18em] ${
                              darkMode ? "text-[#8FA494]" : "text-[#718075]"
                            }`}
                          >
                            Organic Collection
                          </p>

                          <h2
                            className={`mt-2 lg:!text-[25px] text-[17px] font-light leading-tight line-clamp-1 ${
                              darkMode ? "text-[#F0EEE7]" : "text-[#23332B]"
                            }`}
                          >
                            {grocery.title}
                          </h2>

                          <p
                            className={`mt-2 lg:!text-sm  text-xs leading-relaxed ${
                              darkMode ? "text-[#8C9B90]" : "text-[#7D857E]"
                            }`}
                          >
                            A thoughtfully selected product designed to bring
                            simplicity, quality, and a natural touch to your
                            everyday.
                          </p>

                          <div className="mt-5 flex items-center justify-between">
                            <div>
                              <p
                                className={`lg:!text-[15px] text-[10px] uppercase tracking-widest ${
                                  darkMode ? "text-[#718276]" : "text-[#9AA39B]"
                                }`}
                              >
                                Price
                              </p>

                              <h3
                                className={`mt-1 lg:!text-2xl text-sm font-light ${
                                  darkMode ? "text-[#F0EEE7]" : "text-[#23332B]"
                                }`}
                              >
                                ₹
                                {Math.floor(grocery.price * 100).toLocaleString(
                                  "en-IN",
                                )}
                              </h3>
                            </div>

                            <span
                              className={`
                                flex items-center gap-2 rounded-full
                                px-5 py-2.5 text-xs font-medium text-white
                                transition-all duration-300
                                ${
                                  darkMode
                                    ? "bg-[#4E6B57] group-hover:bg-[#3F5948]"
                                    : "bg-[#4E6B57] group-hover:bg-[#32473D]"
                                }
                              `}
                            >
                              View
                              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
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
                className={`relative flex lg:!flex-row flex-col lg:min-h-screen min-h-screen bg-[url('/skin.jpg')] bg-cover bg-center ${
                  darkMode ? "bg-[#111412]" : "bg-[#F8F5F0]"
                }`}
              >
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-r from-[#111412]/95 via-[#111412]/65 to-transparent"
                      : "bg-gradient-to-r from-[#F8F5F0]/70 via-[#F8F5F0]/20 to-transparent"
                  }`}
                />

<div className="relative z-10 flex flex-col justify-center px-5 lg:py-0 py-15 lg:!px-20">


  <span
    className={`w-fit lg:!mt-0 mt-5 rounded-full border px-5 py-2 text-[9px] lg:!text-xs uppercase tracking-[0.2em] backdrop-blur-md ${
      darkMode
        ? "border-white/10 bg-white/5 text-[#A8C0AD]"
        : "border-white/30 bg-white/40 text-[#8A6A50]"
    }`}
  >
    ✦ Botanical Skincare
  </span>

  
  <h1
    className={`lg:!mt-7 mt-5 lg:text-6xl text-4xl font-light leading-[0.95] tracking-tight lg:!text-[80px] ${
      darkMode ? "text-[#F2EEE6]" : "text-[#3E2E24]"
    }`}
  >
    Nourish
    <br />
    <span className="font-bold">Your Skin</span>
  </h1>


  <p
    className={`lg:!mt-6 max-w-lg lg:!max-w-xl  mt-4 text-sm leading-5 lg:!text-lg lg:!leading-8 ${
      darkMode ? "text-[#B7BDB8]" : "text-[#6F655D]"
    }`}
  >
    Discover luxurious skincare crafted with botanical extracts,
    designed to restore, protect and reveal your natural glow.
  </p>


  <button
    onClick={() => navigate("/shop")}
    className={`group lg:!mt-8 mt-5 flex w-fit items-center gap-3 rounded-full px-7 py-3.5 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:px-8 lg:py-4 lg:text-base ${
      darkMode
        ? "bg-[#4E6B57] hover:bg-[#3F5948]"
        : "bg-[#5B4A3F] hover:bg-[#43362E]"
    }`}
  >
    Explore Collection
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      <GrLinkNext />
    </span>
  </button>


  <div className="mt-11 hidden lg:!flex flex items-center gap-8">

   
    <div>
      <h2
        className={`font-light text-4xl ${
          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
        }`}
      >
        4.9★
      </h2>

      <p
        className={`mt-1 text-[15px]  uppercase tracking-wider ${
          darkMode ? "text-[#929B95]" : "text-[#7B7067]"
        }`}
      >
        Average Rating
      </p>
    </div>

    <div
      className={`h-13 w-px ${
        darkMode ? "bg-white/10" : "bg-[#CFC5BA]"
      }`}
    />

    
    <div>
      <h2
        className={`font-light text-4xl ${
          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
        }`}
      >
        25K+
      </h2>

      <p
        className={`mt-1 text-[15px] uppercase tracking-wider ${
          darkMode ? "text-[#929B95]" : "text-[#7B7067]"
        }`}
      >
        Happy Customers
      </p>
    </div>

    <div
      className={`h-13 w-px ${
        darkMode ? "bg-white/10" : "bg-[#CFC5BA]"
      }`}
    />


    <div>
      <h2
        className={` font-light text-4xl ${
          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
        }`}
      >
        100%
      </h2>

      <p
        className={`mt-1 text-[15px] uppercase tracking-wider ${
          darkMode ? "text-[#929B95]" : "text-[#7B7067]"
        }`}
      >
        Botanical Formula
      </p>
    </div>

  </div>
</div>

              <div className="relative -translate-y-7 lg:-right-34 lg:-translate-y-0 z-30 flex items-center justify-center">
                {addCartProduct && (
                  <Link to={`/apis/${addCartProduct.id}`}>
                    <div
                      className={`
                        group relative lg:!w-[400px] w-[300px] rounded-[32px] border p-6
                        backdrop-blur-2xl
                        shadow-[0_25px_80px_rgba(0,0,0,0.30)]
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
                    
                      <span
                        className={`absolute right-5 top-5 rounded-full px-3 py-1 text-[9px] uppercase tracking-wider ${
                          darkMode
                            ? "bg-[#4E6B57]/40 text-[#A8C0AD]"
                            : "bg-[#D6B17B]/30 text-[#8A6A50]"
                        }`}
                      >
                        Featured
                      </span>

                
                      <div
                        className={`mx-auto flex lg:!h-[250px] lg:!w-[250px] h-[150px] w-[150px] items-center justify-center rounded-full ${
                          darkMode ? "bg-[#242C27]" : "bg-white/30"
                        }`}
                      >
                        <img
                          src={addCartProduct.images[0]}
                          alt={addCartProduct.title}
                          className="lg:!h-44 lg:!w-44 h-35 w-35 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] transition duration-500 group-hover:scale-110"
                        />
                      </div>


<div className="mt-5">
  <p
    className={`text-[9px] uppercase tracking-[0.3em] ${
      darkMode ? "text-[#A8C0AD]" : "text-[#8A6A50]"
    }`}
  >
    Signature Selection
  </p>

  <h2
    className={`mt-2 line-clamp-1 text-2xl font-light tracking-wide ${
      darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
    }`}
  >
    {addCartProduct.title}
  </h2>

  <p
    className={`mt-1 lg:!text-sm text-xs ${
      darkMode ? "text-[#929B95]" : "text-[#81746B]"
    }`}
  >
    Thoughtfully selected for timeless style & everyday elegance.
  </p>
</div>


<div className="mt-5 flex items-end justify-between gap-4 border-t pt-4">
  <div>
    <p
      className={`text-[9px] uppercase tracking-[0.2em] ${
        darkMode ? "text-[#929B95]" : "text-[#8A7A70]"
      }`}
    >
      Starting From
    </p>

    <p
      className={`mt-1 lg:!text-2xl text-xl font-light tracking-wide ${
        darkMode ? "text-[#A8C0AD]" : "text-[#5B4A3F]"
      }`}
    >
      ₹
      {Math.floor(
        addCartProduct.price * 100
      ).toLocaleString("en-IN")}
    </p>
  </div>

  <span
    className={`group/view flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition-all duration-300 ${
      darkMode
        ? "bg-[#4E6B57] hover:bg-[#3F5948]"
        : "bg-[#5B4A3F] hover:bg-[#43362E]"
    }`}
  >
    View
    <span className="transition-transform duration-300 group-hover/view:translate-x-1">
      →
    </span>
  </span>
</div>



                     
                    </div>
                  </Link>
                )}
              </div>


              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`relative min-h-screen flex flex-row overflow-hidden lg:min-h-screen bg-cover bg-center ${
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

            <div className="relative z-20 lg:flex-row flex flex-col h-full lg:py-0 py-20 px-4 items-center lg:!px-20">
              <div>
                <div
                  className={`inline-flex items-center rounded-full lg:mt-0 mt-2 border px-5 py-2 backdrop-blur-md ${
                    darkMode
                      ? "border-white/10 bg-white/10"
                      : "border-white/20 bg-white/10"
                  }`}
                >
                  <span
                    className={`lg:text-xs text-[8px] uppercase tracking-[0.35em] ${
                      darkMode ? "text-[#A8C0AD]" : "text-[#D6B17B]"
                    }`}
                  >
                    NEW COLLECTION 2026
                  </span>
                </div>

                <h1
                  className={`mt-8 text-4xl sm:text-5xl md:text-6xl lg:!text-7xl font-bold leading-[0.9] ${
                    darkMode ? "text-[#F2EEE6]" : "text-white"
                  }`}
                >
                  Elegance
                  <br />
                  <span className="font-light">In Every Scent</span>
                </h1>

                <p
                  className={`mt-6 lg:!mt-10 w-[45vh] md:w-[55vh] lg:w-[100vh] md:text-sm lg:!text-lg text-sm ${
                    darkMode ? "text-[#B9C0BB]" : "text-[#DDD5CB]"
                  }`}
                >
                  Discover timeless fragrances crafted from the world's
                  finest ingredients, 
                  designed to leave a signature that lingers long after
                  you've left the room.
                </p>

                <button
                  onClick={() => navigate("/shop")}
                  className={`group mt-8 lg:!my-12 flex items-center text-sm lg:!text-xl gap-4 rounded-full border px-4 py-2 lg:px-8 lg:py-4 backdrop-blur-xl transition-all duration-300 ${
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

                <div className="mt-10 lg:flex hidden flex gap-5 lg:gap-14">
                  <div>
                    <h2
                      className={`lg:!text-4xl text-xl font-light ${
                        darkMode ? "text-[#F0EEE7]" : "text-white"
                      }`}
                    >
                      4.9★
                    </h2>

                    <p
                      className={`mt-2 lg:!text-xs text-[10px] uppercase tracking-[0.25em] ${
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
                      className={`lg:!text-4xl text-xl font-light ${
                        darkMode ? "text-[#F0EEE7]" : "text-white"
                      }`}
                    >
                      120+
                    </h2>

                    <p
                      className={`mt-2 lg:!text-xs text-[10px] uppercase tracking-[0.25em] ${
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
                      className={`lg:!text-4xl text-xl font-light ${
                        darkMode ? "text-[#F0EEE7]" : "text-white"
                      }`}
                    >
                      50K+
                    </h2>

                    <p
                      className={`mt-2 lg:!text-xs text-[10px] uppercase tracking-[0.25em] ${
                        darkMode ? "text-[#9FA9A1]" : "text-[#C8BAA6]"
                      }`}
                    >
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex lg:w-[420px] w-[350px] flex-col items-end">
                {featuredProducts && (
                  <Link to={`/apis/${featuredProducts.id}`}>
                    <div
                      className={`
            group relative lg:mt-40 mt-25 lg:w-[360px] w-[320px]
            rounded-[40px]
            border lg:mr-0 mr-6
            lg:px-8 px-4 pb-8 lg:pt-36 pt-25
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
                        className={`absolute left-1/2 top-[-70px] flex lg:!h-52 lg:!w-52 h-40 w-40 -translate-x-1/2 items-center justify-center rounded-full ${
                          darkMode ? "bg-[#252E28]/80" : "bg-white/10"
                        }`}
                      >
                        <img
                          src={featuredProducts.images[0]}
                          alt={featuredProducts.title}
                          className="lg:!h-46 h-30 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-110"
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

                      <div className="lg:!mt-8 mt-6 flex items-center justify-between">
                        <div>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-[#929B95]" : "text-[#CFC2B5]"
                            }`}
                          >
                            Starting From
                          </p>

                          <h3
                            className={`lg:text-3xl text-xl font-light ${
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

            <div className="absolute right-10 hidden lg:block top-120 z-20 -translate-y-1/2">
              <p
                className={`rotate-90 text-[10px] uppercase tracking-[5px] ${
                  darkMode ? "text-white/35" : "text-white/60"
                }`}
              >
                Signature Fragrance
              </p>
            </div>

            <div className="absolute bottom-8 left-15  z-20 flex items-center gap-3">
              <div
                className={`h-px w-10 ${
                  darkMode ? "bg-white/20" : "bg-white/40"
                }`}
              />

              <span
                className={`lg:!text-[10px]  text-[8px] uppercase tracking-[4px] ${
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
          className={`relative overflow-hidden py-25 lg:!py-28 ${
            darkMode ? "bg-[#141916]" : "bg-[#FCFAF7]"
          }`}
        >
          <div className="flex absolute right-5 flex-col top-2 lg:!top-10 items-center text-[10px] gap-2 lg:!text-xs uppercase tracking-[0.3em] text-[#7C8B73]">
            <span>Scroll to explore</span>
            <span className="text-md lg:!text-lg">↓</span>
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
                className={`lg:!text-sm text-sm uppercase tracking-[0.35em] ${
                  darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
                }`}
              >
                Why Choose SAGE
              </p>

              <h2
                className={`mt-5 text-3xl lg:!text-5xl font-light ${
                  darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
                }`}
              >
                Thoughtfully Crafted
                <br />
                For Everyday Living
              </h2>

              <p
                className={`lg:!mt-6 px-3 !lg:px-0 mt-3 text-md lg:!text-lg leading-5 lg:!leading-8 ${
                  darkMode ? "text-[#A9ADA7]" : "text-[#6E6258]"
                }`}
              >
                Premium quality, timeless aesthetics, and exceptional service—
                everything designed to elevate your shopping experience.
              </p>
            </div>

           <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 lg:px-8">
  {benefits.map((item, index) => (
    <div
      key={index}
      className={`group rounded-[28px] border p-3 lg:!p-6 transition-all duration-500 lg:p-7
        hover:-translate-y-2 hover:shadow-2xl ${
          darkMode
            ? "border-[#2A332D] bg-[#1B211D] hover:border-[#4E6B57]"
            : "border-[#E8DED3] bg-[#FFFCF8] hover:border-[#CDBAA6] hover:shadow-xl"
        }`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition duration-300 ${
          darkMode
            ? "bg-[#252E28] text-[#8FA494] group-hover:bg-[#4E6B57] group-hover:text-white"
            : "bg-[#F5EFE7] text-[#7C8B73] group-hover:bg-[#5B4A3F] group-hover:text-white"
        }`}
      >
        {item.icons}
      </div>

      <h2
        className={`mt-6 text-xl font-light ${
          darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
        }`}
      >
        {item.about}
      </h2>

      <div
        className={`mt-4 h-px w-10 ${
          darkMode ? "bg-[#4E6B57]" : "bg-[#D8CEC3]"
        }`}
      />

      <p
        className={`mt-4 text-xs lg:!text-sm leading-5 lg:!leading-7 ${
          darkMode ? "text-[#A9ADA7]" : "text-[#6F655D]"
        }`}
      >
        {item.description}
      </p>
    </div>
  ))}
</div>
            <div className="flex absolute left-5 -bottom-16 items-center gap-3">
              <span className="flex h-8 font-mono w-8 items-center justify-center rounded-full border border-[#CFC7BB] text-[10px] lg:!text-xs text-[#6F806A]">
                02
              </span>

              <span className="lg:!text-sm text-xs uppercase font-mono tracking-[0.25em] text-[#6F806A]">
                WHY CHOOSE SAGE
              </span>
            </div>
          </div>
        </section>

        {/* shop-by-category */}

        <section
          className={`relative overflow-hidden ${
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
              className={`lg:!mt-5 mt-3 lg:!text-5xl text-3xl md:!text-4xl  font-light ${
                darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
              }`}
            >
              Shop by Category
            </h1>

            <p
              className={`lg:!mt-6  mt-5 lg:!text-lg text-md px-7 lg:!px-0 leading-5 lg:!leading-8 ${
                darkMode ? "text-[#A9ADA7]" : "text-[#6E6258]"
              }`}
            >
              Carefully curated collections designed to complement every
              lifestyle and every home.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:!mb-40 mb-15 max-w-8xl mx-auto gap-6 lg:!gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
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
                    className="lg:!h-80 h-40 w-full object-cover transition duration-700 group-hover:scale-110"
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

                <div className="lg:!p-7 p-5">
                  <h2
                    className={`lg:!text-2xl text-lg font-light ${
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
          className={`flex lg:!flex-row lg:!mt-0  flex-col overflow-hidden ${
            darkMode ? "bg-[#151B17]" : "bg-[#E8E2D8]"
          }`}
        >
         
            {/* Left Content */}
            <div className="order-2 flex h-full w-full flex-col items-start justify-center px-6 py-10 sm:px-10 lg:!w-[45%] lg:!px-15 lg:!py-15">
  <p
    className={`mb-6 mt-6 max-w-sm text-sm italic leading-6 sm:mb-8 sm:mt-8 sm:text-base lg:mb-10 lg:mt-10 lg:!text-xl lg:!leading-8 ${
      darkMode ? "text-[#AAB5AC]" : "text-[#6E6258]"
    }`}
  >
    “Lighting shapes the atmosphere before a single word is spoken.”
  </p>

  <p
    className={`uppercase tracking-[0.25em] text-xs sm:text-sm lg:tracking-[0.35em] ${
      darkMode ? "text-[#8FA494]" : "text-[#7C8B73]"
    }`}
  >
    Inspired Living
  </p>

  <h1
    className={`mt-4 text-4xl font-light tracking-tight sm:text-5xl lg:mt-5 lg:text-6xl ${
      darkMode ? "text-[#F0EEE7]" : "text-[#3E2E24]"
    }`}
  >
    Enlighten
    <br />
    <span className="font-bold">Your Home</span>
  </h1>

  <p
    className={`mt-4 max-w-xl text-sm leading-6 sm:text-base lg:mt-5 lg:text-lg lg:leading-6 ${
      darkMode ? "text-[#AEB5AF]" : "text-[#6E6258]"
    }`}
  >
    Bring warmth and sophistication into every room with timeless lighting
    pieces that blend modern elegance with everyday comfort.
  </p>

  <button
    onClick={() => navigate("/shop")}
    className={`group mt-6 rounded-full px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-1 sm:mt-8 sm:px-8 sm:py-4 sm:text-base ${
      darkMode
        ? "bg-[#4E6B57] text-[#F5F3ED] hover:bg-[#617D69] hover:shadow-[0_10px_30px_rgba(78,107,87,0.25)]"
        : "bg-[#536650] text-white hover:bg-[#435342] hover:shadow-lg"
    }`}
  >
    Explore Collection
    <span className="ml-2 inline-block transition-all duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>
</div>

            {/* Right Image */}
            <div className="lg:!w-[55%] order-1 relative">
              <img
                src="/interior.jpg"
                alt="Interior"
                className="lg:!h-[650px] h-[400px] w-full object-cover"
              />
              <p className="absolute -right-5 top-1/2 font-mono -translate-y-1/2 z-80 rotate-90 text-sm tracking-[0.4em] text-black/60">
                SAGE LIVING
              </p>
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
  <section className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-10 lg:!py-14 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:py-20">

    {/* Brand */}
    <article className="col-span-2 lg:col-span-1">
      <h2 className="font-serif text-5xl tracking-wider sm:text-5xl">
        SAGE
      </h2>

      <p className="mt-5 max-w-sm leading-7 text-gray-400">
        Discover premium beauty, stylish furniture, everyday groceries,
        fragrances, and more—all in one place.
      </p>

      <nav className="mt-7 flex gap-3" aria-label="Social media">
        <a className="flex h-12 w-12 text-2xl items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D6B89D]">
          <FaFacebookF />
        </a>

        <a className="flex h-12 w-12 text-2xl items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D6B89D]">
          <FaInstagram />
        </a>

        <a className="flex h-12 w-12 text-2xl items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D6B89D]">
          <FaTwitter />
        </a>

        <a className="flex h-12 w-12 text-2xl items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D6B89D]">
          <FaPinterestP />
        </a>
      </nav>
    </article>
<div className="flex flex-row !gap-10 lg:!gap-24">
    {/* Shop */}
    <nav>
      <h3 className="mb-5 lg:!text-2xl text-xl font-semibold">Shop</h3>
      <ul className="space-y-3 text-gray-400">
        <li>Beauty</li>
        <li>Furniture</li>
        <li>Groceries</li>
        <li>Fragrances</li>
      </ul>
    </nav>

    {/* Company */}
    <nav>
      <h3 className="mb-5 lg:!text-2xl text-xl font-semibold">Company</h3>
      <ul className="space-y-3 text-gray-400">
        <li>About Us</li>
        <li>Our Story</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>FAQs</li>
      </ul>
    </nav>

    {/* Support */}
    <nav>
      <h3 className="mb-5  lg:!text-2xl text-xl  font-semibold">Support</h3>
      <ul className="space-y-3 text-gray-400">
        <li>Contact Us</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </nav>
</div>
  </section>

  <div className="border-t lg:!mb-0 mb-12 lg:!py-0 border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col  items-center justify-between gap-4 px-6 py-5 text-sm text-gray-400 sm:px-8 md:flex-row">
      <p>© 2026 SAGE. All rights reserved.</p>

      <nav className="flex gap-5">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Cookies</span>
      </nav>
    </div>
  </div>
</footer>
      </div>
    </>
  );
};

export default Home;
