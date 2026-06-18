import {useState} from 'react';
const Verify = ()=>{
    const [formData,setFormData] = useState({
        email : "",
        otp : ""
    })
    const [loading,setLoading] = useState(false);

    const [message,setMessage] = useState("");

    const handleChanges=(e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage("");
    
    try{
        const response = await fetch("http://localhost:4000/api/verify",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        const data = await response.json();

        if(!response.ok){
            setMessage(data.message || "something went wrong !");
            setLoading(false);
            return;
        }
        setMessage("Otp verified! Login Successfull");
    }

    catch(err){
        setMessage("internal server error");
    }
    finally{
        setLoading(false);
    }}
    return(
        <div style={{ maxWidth: "400px",margin: "100px auto" }}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Your email" value={formData.email} required onChange={handleChanges} />
                <input type="text" name="otp" placeholder="Your otp" value={formData.otp} required onChange={handleChanges} />
                <button type="submit" disabled={loading}>
                    {loading ? "Verifying..." : "Verify OTP"}
                </button>
                 {message && <p>{message}</p>}
            </form>
        </div>
    )
}
export default Verify;