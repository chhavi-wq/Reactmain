import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart, removeItem } from "../redux/slice/cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // 🧮 Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🛑 Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Your cart is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="w-28 rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.brand}</p>
                  <p className="font-bold mt-2">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="border px-3 py-1 rounded"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="border px-3 py-1 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            onClick={() => dispatch(clearCart())}   
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;