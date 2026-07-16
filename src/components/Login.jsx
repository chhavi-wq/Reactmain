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
    console.log("handled")
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
       try{
      const response = await fetch("http://localhost:3000/api/sign",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          name: formData.name,
          email : formData.email,
          password : formData.password
        }),
      });

      const data = await response.json();
      if(response.ok){
        toast.success(data.message)
        navigate("/verifyOtp",
          {state: {email:formData.email}}
        );
        return
      }
      else{
        toast.error(data.message)
      }
    }
    catch{
      toast.error("server error")
    }
  }


  try{
    const response = await fetch("http://localhost:3000/api/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:formData.email,
        password:formData.password
      })
    })
    
    const data = await response.json();
    const token=data.token
console.log(token);
localStorage.setItem("token",token)
    console.log(response.status);
    console.log(data);

   if (response.ok) {
  toast.success(data.message);

  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      email: formData.email,
    })
  );

  navigate("/");
  return;
}
    else{
      toast.error(data.message)
    }
  }
  catch{
      toast.error("Server error");
  }
    }

    return (
  <>
    <div className="fixed top-0 left-0 w-full z-50">
      <ToastContainer />
    </div>

    <div className="min-h-screen bg-[#3E2723] flex justify-center items-center">
      <div className="bg-white w-[90%] md:w-[450px] rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          {signUp ? "Sign Up" : "Login"}
        </h1>

        <p className="text-center text-gray-500 mb-6">
          {signUp
            ? "Create your account"
            : "Login to your account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {signUp && (
            <div>
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChanges}
                className="w-full border rounded-lg p-3 mt-1"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChanges}
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChanges}
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Enter your password"
            />
          </div>

          {signUp && (
            <div>
              <label className="font-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChanges}
                className="w-full border rounded-lg p-3 mt-1"
                placeholder="Confirm password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#3E2723] text-white py-3 rounded-lg hover:bg-[#5D4037]"
          >
            {signUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center mt-5">
          {signUp
            ? "Already have an account?"
            : "Don't have an account?"}

          <span
            className="text-blue-600 cursor-pointer ml-2"
            onClick={() => setSignup(!signUp)}
          >
            {signUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  </>
);

}
export default Login;