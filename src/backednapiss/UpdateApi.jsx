import { useState } from "react";

const UpdateApi = ()=>{

    const [formData,setFormData] = useState({
        email : "",
        password : ""
    })

    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("");

    const handleChange = (e) =>{
        const {name ,value} = e.target;
        setFormData({...formData,[name] : value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage("")

    try{
        const response = await fetch("http://localhost:4000/api/loginwitheemail",{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(formData)
        })
        const data = await response.json();

        if(!response.ok){
            setMessage(data.message || "something went wrong!")
            setLoading(false);
            return;
        }

        setMessage("User Logged in successfully");
        setFormData({
            email : "",
            password : ""
        })
    }
    catch(err){
        setMessage("Server error");
    }
    finally{
        setLoading(false);
    }
};

return(
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
        <form onSubmit={handleSubmit}>
            <p >User Login</p>
            {message && <p>{message}</p>}
        <input type="text" placeholder="Your email" name="email" onChange={handleChange} required/>

        <input type="password" placeholder="Your Password" name="password" onChange={handleChange} required/>

         <button type="submit" disabled={loading}>
                    {loading ? "Logging In..." : "Login"}
                </button>
        </form>
    </div>
)

}

export default UpdateApi;