import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="bg-[#0F172A] min-h-screen flex items-center justify-center px-6">
        <div className="bg-[#1E293B] text-white rounded-3xl shadow-2xl w-full max-w-6xl p-10">
          <div className="flex flex-col md:flex-row justify-between gap-14">
            
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-8 text-[#60A5FA]">
                Get in touch
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="font-semibold text-xl text-gray-200">
                    Email
                  </h2>
                  <p className="text-gray-400 mt-1">
                    moneta@gmail.com
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold text-xl text-gray-200">
                    Phone
                  </h2>
                  <p className="text-gray-400 mt-1">
                    +1 (123) 456-7890
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold text-xl text-gray-200">
                    Address
                  </h2>
                  <p className="text-gray-400 mt-1">
                    123 Main Street, City, State 12345
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold text-xl text-gray-200 mb-3">
                    Follow us
                  </h2>

                  <div className="flex gap-5 text-4xl text-[#60A5FA]">
                    <FontAwesomeIcon
                      icon={faSquareFacebook}
                      className="hover:text-white duration-300 cursor-pointer"
                    />

                    <FontAwesomeIcon
                      icon={faSquareInstagram}
                      className="hover:text-white duration-300 cursor-pointer"
                    />

                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      className="hover:text-white duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <h1 className="font-semibold text-lg mb-2">
                    Your Name
                  </h1>

                  <input
                    className="w-full bg-[#334155] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#60A5FA]"
                    type="text"
                    placeholder="Your full name"
                  />
                </div>

                <div className="w-full">
                  <h1 className="font-semibold text-lg mb-2">
                    Email Address
                  </h1>

                  <input
                    className="w-full bg-[#334155] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#60A5FA]"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h1 className="font-semibold text-lg mb-2">
                  Message
                </h1>

                <textarea
                  className="w-full h-40 bg-[#334155] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#60A5FA]"
                  placeholder="Write something..."
                ></textarea>
              </div>

              <button
                className="mt-6 bg-[#60A5FA] hover:bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-xl duration-300 w-full"
                type="submit"
              >
                Send Message
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;