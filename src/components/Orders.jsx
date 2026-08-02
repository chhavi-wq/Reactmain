import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchOrders();
  }, []);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const fetchOrders = async () => {
    const response = await fetch("https://reactbackend-hg62.onrender.com/api/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();

    setOrders(data);
  };
  console.log(orders)

  return (
    <>
      <Navbar />

  
<div
  className={`relative min-h-screen overflow-hidden pt-30 px-6 transition-colors duration-500 ${
    darkMode
      ? "bg-[#111512] text-[#F5F1E8]"
      : "bg-[#F6F2EC]"
  }`}
>

  {/* ================= BACKGROUND DECORATION ================= */}

  {/* Top-right concentric circles */}
  <div className="pointer-events-none absolute -right-64 -top-64 h-[700px] w-[700px]">

    <div
      className={`absolute inset-0 rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.06]"
          : "border-[#32473D]/[0.05]"
      }`}
    />

    <div
      className={`absolute inset-[70px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.05]"
          : "border-[#32473D]/[0.04]"
      }`}
    />

    <div
      className={`absolute inset-[140px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.04]"
          : "border-[#32473D]/[0.03]"
      }`}
    />

    <div
      className={`absolute inset-[210px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.03]"
          : "border-[#32473D]/[0.025]"
      }`}
    />

  </div>


  {/* Bottom-left circles */}
  <div className="pointer-events-none absolute -bottom-80 -left-80 h-[700px] w-[700px]">

    <div
      className={`absolute inset-0 rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.04]"
          : "border-[#32473D]/[0.04]"
      }`}
    />

    <div
      className={`absolute inset-[80px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.035]"
          : "border-[#32473D]/[0.03]"
      }`}
    />

    <div
      className={`absolute inset-[160px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.03]"
          : "border-[#32473D]/[0.025]"
      }`}
    />

  </div>


  {/* Decorative dots */}
  <div
    className={`pointer-events-none absolute right-[15%] top-[32%] h-2 w-2 rounded-full ${
      darkMode
        ? "bg-[#8FA494]/30"
        : "bg-[#7A8B7A]/30"
    }`}
  />

  <div
    className={`pointer-events-none absolute bottom-[22%] left-[10%] h-1.5 w-1.5 rounded-full ${
      darkMode
        ? "bg-[#8FA494]/25"
        : "bg-[#7A8B7A]/25"
    }`}
  />


  {/* ================= MAIN CONTENT ================= */}

  <div className="relative z-10 mx-auto max-w-5xl">

    {/* Heading */}
    <div className="text-center">

      <div className="mb-5 flex items-center justify-center gap-4">

        <span
          className={`h-px w-10 ${
            darkMode
              ? "bg-[#78917C]/40"
              : "bg-[#7A8B7A]/40"
          }`}
        />

        <p
          className={`text-sm uppercase tracking-[5px] ${
            darkMode
              ? "text-[#78917C]"
              : "text-[#7A8B7A]"
          }`}
        >
          Your Journey
        </p>

        <span
          className={`h-px w-10 ${
            darkMode
              ? "bg-[#78917C]/40"
              : "bg-[#7A8B7A]/40"
          }`}
        />

      </div>


      <h1
        className={`text-5xl font-mono font-bold md:text-6xl ${
          darkMode
            ? "text-[#F5F1E8]"
            : "text-[#2F2A26]"
        }`}
      >
        My Orders 🛒
      </h1>


      <p
        className={`mt-4 ${
          darkMode
            ? "text-[#8F9791]"
            : "text-[#7C7C7C]"
        }`}
      >
        A record of everything you've chosen from SAGE
      </p>

    </div>


    {/* Section indicator */}
    <div className="mt-10 mb-8 flex items-center gap-4">

      <span
        className={`text-xs tracking-[0.3em] ${
          darkMode
            ? "text-[#78917C]"
            : "text-[#7A8B7A]"
        }`}
      >
        01
      </span>

      <span
        className={`h-px flex-1 ${
          darkMode
            ? "bg-[#2A332D]"
            : "bg-[#E4DDD4]"
        }`}
      />

      <span
        className={`text-xs tracking-[0.25em] ${
          darkMode
            ? "text-[#6F7771]"
            : "text-[#9A958D]"
        }`}
      >
        ORDER HISTORY
      </span>

    </div>


    {/* ================= ORDERS ================= */}

    <div className="space-y-10">

      {orders.length === 0 ? (

        <div
          className={`rounded-3xl border p-10 text-center shadow-xl ${
            darkMode
              ? "border-[#2A332D] bg-[#181D1A]"
              : "border-[#E5DDD3] bg-[#F8F5F0]"
          }`}
        >

          <div
            className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border ${
              darkMode
                ? "border-[#4E6B57] text-[#78917C]"
                : "border-[#CFC7BB] text-[#7A8B7A]"
            }`}
          >
            01
          </div>

          <h2
            className={`text-2xl font-semibold ${
              darkMode
                ? "text-[#F5F1E8]"
                : "text-[#2F2A26]"
            }`}
          >
            No orders found
          </h2>

          <p
            className={`mt-2 ${
              darkMode
                ? "text-[#A9ADA7]"
                : "text-gray-400"
            }`}
          >
            You haven't placed any orders yet.
          </p>

        </div>

      ) : (

        orders.map((order, index) => (

          <div
            key={order._id}
            className={`group overflow-hidden rounded-3xl border shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
              darkMode
                ? "border-[#2A332D] bg-[#181D1A] hover:border-[#3F5948]"
                : "border-[#E5DDD3] bg-[#FBF9F6] hover:border-[#D8CFC3]"
            }`}
          >

            {/* ================= ORDER HEADER ================= */}

            <div className="relative overflow-hidden bg-[#4E6B57] px-8 py-5">

              {/* Header circle */}
              <div className="pointer-events-none absolute -right-12 -top-24 h-48 w-48 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-2 -top-14 h-28 w-28 rounded-full border border-white/[0.07]" />


              <div className="relative z-10 flex items-center justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[10px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-lg font-semibold text-white">
                      Order #{order._id.slice(-6).toUpperCase()}
                    </p>

                  </div>

                  <p className="mt-1 text-sm text-[#D9E0DA]">
                    Status: {order.status}
                  </p>

                </div>


                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
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

            </div>


            {/* ================= PRODUCTS ================= */}

            <div className="space-y-6 p-8">

              {order.products.map((item) => (

                <div
                  key={item.productId}
                  className={`flex items-center justify-between border-b pb-5 transition-colors ${
                    darkMode
                      ? "border-[#2A332D]"
                      : "border-[#ECE6DD]"
                  }`}
                >

                  <div className="flex items-center gap-5">

                    {/* Image */}
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl ${
                        darkMode
                          ? "bg-[#202621]"
                          : "bg-[#F1ECE5]"
                      }`}
                    >

                      {/* Small circle */}
                      <div
                        className={`absolute -right-4 -top-4 h-12 w-12 rounded-full border ${
                          darkMode
                            ? "border-[#78917C]/10"
                            : "border-[#7A8B7A]/10"
                        }`}
                      />

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>


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
                    ₹
                    {Math.floor(item.price * 100).toLocaleString("en-IN")}
                  </p>

                </div>

              ))}

            </div>


            {/* ================= FOOTER ================= */}

            <div
              className={`flex items-center justify-between px-8 py-6 ${
                darkMode
                  ? "bg-[#141916]"
                  : "bg-[#F6F3EF]"
              }`}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                    darkMode
                      ? "border-[#3A453E] text-[#78917C]"
                      : "border-[#D8D0C6] text-[#7A8B7A]"
                  }`}
                >
                  ✓
                </div>

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

      )}

    </div>

  </div>

</div>


    </>
  );
};

export default Orders;
