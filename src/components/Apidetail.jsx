import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Apidetail=()=>{
const navigate=useNavigate() //imp
    const {id}=useParams()
 const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const full=async()=>{
            const response=await fetch(`https://dummyjson.com/products/${id}`)
            console.log("response",response)
            const result=await response.json()
            console.log("result",result)
            setData(result)
            setLoading(false)
        }
        full()
    },[id]) 
  if(loading){
    return <p>Loading....</p>
  }
    return(
        <div>
            detail page
            <div className="flex gap-30">
            <div >
            <img src={data.images[0]} alt="" />
             </div>
             <div>
            <h1>{data.brand}</h1>
            <p>{data.description}</p>
            <span>{data.price}</span>
            <div className="flex gap-30">
                <button onClick={()=>navigate(`/apis/${Number(id)-1}`)} className="border">Previous</button>
                <button onClick={()=>navigate(`/apis/${Number(id)+1}`)} className="border">Next</button>
            </div>
        </div>
         </div>
        </div>
    )
}
export default Apidetail