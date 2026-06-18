import {useState} from "react";

const DeleteUser=()=>{
    const [user,setUser] =useState(null);

    const [id,setId] = useState("");
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("");

    const deleteuser = async()=>{
        if(!id){
            setMessage("please enter id");
            return;
        }

        setMessage("");
        setLoading(true);
        setUser(null);
        

        try{
            const response = await fetch(`http://localhost:4000/api/deleteuser/${id}`,{
                method : "DELETE"
            });

            const data = await response.json();

            if(!response.ok){
                setMessage(data.message || "internal server error!");
                setLoading(false);
                return;
            }
            setUser(data.user);

        }
        catch(err){
            setMessage("internal server error!");
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div>
                {message && <p>{message}</p>}

                <input type="text" placeholder="Enter your id" required name="id" value={id} onChange={(e)=>{
                    setId(e.target.value)
                }} />
                
                <button type="submit" onClick={deleteuser} disabled={loading}>{loading?"Deleting.." : "Delete User"}</button>
                {user &&
                <div>
                    <p>{user.firstname}</p>
                    <p>{user.email}</p>
                </div>
}

        </div>
    )
}
export default DeleteUser;