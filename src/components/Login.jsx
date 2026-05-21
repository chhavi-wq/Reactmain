import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
  const [isSignup, setIsSignup] = useState(false);
  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handlechnages=(e)=>{
const {name,value}=e.target
console.log("name",name)
console.log("value",value)

setFormdata({
    ...formdata,
    [name]:value
})
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formdata.email || !formdata.password ){
        alert("all feild required")
    }

    if(isSignup){
        if(!formdata.name || !formdata.confirmPassword){
          return  alert("all feild required")
        }

        if(formdata.password != formdata.confirmPassword){
          return  alert("password does not match")
        }

        localStorage.setItem("users",JSON.stringify(formdata))
       return  alert("singup successsfulyy")
        setIsSignup(true)
    }
   if (!isSignup) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    alert("User not found");
    // return;
  }

 


  alert("Login successfully");
  navigate("/");
}
  };

  return (
    <div className="bg-[#3E2723] h-screen w-full flex justify-center items-center">
      <div className="bg-white  w-[30%] p-6 flex flex-col rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center h-full"
        >
          <h1 className="font-bold text-black text-[48px] font-serif text-center">
            {isSignup ? "Sign Up" : "Login"}
          </h1>

          <p className="text-[18px] text-black text-center mt-2">
            {isSignup
              ? "Create an account to get started."
              : "Login to continue"}
          </p>

          {/* Name (Signup only) */}
          {isSignup && (
            <div className="mt-5">
              <label className="text-xl font-bold">Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handlechnages}
                placeholder="Enter your name"
                className="w-full mt-2 rounded border border-[#A67B5B] px-3 py-3 text-sm"
              />
            </div>
          )}

          {/* Email */}
          <div className="mt-5">
            <label className="text-xl font-bold">Email</label>
            <input
              type="email"
              name="email"
                value={formdata.email}
                onChange={handlechnages}
              placeholder="you@example.com"
              className="w-full mt-2 rounded border border-[#A67B5B] px-3 py-3 text-sm"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="text-xl font-bold">Password</label>
            <input
              type="password"
              value={formdata.password}
              onChange={handlechnages}
              name="password"
              placeholder="••••••••"
              className="w-full mt-2 rounded border border-[#A67B5B] px-3 py-3 text-sm"
            />
          </div>

          {/* Confirm Password (Signup only) */}
          {isSignup && (
            <div className="mt-5">
              <label className="text-xl font-bold">Confirm Password</label>
              <input
                type="password"
                value={formdata.confirmPassword}
                onChange={handlechnages}
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full mt-2 rounded border border-[#A67B5B] px-3 py-3 text-sm"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-[#3E2723] text-white text-2xl font-bold font-serif mt-6 py-3 rounded-xl hover:bg-[#A67B5B] transition duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <p className="text-[18px] text-black text-center mt-4">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-[#A67B5B] ml-2 cursor-pointer hover:underline"
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;