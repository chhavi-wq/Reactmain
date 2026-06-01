import Api from "./Api.jsx"
import { useEffect,useState } from "react";
const Shop=()=>{
    
    return(
    <>
    <div className="h-[400px] bg-[#1E293B] bg-cover w-full bg">
    <h2 className="font-bold font-serif text-white justify-center items-center flex text-[300px]">shop</h2></div>
        <div className="py-20 p-10 h-[80%] bg-white w-full">
        <h1 className="font-serif p-4 flex text-[50px] font-bold text-black flex">Give All You Need</h1>

         <Api/>
    </div>
    </>
    )
}
export default Shop;