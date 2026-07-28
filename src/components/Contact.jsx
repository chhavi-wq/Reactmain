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

export default function Contact() {
  return (
    <>
      <Navbar />

     <section className="bg-[#F8F5F1] py-28 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">
      <p className="uppercase tracking-[6px] text-[#7C8B7F] text-sm">
        Contact
      </p>

      <h1 className="text-5xl font-light text-[#23332B] mt-3">
        We'd Love to Hear From You
      </h1>

      <p className="text-[#7A7A7A] mt-5 max-w-2xl mx-auto">
        Questions, collaborations or simply saying hello—
        our team is always happy to help.
      </p>
    </div>

    <div className="grid lg:grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[32px] border border-[#E8E3DB] bg-[#FFFCF8] shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

      {/* Left */}

      <div className="bg-[#32473D] text-white p-12">

        <h2 className="text-3xl font-light mb-12">
          Get in Touch
        </h2>

        <div className="space-y-10">

          <div className="flex gap-5">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="font-medium">
                Address
              </h3>

              <p className="text-white/70 mt-1">
                New Delhi, India
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="font-medium">
                Phone
              </h3>

              <p className="text-white/70 mt-1">
                +91 98765 43210
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="font-medium">
                Email
              </h3>

              <p className="text-white/70 mt-1">
                hello@sage.com
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaClock />
            </div>

            <div>
              <h3 className="font-medium">
                Hours
              </h3>

              <p className="text-white/70 mt-1">
                Monday – Friday
                <br />
                9 AM – 6 PM
              </p>
            </div>
          </div>

        </div>

        <div className="flex gap-4 mt-14">

          <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#32473D] duration-300 cursor-pointer">
            <FaFacebookSquare />
          </div>

          <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#32473D] duration-300 cursor-pointer">
            <FaInstagram />
          </div>

          <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#32473D] duration-300 cursor-pointer">
            <FaTwitterSquare />
          </div>

        </div>

      </div>

      {/* Right */}

      <div className="p-12">

        <h2 className="text-3xl font-light text-[#23332B] mb-10">
          Send a Message
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="rounded-full border border-[#DDD5CB] bg-transparent px-6 py-4 outline-none focus:border-[#32473D]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-full border border-[#DDD5CB] bg-transparent px-6 py-4 outline-none focus:border-[#32473D]"
          />

        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full mt-6 rounded-full border border-[#DDD5CB] bg-transparent px-6 py-4 outline-none focus:border-[#32473D]"
        />

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full mt-6 rounded-[24px] border border-[#DDD5CB] bg-transparent px-6 py-5 outline-none resize-none focus:border-[#32473D]"
        />

        <button className="mt-8 rounded-full bg-[#32473D] px-10 py-4 text-white transition duration-300 hover:bg-[#23332B]">
          Send Message →
        </button>

      </div>

    </div>

  </div>
</section>
    </>
  );
}