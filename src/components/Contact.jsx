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

      <section className="bg-gray-100 min-h-screen py-25 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-800">
              Contact Us
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              We'd love to hear from you. Send us a message anytime.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

       
            <div className="bg-blue-600 text-white p-10">

              <h2 className="text-3xl font-bold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">

                <div className="flex gap-5">
                  <FaMapMarkerAlt className="text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-blue-100">
                      Delhi, New Delhi XYZ Road
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <FaPhoneAlt className="text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-blue-100">
                      +98 *** *** **
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <FaEnvelope className="text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-blue-100">
                      contact@us.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <FaClock className="text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Working Hours
                    </h3>
                    <p className="text-blue-100">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex gap-5 mt-12 text-4xl">
                <FaFacebookSquare className="cursor-pointer hover:scale-110 transition" />
                <FaInstagram className="cursor-pointer hover:scale-110 transition" />
                <FaTwitterSquare className="cursor-pointer hover:scale-110 transition" />
              </div>

            </div>

            <div className="p-10">

              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              <div className="mt-6">
                <label className="font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-6">
                <label className="font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition">
                Send Message
              </button>

            </div>

          </div>

         

        </div>
      </section>
    </>
  );
}