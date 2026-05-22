import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Apidetail=()=>{
const navigate=useNavigate() 
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
            
            <div className="flex gap-30">
            <div >
            <img className="w-full h-full object-cover" src={data.images[0]} alt="" />
             </div>
             <div>
            <h1 className="text-[70px] font-bold ">{data.brand}</h1>
            <p className="text-[20px] font-serif ">{data.description}</p>
            <span className="text-[60px] font-bold ">${data.price}</span>
            <h1 className="text-[30px] font-bold ">Color</h1>
            <div className="flex gap-5">
                <div className="bg-[#6366F1] rounded-full w-10 h-10"></div>
                <div className="bg-[#2563EB] underline underline-offset-8 decoration-2 decoration-black-4 rounded-full w-10 h-10"></div>
                <div className="bg-[#2DD4BF] rounded-full w-10 h-10"></div>
                <div className="bg-[#FB7185] rounded-full w-10 h-10"></div>
                <div className="bg-[#F97316] rounded-full w-10 h-10"></div>
            </div>
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