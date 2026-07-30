import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../ThemeContext"
import { useContext } from "react";

const Orders = ()=>{
const [orders, setOrders] = useState([]);



useEffect(() => {
  fetchOrders();
}, []);

const { darkMode,toggleTheme } = useContext(ThemeContext);


const fetchOrders = async () => {
  const response = await fetch("http://localhost:3000/api/orders", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();

  setOrders(data);
};

return(

 <>
  <Navbar />

  <div
  className={`min-h-screen pt-30 px-6 ${
    darkMode
      ? "bg-[#111512] text-[#F5F1E8]"
      : "bg-[#F6F2EC]"
  }`}
>
  <h1
    className={`text-5xl font-mono font-bold text-center mb-12 ${
      darkMode ? "text-[#F5F1E8]" : "text-[#2F2A26]"
    }`}
  >
    My Orders 🛒
  </h1>

  

  <div className="max-w-5xl mx-auto space-y-10">
    {
      orders.length === 0 ? (
        <div
          className={`rounded-3xl shadow-xl border p-10 text-center ${
            darkMode
              ? "bg-[#181D1A] text-[#F5F1E8] border-[#2A332D]"
              : "bg-white text-black border-[#E5DDD3]"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              darkMode ? "text-[#F5F1E8]" : "text-[#2F2A26]"
            }`}
          >
            No orders found
          </h2>

          <p
            className={`mt-2 ${
              darkMode ? "text-[#A9ADA7]" : "text-gray-400"
            }`}
          >
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className={`rounded-3xl shadow-xl border overflow-hidden ${
              darkMode
                ? "bg-[#181D1A] border-[#2A332D]"
                : "bg-white border-[#E5DDD3]"
            }`}
          >
            
            {/* Header */}
            <div className="flex justify-between items-center bg-[#4E6B57] px-8 py-5">
              <div>
                <p className="text-white text-lg font-semibold">
                  Order #{order._id.slice(-6).toUpperCase()}
                </p>

                <p className="text-[#D9E0DA] text-sm">
                  Status: {order.status}
                </p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold
                ${
                  order.status === "Delivered"
                    ? darkMode
                      ? "bg-[#24352A] text-[#A8D5B2]"
                      : "bg-green-100 text-green-700"
                    : order.status === "Shipped"
                    ? darkMode
                      ? "bg-[#202F3D] text-[#9FC4E4]"
                      : "bg-blue-100 text-blue-700"
                    : darkMode
                    ? "bg-[#3A3321] text-[#E4C982]"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Products */}
            <div className="p-8 space-y-6">
              {order.products.map((item) => (
                <div
                  key={item.productId}
                  className={`flex items-center justify-between border-b pb-5 ${
                    darkMode
                      ? "border-[#2A332D]"
                      : "border-[#ECE6DD]"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className={`w-24 h-24 rounded-xl object-cover ${
                        darkMode
                          ? "bg-[#202621]"
                          : "bg-[#F7F3EE]"
                      }`}
                    />

                    <div>
                      <h2
                        className={`text-lg font-semibold ${
                          darkMode
                            ? "text-[#F0EEE7]"
                            : "text-[#2F2A26]"
                        }`}
                      >
                        {item.title}
                      </h2>

                      <p
                        className={
                          darkMode
                            ? "text-[#A9ADA7]"
                            : "text-gray-500"
                        }
                      >
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-[#78917C]">
                    ₹{Math.floor(item.price * 100).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className={`px-8 py-6 flex justify-between items-center ${
                darkMode
                  ? "bg-[#141916]"
                  : "bg-[#FAF8F5]"
              }`}
            >
              <div>
                <p
                  className={`text-sm ${
                    darkMode
                      ? "text-[#9FA59F]"
                      : "text-gray-500"
                  }`}
                >
                  Thank you for shopping with SAGE
                </p>
              </div>

              <div className="text-right">
                <p
                  className={
                    darkMode
                      ? "text-[#9FA59F]"
                      : "text-gray-500"
                  }
                >
                  Total
                </p>

                <h2
                  className={`text-3xl font-bold ${
                    darkMode
                      ? "text-[#F0EEE7]"
                      : "text-[#2F2A26]"
                  }`}
                >
                  ₹{order.totalAmount.toLocaleString("en-IN")}
                </h2>
              </div>
            </div>
          </div>
        ))
      )
    }
  </div>
</div>
</>
)
}

export default Orders;
