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
    <div className=" mx-auto">

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

        <h1 className="mt-6 text-7xl font-bold leading-tight text-white">
          Fresh &
          <br />
          Organic
          <br />
          Goodness
        </h1>

        <p className="mt-8 text-lg leading-8 text-white">
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

    <div className="absolute left-180 bottom-16 text-white w-70 rounded-[30px] border border-white/50 p-6 backdrop-blur-md shadow-xl">

      <div className="text-yellow-400 text-lg">
        ★★★★★
      </div>

      <p className="mt-4 italic leading-7]">
        "Everything arrived fresh and beautifully packed.
        The quality exceeded my expectations."
      </p>

      <div className="mt-6 flex items-center gap-3">

        <img
          src="/user.jpg"
          alt="Customer"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-medium ">
            Sarah Wilson
          </h4>

          <p className="text-sm ">
            Verified Customer
          </p>
        </div>

      </div>

    </div>

<div className="absolute right-16 bottom-16 z-30">

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
              ₹{Math.floor(grocery.price * 100)}
            </h3>

            <span className="rounded-full bg-[#7C8B73] px-4 py-2 text-xs text-white">
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

      <span className="w-fit rounded-full bg-white/40 backdrop-blur-md px-5 py-2 text-[#5B4A3F] text-sm tracking-wide">
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

<div className="absolute right-30 top-30 z-30">

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
                ₹{Math.floor(addCartProduct.price * 100)}
              </p>

              <span className="rounded-full bg-[#5B4A3F] px-4 py-2 text-sm text-white">
                View
              </span>

            </div>

          </div>

        </Link>
      )}

    </div>

    <div className="relative z-10 flex w-1/2 flex-col justify-center px-20">
      
   <div className="absolute right-30 bottom-16 w-96 rounded-[32px] bg-white/25 backdrop-blur-xl border border-white/30 p-8 shadow-2xl">

  <div className="flex items-center gap-1 text-yellow-400 text-lg">
    ★★★★★
  </div>

  <p className="mt-5 italic leading-8 text-[#3E2E24]">
    "After two weeks my skin felt noticeably smoother and more hydrated.
    The texture is luxurious and absorbs beautifully."
  </p>

  <div className="mt-6 flex items-center justify-between">

    <div className="flex items-center gap-3">

      <img
        src="/user.jpg"
        className="w-12 h-12 rounded-full object-cover"
        alt=""
      />

      <div>

        <h4 className="font-medium text-[#3E2E24]">
          Emma Carter
        </h4>

        <p className="text-sm text-[#7B7067]">
          Verified Buyer
        </p>

      </div>

    </div>


  </div>

</div>
    </div>


  </div>
</SwiperSlide>
        
        <SwiperSlide>
  <div className="relative h-screen bg-[url('/perfume.jpg')] bg-cover bg-center">

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1E1714]/70 via-[#1E1714]/25 to-transparent"></div>

    {/* Content */}

    <div className="relative z-10 flex h-full items-center px-20">

      <div className="max-w-xl">

        <h1 className="mt-6 text-7xl font-bold leading-tight text-white">
          Elegance
          <br />
          In Every
          Scent
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#ECE5DD]">
          Discover timeless fragrances crafted with rare notes,
          designed to leave a lasting impression.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-10 rounded-full bg-[#5B4A3F] px-8 py-4 text-white hover:bg-[#43362E] transition"
        >
          Discover Fragrances
        </button>

        {/* Statistics */}

        <div className="mt-14 flex gap-10">

          <div>
            <h2 className="text-3xl text-white font-light">
              4.9★
            </h2>

            <p className="text-[#D6C8BA] text-sm">
              Customer Rating
            </p>

          </div>

          <div className="w-px bg-white/20"></div>

          <div>

            <h2 className="text-3xl text-white font-light">
              120+
            </h2>

            <p className="text-[#D6C8BA] text-sm">
              Luxury Fragrances
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Featured Product */}

    <div className="absolute right-50 z-30 bottom-16">

      {featuredProducts && (

        <Link to={`/apis/${featuredProducts.id}`}>

          <div className="group w-80 rounded-[32px] bg-white/15 backdrop-blur-xl border border-white/20 p-6 shadow-2xl transition duration-500 hover:-translate-y-2">

            <p className="uppercase tracking-[0.25em] text-xs text-[#E8DDD3]">
              Signature Pick
            </p>

            <img
              src={featuredProducts.images[0]}
              className="mt-5 h-52 w-full object-contain group-hover:scale-105 transition"
            />

            <h2 className="mt-5 text-2xl font-light text-white line-clamp-1">
              {featuredProducts.title}
            </h2>

            <div className="mt-4 flex justify-between items-center">

              <p className="text-2xl text-white">
                ₹{Math.floor(featuredProducts.price * 100)}
              </p>

              <span className="rounded-full border-t-1 border-white bg-white/50 backdrop-blur-md px-4 py-2 text-sm">
                View
              </span>

            </div>

          </div>

        </Link>

      )}

    </div>

  </div>
</SwiperSlide>
      </Swiper>
    </div>
 
 {/* benefits */}
    <section className="bg-[#FFFCF8] py-24">
  <div className="mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
    {benefits.map((item, index) => (
      <div
        key={index}
        className="rounded-3xl bg-white p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
      >
        <div className="mb-6 flex justify-center text-5xl text-[#8B5E3C]">
          {item.icons}
        </div>

        <h2 className="mb-4 text-2xl font-serif  font-bold text-[#3E2723]">
          {item.about}
        </h2>

        <p className="leading-7 text-gray-600">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>

{/* shop-by-category */}
   <section className="py-15 bg-[#FFFCF8]">
      <div className="flex h-[500px] px-10 text-[#1F2C26] flex-row w-full">
        <div className="w-1/3 py-10 px-3">
          <h1 className="text-5xl font-serif" >Shop by Category</h1>
          <p className="text-lg font-serif py-6">Discover collections for every lifestyle—from beauty and fashion to furniture, groceries, pet care, and fragrances. Find everything you need in one place.</p>
          <button onClick={()=>{navigate("/shop")}} className="group uppercase font-bold border-2 border-[#1F2C26] px-10 py-3 rounded-full font-semibold text-[#1F2C26] flex items-center gap-3 transition-all duration-300 hover:bg-[#1F2C26] hover:text-white hover:scale-105 hover:shadow-2xl">
        View All Products
        <GrLinkNext className="group-hover:translate-x-2 font-bold transition-transform duration-300" />
      </button>
        </div>

        <div className="flex gap-6 flex-row w-2/3 ">
       {collections.map((item)=>(
        <div id="container" className="hover:shadow-xl overflow-hidden duration-300 transition" key={item.id}>
          <div className="overflow-hidden">
          <img src={item.image} className="hover:scale-110 duration-300 transition" id="image" alt={item.title} />
          </div>
          <h1 className="text-2xl font-serif  mt-3">{item.title}</h1>
          <button onClick={()=>{
            navigate("./shop")
          }} className="flex font-serif items-center text-md text-center gap-2 ml-15">Shop Now <FaArrowRightLong /></button>
          </div>
       ))}

        </div>
      </div>
       
       <section>
      <div>
       <h1>Enlighten your home</h1>
       <p>Luminous Living : Innovative <br/> Lightning Designs</p>
       <p>Most of the style's furniture has a touch of modern European <br/> furniture with a 
       simple design to create harmony with the dark <br/> interior design ..</p>
       <button onClick={() => navigate("./shop")}>Shop Now</button>
      </div>
      <div>
        <img src=""></img>
        
      </div>
      </section>
      
    {/* best seller */}
      <div className="px-15">
        <div className="flex justify-between">
        <h1 className="font-serif text-5xl text-[#1F2C26] mb-7 px-4">Best Sellers</h1>
        <button className="font-bold text-lg flex hover:scale-90 duration-300 transition-transform items-center gap-2 text-center">View All <FaArrowRightLong /></button>
        </div>
 <Swiper modules={[Navigation]}
  navigation
  slidesPerView={4}
  spaceBetween={20}>
  {product.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard product={product} />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>

{/* discount */}
          <section className="grid grid-cols-1 bg-[#FFFCF8] md:grid-cols-2 gap-8  px-7 py-16">
  <div className="relative group overflow-hidden rounded-3xl bg-[#D6B89D] h-[500px]">
   
    <img
      src="/food.jpg"
      alt=""
      className="group-hover:scale-110 ease-in-out transition-transform duration-300 h-full w-full object-cover"
    />
    <div className="inset-0 bg-black/40 absolute"></div>
    <div className="absolute right-8 top-20 text-right text-white">
      <h2>Use code "FIRST50" for</h2>
      <h1 className="text-8xl font-black leading-none">
        50%
        <br />
        OFF
      </h1>

      <p className="mt-2 font-bold text-lg">Clean. Vegan. Powerful.</p>

      <button className="mt-5 rounded-full text-xl hover:scale-90 duration-300 transition bg-white/30 backdrop-blur-md px-6 py-2 font-semibold">
        Buy Now
      </button>
    </div>
  </div>

  <div className="relative group overflow-hidden rounded-3xl bg-[#CFA882] h-[500px]">
    <img
      src="/cream.jpg"
      alt=""
      className="group-hover:scale-110 ease-in-out transition-transform duration-300 h-full w-full object-cover"
    />
     <div className="inset-0 bg-black/30 absolute"></div>
    <div className="absolute right-8 top-20 text-right text-white">
      <h2>Use code "NATURAL30" for</h2>
      <h1 className="text-8xl font-black leading-none">
        30%
        <br />
        OFF
      </h1>

      <p className="mt-2 font-bold text-lg">Natural Skincare Collection</p>

      <button className="mt-5 rounded-full hover:scale-90 duration-300 transition text-xl bg-white/30 backdrop-blur-md bg-[#7A5C8D] px-6 py-2 font-semibold">
        Buy Now
      </button>
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