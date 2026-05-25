import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartslice";


const Apidetail = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const { id } = useParams();
  

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const full = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();

      setData(result);
      setLoading(false);
    };

    full();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-serif">
        Loading...
      </div>
    );
  }
  const handleclick=(items)=>{
    dispatch(addToCart(items))
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] px-20 py-16">

  
      <button
        className="absolute left-5 top-[50%] text-5xl font-bold bg-white p-4 rounded-full hover:bg-black hover:text-white transition"
        onClick={() => navigate(`/apis/${Number(id) - 1}`)}
      >
       <GrFormPrevious />
      </button>

   
      <button
        className="absolute right-5 top-[50%] text-5xl bg-white p-3 rounded-full hover:bg-black hover:text-white transition"
        onClick={() => navigate(`/apis/${Number(id) + 1}`)}
      >
        <GrFormNext />
      </button>

      <div className="flex gap-20 items-center">
        <div className="w-1/2 bg-white rounded-[40px] p-10 shadow-sm">
          <img
            className="w-full h-[600px] object-contain"
            src={data.images[0]}
            alt=""
          />
        </div>

        <div className="w-1/2">

          <p className="uppercase tracking-[5px] text-sm text-gray-500">
            {data.category}
          </p>

          <h1 className="text-6xl font-bold font-serif mt-3">
            {data.brand}
          </h1>

          <h2 className="text-3xl mt-3 font-medium">
            {data.title}
          </h2>

          <div className="flex gap-2 text-yellow-500 mt-5 text-xl">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-600 w-[90%]">
            {data.description}
          </p>

          <h1 className="text-5xl font-bold mt-10">
            ${data.price}
          </h1>
          <div className="mt-10">
            <h1 className="text-2xl font-semibold mb-5">
              Available Colors
            </h1>

            <div className="flex gap-5">
              <div className="bg-gray-400 rounded-full w-10 h-10 border-2 border-white shadow"></div>

              <div className="bg-[#7A8F85] rounded-full w-10 h-10 border-4 border-black"></div>

              <div className="bg-[#3A3A3A] rounded-full w-10 h-10 border-2 border-white shadow"></div>

              <div className="bg-yellow-200 rounded-full w-10 h-10 border-2 border-white shadow"></div>

              <div className="bg-pink-200 rounded-full w-10 h-10 border-2 border-white shadow"></div>
            </div>
          </div>

          <div className="flex gap-6 mt-14">

            <button className="px-12 py-4 border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white transition">
              Buy Now
            </button>

            <button onClick={()=>handleclick(data)} className="px-12 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-[#6B7D5C] transition">
              Add to Basket
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Apidetail;