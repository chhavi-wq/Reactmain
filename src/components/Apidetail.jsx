import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GrPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
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

           {data.rating > 2.56 ? (
             <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
           )
           :
           (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
           )}

            <h1 className="text-[30px] font-bold ">Color</h1>
            <div className="flex gap-5">
                <div className="bg-[#1A2E05] rounded-full w-10 h-10"></div>
                <div className="bg-[#2563EB] underline underline-offset-8 decoration-2 decoration-black-4 rounded-full w-10 h-10"></div>
                <div className="bg-[#7C2D12] rounded-full w-10 h-10"></div>
                <div className="bg-[#0F172A] rounded-full w-10 h-10"></div>
                <div className="bg-[#450A0A] rounded-full w-10 h-10"></div>
            </div>
            <div className="flex gap-30">
                <button className="absolute top-[50%] text-[40px] p-2 font-bold transition duration-300 cursor-pointer hover:bg-gray-400 rounded-4xl left-4" onClick={()=>navigate(`/apis/${Number(id)-1}`)}><GrPrevious />
</button>
                <button className="absolute hover:bg-gray-400 rounded-4xl transition duration-300 cursor-pointer top-[50%] text-[60px] right-4" onClick={()=>navigate(`/apis/${Number(id)+1}`)}><GrFormNext /></button>
            </div>
        </div>
         </div>
        </div>
    )
}
export default Apidetail 