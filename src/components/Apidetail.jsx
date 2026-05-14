import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Apidetail=()=>{

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
    },[])
  if(loading){
    return <p>Loading....</p>
  }


    return(
        <div>
            detail page
            <img src={data.images} alt="" />
            <h1>{data.brand}</h1>
            <p>{data.description}</p>
            <span>{data.price}</span>
        </div>
    )
}
export default Apidetail