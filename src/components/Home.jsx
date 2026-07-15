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
  console.log(product)
  const beautyProducts = product.filter((item)=> item.category === "fragrances");
const randomProduct = Math.floor(Math.random()* beautyProducts.length);
 const featuredProducts = beautyProducts[randomProduct];
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
            <div className="flex min-h-screen bg-[#e2dfd6] justify-between flex-row">
        <div className="h-screen px-20 w-1/2 mt-45">
          <h1 className="text-[#3E2723] font-bold text-lg">Modern Designs. Timeless Comfort.</h1>
          <p className="text-8xl font-bold text-[#3E2723] tracking-tight">Furniture <br />That Defines <br />Your Space</p>
          <h2 className="py-6 font-bold text-lg text-[#3E2723]">Discover curated collections that blend style, <br /> functionality and quality 
          for every corner of your home.</h2>
          <button onClick={()=>{navigate("/shop")}} className="border bg-[#3E2723] border-[#3E2723] text-white hover:shadow-2xl hover:scale-110 transition duration-300 uppercase px-10 py-3 flex items-center gap-2">SHOP NOW <GrLinkNext /> </button>
        </div>

        <div className="w-1/2">
          <img className="h-screen object-cover" src="/furniture.jpg" alt="" />
        </div>
        </div>
      </SwiperSlide>

       <SwiperSlide>
          <div className="relative h-screen bg-[url('/groceries.jpg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

  <div className="relative px-25 py-40 z-10">
   <h1 className="text-white font-bold text-xl  py-5 font-mono">All natural products</h1>
   <p className="text-white font-bold text-7xl font-mono">Fresh and Healthy <br />Veggies Organic <br />Market</p>
   <p className="text-white font-bold text-lg py-5 font-mono">Organic food is a food produced by methods that <br />comply with the standard of farming</p>
   <button onClick={()=>{navigate("/shop")}} className="bg-green-800 border-green-800 text-xl mt-5 rounded-xl items-center text-center flex gap-5 hover:scale-90 hover:bg-green-900 transition duration-300 text-white py-2 px-10 ">SHOP NOW <FaCartShopping /></button>
  </div>
<div className="absolute bottom-50 right-15 z-20 bg-white/30 backdrop-blur-lg rounded-2xl p-5 w-80 shadow-2xl border border-white/20">
  <div className="text-yellow-400 text-lg">
    ⭐⭐⭐
  </div>

  <p className="text-white italic py-3">
    "The vegetables were incredibly fresh and the delivery was quick. Definitely ordering again!"
  </p>

  <div className="flex items-center gap-3">
    <img
      src="/user.jpg"
      alt=""
      className="w-12 h-12 rounded-full object-cover border-2 border-white"
    />

    <div>
      <h4 className="font-semibold text-white">Sarah Wilson</h4>
      <p className="text-sm text-gray-200">Verified Buyer</p>
    </div>
  </div>
</div>
</div>
        
      </SwiperSlide>


        <SwiperSlide>
  <div className="relative flex min-h-screen bg-[url('./skin.jpg')] bg-cover bg-bottom">

    <div className="absolute inset-0 bg-white/10"></div>

    <div className="relative z-10 w-1/2 px-20 py-15 mt-25">
      <span className="inline-block px-5 py-2 rounded-full bg-white/30 backdrop-blur-md text-[#4E342E] font-semibold">
        ✨ 100% Natural Ingredients
      </span>

      <h1 className="text-[#4E342E] font-bold font-serif text-9xl mt-6">
        Nurture <br /> Your Skin
      </h1>

      <p className="text-xl text-[#4E342E] font-serif py-5">
        Discover luxurious body oils enriched with botanical extracts for radiant, healthy skin.
      </p>

      <button onClick={()=>{navigate("/shop")}} className="group border-2 border-[#4E342E] px-10 py-3 rounded-full font-semibold text-[#4E342E] flex items-center gap-3 transition-all duration-300 hover:bg-[#4E342E] hover:text-white hover:scale-105 hover:shadow-2xl">
        SHOP COLLECTION
        <GrLinkNext className="group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </div>

   
    <div className="absolute bottom-50 right-10 bg-white/20 backdrop-blur-lg rounded-3xl p-6 w-80 shadow-2xl">
      <div className="text-yellow-400 text-xl">★★★★★</div>

      <p className="text-[#4E342E] italic py-3">
        "My skin feels incredibly soft after just one week. The fragrance is amazing!"
      </p>

      <div className="flex items-center gap-3">
        <img
          src="/user.jpg"
          className="w-12 h-12 rounded-full object-cover"
          alt=""
        />
        <div>
          <h4 className="font-semibold text-[#4E342E]">Emma Carter</h4>
          <p className="text-sm text-[#4E342E]">Verified Customer</p>
        </div>
      </div>
    </div>

  </div>
      </SwiperSlide>

        
         <SwiperSlide>
                    <div className="relative h-screen bg-[url('/perfume.jpg')] bg-cover bg-bottom">
  <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"></div>

  <div className="relative px-25 py-30 z-10">
   <p className="text-black text-8xl font-serif">Elegance in <br /> Every Scent</p>
   <p className="text-black text-lg py-5 font-sans">Discover luxurious fragrances crafted to <br />captivate, inspire, 
   and leave a lasting <br />impression</p>
   <button onClick={()=>{navigate("/shop")}} className="border rounded-4xl px-10 backdrop-blur-md bg-white/20 text-black border-transparent font-serif text-xl py-5 hover:scale-90 transition duration-300">Find Your Signature Scent</button>
  </div>
  
  <div className="flex z-10 text-white relative px-25 items-center gap-4">

  <div className="backdrop-blur-md bg-white/30 rounded-xl px-5 py-5">
    <div className="flex text-yellow-400">
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
    </div>
    <p className="italic py-2">
      "Absolutely love the quality! Fast shipping and  <br />beautiful packaging."
    </p>
    <div className="flex text-center gap-2 items-center">
     <img src="/user.jpg" className="w-6 h-6 object-cover rounded-full" alt="" />
    <h4 className="font-semibold mt-1">  Emily Carter</h4>
    </div>
  </div>
</div>

 <div className="flex z-10 text-white absolute right-10 bottom-50 px-25 items-center gap-4">

  <div className="backdrop-blur-md bg-white/30 rounded-xl px-5 py-5">
    {featuredProducts && (
      <Link to={`/apis/${featuredProducts.id}`}>
  <div>
  <img className="h-40 w-40 cover" src={featuredProducts.images[0]} alt="" />
    <h2>{featuredProducts.title}</h2>
    <p>₹{Math.floor(featuredProducts.price*100)}</p>
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
   <section className="py-15 px-10 bg-[#FFFCF8]">
      <div className="flex h-[500px] text-[#1F2C26] flex-row w-full">
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

       <div>
      <Swiper 
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}>

        <SwiperSlide>
                  <img src={product[6].images[0]} alt="" />
                  <h1>Chanel</h1>
        </SwiperSlide>

        <SwiperSlide>
           <img src={product[8].images[0]} alt="" />
                <h1>Dolce & Gabbana</h1>
        </SwiperSlide>

        <SwiperSlide>
           <img src={product[7].images[0]} alt="" />
                <h1>Christian Dior</h1>
          </SwiperSlide>

           <SwiperSlide>
           <img src={product[7].images[0]} alt="" />
                <h1>Gucci</h1>
          </SwiperSlide>

         <SwiperSlide>
           <img src={product[5].images[0]} alt="" />
                <h1>Calvin Klein</h1>
          </SwiperSlide>

          <SwiperSlide>
                <h1>Furniture Co.</h1>
          </SwiperSlide>

           <SwiperSlide>
                <h1>Annibale Colombo</h1>
          </SwiperSlide>

           <SwiperSlide>
                <h1>Gucci</h1>
          </SwiperSlide>

           <SwiperSlide>
                <h1>Knoll</h1>
          </SwiperSlide>

      </Swiper>
      </div>

    {/* best seller */}
      <div>
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
      <h1 className="text-8xl font-black leading-none">
        50%
        <br />
        OFF
      </h1>

      <p className="mt-2 font-bold text-lg">Clean. Vegan. Powerful.</p>

      <button className="mt-5 rounded-full hover:scale-90 duration-300 transition bg-white/30 backdrop-blur-md px-6 py-2 font-semibold">
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
      <h1 className="text-8xl font-black leading-none">
        30%
        <br />
        OFF
      </h1>

      <p className="mt-2 font-bold text-lg">Natural Skincare Collection</p>

      <button className="mt-5 rounded-full hover:scale-90 duration-300 transition bg-white/30 backdrop-blur-md bg-[#7A5C8D] px-6 py-2 font-semibold">
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