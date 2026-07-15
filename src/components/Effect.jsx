import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
export const product=[
    {id:1,name:"mobile",price:10000 ,description:"this is mobile",review:"4star"},
    {id:2,name:"laptop",price:50000,description:"this is laptop"},
    {id:3,name:"tv",price:30000,description:"this is tv"},
    {id:4,name:"fridge",price:40000,description:"this is fridge"},
    {id:5,name:"ac",price:20000,description:"this is ac"},
    {id:6,name:"washing machine",price:35000,description:"this is washing machine"},
    {id:7,name:"camera",price:15000,description:"this is camera"},
    {id:8,name:"headphone",price:5000,description:"this is headphone"},
    {id:9,name:"speaker",price:8000,description:"this is speaker"},
    {id:10,name:"printer",price:12000,description:"this is printer"},
]

const Effect=()=>{
  const[search,setSearch]=useState("");
    return(
      <>
      <input
  type="text"
  placeholder="Search product..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  className="border p-2 rounded mb-6"
/>
        <div className="grid pt-15 grid-cols-4">
          {
           product.filter((item)=>(
            item.name.toLowerCase().includes(search.toLowerCase())
           ))
          .map((item)=>(
                <div key={item.id}>
                    <h1 className="text-red-500">{item.name}</h1>
                    <span>{item.description}</span>
                    <p>${item.price}</p>
                    <span>{item.review}</span>
                  <Link to={`/detail/${item.id}`} > <button >Buy</button> </Link>


                </div>
            ))
          }
           
        </div>
        </>
    )
}
export default Effect;