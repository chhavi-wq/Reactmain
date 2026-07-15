import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../SearchProvider";
import { FaSearch } from "react-icons/fa";
import {addToCart} from "../redux/slice/cartslice";
import {useDispatch} from "react-redux";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
   const dispatch = useDispatch();

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

  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "all" ? true : item.category === category
    );

  return (
    <>

      <div className="max-w-7xl mx-auto px-6 py-10">

  {/* Search + Filter */}
  <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">

    <div className="relative w-full lg:w-[450px]">
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-gray-300 bg-white py-3 pl-14 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
      Search
    </button>

  </div>

  {/* Categories */}

  <div className="flex justify-center flex-wrap gap-4 mb-14">

    {["all", "beauty", "fragrances", "furniture", "groceries"].map(
      (cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`capitalize px-6 py-3 rounded-full font-medium transition-all duration-300
          ${
            category === cat
              ? "bg-black text-white shadow-lg"
              : "bg-gray-100 hover:bg-black hover:text-white"
          }`}
        >
          {cat}
        </button>
      )
    )}

  </div>

  {/* Products */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

    {filteredData.slice(0, 30).map((item) => (

      <div
        key={item.id}
        className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
      >

        <Link to={`/apis/${item.id}`}>

          <div className="relative bg-gray-100 h-72 flex justify-center items-center">

            <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
              -{Math.round(item.discountPercentage)}%
            </div>

            <img
              src={item.images[0]}
              alt={item.title}
              className="h-56 object-contain group-hover:scale-110 transition duration-500"
            />

          </div>

        </Link>

        <div className="p-5">

          <p className="text-gray-500 text-sm">{item.brand}</p>

          <h2 className="font-bold text-xl mt-1 line-clamp-1">
            {item.title}
          </h2>

          <div className="flex justify-between items-center mt-4">

            <div className="flex text-yellow-400">

              {Array.from({
                length: Math.round(item.rating),
              }).map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                />
              ))}

            </div>

            <h2 className="text-2xl font-serif font-bold">
              ₹{Math.floor(item.price*100)}
            </h2>

          </div>

          <div className="flex gap-3 mt-6">

            <Link
              to={`/apis/${item.id}`}
              className="flex-1"
            >
              <button className="w-full border border-black rounded-xl py-2 font-medium hover:bg-black hover:text-white transition">
                View
              </button>
            </Link>

            <button
              onClick={() => dispatch(addToCart(item))}
              className="flex-1 bg-black text-white rounded-xl py-2 font-medium hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

    </>
  );
};

export default Api;