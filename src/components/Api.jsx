import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Api=()=>{

    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const full=async()=>{
            const response=await fetch("https://dummyjson.com/products")
            console.log("response",response)
            const result=await response.json()
            console.log("result",result)
            setData(result.products)
            setLoading(false)
        }
        full()
    },[])
  if(loading){
    return <p>Loading....</p>
  }
    return(
        <div className="grid grid-cols-4 gap-6 ">
            {
                data.slice(0,10).map((item)=>(
<div className=" p-4 bg-red-400 items-center justify-center flex flex-row" key={item.id}>
   <Link to={`/apis/${item.id}`} >  <img src={item.images[0]} alt="" />
    <h1 className=" items-center justify-center flex">{item.title}</h1>
    <h1 className=" items-center justify-center flex">{item.brand}</h1>
 <button className="bg-[#D2B48C] px-6 rounded-4xl py-1 text-black">Buy</button>
</Link> 
</div>
                ))
            }
        </div>
    )
}
export default Api