import {useState} from 'react';

const LoginOtp=()=>{
    const [formData,setFormData] = useState({
        email : "",
        password : "",
    })

    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("");

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage("");

    try{
        const response = await fetch("http://localhost:4000/api/loginwithotp",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)

        })

        let data = await response.json();
        if(!response.ok){
            setMessage(data.message || "something went wrong")
            setLoading(false);
            return;
        }
        setMessage("OTP sent successfully. Check your email!");
    }
    catch(err){
        setMessage("internal server error")
        console.log(err)
    }
    finally{
        setLoading(false);
    }}

    return(
        <div style={{ maxWidth: "400px", margin: "40px auto" }}>
            <h1 style={{fontWeight:"bold"}}>Login With Otp</h1>
            <form onSubmit={handleSubmit}>
                {message && <p>{message}</p>}
                <input type="text" placeholder = "Your email" name="email" value={formData.email} onChange={handleChange} required/>
                <input type="password" placeholder = "Your password" name="password" value={formData.password} onChange={handleChange} required/>
                 <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send OTP"}
                </button>
            </form>
        </div>
    )
}
export default LoginOtp;