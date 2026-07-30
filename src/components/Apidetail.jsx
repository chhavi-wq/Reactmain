import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartslice";
import Navbar from "./Navbar"

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
 console.log(data);
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
    <>
    <Navbar />
   <div className="min-h-screen bg-[#F8F5F0] px-20 py-35">

  {/* Previous */}
  <button
    className="absolute left-5 top-[50%] text-5xl bg-white p-4 rounded-full shadow-md hover:bg-[#5F745B] hover:text-white transition"
    onClick={() => navigate(`/apis/${Number(id) - 1}`)}
  >
    <GrFormPrevious />
  </button>

  {/* Next */}
  <button
    className="absolute right-5 top-[50%] text-5xl bg-white p-4 rounded-full shadow-md hover:bg-[#5F745B] hover:text-white transition"
    onClick={() => navigate(`/apis/${Number(id) + 1}`)}
  >
    <GrFormNext />
  </button>

  <div className="flex gap-20">

    {/* Product Image */}
    <div className="w-[600px] h-[700px] bg-white border-1 border-[#D6E2D0] hover:shadow- rounded-[40px] shadow-lg">
      <img
        className="w-full h-[600px] object-cover"
        src={data.images[0]}
        alt=""
      />
    </div>

    {/* Product Details */}
    <div className="w-1/2">

      <p className="uppercase tracking-[5px] text-sm text-[#7A7A7A]">
        {data.category}
      </p>

      <h2 className="text-3xl font-medium mt-3">
        {data.title}
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-3 mt-5">
        <div className="flex text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={
                index < Math.round(data.rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        <span className="text-gray-500">
          {data.rating} / 5
        </span>
      </div>

      <p className="mt-8 text-lg leading-8 text-gray-600 w-[90%]">
        {data.description}
      </p>

      {/* Price */}
      <h1 className="text-5xl font-bold mt-5 text-[#384A37]">
        ₹{Math.floor(data.price * 100).toLocaleString("en-IN")}
      </h1>

      {/* Stock */}
      <div className="mt-6">
        <span className="px-4 py-2 rounded-full bg-[#E8EFE4] text-[#5F745B] font-semibold">
          {data.availabilityStatus}
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-10 border-t border-gray-200 pt-3 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500">Stock</span>
          <span className="font-medium">{data.stock} Units</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="font-medium">{data.shippingInformation}</span>
        </div>


        <div className="flex justify-between">
          <span className="text-gray-500">Minimum Order</span>
          <span className="font-medium">
            {data.minimumOrderQuantity}
          </span>
        </div>

      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-8">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#E8EFE4] text-[#5F745B] px-4 py-2 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>


      {/* Buttons */}
      <div className="flex gap-6 mt-5">

        <button className="px-12 py-4 border-2 border-[#384A37] rounded-full text-lg font-semibold hover:bg-[#384A37] hover:text-white transition">
          Buy Now
        </button>

        <button
          onClick={() => handleclick(data)}
          className="px-12 py-4 bg-[#5F745B] text-white rounded-full text-lg font-semibold hover:bg-[#4B5F48] transition"
        >
          Add to Basket
        </button>

      </div>

    </div>

  </div>

  {/* Reviews */}
  <div className="mt-24">

    <h2 className="text-4xl font-bold text-[#384A37] mb-10">
      Customer Reviews
    </h2>

    <div className="grid grid-cols-3 gap-8">

      {data.reviews.map((review, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-sm"
        >

          <h3 className="font-semibold text-xl">
            {review.reviewerName}
          </h3>

          <p className="text-gray-500 mt-1">
            {review.reviewerEmail}
          </p>

          <div className="flex text-yellow-500 mt-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>

          <p className="mt-5 text-gray-600 leading-7">
            {review.comment}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>
</>
  );
  
};

export default Apidetail;