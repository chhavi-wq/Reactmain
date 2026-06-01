import { useSelector, useDispatch } from "react-redux";
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
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-3">
            Add some products to continue shopping
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-10 px-4">
      
      <div className="max-w-7xl mx-auto">
    
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900">
            Your Cart
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            {cartItems.length} items in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 border border-gray-200 hover:border-gray-300 transition"
              >
                <div className="flex items-center justify-between gap-5">

                  <div className="flex items-center gap-5">
                    
                    <div className="bg-[#f3f4f6] p-4 rounded-2xl">
                      <img
                        src={item.thumbnail || item.image?.[0]}
                        alt={item.title}
                        className="w-28 h-28 object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 max-w-md">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {item.brand}
                      </p>

                      <h1 className="text-2xl font-bold text-indigo-600 mt-3">
                        ${item.price}
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-4">

                    <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">

                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="px-4 py-2 text-lg hover:bg-gray-200 transition"
                      >
                        -
                      </button>

                      <span className="px-5 font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="px-4 py-2 text-lg hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-red-500 hover:text-red-600 font-medium transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 h-fit sticky top-5">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">
                  ${total.toFixed(0)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$0</span>
              </div>

              <hr className="my-5" />

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  Total
                </span>

                <span className="text-3xl font-bold text-indigo-600">
                  ${total.toFixed(0)}
                </span>
              </div>
            </div>


            <div className="flex flex-col gap-4 mt-8">

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-100 transition"
              >
                Clear Cart
              </button>

              <button
                onClick={() => {
                  navigate("/checkout");
                }}
                className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-900 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;