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
        <div className="grid grid-cols-4 border">
            {
                data.slice(0,10).map((item)=>(
<div className="border" key={item.id}>
   <Link to={`/apis/${item.id}`} >  <img src={item.images[0]} alt="" />
    <p>{item.title}</p>
    <span>{item.brand}</span>
    <p>{item.description.slice(0,50)}....</p>

 <button className="bg-green-300 text-black text-xl border-rounded w-[90px] " >Buy</button>
</Link> 
</div>
                ))
            }
        </div>
    )
}
export default Api