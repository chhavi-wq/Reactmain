import {useEffect, useState} from 'react';
const Home=()=>{
    const[count,setCount] = useState(0);

     useEffect(()=>{
    console.log("countt",count)
        })
    
    return(
        <>
        <div class="p-5 items-center justify-center bg-gray-200 flex flex-col border-2 border-gray-200">
        <button class="bg-blue-300 text-white p-2 rounded" onClick={()=>{
            setCount(count+1);
        }}>+</button>
        <h1 class="text-2xl font-bold">Count :: {count}</h1>
        <button class="bg-red-300 text-white p-2 rounded" onClick={()=>{
           if(count>0){
             setCount(count-1)
           }
        }}>-</button>
        </div>


        
        </>
    )
}
export default Home;