import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GrPrevious, GrFormNext } from "react-icons/gr";

const Apidetail = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-[#F8F5F0] px-20 py-16 relative">

      {/* Previous Button */}
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl bg-white p-4 rounded-full shadow-md hover:bg-black hover:text-white transition"
        onClick={() => navigate(`/apis/${Number(id) - 1}`)}
      >
        <GrPrevious />
      </button>

      {/* Next Button */}
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 text-4xl bg-white p-3 rounded-full shadow-md hover:bg-black hover:text-white transition"
        onClick={() => navigate(`/apis/${Number(id) + 1}`)}
      >
        <GrFormNext />
      </button>

      <div className="flex gap-20 items-center">

        {/* Image */}
        <div className="w-1/2 bg-white rounded-[40px] p-10 shadow-sm">
          <img
            className="w-full h-[600px] object-contain"
            src={data.images[0]}
            alt=""
          />
        </div>

        {/* Details */}
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

          {/* Rating */}
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

          {/* Colors */}
          <div className="mt-10">
            <h1 className="text-2xl font-semibold mb-5">
              Available Colors
            </h1>

            <div className="flex gap-5">
              <div className="bg-[#1A2E05] rounded-full w-10 h-10 border-2 border-white shadow"></div>

              <div className="bg-[#2563EB] rounded-full w-10 h-10 border-4 border-black"></div>

              <div className="bg-[#F6E27F] rounded-full w-10 h-10 border-2 border-white shadow"></div>

              <div className="bg-[#0F172A] rounded-full w-10 h-10 border-2 border-white shadow"></div>

              <div className="bg-[#450A0A] rounded-full w-10 h-10 border-2 border-white shadow"></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-14">

            <button className="px-12 py-4 border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white transition">
              Buy Now
            </button>

            <button className="px-12 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-[#6B7D5C] transition">
              Add to Basket
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Apidetail;