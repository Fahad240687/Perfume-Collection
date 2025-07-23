"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";
import {
  FaShoppingBag,
  FaArrowLeft,
  FaLock,
  FaTimesCircle,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  // Helper function to get product ID (same as cart popup)
  const getProductId = (product) => {
    return product._id || product.id;
  };

  // Handle quantity change (same logic as cart popup)
  const handleQuantityChange = (product, newQuantity) => {
    const productId = getProductId(product);
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-3 sm:px-5 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <FaArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Back</span>
              </button>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white flex items-center gap-1.5">
              <FaShoppingBag className="h-4 w-4 text-[#DAB060]" />
              Shopping Cart
            </h1>
            <div className="text-xs sm:text-sm text-gray-400">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </div>
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center min-h-[50vh] px-4">
          <div className="text-center max-w-xs sm:max-w-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <FaShoppingBag className="h-8 w-8 text-gray-600" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Looks like you haven't added any items to your cart yet. Start
              shopping to fill it up!
            </p>
            <Link href="/">
              <button className="bg-[#DAB060] hover:bg-[#C28E4D] text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Return To Shop
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-3 sm:px-5 lg:px-6 py-5 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              <div className="bg-[#1A1A1A] rounded-2xl p-4 sm:p-5 border border-gray-800">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DAB060] rounded-full"></span>
                  Your Items
                </h2>

                {/* Table Header - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-5 gap-2 pb-2 border-b border-gray-700 text-gray-400 font-medium text-xs sm:text-sm">
                  <div className="col-span-2">Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div className="text-right">Subtotal</div>
                </div>

                <div className="space-y-2 sm:space-y-3 mt-3">
                  {cartItems.map((item, index) => {
                    const productId = getProductId(item.product);
                    return (
                      <div
                        key={`cart-item-${productId}-${index}`}
                        className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center py-2 sm:py-3 bg-[#0F0F0F] rounded-xl p-3 border border-gray-800 hover:border-gray-700 transition-all duration-200"
                      >
                        {/* Product Info */}
                        <div className="col-span-2 flex items-center gap-2 sm:gap-3 min-w-0">
                          <button
                            onClick={() => {
                              removeFromCart(productId);
                            }}
                            className="text-red-500 hover:text-red-400 hover:bg-red-400 hover:bg-opacity-10 p-1 rounded-lg transition-all duration-200"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <FaTimesCircle className="h-4 w-4" />
                          </button>
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                            <Image
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.product.name}
                              fill
                              className="object-contain p-1.5"
                            />
                          </div>
                          <div className="min-w-0 overflow-hidden">
                            <h3
                              className="font-semibold text-white truncate text-sm sm:text-base"
                              title={item.product.name}
                            >
                              {item.product.name}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm truncate max-w-full">
                              Premium Quality • In Stock
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                              ID: {productId}
                            </p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-[#DAB060] font-semibold text-sm sm:text-base whitespace-nowrap">
                          ${item.product.price.toFixed(2)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <div className="flex items-center bg-[#2A2A2A] border border-gray-700 rounded-lg overflow-hidden">
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => {
                                const newQuantity = Math.max(
                                  1,
                                  Number.parseInt(e.target.value || "1")
                                );
                                handleQuantityChange(item.product, newQuantity);
                              }}
                              className="w-14 sm:w-16 text-center py-1.5 px-2 bg-[#1A1A1A] text-white focus:outline-none focus:bg-[#0F0F0F] transition-colors text-sm sm:text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              min="1"
                            />
                            <div className="flex flex-col">
                              <button
                                onClick={() => {
                                  handleQuantityChange(
                                    item.product,
                                    item.quantity + 1
                                  );
                                }}
                                className="px-2 py-1 text-gray-400 hover:text-white hover:bg-[#3A3A3A] transition-colors"
                              >
                                <FaChevronUp className="h-3 w-3" />
                              </button>
                              <button
                                onClick={() => {
                                  handleQuantityChange(
                                    item.product,
                                    item.quantity - 1
                                  );
                                }}
                                className="px-2 py-1 text-gray-400 hover:text-white hover:bg-[#3A3A3A] transition-colors"
                              >
                                <FaChevronDown className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="text-right whitespace-nowrap">
                          <div className="text-lg font-bold text-white">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.quantity} × ${item.product.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <Link href="/" className="flex-1">
                  <button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-gray-700 hover:border-gray-600 px-4 py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200">
                    Continue Shopping
                  </button>
                </Link>
                <button className="flex-1 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-gray-700 hover:border-gray-600 px-4 py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200">
                  Save for Later
                </button>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <div className="bg-[#1A1A1A] rounded-2xl p-5 sm:p-6 border border-gray-800 shadow-2xl max-w-full overflow-hidden">
                  <h2 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#DAB060] rounded-full"></span>
                    Cart Summary
                  </h2>

                  {/* Summary Details */}
                  <div className="space-y-4 mb-5">
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-sm sm:text-base">
                      <span className="text-gray-400">
                        Subtotal ({cartItems.length} items)
                      </span>
                      <span className="text-white font-semibold">
                        ${cartTotal.subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-sm sm:text-base">
                      <span className="text-gray-400">Shipping</span>
                      <div className="text-right">
                        <span className="text-green-400 font-semibold">
                          Free
                        </span>
                        <div className="text-xs sm:text-sm text-gray-500">
                          On orders over $50
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-sm sm:text-base">
                      <span className="text-gray-400">Tax</span>
                      <span className="text-white font-semibold">
                        Calculated at checkout
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3 bg-[#0F0F0F] rounded-lg px-3">
                      <span className="text-lg sm:text-xl font-bold text-white">
                        Total
                      </span>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-[#DAB060]">
                          ${cartTotal.total.toFixed(2)}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          USD
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link href="/checkout">
                    <button className="w-full bg-gradient-to-r from-[#DAB060] to-[#C28E4D] hover:from-[#C28E4D] hover:to-[#B8834A] text-black py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-200 shadow hover:shadow-lg flex items-center justify-center gap-1.5 mb-3 active:scale-95 text-xs sm:text-sm whitespace-nowrap font-normal">
                      <FaLock className="h-3.5 w-3.5" />
                      Proceed to Checkout - ${cartTotal.total.toFixed(2)}
                    </button>
                  </Link>

                  {/* Security Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 bg-[#0F0F0F] px-3 py-1.5 rounded-lg whitespace-nowrap">
                      <FaLock className="h-3 w-3" />
                      <span>SSL Secured • Safe Payment</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-4 pt-4 border-t border-gray-800 max-w-full overflow-x-hidden">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Promo Code
                      </label>
                      <div className="flex gap-2 flex-wrap">
                        <input
                          type="text"
                          placeholder="Enter code"
                          className="flex-grow min-w-0 bg-[#0F0F0F] border border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060] transition-all text-sm sm:text-base"
                        />
                        <button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors border border-gray-700 hover:border-gray-600 text-sm sm:text-base whitespace-nowrap">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 sm:mt-5 bg-[#1A1A1A] rounded-2xl p-4 sm:p-5 border border-gray-800 text-xs sm:text-sm">
                  <h3 className="font-semibold text-white mb-3">
                    Why shop with us?
                  </h3>
                  <div className="space-y-1.5 text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Free shipping on orders over $50</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>24/7 customer support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
