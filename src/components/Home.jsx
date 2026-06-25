import { GrLinkNext } from "react-icons/gr";
import IM from "../assets/main.jpg"
import '../App.css';
const Home = () => {

  return (
    <>
      <div className="h-screen w-full">
        <div className="h-screen w-full flex items-end justify-center bg-cover " style={{ backgroundImage: `url(${IM})` }}>
          <h1 className="text-[500px] font-bold font-serif text-white">
            sage
          </h1>
        </div>
      </div>
      <div className="h-[700px] items-center text-center py-20 w-full">
        <h1 className="text-[40px] py-2 font-serif ">Top cateogories</h1>
        <div className="justify-between p-5 flex gap-10">
          <div>
            <img className="w-[350px] h-[350px] object-cover" src="https://images.unsplash.com/photo-1608068811588-3a67006b7489?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="uppercase font-bold">Beauty</h1>
          </div>
          <div>
            <img className="w-[350px] h-[350px] object-cover" src="https://images.unsplash.com/photo-1604332102748-3451a738e1bd?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className="uppercase font-bold">fragrances</h2>
          </div>
          <div>
            <img className="w-[350px] h-[350px] object-cover" src="https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="uppercase font-bold">furniture</h1>
          </div>
          <div>
            <img className="w-[350px] h-[350px] object-cover" src="https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="uppercase font-bold">groceries</h1>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-[url(cream.jpg)] bg-cover flex justify-around items-center ">
        <div id="Left">
          <h1 className="font-bold font-serif leading-20 text-[80px] text-[#6B7D5C]">New philosphy <br />
            of selfcare : healthy <br />
            skin&hair</h1>
          <p className="font-serif pt-5 leading-6 text-lg text-[#6B7D5C]">Sage is about conscious simplicity - effective formulas,<br />
            thoughtful ingredients, and softTextures designed for real <br />
            everyday life.
            <br />
            <br />
            We believe in skincare should support your skin, not overwhelm <br />
            it, combining modern approach with calm, minimal approach.</p>
          <button className="rounded-4xl mt-7 px-10 py-2 text-white font-semibold flex gap-2 items-center uppercase flex hover:bg-white  hover:text-[#6B7D5C] hover:font-bold transition bg-[#6B7D5C]">Explore more <GrLinkNext /></button>
        </div>
      </div>
      <div className="h-[70px] gap-10 font-mono flex w-full whitespace-nowrap overflow-hidden">
        <ul className="flex gap-10 pt-5 animate-[marquee_15s_linear_infinite] font-bold text-lg">
          <li>Aqualogica</li>
          <li>The Body Shop</li>
          <li>IKEA</li>
          <li>24 Mantra Organic</li>
          <li>Skinn by Titan</li>
          <li>Bella Vita</li>
          <li>Pepperfry</li>
          <li>Whole Foods Market</li>
          <li>Minimalist</li>
          <li>Organic India</li>
        </ul>
        <ul className="flex gap-10 animate-[marquee_15s_linear_infinite]  pt-5 font-bold text-lg">
          <li>Aqualogica</li>
          <li>The Body Shop</li>
          <li>IKEA</li>
          <li>24 Mantra Organic</li>
          <li>Skinn by Titan</li>
          <li>Bella Vita</li>
          <li>Pepperfry</li>
          <li>Whole Foods Market</li>
          <li>Minimalist</li>
          <li>Organic India</li>
        </ul>
      </div>
      <div className="h-screen w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1588514912908-8f5891714f8d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center">

        <div className="pl-20 text-left text-white">

          <h1 className="text-6xl font-bold leading-tight">
            Grooming Essentials <br />
            from the Popular Brands
          </h1>

          <p className="mt-6 text-lg font-medium leading-8">
            Wide range of products for both women & men, crafted for <br />
            purposely selected natural ingredients — for
            great care, scent and feeling.
          </p>

          <button className="mt-8 flex items-center gap-2 border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            SHOP NOW <GrLinkNext />
          </button>

        </div>
      </div>
      <div className="w-full bg-[#F5EFE7] py-24 px-10">

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-10 text-center shadow-sm hover:-translate-y-2 transition duration-300">
            <h1 className="text-2xl font-serif font-semibold">
              Free Delivery
            </h1>
            <p className="mt-3 text-gray-600">
              Complimentary shipping on selected orders.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-sm hover:-translate-y-2 transition duration-300">
            <h1 className="text-2xl font-serif font-semibold">
              Easy Returns
            </h1>
            <p className="mt-3 text-gray-600">
              Hassle-free return policy for every purchase.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-sm hover:-translate-y-2 transition duration-300">
            <h1 className="text-2xl font-serif font-semibold">
              Product Exchange
            </h1>
            <p className="mt-3 text-gray-600">
              Quick and simple product replacement process.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-sm hover:-translate-y-2 transition duration-300">
            <h1 className="text-2xl font-serif font-semibold">
              Secure Payments
            </h1>
            <p className="mt-3 text-gray-600">
              Trusted and encrypted payment methods.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-sm hover:-translate-y-2 transition duration-300">
            <h1 className="text-2xl font-serif font-semibold">
              24/7 Support
            </h1>
            <p className="mt-3 text-gray-600">
              Dedicated customer care whenever you need.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-sm hover:-translate-y-2 transition duration-300">
            <h1 className="text-2xl font-serif font-semibold">
              Premium Quality
            </h1>
            <p className="mt-3 text-gray-600">
              Curated products from trusted lifestyle brands.
            </p>
          </div>

        </div>

      </div>
      <footer className="w-full bg-[#6B7D5C] text-white px-10 py-16">

        <div className="flex justify-between">

          <div>
            <h1 className="text-4xl font-serif font-bold">
              sage
            </h1>

            <p className="mt-4 text-sm leading-6 text-gray-200">
              Curated beauty, wellness and lifestyle essentials
              designed for conscious everyday living.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4">
              Shop
            </h1>

            <ul className="space-y-2 text-gray-200">
              <li>Beauty</li>
              <li>Fragrances</li>
              <li>Furniture</li>
              <li>Groceries</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Support
            </h1>

            <ul className="space-y-2 text-gray-200">
              <li>Contact Us</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4">
              Stay Updated
            </h1>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black px-4 py-3 outline-none rounded-l-full"
              />

              <button className="bg-black px-6 rounded-r-full">
                Join
              </button>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-400 mt-12 pt-6 text-center text-sm text-gray-200">
          © 2026 Sage. All rights reserved.
        </div>

      </footer>


    </>
  )
}
export default Home;