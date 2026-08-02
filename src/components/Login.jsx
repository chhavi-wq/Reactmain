import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";

const Login=()=>{
  const navigate = useNavigate()
  const[signUp,setSignup] = useState(false);
  const[message,setMessage] = useState("");
  const [formData,setFormdata] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword:""
  })

  const handleChanges = (e)=>{
    const {name,value} = e.target;
    setFormdata({...formData,[name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!formData.email || !formData.password){
      return toast.error("All field required");
    }
    if(signUp){
      if(!formData.name || !formData.confirmPassword){
        return toast.error("All field required");
      }
      if(formData.password !== formData.confirmPassword){
        return toast.error("password doesn't match")
      }
     try {
      const response = await fetch(
        "https://reactbackend-hg62.onrender.com/api/sign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      console.log("SIGNUP STATUS:", response.status);
      console.log("SIGNUP RESPONSE:", data);

      if (response.ok) {
        toast.success("Signup successful");

        navigate("/verifyotp", {
          state: {
            email: formData.email,
          },
        });

        return;
      }

      toast.error(data.message);
      return;

    } catch (error) {
      console.error(error);
      toast.error("Server error");
      return;
    }
  

  }


 try {
    const response = await fetch(
      "https://reactbackend-hg62.onrender.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();

    console.log("LOGIN STATUS:", response.status);
    console.log("LOGIN RESPONSE:", data);

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: formData.email,
        })
      );

      toast.success(data.message);

      navigate("/");

      return;
    }

    toast.error(data.message);

  } catch (error) {
    console.error(error);
    toast.error("Server error");
  }

    }

    return (
  <>
    <div className="fixed top-0 left-0 w-full z-50">
      <ToastContainer />
    </div>

 <div className="min-h-screen bg-[#4C6657] flex items-center justify-center px-6 py-10">
  <div className="bg-[#FFFCF8] w-[90%] md:w-[450px] rounded-[28px] border border-[#E7E0D8] shadow-lg p-6">

    <div className="text-center mb-6">
      <p className="text-xs uppercase tracking-[5px] text-[#7A8B7A]">
        SAGE
      </p>

      <h1 className="mt-2 text-3xl font-light text-[#23332B]">
        {signUp ? "Create Account" : "Welcome Back"}
      </h1>

      <p className="mt-2 text-sm text-[#7C7C7C]">
        {signUp
          ? "Create your account"
          : "Sign in to your account"}
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-3">

      {signUp && (
        <div>
          <label className="block text-sm font-medium text-[#23332B] mb-1">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChanges}
            placeholder="Enter your name"
            className="w-full rounded-full border border-[#DDD5CB] px-5 py-3 outline-none transition focus:border-[#32473D]"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-[#23332B] mb-1">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChanges}
          placeholder="Enter your email"
          className="w-full rounded-full border border-[#DDD5CB] px-5 py-3 outline-none transition focus:border-[#32473D]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#23332B] mb-1">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChanges}
          placeholder="Enter your password"
          className="w-full rounded-full border border-[#DDD5CB] px-5 py-3 outline-none transition focus:border-[#32473D]"
        />
      </div>

      {signUp && (
        <div>
          <label className="block text-sm font-medium text-[#23332B] mb-1">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChanges}
            placeholder="Confirm password"
            className="w-full rounded-full border border-[#DDD5CB] px-5 py-3 outline-none transition focus:border-[#32473D]"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-[#32473D] py-3 text-white font-medium transition duration-300 hover:bg-[#23332B]"
      >
        {signUp ? "Create Account" : "Login"}
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-[#7C7C7C]">
      {signUp
        ? "Already have an account?"
        : "Don't have an account?"}

      <span
        onClick={() => setSignup(!signUp)}
        className="ml-2 cursor-pointer font-medium text-[#32473D] hover:text-[#23332B]"
      >
        {signUp ? "Login" : "Sign In"}
      </span>
    </p>

  </div>
</div>
  </>
);

}
export default Login;