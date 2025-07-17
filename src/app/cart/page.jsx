"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";
import { FaTimesCircle, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"; // Add this if not imported

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  return (
    <div className="bg-[#1F1F1F] text-white min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center text-white  font-medium mb-6 transition"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            <p className="mb-4">Your cart is empty.</p>
            <Link href="/shop">
              <button className="bg-[#DAB060] hover:bg-[#B67D43] text-black font-semibold px-6 py-3 rounded-md transition">
                Return To Shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className=" lg:col-span-2 bg-gray-50  rounded-lg p-4 sm:p-8 shadow-md overflow-hidden text-gray-800">
              <div className="hidden md:grid grid-cols-5 gap-4 pb-2 border-b font-semibold ">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Qty</div>
                <div className="text-right">Subtotal</div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center py-4 border-b last:border-b-0"
                >
                  {/* Product */}
                  <div className="col-span-2 flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <FaTimesCircle className="h-5 w-5" />
                    </button>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      {item.product.name}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-sm sm:text-base">
                    ${item.product.price.toFixed(2)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-300 rounded-md w-fit">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.product.id,
                          Math.max(1, parseInt(e.target.value || "1"))
                        )
                      }
                      className="w-12 text-center py-1 px-2 bg-white text-gray-800 focus:outline-none text-sm"
                      min="1"
                    />
                    <div className="flex flex-col">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-1 py-0.5 text-gray-600 hover:bg-gray-100"
                      >
                        <FaChevronUp className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-1 py-0.5 text-gray-600 hover:bg-gray-100"
                      >
                        <FaChevronDown className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right font-semibold text-sm sm:text-base">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border border-white rounded-lg p-8 shadow-lg text-gray-200 min-h-[400px] flex flex-col justify-between bg-transparent backdrop-blur-sm">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Cart Summary
                </h2>
                <div className="space-y-3 mb-6 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">
                      ${cartTotal.subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2 text-lg">
                    <span>Total:</span>
                    <span>${cartTotal.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                {" "}
                {/* Link to checkout page */}
                <button className="w-full bg-[#DAB060] hover:bg-[#C28E4D]  text-black font-semibold py-3 rounded-md transition-colors">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
