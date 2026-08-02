import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OtpInput from "react-otp-input";
const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("OTP:", otp);

    try{
      const response = await fetch("https://reactbackend-hg62.onrender.com/api/verify",{
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
           toast.success("OTP Verified Successfully!", {
  position: "top-right",
  autoClose: 3000,
  style: {
    background: "#F8FBF6",
    color: "#384A37",
    border: "1px solid #D6E2D0",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(56,74,55,0.12)",
    fontWeight: 600,
    padding: "16px",
  },
  progressStyle: {
    background: "#5F745B",
  },
  icon: "✓",
});
        navigate("/login");
        return;
      }
      else{
        toast.error(data.message, {
  position: "top-right",
  autoClose: 3000,
  style: {
    background: "#FFF8F8",
    color: "#8B3A3A",
    border: "1px solid #F1CACA",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    fontWeight: 600,
    padding: "16px",
  },
  icon: "✕",
});
      }
    }
    catch{
      toast.error("Server error")
    }
  };
const handleResend= async () => {
  try {
    const response = await fetch("https://reactbackend-hg62.onrender.com/api/resend", {
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
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8F4] px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#D6E2D0] p-8">

    <div className="flex justify-center text-5xl mb-4">
      🔒
    </div>

    <h2 className="text-3xl font-bold text-center text-[#384A37]">
      Verify Your Email
    </h2>

    <p className="text-center text-[#6B7D69] mt-2">
      Enter the 6-digit verification code sent to
    </p>

    <p className="text-center font-semibold text-[#5F745B] mt-1 break-all">
      {email}
    </p>

    <form onSubmit={handleSubmit} className="mt-8">
<div className="flex justify-center">
      <OtpInput
  value={otp}
  onChange={setOtp}
  numInputs={4}
  renderSeparator={<span className="w-3"></span>}
  renderInput={(props) => (
    <input
      {...props}
      className="!w-12 !h-14 rounded-xl border border-[#C3D1BC] bg-[#FAFCF8] text-center text-xl font-semibold text-[#384A37] outline-none transition focus:border-[#72876D] focus:ring-2 focus:ring-[#D6E2D0]"
    />
  )}
/>
</div>
      <button
        type="submit"
        className="w-full mt-6 rounded-xl bg-[#5F745B] py-3 font-semibold text-white transition hover:bg-[#4B5F48]"
      >
        Verify OTP
      </button>

    </form>

    <div className="mt-6 text-center">

      <p className="text-[#6B7D69]">
        Didn't receive the code?
      </p>

      <button
        onClick={handleResend}
        className="mt-2 font-medium text-[#5F745B] transition hover:text-[#384A37] hover:underline"
      >
        Resend OTP
      </button>

    </div>
  </div>
</div>
  );
};

export default VerifyOtp;