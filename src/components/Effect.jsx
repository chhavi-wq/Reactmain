import { useEffect } from "react";
import I from "../assets/vite.svg"
import { Link } from "react-router-dom";
export const product=[
    {id:1,name:"mobile",price:10000 ,description:"this is mobile",img:I,review:"4star"},
    {id:2,name:"laptop",price:50000,description:"this is laptop",img:I},
    {id:3,name:"tv",price:30000,description:"this is tv",img:I},
    {id:4,name:"fridge",price:40000,description:"this is fridge",img:I},
    {id:5,name:"ac",price:20000,description:"this is ac",img:I},
    {id:6,name:"washing machine",price:35000,description:"this is washing machine",img:I},
    {id:7,name:"camera",price:15000,description:"this is camera",img:I},
    {id:8,name:"headphone",price:5000,description:"this is headphone",img:I},
    {id:9,name:"speaker",price:8000,description:"this is speaker",img:I},
    {id:10,name:"printer",price:12000,description:"this is printer",img:I},
]
const Effect=()=>{
    return(
        <div className="grid grid-cols-4">
          {
            product.map((item)=>(
                <div key={item.id}>
                    <img src={item.img} alt="" />
                    <h1 className="text-red-500">{item.name}</h1>
                    <span>{item.description}</span>
                    <p>${item.price}</p>
                    <span>{item.review}</span>
                  <Link to={`/detail/${item.id}`} > <button >Buy</button> </Link>


                </div>
            ))
          }
           
        </div>
    )
}
export default Effect;