import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ThemeContext } from "../ThemeContext";
import {
  addToCart,
  clearCart,
  removeFromCart,
  removeItem,
} from "../redux/slice/cartslice";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + Math.floor(item.price * 100) * item.quantity,
    0,
  );
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
        // 1. Create order on your backend
        const response = await fetch(
            "http://localhost:3000/api/payment/create-order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: total,
                }),
            }
        );

        const data = await response.json();

        if (!data.success) {
            alert("Unable to create payment order");
            return;
        }

        // 2. Razorpay checkout options
        const options = {
            key: data.key,
            amount: data.order.amount,
            currency: data.order.currency,
            name: "SAGE",
            description: "SAGE Order",
            order_id: data.order.id,

       handler: async function (response) {
    try {
        const verifyResponse = await fetch(
            "http://localhost:3000/api/payment/verify-payment",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    razorpay_order_id:
                        response.razorpay_order_id,

                    razorpay_payment_id:
                        response.razorpay_payment_id,

                    razorpay_signature:
                        response.razorpay_signature,

                    products: cartItems,

                    totalAmount: total,
                }),
            }
        );

        const result = await verifyResponse.json();

        if (result.success) {
            console.log(
                "Payment verified and order created:",
                result.order
            );

            alert("Payment successful!");

            // We'll clear the cart here next
        } else {
            alert("Payment verification failed!");
        }

    } catch (error) {
        console.error(
            "Payment verification error:",
            error
        );

        alert(
            "Payment was completed, but something went wrong."
        );
    }
},

            theme: {
                color: "#4E6B57",
            },
        };

        // 3. Open Razorpay
        const razorpay = new window.Razorpay(options);

        razorpay.open();

    } catch (error) {
        console.error("Payment error:", error);
    }
};

  const placeOrder = async () => {
    try {
      const response = await fetch("https://reactbackend-hg62.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          products: cartItems.map((item) => ({
            productId: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            thumbnail: item.thumbnail,
          })),
          totalAmount: total,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        dispatch(clearCart());
        navigate("/orders");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <section
          className={` min-h-screen ${darkMode ? "bg-[#111512]" : "bg-[#F8F5F1]"} flex items-center justify-center px-6 `}
        >
          <div className="max-w-md text-center">
            <p className="uppercase tracking-[6px] text-sm text-[#7A8B7A]">
              Shopping Bag
            </p>

            <h1
              className={`mt-4 ${darkMode ? "text-[#A8D5B2]" : "text-[#23332B]"} text-5xl font-light`}
            >
              Your Cart is Empty 🛒
            </h1>

            <p className="mt-5 text-[#7C7C7C] leading-7">
              It looks like you haven't added anything yet. Explore our
              thoughtfully curated collection and discover timeless essentials.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-10 rounded-full bg-[#32473D] px-8 py-4 text-white transition duration-300 hover:bg-[#23332B]"
            >
              Continue Shopping →
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

<div
  className={`relative min-h-screen overflow-hidden py-25 px-4 transition-colors duration-500 ${
    darkMode
      ? "bg-[#111512]"
      : "bg-[#F8F5F1]"
  }`}
>

  {/* ================= DECORATIVE BACKGROUND ================= */}


  {/* Bottom-left circles */}
  <div className="pointer-events-none absolute -bottom-72 -left-72 h-[650px] w-[650px]">

    <div
      className={`absolute inset-0 rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.24]"
          : "border-[#32473D]/[0.24]"
      }`}
    />

    <div
      className={`absolute inset-[80px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.25]"
          : "border-[#32473D]/[0.23]"
      }`}
    />

    <div
      className={`absolute inset-[160px] rounded-full border ${
        darkMode
          ? "border-[#8FA494]/[0.23]"
          : "border-[#32473D]/[0.25]"
      }`}
    />

  </div>


  {/* Small decorative dot */}
  <div
    className={`pointer-events-none absolute right-[18%] top-[30%] h-2 w-2 rounded-full ${
      darkMode
        ? "bg-[#8FA494]/30"
        : "bg-[#7A8B7A]/30"
    }`}
  />


  {/* Another small dot */}
  <div
    className={`pointer-events-none absolute bottom-[25%] left-[12%] h-1.5 w-1.5 rounded-full ${
      darkMode
        ? "bg-[#8FA494]/25"
        : "bg-[#7A8B7A]/25"
    }`}
  />


  {/* ================= MAIN CONTENT ================= */}

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Header */}
    <div className="mt-6 text-center">

      <div className="mb-5 flex items-center justify-center gap-4">

        <span
          className={`h-px w-10 ${
            darkMode
              ? "bg-[#78917C]/40"
              : "bg-[#7A8B7A]/40"
          }`}
        />

        <p
          className={`text-sm uppercase tracking-[6px] ${
            darkMode
              ? "text-[#8FA494]"
              : "text-[#7A8B7A]"
          }`}
        >
          Shopping Bag
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
        className={`mt-3 text-5xl font-light md:text-6xl ${
          darkMode
            ? "text-[#E7ECE8]"
            : "text-[#23332B]"
        }`}
      >
        Your Cart
      </h1>


      <p
        className={`mt-4 text-lg ${
          darkMode
            ? "text-[#8F9791]"
            : "text-[#7C7C7C]"
        }`}
      >
        {cartItems.length}{" "}
        {cartItems.length === 1 ? "item" : "items"} carefully selected
        for you
      </p>

    </div>


    {/* Small section indicator */}
    <div className="mt-10 flex items-center gap-4">

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
        YOUR SELECTION
      </span>

    </div>


    {/* ================= CART + SUMMARY ================= */}

    <div className="mt-8 grid gap-8 lg:grid-cols-3">

      {/* CART ITEMS */}
      <div className="space-y-6 lg:col-span-2">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className={`group rounded-[30px] border p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "border-[#2A332D] bg-[#202621] hover:border-[#3F5948]"
                : "border-[#ECE6DD] bg-[#F7F3EE] hover:border-[#D9D0C5]"
            }`}
          >

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              {/* Product */}
              <div className="flex items-center gap-6">

                {/* Product Image */}
                <div
                  className={`relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-[24px] ${
                    darkMode
                      ? "bg-[#292F2B]"
                      : "bg-[#ECE7DF]"
                  }`}
                >

                  {/* Small circle decoration */}
                  <div
                    className={`absolute -right-5 -top-5 h-16 w-16 rounded-full border ${
                      darkMode
                        ? "border-[#78917C]/10"
                        : "border-[#7A8B7A]/10"
                    }`}
                  />

                  <img
                    src={item.thumbnail || item.image?.[0]}
                    alt={item.title}
                    className="h-34 w-34 object-contain transition duration-500 group-hover:scale-105"
                  />

                </div>


                <div>

                  <h2
                    className={`max-w-md text-2xl font-light ${
                      darkMode
                        ? "text-[#F0EEE7]"
                        : "text-[#2F2A26]"
                    }`}
                  >
                    {item.title}
                  </h2>


                  <p className="mt-2 text-sm uppercase tracking-[3px] text-[#8A8A8A]">
                    {item.brand}
                  </p>


                  <h3
                    className={`mt-4 text-2xl font-semibold ${
                      darkMode
                        ? "text-[#78917C]"
                        : "text-[#32473D]"
                    }`}
                  >
                    ₹
                    {Math.floor(item.price * 100).toLocaleString("en-IN")}
                  </h3>

                </div>

              </div>


              {/* Quantity & Remove */}
              <div className="flex flex-col items-start gap-5 md:items-end">

                <div
                  className={`flex items-center overflow-hidden rounded-full border ${
                    darkMode
                      ? "border-[#343D37] bg-[#181D1A]"
                      : "border-[#E2DCD3] bg-[#F8F5F1]"
                  }`}
                >

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className={`px-5 py-3 text-lg transition ${
                      darkMode
                        ? "text-[#F0EEE7] hover:bg-[#3F5948]"
                        : "text-[#32473D] hover:bg-[#32473D]"
                    } hover:text-white`}
                  >
                    −
                  </button>


                  <span
                    className={`px-6 text-lg font-medium ${
                      darkMode
                        ? "text-[#F0EEE7]"
                        : "text-[#32473D]"
                    }`}
                  >
                    {item.quantity}
                  </span>


                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className={`px-5 py-3 text-lg transition ${
                      darkMode
                        ? "text-[#F0EEE7] hover:bg-[#3F5948]"
                        : "text-[#32473D] hover:bg-[#32473D]"
                    } hover:text-white`}
                  >
                    +
                  </button>

                </div>


                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className={`text-sm uppercase tracking-[2px] transition hover:tracking-[3px] ${
                    darkMode
                      ? "text-[#A9ADA7] hover:text-[#D5DDD7]"
                      : "text-[#6B6B6B] hover:text-[#32473D]"
                  }`}
                >
                  Remove Item
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* ================= SUMMARY ================= */}

      <div
        className={`sticky top-8 h-fit rounded-[30px] border p-8 shadow-sm transition-all duration-300 ${
          darkMode
            ? "border-[#2A332D] bg-[#181D1A]"
            : "border-[#E7E0D8] bg-[#FFFCF8]"
        }`}
      >

        <div className="flex items-center gap-3">

          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
              darkMode
                ? "border-[#4E6B57] text-[#78917C]"
                : "border-[#CFC7BB] text-[#7A8B7A]"
            }`}
          >
            02
          </span>

          <p
            className={`text-sm uppercase tracking-[5px] ${
              darkMode
                ? "text-[#78917C]"
                : "text-[#7A8B7A]"
            }`}
          >
            Summary
          </p>

        </div>


        <h2
          className={`mt-4 text-3xl font-light ${
            darkMode
              ? "text-[#F0EEE7]"
              : "text-[#23332B]"
          }`}
        >
          Order Summary
        </h2>


        <div className="mt-8 space-y-5">

          {/* Subtotal */}
          <div
            className={`flex items-center justify-between ${
              darkMode
                ? "text-[#A9ADA7]"
                : "text-[#6B6B6B]"
            }`}
          >
            <span>Subtotal</span>

            <span
              className={`font-medium ${
                darkMode
                  ? "text-[#F0EEE7]"
                  : "text-[#23332B]"
              }`}
            >
              ₹{Math.floor(total).toLocaleString("en-IN")}
            </span>
          </div>


          {/* Shipping */}
          <div
            className={`flex items-center justify-between ${
              darkMode
                ? "text-[#A9ADA7]"
                : "text-[#6B6B6B]"
            }`}
          >
            <span>Shipping</span>

            <span
              className={`font-medium ${
                darkMode
                  ? "text-[#A8D5B2]"
                  : "text-[#32473D]"
              }`}
            >
              Free
            </span>
          </div>


          {/* Tax */}
          <div
            className={`flex items-center justify-between ${
              darkMode
                ? "text-[#A9ADA7]"
                : "text-[#6B6B6B]"
            }`}
          >
            <span>Tax</span>

            <span
              className={`font-medium ${
                darkMode
                  ? "text-[#F0EEE7]"
                  : "text-[#23332B]"
              }`}
            >
              ₹0
            </span>
          </div>


          {/* Total */}
          <div
            className={`flex items-center justify-between border-t pt-6 ${
              darkMode
                ? "border-[#2A332D]"
                : "border-[#E7E0D8]"
            }`}
          >

            <span
              className={`text-xl font-medium ${
                darkMode
                  ? "text-[#F0EEE7]"
                  : "text-[#23332B]"
              }`}
            >
              Total
            </span>


            <span
              className={`text-3xl font-semibold ${
                darkMode
                  ? "text-[#78917C]"
                  : "text-[#32473D]"
              }`}
            >
              ₹{Math.floor(total).toLocaleString("en-IN")}
            </span>

          </div>

        </div>


        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">

          <button
            onClick={() => dispatch(clearCart())}
            className={`w-full rounded-full border py-4 font-medium transition duration-300 ${
              darkMode
                ? "border-[#4E6B57] text-[#78917C] hover:bg-[#4E6B57] hover:text-white"
                : "border-[#32473D] text-[#32473D] hover:bg-[#32473D] hover:text-white"
            }`}
          >
            Clear Cart
          </button>

   <button
            onClick={handlePayment}
            className={`w-full rounded-full py-4 text-lg font-medium text-white transition duration-300 ${
              darkMode
                ? "bg-[#4E6B57] hover:bg-[#3F5948]"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            Pay Now
          </button>

          <button
            onClick={placeOrder}
            className={`w-full rounded-full py-4 text-lg font-medium text-white transition duration-300 ${
              darkMode
                ? "bg-[#4E6B57] hover:bg-[#3F5948]"
                : "bg-[#32473D] hover:bg-[#23332B]"
            }`}
          >
            Secure Checkout →
          </button>

        </div>

      </div>

    </div>

  </div>

</div>


    </>
  );
};

export default Cart;
