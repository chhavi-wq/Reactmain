import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons/faSquareTwitter";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";
const Contact=()=>{
    return (
        <>
        <div className="bg-gray-400 h-screen items-center justify-center flex w-full">
        <div className="bg-white p-10 text-black h-[50%] w-[60%] p-2">
            <div className="flex justify-between h-full"> 
                <div id="leftDiv">
                    <h1 className="text-black font-bold text-[50px]">Get in touch</h1>
                    <h1 className="text-black font-bold text-[20px]">Email</h1>
                    <p>Moneta@gmail.com</p>
                    <h1 className="text-black font-bold text-[20px]">Phone</h1>
                    <p>+1 (123) 456-7890</p>
                    <h1 className="text-black font-bold text-[20px]" >Address</h1>
                    <p>123 Main Street, City, State 12345</p>
                    <h1 className="text-black font-bold text-[20px]" >Follow us</h1>
                    <div>
    <FontAwesomeIcon icon={faSquareTwitter} /> 
    <FontAwesomeIcon icon={faSquareFacebook} />
    <FontAwesomeIcon icon={faSquareInstagram} />
    <FontAwesomeIcon icon={faSquareXTwitter} />

                    </div>
                </div>
                <div id="rightDiv" className="flex flex-col justify-center">
                    <div className="flex pt-10 gap-10">
                        <div>
                            <h1 className="font-bold text-xl">Your Name</h1>
                            <input className="p-4 mt-3 mb-5 bg-gray-200" type="text" placeholder="Your full name" />
                        </div>
                        <div>
                            <h1 className="font-bold text-xl">Email Address</h1>
                            <input className="p-4 mt-3 mb-5 bg-gray-200" type="text" placeholder="Your email address" />
                        </div>
                    </div>
                    <h1 className="font-bold text-xl">Message</h1>
                    <textarea className="p-4 mt-3 mb-5 bg-gray-200" placeholder="Write something...."></textarea>
                    <button className="bg-black text-white rounded-xl p-4" type="submit">Send Message</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Contact;