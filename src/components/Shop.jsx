import Api from "./Api.jsx"
import { useEffect,useState } from "react";
const Shop=()=>{
    
    return(
    <>
    <div className="h-[700px] bg-[url(https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover w-full bg">
    <h2 className="font-bold font-serif text-white justify-center items-center flex pt-[150px] text-[450px]">shop</h2></div>
        <div className="py-20 p-10 h-[80%] bg-white w-full">
        <h1 className="font-serif p-4 flex text-[50px] font-bold text-black flex">Give All You Need</h1>

         <Api/>
    </div>
    </>
    )
}
export default Shop;