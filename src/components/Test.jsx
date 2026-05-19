import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../SearchProvider";

const Test=()=>{

    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)
    // const[search,setSearch]=useState("");
    const{search}=useContext(SearchContext)


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
      <>
  
  {/* <input type="text" value={search} placeholder="Search products..." onChange={(e)=>{setSearch(e.target.value)}}  className="border bg-white font-bold p-2 rounded mb-6"/> */}
        <div className="grid grid-cols-4 gap-6 ">
            {
              data.filter((item)=>(
                item.title.toLowerCase().includes(search.toLowerCase())
              ))
                .slice(0,10).map((item)=>(
<div
  className="p-4 bg-white flex flex-col items-center justify-center"
  key={item.id}
>
  <Link
    to={`/apis/${item.id}`}
    className="flex relative flex-col items-center justify-center gap-2"
  >
    <div className="absolute rounded-xl bg-[#A67B5B] font-bold text-white p-3 left-0 top-2">-{item.discountPercentage}%</div>
    <img className="pt-8" src={item.images[0]} alt="" />

    <h1 className="font-bold">{item.title}</h1>
    <h1>{item.brand}</h1>
    <div>
  {item.rating < 4 ? (
   <div>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  ) : (
    <div>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  )}
</div>
    <h1 className="font-bold">${item.price}</h1>
  </Link>
</div>

                ))
            }
        </div>
        </>
    )
}
export default Test