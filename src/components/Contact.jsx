import Navbar from "./Navbar";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export default function Contact() {
  const { darkMode,toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <Navbar />

<section
  className={`py-28 px-6 transition-colors duration-300 ${
    darkMode ? "bg-[#141916]" : "bg-[#F8F5F1]"
  }`}
>
  
  <div className="max-w-7xl relative z-10 mx-auto">

    <div className="text-center mb-20">

      <p
        className={`uppercase tracking-[6px] text-sm ${
          darkMode ? "text-[#78917C]" : "text-[#7C8B7F]"
        }`}
      >
        Contact
      </p>

      <h1
        className={`text-5xl font-light mt-3 ${
          darkMode ? "text-[#F0EEE7]" : "text-[#23332B]"
        }`}
      >
        We'd Love to Hear From You
      </h1>

      <p
        className={`mt-5 max-w-2xl mx-auto ${
          darkMode ? "text-[#A9ADA7]" : "text-[#7A7A7A]"
        }`}
      >
        Questions, collaborations or simply saying hello—
        our team is always happy to help.
      </p>

    </div>


    <div
      className={`grid lg:grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[32px] border shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${
        darkMode
          ? "border-[#2A332D] bg-[#181D1A]"
          : "border-[#E8E3DB] bg-[#FFFCF8]"
      }`}
    >

 

      <div
        className={`p-12 ${
          darkMode
            ? "bg-[#1D2821] text-[#F0EEE7]"
            : "bg-[#293A31] text-white"
        }`}
      >

        <h2 className="text-3xl font-light mb-12">
          Get in Touch
        </h2>

        <div className="space-y-10">

          <div className="flex gap-5">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center ${
                darkMode
                  ? "bg-[#4E6B57]/20 text-[#A8C3AC]"
                  : "bg-white/10"
              }`}
            >
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="font-medium">
                Address
              </h3>

              <p
                className={`mt-1 ${
                  darkMode ? "text-[#A9ADA7]" : "text-white/70"
                }`}
              >
                New Delhi, India
              </p>
            </div>
          </div>


          <div className="flex gap-5">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center ${
                darkMode
                  ? "bg-[#4E6B57]/20 text-[#A8C3AC]"
                  : "bg-white/10"
              }`}
            >
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="font-medium">
                Phone
              </h3>

              <p
                className={`mt-1 ${
                  darkMode ? "text-[#A9ADA7]" : "text-white/70"
                }`}
              >
                +91 98765 43210
              </p>
            </div>
          </div>


          <div className="flex gap-5">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center ${
                darkMode
                  ? "bg-[#4E6B57]/20 text-[#A8C3AC]"
                  : "bg-white/10"
              }`}
            >
              <FaEnvelope />
            </div>

            <div>
              <h3 className="font-medium">
                Email
              </h3>

              <p
                className={`mt-1 ${
                  darkMode ? "text-[#A9ADA7]" : "text-white/70"
                }`}
              >
                hello@sage.com
              </p>
            </div>
          </div>


          <div className="flex gap-5">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center ${
                darkMode
                  ? "bg-[#4E6B57]/20 text-[#A8C3AC]"
                  : "bg-white/10"
              }`}
            >
              <FaClock />
            </div>

            <div>
              <h3 className="font-medium">
                Hours
              </h3>

              <p
                className={`mt-1 ${
                  darkMode ? "text-[#A9ADA7]" : "text-white/70"
                }`}
              >
                Monday – Friday
                <br />
                9 AM – 6 PM
              </p>
            </div>
          </div>

        </div>


        <div className="flex gap-4 mt-14">

          <div
            className={`h-12 w-12 rounded-full border flex items-center justify-center duration-300 cursor-pointer ${
              darkMode
                ? "border-[#4E6B57]/50 text-[#A8C3AC] hover:bg-[#4E6B57] hover:text-white"
                : "border-white/20 hover:bg-white hover:text-[#293A31]"
            }`}
          >
            <FaFacebookSquare />
          </div>

          <div
            className={`h-12 w-12 rounded-full border flex items-center justify-center duration-300 cursor-pointer ${
              darkMode
                ? "border-[#4E6B57]/50 text-[#A8C3AC] hover:bg-[#4E6B57] hover:text-white"
                : "border-white/20 hover:bg-white hover:text-[#293A31]"
            }`}
          >
            <FaInstagram />
          </div>

          <div
            className={`h-12 w-12 rounded-full border flex items-center justify-center duration-300 cursor-pointer ${
              darkMode
                ? "border-[#4E6B57]/50 text-[#A8C3AC] hover:bg-[#4E6B57] hover:text-white"
                : "border-white/20 hover:bg-white hover:text-[#293A31]"
            }`}
          >
            <FaTwitterSquare />
          </div>

        </div>

      </div>



      <div
        className={`p-12 ${
          darkMode ? "bg-[#181D1A]" : "bg-[#FFFCF8]"
        }`}
      >

        <h2
          className={`text-3xl font-light mb-10 ${
            darkMode ? "text-[#F0EEE7]" : "text-[#23332B]"
          }`}
        >
          Send a Message
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className={`rounded-full border px-6 py-4 outline-none transition ${
              darkMode
                ? "border-[#2A332D] bg-[#202621] text-[#F0EEE7] placeholder:text-[#7F8781] focus:border-[#4E6B57]"
                : "border-[#DDD5CB] bg-transparent text-[#23332B] focus:border-[#32473D]"
            }`}
          />

          <input
            type="email"
            placeholder="Email Address"
            className={`rounded-full border px-6 py-4 outline-none transition ${
              darkMode
                ? "border-[#2A332D] bg-[#202621] text-[#F0EEE7] placeholder:text-[#7F8781] focus:border-[#4E6B57]"
                : "border-[#DDD5CB] bg-transparent text-[#23332B] focus:border-[#32473D]"
            }`}
          />

        </div>


        <input
          type="text"
          placeholder="Subject"
          className={`w-full mt-6 rounded-full border px-6 py-4 outline-none transition ${
            darkMode
              ? "border-[#2A332D] bg-[#202621] text-[#F0EEE7] placeholder:text-[#7F8781] focus:border-[#4E6B57]"
              : "border-[#DDD5CB] bg-transparent text-[#23332B] focus:border-[#32473D]"
          }`}
        />


        <textarea
          rows={6}
          placeholder="Write your message..."
          className={`w-full mt-6 rounded-[24px] border px-6 py-5 outline-none resize-none transition ${
            darkMode
              ? "border-[#2A332D] bg-[#202621] text-[#F0EEE7] placeholder:text-[#7F8781] focus:border-[#4E6B57]"
              : "border-[#DDD5CB] bg-transparent text-[#23332B] focus:border-[#32473D]"
          }`}
        />


        <button
          className={`mt-8 rounded-full px-10 py-4 text-white transition duration-300 ${
            darkMode
              ? "bg-[#4E6B57] hover:bg-[#3F5948]"
              : "bg-[#32473D] hover:bg-[#23332B]"
          }`}
        >
          Send Message →
        </button>

      </div>

    </div>

  </div>
  <div className="absolute z-0 pointer-events-none -right-30 top-0 ">
    <div className={`rounded-full h-[500px] w-[500px] border ${darkMode ? "border-white/[0.17]" : "border-[#23332B]/[0.17]"} `}></div>
    <div className={` absolute rounded-full top-13 left-12 h-[400px] w-[400px] border ${darkMode ? "border-white/[0.17]" : "border-[#23332B]/[0.18]"} `}> </div>
    <div className={`rounded-full absolute top-23 left-26 h-[300px] w-[300px] border ${darkMode ? "border-white/[0.17]" : "border-[#23332B]/[0.18]"} `}></div>
  </div>

  <span className={`absolute top-50 left-30 uppercase font-mono border -rotate-[18deg] py-1 px-3 rounded-3xl ${darkMode ? "text-white/[0.37]" : "text-[#23332B]/[0.38]"}`}>home</span>
  <span className={`absolute top-70 right-30 uppercase font-mono border rotate-[18deg] py-1 px-3 rounded-3xl ${darkMode ? "text-white/[0.37]" : "text-[#23332B]/[0.38]"}`}>contact</span>
 <span className={`absolute top-80 right-1/2 uppercase font-mono border rotate-[18deg] py-1 px-3 rounded-3xl ${darkMode ? "text-white/[0.37]" : "text-[#23332B]/[0.38]"}`}></span>

</section>


    </>
  );
}