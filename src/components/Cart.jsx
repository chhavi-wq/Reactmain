import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import {ToastContainer, toast} from "react-toastify";
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
    0
  );

  const navigate = useNavigate();
const placeOrder = async () => {
  try {

    const response = await fetch("http://localhost:3000/api/orders", {
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
      toast.success(data.message)
 dispatch(clearCart());
      navigate("/orders");
    } else {
      toast.error(data.message)
    }
  } catch (err) {
    console.log(err);
  }
};
  if (cartItems.length === 0) {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F5F1] flex items-center justify-center px-6">
        <div className="max-w-md text-center">

          <p className="uppercase tracking-[6px] text-sm text-[#7A8B7A]">
            Shopping Bag
          </p>

          <h1 className="mt-4 text-5xl font-light text-[#23332B]">
            Your Cart is Empty 🛒 
          </h1>

          <p className="mt-5 text-[#7C7C7C] leading-7">
            It looks like you haven't added anything yet.
            Explore our thoughtfully curated collection and
            discover timeless essentials.
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
     <Navbar/>
    <div className="min-h-screen bg-[#f7f7f7] py-25 px-4">
      
      <div className="max-w-7xl mx-auto">
    <div className="mt-6 text-center">
  <p className="text-sm uppercase tracking-[6px] text-[#7A8B7A]">
    Shopping Bag
  </p>

  <h1 className="mt-3 text-5xl md:text-6xl font-light text-[#23332B]">
    Your Cart
  </h1>

  <p className="mt-4 text-[#7C7C7C] text-lg">
    {cartItems.length} {cartItems.length === 1 ? "item" : "items"} carefully selected for you
  </p>
</div>

        <div className="grid mt-10 lg:grid-cols-3 gap-8">

         <div className="lg:col-span-2 space-y-6">
  {cartItems.map((item) => (
    <div
      key={item.id}
      className="rounded-[30px] border border-[#E7E0D8] bg-[#FFFCF8] p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Product */}
        <div className="flex items-center gap-6">

          <div className="flex h-32 w-32 items-center justify-center rounded-[24px] bg-[#F3EEE8]">
            <img
              src={item.thumbnail || item.image?.[0]}
              alt={item.title}
              className="h-24 w-24 object-contain transition duration-300 hover:scale-105"
            />
          </div>

          <div>
            <h2 className="max-w-md text-2xl font-light text-[#23332B]">
              {item.title}
            </h2>

            <p className="mt-2 text-sm uppercase tracking-[3px] text-[#8A8A8A]">
              {item.brand}
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#32473D]">
              ₹{Math.floor(item.price*100).toLocaleString("en-IN")}
            </h3>
          </div>

        </div>

        {/* Quantity & Remove */}
        <div className="flex flex-col items-start gap-5 md:items-end">

          <div className="flex items-center overflow-hidden rounded-full border border-[#DDD5CB] bg-[#F8F5F1]">

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="px-5 py-3 text-lg text-[#32473D] transition hover:bg-[#32473D] hover:text-white"
            >
              −
            </button>

            <span className="px-6 text-lg font-medium text-[#23332B]">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(addToCart(item))}
              className="px-5 py-3 text-lg text-[#32473D] transition hover:bg-[#32473D] hover:text-white"
            >
              +
            </button>

          </div>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="text-sm uppercase tracking-[2px] text-[#8B6A52] transition hover:text-[#32473D]"
          >
            Remove Item
          </button>

        </div>

      </div>
    </div>
  ))}
</div>

         <div className="sticky top-8 h-fit rounded-[30px] border border-[#E7E0D8] bg-[#FFFCF8] p-8 shadow-sm">

  <p className="text-sm uppercase tracking-[5px] text-[#7A8B7A]">
    Summary
  </p>

  <h2 className="mt-2 text-3xl font-light text-[#23332B]">
    Order Summary
  </h2>

  <div className="mt-8 space-y-5">

    <div className="flex items-center justify-between text-[#6B6B6B]">
      <span>Subtotal</span>

      <span className="font-medium text-[#23332B]">
        ₹{Math.floor(total).toLocaleString("en-IN")}
      </span>
    </div>

    <div className="flex items-center justify-between text-[#6B6B6B]">
      <span>Shipping</span>

      <span className="font-medium text-[#32473D]">
        Free
      </span>
    </div>

    <div className="flex items-center justify-between text-[#6B6B6B]">
      <span>Tax</span>

      <span className="font-medium text-[#23332B]">
        ₹0
      </span>
    </div>

    <div className="border-t border-[#E7E0D8] pt-6 flex items-center justify-between">

      <span className="text-xl font-medium text-[#23332B]">
        Total
      </span>

      <span className="text-3xl font-semibold text-[#32473D]">
        ₹{Math.floor(total).toLocaleString("en-IN")}
      </span>

    </div>

  </div>


  <div className="mt-8 flex flex-col gap-4">

    <button
      onClick={() => dispatch(clearCart())}
      className="w-full rounded-full border border-[#32473D] py-4 font-medium text-[#32473D] transition duration-300 hover:bg-[#32473D] hover:text-white"
    >
      Clear Cart
    </button>

    <button
      onClick={placeOrder}
      className="w-full rounded-full bg-[#32473D] py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#23332B]"
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