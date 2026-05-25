// import { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { SearchContext } from "../SearchProvider";
// import { FaSearch } from "react-icons/fa";
// const Api=()=>{

//     const [data,setData]=useState()
//     const [loading,setLoading]=useState(true)
//     // const[search,setSearch]=useState("");
//     const{search,setSearch}=useContext(SearchContext)


//     useEffect(()=>{
//         const full=async()=>{
//             const response=await fetch("https://dummyjson.com/products")
//             console.log("response",response)
//             const result=await response.json()
//             console.log("result",result)
//             setData(result.products)
//             setLoading(false)
//         }
//         full()
//     },[])
//   if(loading){
//     return <p>Loading....</p>
//   }

//   // const brands= data.filter((item)=>(
//   //               item.brand.toLowerCase().includes(search.toLowerCase())
//   //             ))
//   //             console.log("bannnnnnnn",brands)
                
//     return(
//       <>
//       <div className="flex text-xl items-center mb-6">
//   <FaSearch />
//   <input type="text" className="border-black border-2 ml-4 my-2 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" value={search} placeholder="Search products..." onChange={(e)=>{setSearch(e.target.value)}} />
//   <button className="bg-black rounded-3xl border border-black ml-3 font-mono text-white hover:bg-white py-2 px-5 hover:text-black transition duration-300">search</button>
//   </div> 
//   <div className="flex gap-10 text-2xl items-center justify-center mb-10">
//     <ul className="flex font-mono gap-10">
//       <li className="border border-2 hover:-translate-y-1.5 rounded-2xl hover:text-white hover:bg-black font-semibold duration-300 px-4 py-1">Beauty</li>
//       <li className="border border-2 hover:-translate-y-1.5 rounded-2xl hover:text-white hover:bg-black font-semibold duration-300 px-4 py-1">Fragrances</li>
//       <li className="border border-2 hover:-translate-y-1.5 rounded-2xl hover:text-white hover:bg-black font-semibold duration-300 px-4 py-1">Furniture</li>
//       <li className="border border-2 hover:-translate-y-1.5 rounded-2xl hover:text-white hover:bg-black font-semibold duration-300 px-4 py-1">Groceries</li>
//     </ul>
//   </div>
//         <div className="grid grid-cols-4 gap-6 ">
//             {
//               data.filter((item)=>(
//                 item.title.toLowerCase().includes(search.toLowerCase())
//               ))
//                 .slice(0,10).map((item)=>(
// <div
//   className="p-4 flex flex-col items-center justify-center"
//   key={item.id}
// >
//   <Link
//     to={`/apis/${item.id}`}
//     className="flex relative flex-col items-center justify-center gap-2"
//   >
//     <div className="absolute rounded-xl bg-white font-bold text-black p-3 left-2 top-2">-{item.discountPercentage}%</div>
//     <img className="pt-8 rounded-xl bg-[#CCCCCC]" src={item.images[0]} alt="" />

//     <h1 className="text-2xl font-bold">{item.title}</h1>
//     <h1 className="text-xl font-semibold">{item.brand}</h1>
//     <div className="gap-10 text-2xl items-center justify-center flex">
//   {item.rating < 4 ? (
//    <div className="flex text-yellow-400">
//       <FontAwesomeIcon icon={faStar} />
//       <FontAwesomeIcon icon={faStar} />
//     </div>
//   ) : (
//     <div className="flex text-yellow-400">
//       <FontAwesomeIcon icon={faStar} />
//       <FontAwesomeIcon icon={faStar} />
//       <FontAwesomeIcon icon={faStar} />
//       <FontAwesomeIcon icon={faStar} />
//       <FontAwesomeIcon icon={faStar} />
//     </div>
//   )}
//    <h1 className="font-bold">${item.price}</h1>
// </div>
// <button className="bg-black rounded-3xl border border-black font-mono font-bold text-white hover:bg-white py-2 px-5 hover:text-black transiton duration-300">
//   VIEW
// </button>

//   </Link>
// </div>

//                 ))
//             }
//         </div>
//         </>
//     )
// }
// export default Api


import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../SearchProvider";
import { FaSearch } from "react-icons/fa";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  const { search, setSearch } = useContext(SearchContext);

  useEffect(() => {
    const full = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result.products);
      setLoading(false);
    };
    full();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  // 🔹 Combined Search + Category Filter
  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "all" ? true : item.category === category
    );

  return (
    <>
      {/* 🔍 Search Bar */}
      <div className="flex text-xl items-center mb-6">
        <FaSearch />
        <input
          type="text"
          className="border-black border-2 ml-4 my-2 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-black rounded-3xl border border-black ml-3 font-mono text-white hover:bg-white py-2 px-5 hover:text-black transition duration-300">
          Search
        </button>
      </div>

      {/* 🧩 Category Filter */}
      <div className="flex gap-10 text-2xl items-center justify-center mb-10">
        <ul className="flex font-mono gap-10">
          {["all", "beauty", "fragrances", "furniture", "groceries"].map(
            (cat) => (
              <li
                key={cat}
                onClick={() => setCategory(cat)}
                className={`border border-2 cursor-pointer hover:-translate-y-1.5 rounded-2xl font-semibold duration-300 px-4 py-1
                ${
                  category === cat
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            )
          )}
        </ul>
      </div>


      {/* 🛍️ Products Grid */}
      <div className="grid grid-cols-4 gap-6">
        {filteredData.slice(0, 10).map((item) => (
          <div
            className="p-4 flex flex-col items-center justify-center"
            key={item.id}
          >
            <Link
              to={`/apis/${item.id}`}
              className="flex relative flex-col items-center justify-center gap-2"
            >
              <div className="absolute rounded-xl bg-white font-bold text-black p-3 left-2 top-2">
                -{item.discountPercentage}%
              </div>

              <img
                className="pt-8 rounded-xl bg-[#CCCCCC]"
                src={item.images[0]}
                alt={item.title}
              />

              <h1 className="text-2xl font-bold">{item.title}</h1>
              <h1 className="text-xl font-semibold">{item.brand}</h1>

              {/* ⭐ Rating + Price */}
              <div className="gap-10 text-2xl items-center justify-center flex">
                {item.rating < 4 ? (
                  <div className="flex text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                ) : (
                  <div className="flex text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                )}
                <h1 className="font-bold">${item.price}</h1>
              </div>

              <button className="bg-black rounded-3xl border border-black font-mono font-bold text-white hover:bg-white py-2 px-5 hover:text-black transition duration-300">
                VIEW
              </button>
            </Link>
          </div>
        ))}
      </div>


    </>
  );
};

export default Api;