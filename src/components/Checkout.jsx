import {
  addToCart,
  clearCart,
  removeFromCart,
  removeItem,
} from "../redux/slice/cartslice";

import { useSelector } from "react-redux";

const Checkout = () => {
  const cartitems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Review your items before placing the order
          </p>
        </div>
        <div className="space-y-5">
          {cartitems.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between gap-6">
                  
                  <div className="flex items-center gap-5">
                    
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <img
                        src={item.images?.[0] || item.thumbnail}
                        alt={item.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 max-w-md">
                        {item.title}
                      </h2>

                      <p className="text-sm text-gray-500 mt-2">
                        Quantity:
                        <span className="ml-2 font-medium text-black">
                          {item.quantity}
                        </span>
                      </p>
                    </div>
                  </div>

            
                  <div className="text-right">
                    <h1 className="text-2xl font-bold text-gray-900">
                      ${item.price.toFixed(1)}
                    </h1>

                    <p className="text-sm text-gray-400 mt-1">
                      Per item
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-700">
              Total Items
            </h1>

            <p className="text-lg font-medium">
              {cartitems.length}
            </p>
          </div>

          <div className="flex items-center justify-between border-t pt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              Total
            </h1>

            <h1 className="text-4xl font-bold text-black">
              $
              {cartitems
                .reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )
                .toFixed(1)}
            </h1>
          </div>
          <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition duration-300">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;