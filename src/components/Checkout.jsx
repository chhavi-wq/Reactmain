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
<div className="min-h-screen bg-[#F8F5F1] py-24 px-4">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}

    <div className="mb-16 text-center">

      <p className="text-sm uppercase tracking-[6px] text-[#7A8B7A]">
        Checkout
      </p>

      <h1 className="mt-3 text-5xl font-light text-[#23332B]">
        Review Your Order
      </h1>

      <p className="mt-4 text-[#7C7C7C]">
        Carefully review your selections before completing your purchase.
      </p>

    </div>

    {/* Products */}

    <div className="space-y-6">

      {cartitems.map((item) => (
        <div
          key={item.id}
          className="rounded-[30px] border border-[#E7E0D8] bg-[#FFFCF8] p-6 shadow-sm transition duration-300 hover:shadow-lg"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-6">

              <div className="flex h-32 w-32 items-center justify-center rounded-[24px] bg-[#F3EEE8]">
                <img
                  src={item.images?.[0] || item.thumbnail}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />
              </div>

              <div>

                <h2 className="text-2xl font-light text-[#23332B]">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm uppercase tracking-[3px] text-[#8A8A8A]">
                  Quantity
                </p>

                <p className="mt-1 text-lg font-medium text-[#32473D]">
                  {item.quantity}
                </p>

              </div>

            </div>

            <div className="text-left md:text-right">

              <h2 className="text-3xl font-semibold text-[#32473D]">
                ₹{Math.floor(item.price*100)}
              </h2>

              <p className="mt-2 text-sm text-[#8A8A8A]">
                Per Item
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>

    {/* Summary */}

    <div className="mt-12 rounded-[30px] border border-[#E7E0D8] bg-[#FFFCF8] p-8 shadow-sm">

      <p className="text-sm uppercase tracking-[5px] text-[#7A8B7A]">
        Summary
      </p>

      <h2 className="mt-2 text-3xl font-light text-[#23332B]">
        Order Summary
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between">

          <span className="text-[#6B6B6B]">
            Total Items
          </span>

          <span className="font-medium text-[#23332B]">
            {cartitems.length}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-[#6B6B6B]">
            Shipping
          </span>

          <span className="font-medium text-[#32473D]">
            Free
          </span>

        </div>

        <div className="border-t border-[#E7E0D8] pt-6 flex items-center justify-between">

          <span className="text-2xl font-medium text-[#23332B]">
            Total
          </span>

          <span className="text-4xl font-semibold text-[#32473D]">
            ₹
            {cartitems
              .reduce(
                (total, item) => total + Math.floor(item.price*100) * item.quantity,
                0
              )
              }
          </span>

        </div>

      </div>

      <button className="mt-10 w-full rounded-full bg-[#32473D] py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#23332B]">
        Complete Purchase →
      </button>

    </div>

  </div>

</div>
  );
};

export default Checkout;