import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate} from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state.email;

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("OTP:", otp);

    try{
      const response = await fetch("http://localhost:3000/api/verify",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          email,
          otp
        })
      })
      const data = await response.json();
      if(response.ok){
        toast.success(data.message);
        navigate("/login");
        return;
      }
      else{
        toast.error(data.message);
      }
    }
    catch{
      toast.error("Server error")
    }
  };
const handleResend= async () => {
  try {
    const response = await fetch("http://localhost:3000/api/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch {
    toast.error("Server error");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-center text-5xl mb-4">
          🔒
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Verify Your Email
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Enter the 6-digit verification code sent to
        </p>

        <p className="text-center font-semibold text-blue-600 mt-1">
         {email}
        </p>

        <form onSubmit={handleSubmit} className="mt-8">

          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border rounded-lg p-3 text-center text-2xl tracking-[12px] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Verify OTP
          </button>

        </form>

        <div className="mt-6 text-center">

          <p className="text-gray-500">
            Didn't receive the code?
          </p>

          <button onClick={handleResend}
            className="text-blue-600 hover:underline font-medium mt-2"
          >
            Resend OTP
          </button>

        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;