import Api from "./Api.jsx"
import { useEffect,useState } from "react";
const Shop=()=>{
    
    return(
    <>
    <div className="h-[500px] bg-[url(https://images.unsplash.com/photo-1748543668687-624e058c367c?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover w-full bg">
    <h2 className="font-bold font-serif text-[#5C4033] justify-center items-center flex pt-[150px] text-[150px]">Facial Creams</h2></div>
        <div className="py-20 p-10 h-[80%] bg-[#FFF8E7] w-full">
        <h1 className="items-center font-serif justify-center p-4 flex text-[80px] font-bold text-[#D2B48C] flex">New Arrivals</h1>
         <Api/>
    </div>
    </>
    )
}
export default Shop;