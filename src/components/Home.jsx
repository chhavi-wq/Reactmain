import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import "../App.css"
import { FaCartShopping } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { IoIosReturnLeft } from "react-icons/io";
import {ToastContainer, toast} from "react-toastify";
import { FaArrowRightLong } from "react-icons/fa6";

import { CiDeliveryTruck } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";

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

 useEffect(() => {
    const full = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProduct(result.products);
    };
    full();
  }, []);

  const beautyProducts = product.filter((item)=> item.category === "fragrances");
const randomProduct = Math.floor(Math.random()* beautyProducts.length);
 const featuredProducts = beautyProducts[randomProduct];

 const freshProduct = product.filter((item)=> item.tags[0] === "fruits" || item.tags[0] === "vegetables")
 const groceryProduct = Math.floor(Math.random()* freshProduct.length);
const grocery = freshProduct[groceryProduct];

const shopProducts = product.filter((item)=> item.category === "beauty");
const randomShop = Math.floor(Math.random()* shopProducts.length);
 const addCartProduct = shopProducts[randomShop];


 const collections = [{
  "id":1,
  "title":"Beauty",
  "image":"./cream.jpg"
 },
 {
  "id":2,
  "title":"Fragrances",
  "image":"./frag.jpg"
 },
 {
  "id":3,
  "title":"Groceries",
  "image":"./vegetables.jpg"
 },
 {
  "id":4,
  "title":"Furniture",
  "image":"./chair.jpg"
 }
]

const benefits = [{
  "icons":<CiDeliveryTruck />,
  "about":"Timely Delivery",
  "description":"Get your orders delivered quickly with safe and on-time shipping to your doorstep."
},
{
  "icons":<GrSecure />,
   "about":"Secure Payments",
  "description":"Shop confidently with encrypted payments and trusted payment methods."
},
{
  "icons":<LuBadgeCheck />,
   "about":"Premium Quality",
  "description":"Every product is carefully selected to ensure excellent quality and lasting value."
},
{
  "icons":<IoIosReturnLeft />,
   "about":"Easy Returns",
  "description":"Not satisfied? Enjoy a simple return and refund process for a worry-free shopping experience."
},
{
  "icons":<BiSupport />,
  "about":"24/7 Customer Support",
  "description":"Our support team is available around the clock to answer your questions and assist you."
},
{
  "icons":<GiShoppingCart />,
  "about":"Wide Product Range",
  "description":"From fashion and furniture to beauty, groceries, and pet care—find it all in one store."
},
{
  "icons":<FaLeaf />,
  "about":"Eco-Friendly Products",
  "description":"Discover environmentally friendly products that are good for you and the planet."
},
{
  "icons":<IoIosPricetag />,
  "about":"Best Prices",
  "description":"Enjoy competitive prices, exclusive discounts, and amazing offers across all categories"
},

]
 
  return (
    <>
          <Navbar />
    <div className=" mx-auto bg-[#FCFAF7]">

{/* hero-page */}
    <div className="mx-auto ">
          <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-screen"
      >

          <SwiperSlide>
  <div className="flex min-h-screen bg-[#F8F5F0]">

    <div className="flex w-1/2 flex-col justify-center px-20">
      <h1 className="mt-6 text-7xl font-bold leading-tight text-[#3E2E24]">
        Furniture
        <br />
        That Feels
        <br />
        Like Home
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-[#5F544C]">
        Discover thoughtfully crafted furniture that combines
        timeless design, exceptional comfort, and lasting quality
        for every corner of your home.
      </p>

      <button
        onClick={() => navigate("/shop")}
        className="mt-10 flex w-fit items-center gap-3 rounded-full bg-[#5B4A3F] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#43362E] hover:shadow-xl"
      >
        Explore Collection
        <GrLinkNext />
      </button>
      <div className="mt-10 flex items-center gap-6">

  <div className="rounded-2xl border border-[#DDD2C6] bg-[#FCFAF7] px-6 py-4 shadow-sm">
    <p className="text-2xl font-light text-[#3E2E24]">
      500K+
    </p>
    <p className="text-sm text-[#7B7067]">
      Happy Customers
    </p>
  </div>

  <div className="rounded-2xl border border-[#DDD2C6] bg-[#FCFAF7] px-6 py-4 shadow-sm">
    <p className="text-2xl font-light text-[#3E2E24]">
      4.9★
    </p>
    <p className="text-sm text-[#7B7067]">
      Customer Rating
    </p>
  </div>

</div>

    </div>

    <div className="w-1/2 overflow-hidden">

      <img
        src="/furniture.jpg"
        alt="Furniture"
        className="h-screen w-full object-cover transition duration-700 hover:scale-105"
      />

    </div>

  </div>
        </SwiperSlide>


       <SwiperSlide>
  <div className="relative h-screen bg-[url('/groceries.jpg')] bg-cover bg-center">

   
   <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent"></div>

  
    <div className="relative z-10 flex h-full items-center px-20">

      <div className="max-w-xl">

        <p className="uppercase tracking-[0.35em] text-sm text-white">
          Farm Fresh
        </p>

        <div className="mt-10 flex flex-wrap gap-10 text-white">
  <div>
    <h3 className="text-3xl font-bold">15K+</h3>
    <p className="mt-1 text-sm uppercase tracking-widest text-white/80">
      Happy Customers
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">120+</h3>
    <p className="mt-1 text-sm uppercase tracking-widest text-white/80">
      Organic Products
    </p>
  </div>

</div>

        <h1 className="mt-6 text-7xl font-semibold leading-tight text-white">
          Fresh &
          Organic
          <br />
          Goodness
        </h1>

        <p className="mt-5 text-lg leading-8 text-white">
          Carefully selected organic fruits and vegetables,
          delivered fresh to your doorstep with quality you can trust.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-10 flex items-center gap-3 rounded-full bg-green-800 px-8 py-4 text-white transition-all duration-300 hover:scale-90 hover:bg-green-900 hover:shadow-xl"
        >
          Shop Fresh Picks
          <FaCartShopping />
        </button>

      </div>

    </div>


<div className="absolute right-60 bottom-16 z-30">

  {grocery && (
    <Link to={`/apis/${grocery.id}`}>

      <div
        className="
        w-80
        rounded-[32px]
        border
        border-white/20
        bg-white/15
        backdrop-blur-xl
        p-6
        shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-105
        hover:bg-white/20
      "
      >

        <p className="uppercase tracking-[0.25em] text-xs text-[#DDE8D5]">
          Featured Product
        </p>

        <img
          src={grocery.images[0]}
          alt={grocery.title}
          className="mt-5 h-52 w-full object-contain transition duration-500 group-hover:scale-105"
        />

        <div className="mt-5">

          <p className="text-sm text-[#DDE8D5]">
            Organic Collection
          </p>

          <h2 className="mt-2 text-2xl font-light text-white line-clamp-1">
            {grocery.title}
          </h2>

          <div className="mt-4 flex items-center justify-between">

            <h3 className="text-2xl font-light text-white">
              ₹{Math.floor(grocery.price * 100).toLocaleString("en-IN")}
            </h3>

            <span className="rounded-full bg-green-900 px-4 py-2 text-xs text-white">
              View
            </span>

          </div>

        </div>

      </div>

    </Link>
  )}

</div>


  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative flex min-h-screen bg-[url('/skin.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F0]/60 via-[#F8F5F0]/20 to-transparent"></div>

    <div className="relative z-10 flex w-1/2 flex-col justify-center px-20">

      <span className="w-fit rounded-full bg-white/40 backdrop-blur-md px-10 py-2 text-[#5B4A3F] text-sm tracking-wide">
        ✨ Botanical Skincare
      </span>
       <div className="flex items-center gap-10 mt-12">

  <div>
    <h2 className="text-3xl font-light text-[#3E2E24]">
      4.9★
    </h2>
    <p className="text-[#6F655D] text-sm">
      Average Rating
    </p>
  </div>

  <div className="w-px h-12 bg-[#CFC5BA]"></div>

  <div>
    <h2 className="text-3xl font-light text-[#3E2E24]">
      25K+
    </h2>
    <p className="text-[#6F655D] text-sm">
      Happy Customers
    </p>
  </div>

  <div className="w-px h-12 bg-[#CFC5BA]"></div>

  <div>
    <h2 className="text-3xl font-light text-[#3E2E24]">
      100%
    </h2>
    <p className="text-[#6F655D] text-sm">
      Botanical Formula
    </p>
  </div>

</div>

      <h1 className="mt-6 text-7xl font-light leading-tight text-[#3E2E24]">
        Nourish
        <br />
        Your Skin
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-[#5F544C]">
        Discover luxurious skincare crafted with botanical extracts,
        designed to restore, protect and reveal your natural glow.
      </p>

      <button
        onClick={() => navigate("/shop")}
        className="mt-10 flex w-fit items-center gap-3 rounded-full bg-[#5B4A3F] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#43362E] hover:shadow-xl"
      >
        Explore Collection
        <GrLinkNext />
      </button>

    </div>

<div className="absolute right-60 bottom-30 z-30">

      {addCartProduct && (
        <Link to={`/apis/${addCartProduct.id}`}>
          <div className="w-80 rounded-[30px] border border-white/20 bg-white/20 p-6 backdrop-blur-xl shadow-2xl transition duration-500 ">

            <img
              src={addCartProduct.images[0]}
              alt={addCartProduct.title}
              className="mt-5 h-45 w-full object-contain transition duration-500 group-hover:scale-110"
            />

            <h2 className="mt-5 text-2xl font-light text-[#3E2E24] line-clamp-1">
              {addCartProduct.title}
            </h2>

            <div className="mt-4 flex items-center justify-between">

              <p className="text-2xl text-[#5B4A3F]">
                ₹{Math.floor(addCartProduct.price * 100).toLocaleString("en-IN")}
              </p>

              <span className="rounded-full bg-[#5B4A3F] px-4 py-2 text-sm text-white">
                View
              </span>

            </div>

          </div>

        </Link>
      )}

    </div>


  </div>
</SwiperSlide>
        
       <SwiperSlide>
  <div className="relative h-screen overflow-hidden bg-[url('/perfume.jpg')] bg-cover bg-center">

   
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#15110F]/80 via-[#15110F]/35 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#15110F]/50 to-transparent"></div>


    <div className="relative z-20 flex h-full items-center justify-between px-20">

     
      <div className="">

     
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D6B17B]">
            NEW COLLECTION 2026
          </span>
        </div>

        
        <h1 className="mt-8 text-7xl  font-bold leading-[0.9] text-white">
          Elegance
          <br />
          In Every
          Scent
        </h1>

     
        <p className="mt-6 py-3 text-xl text-[#DDD5CB]">
          Discover timeless fragrances crafted from the world's
          finest ingredients, <br /> designed to leave a signature that
          lingers long after you've left the room.
        </p>

      
        <button
          onClick={() => navigate("/shop")}
          className="group mt-12 flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black"
        >
          <span>Explore Collection</span>

          <span className="text-xl transition group-hover:translate-x-2">
            →
          </span>
        </button>

      
        <div className="mt-10 flex gap-14">

          <div>
            <h2 className="text-4xl font-light text-white">
              4.9★
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C8BAA6]">
              Rating
            </p>
          </div>

          <div className="h-14 w-px bg-white/20"></div>

          <div>
            <h2 className="text-4xl font-light text-white">
              120+
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C8BAA6]">
              Fragrances
            </p>
          </div>

          <div className="h-14 w-px bg-white/20"></div>

          <div>
            <h2 className="text-4xl font-light text-white">
              50K+
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C8BAA6]">
              Happy Clients
            </p>
          </div>

        </div>

      </div>

  
<div className="relative flex w-[420px] flex-col items-end">
  
{featuredProducts && (

  <Link to={`/apis/${featuredProducts.id}`}>

    <div className="relative mt-40 w-[360px] rounded-[40px] border border-white/20 bg-white/10 px-8 pb-8 pt-36 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] transition duration-500 hover:-translate-y-2">

   
      <img
        src={featuredProducts.images[0]}
        alt={featuredProducts.title}
        className="absolute -top-24 left-1/2 h-56 -translate-x-1/2 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-105"
      />

      <p className="text-center text-xs uppercase tracking-[0.3em] text-[#D6B17B]">
        Signature Pick
      </p>

      <h2 className="mt-5 line-clamp-1 text-center text-2xl font-light text-white">
        {featuredProducts.title}
      </h2>

      <div className="mt-8 flex items-center justify-between">

        <div>
          <p className="text-sm text-[#CFC2B5]">
            Starting From
          </p>

          <h3 className="text-3xl font-light text-white">
            ₹{Math.floor(featuredProducts.price * 100).toLocaleString("en-IN")}
          </h3>
        </div>

        <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white transition hover:bg-white hover:text-black">
          View →
        </button>

      </div>

    </div>

  </Link>

)}

</div>

</div>

</div>

</SwiperSlide>

      </Swiper>
    </div>
 
 {/* benefits */}
 <section className="bg-[#FCFAF7] py-28">
  <div className="mx-auto max-w-3xl text-center mb-16">

    <p className="uppercase tracking-[0.35em] text-sm text-[#7C8B73]">
      Why Choose SAGE
    </p>

    <h2 className="mt-5 text-5xl font-light text-[#3E2E24]">
      Thoughtfully Crafted
      <br />
      For Everyday Living
    </h2>

    <p className="mt-6 text-lg leading-8 text-[#6E6258]">
      Premium quality, timeless aesthetics, and exceptional service—
      everything designed to elevate your shopping experience.
    </p>

  </div>

  <div className="mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">

    {benefits.map((item, index) => (

      <div
        key={index}
        className="group rounded-[32px] border border-[#E8DED3] bg-[#FFFCF8] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#CDBAA6] hover:shadow-xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5EFE7] text-3xl text-[#7C8B73] transition duration-300 group-hover:bg-[#5B4A3F] group-hover:text-white">

          {item.icons}

        </div>

        <h2 className="mt-8 text-2xl font-light text-[#3E2E24]">

          {item.about}

        </h2>

        <div className="mt-4 h-px w-12 bg-[#D8CEC3]"></div>

        <p className="mt-5 leading-8 text-[#6F655D]">

          {item.description}

        </p>

      </div>

    ))}

  </div>

</section>

{/* shop-by-category */}
 <section className="bg-[#FCFAF7] mb-40">

  <div className="max-w-7xl mx-auto text-center mb-16">

    <p className="uppercase tracking-[0.35em] text-sm text-[#7C8B73]">
      Collections
    </p>

    <h1 className="mt-5 text-5xl font-light text-[#3E2E24]">
      Shop by Category
    </h1>

    <p className="mt-6 text-lg leading-8 text-[#6E6258]">
      Carefully curated collections designed to complement every
      lifestyle and every home.
    </p>

  </div>

  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-8xl mx-auto px-8">

    {collections.map((item) => (

      <div
        key={item.id}
        className="group overflow-hidden rounded-[30px] bg-white border border-[#E6DDD2] hover:shadow-xl transition duration-500"
      >

        <div className="overflow-hidden">

          <img
            src={item.image}
            className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        <div className="p-7">

          <h2 className="text-2xl text-[#3E2E24]">
            {item.title}
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="mt-5 flex items-center gap-3 text-[#7C8B73] hover:gap-5 transition-all"
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
<section className="bg-[#241A15] my-20">

<div className="flex items-center gap-16 ">

  {/* Left Content */}
  <div className="w-[45%] px-20">
   <p className="mt-10 max-w-sm  mb-10 text-xl italic text-white/70">
  “Lighting shapes the atmosphere before a single word is spoken.”
</p>

    <p className="uppercase tracking-[0.35em] text-sm text-white">
      Inspired Living
    </p>

    <h1 className="mt-5 text-6xl font-bold text-white">
      Enlighten
      <br />
      Your Home
    </h1>

    <p className="mt-8 text-lg leading-8 text-white">
      Bring warmth and sophistication into every room with timeless
      lighting pieces that blend modern elegance with everyday comfort.
    </p>

    <button
      onClick={() => navigate("/shop")}
      className="mt-5 rounded-full bg-[#5B4A3F] px-8 py-4 text-white transition hover:bg-[#43362E]"
    >
      Explore Collection
    </button>

  </div>
  

  {/* Right Image */}
  <div className="w-[55%]">

    <img
      src="/interior.jpg"
      alt="Interior"
      className="h-[650px] w-full object-cover shadow-2xl"
    />

  </div>

</div>

</section>

{/* Best Sellers */}

<section className="bg-[#FCFAF7] py-24">

  <div className="max-w-8xl mx-auto px-8">

    {/* Heading */}

    <div className="flex justify-between items-end mb-14">

      <div>

        <p className="uppercase tracking-[0.35em] text-sm text-[#7C8B73]">
          Customer Favorites
        </p>

        <h1 className="mt-4 text-5xl font-light text-[#3E2E24]">
          Best Sellers
        </h1>

        <p className="mt-5 text-lg text-[#6E6258] max-w-xl">
          Discover our most-loved pieces, chosen by thousands of customers
          for their timeless quality and exceptional craftsmanship.
        </p>

      </div>

      <button
        onClick={() => navigate("/shop")}
        className="group flex items-center gap-3 rounded-full border border-[#D9CDC1] px-7 py-3 text-[#5B4A3F] transition-all duration-300 hover:bg-[#5B4A3F] hover:text-white"
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
{/* Discount Section */}

<section className="bg-[#FCFAF7] py-20">

  <div className="mx-auto px-8">

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Left Card */}

    <div className="relative overflow-hidden rounded-[25px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

  {/* Background */}
  <div className="relative h-[600px] bg-[url('/frag.jpg')] bg-cover bg-center">

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col justify-center p-20 text-white">

      <p className="uppercase tracking-[0.4em] text-lg text-yellow-200">
        Limited Time Offer
      </p>

      <h2 className="mt-3 text-6xl font-bold leading-tight">
        Get
        <span className="text-yellow-400"> 30% OFF</span>
        <br />
        Your First Order
      </h2>

      <p className="mt-3 max-w-md text-lg leading-8 text-white/80">
        Experience our signature collection crafted with timeless
        elegance. Elevate your lifestyle with exclusive designs
        made for modern living.
      </p>


      {/* CTA */}
      <button className="mt-5 w-fit rounded-full bg-white px-8 py-4 font-medium text-[#241A15] transition duration-300 hover:scale-105">
        Shop Collection →
      </button>

      {/* Small Note */}
      <p className="mt-6 text-sm tracking-wide text-white/60">
        Offer valid until August 31 • Terms & Conditions Apply
      </p>

    </div>

  </div>

</div>

      {/* Right Card */}

    <div className="relative overflow-hidden rounded-[25px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

  {/* Background Image */}
  <div className="relative h-[600px] bg-[url('/beauty.jpg')] bg-cover bg-center">

    {/* Overlay */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col justify-center p-20 text-white">

      <p className="uppercase tracking-[0.4em] text-sm text-yellow-200">
        Exclusive Coupon
      </p>

      <h2 className="mt-3 text-6xl font-bold leading-tight">
        Save More
        <br />
        Every Order
      </h2>

      {/* Coupon */}
      <div className="mt-5 inline-flex w-fit items-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">

        <span className="text-3xl font-bold text-white">
          SAGE30
        </span>

      </div>

      <p className="mt-5  text-lg leading-8 text-white/80">
        Apply this exclusive code during checkout and enjoy
        instant savings on our handcrafted premium collection.
      </p>

      {/* Benefits */}
    

      {/* Button */}
      <button onClick={()=> {return toast.success("coupon copied")}} className="mt-8 w-fit rounded-full border border-white bg-white/10 px-8 py-4 backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
        Copy Coupon →
      </button>

      <p className="mt-6 text-sm text-white/60">
        Valid until August 31 • One use per customer
      </p>

    </div>

  </div>

</div>

    </div>

  </div>

</section>

{/* contact-us */}
    <section className="bg-[#FFFCF8] py-24">
  <div className="max-w-7xl mx-auto rounded-[40px] text-[#3c3f38] bg-[#d3d2d7] px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
    <div>
      <p className="uppercase text-[#3c3f38] tracking-[4px] text-sm font-semibold">
        We're Here to Help
      </p>

      <h2 className="text-5xl font-bold text-[[#3c3f38] mt-3">
        Need Assistance?
      </h2>

      <p className="mt-5 max-w-xl text-[#3c3f38] leading-8 text-lg">
        Have questions about your order, products, or delivery? Our team is
        always ready to help you with quick and friendly support.
      </p>
    </div>

    <Link
      to="/contact"
      className="bg-[#3c3f38] hover:bg-[#2F5D3A] text-white px-12 py-5 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
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
        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
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