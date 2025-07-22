"use client"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/app/context/cart-context"
import { FaShoppingBag, FaArrowLeft, FaLock, FaTimesCircle, FaChevronUp, FaChevronDown } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()
  const router = useRouter()

  // Helper function to get product ID (same as cart popup)
  const getProductId = (product) => {
    return product._id || product.id
  }

  // Handle quantity change (same logic as cart popup)
  const handleQuantityChange = (product, newQuantity) => {
    const productId = getProductId(product)
    if (newQuantity < 1) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <FaShoppingBag className="h-6 w-6 text-[#DAB060]" />
              Shopping Cart
            </h1>
            <div className="text-sm text-gray-400">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </div>
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <FaShoppingBag className="h-12 w-12 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link href="/">
              <button className="bg-[#DAB060] hover:bg-[#C28E4D] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Return To Shop
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DAB060] rounded-full"></span>
                  Your Items
                </h2>

                {/* Table Header - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-5 gap-4 pb-4 border-b border-gray-700 text-gray-400 font-medium">
                  <div className="col-span-2">Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div className="text-right">Subtotal</div>
                </div>

                <div className="space-y-4 mt-4">
                  {cartItems.map((item, index) => {
                    const productId = getProductId(item.product)
                    return (
                      <div
                        key={`cart-item-${productId}-${index}`}
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center py-4 bg-[#0F0F0F] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
                      >
                        {/* Product Info */}
                        <div className="col-span-2 flex items-center gap-4">
                          <button
                            onClick={() => {
                              console.log("Removing product:", productId)
                              removeFromCart(productId)
                            }}
                            className="text-red-500 hover:text-red-400 hover:bg-red-400 hover:bg-opacity-10 p-2 rounded-lg transition-all duration-200"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <FaTimesCircle className="h-5 w-5" />
                          </button>
                          <div className="relative w-20 h-20 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                            <Image
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.product.name}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-white truncate">{item.product.name}</h3>
                            <p className="text-gray-400 text-sm">Premium Quality • In Stock</p>
                            <p className="text-xs text-gray-500 mt-1">ID: {productId}</p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-[#DAB060] font-semibold">${item.product.price.toFixed(2)}</div>

                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <div className="flex items-center bg-[#2A2A2A] border border-gray-700 rounded-lg overflow-hidden">
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => {
                                const newQuantity = Math.max(1, Number.parseInt(e.target.value || "1"))
                                console.log("Input change:", productId, newQuantity)
                                handleQuantityChange(item.product, newQuantity)
                              }}
                              className="w-16 text-center py-2 px-2 bg-[#1A1A1A] text-white focus:outline-none focus:bg-[#0F0F0F] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              min="1"
                            />
                            <div className="flex flex-col">
                              <button
                                onClick={() => {
                                  console.log("Increase clicked:", productId, item.quantity)
                                  handleQuantityChange(item.product, item.quantity + 1)
                                }}
                                className="px-2 py-1 text-gray-400 hover:text-white hover:bg-[#3A3A3A] transition-colors"
                              >
                                <FaChevronUp className="h-3 w-3" />
                              </button>
                              <button
                                onClick={() => {
                                  console.log("Decrease clicked:", productId, item.quantity)
                                  handleQuantityChange(item.product, item.quantity - 1)
                                }}
                                className="px-2 py-1 text-gray-400 hover:text-white hover:bg-[#3A3A3A] transition-colors"
                              >
                                <FaChevronDown className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="text-right">
                          <div className="text-xl font-bold text-white">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.quantity} × ${item.product.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="flex-1">
                  <button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-gray-700 hover:border-gray-600 px-6 py-4 rounded-lg font-medium transition-all duration-200">
                    Continue Shopping
                  </button>
                </Link>
                <button className="flex-1 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-gray-700 hover:border-gray-600 px-6 py-4 rounded-lg font-medium transition-all duration-200">
                  Save for Later
                </button>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-gray-800 shadow-2xl">
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#DAB060] rounded-full"></span>
                    Cart Summary
                  </h2>

                  {/* Summary Details */}
                  <div className="space-y-6 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-gray-400">Subtotal ({cartItems.length} items)</span>
                      <span className="text-white font-semibold text-lg">${cartTotal.subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-gray-400">Shipping</span>
                      <div className="text-right">
                        <span className="text-green-400 font-semibold">Free</span>
                        <div className="text-xs text-gray-500">On orders over $50</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-gray-400">Tax</span>
                      <span className="text-white font-semibold">Calculated at checkout</span>
                    </div>

                    <div className="flex justify-between items-center py-4 bg-[#0F0F0F] rounded-lg px-4">
                      <span className="text-xl font-bold text-white">Total</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#DAB060]">${cartTotal.total.toFixed(2)}</div>
                        <div className="text-xs text-gray-400">USD</div>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link href="/checkout">
                    <button className="w-full bg-gradient-to-r from-[#DAB060] to-[#C28E4D] hover:from-[#C28E4D] hover:to-[#B8834A] text-black font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-4 active:scale-95">
                      <FaLock className="h-4 w-4" />
                      Proceed to Checkout - ${cartTotal.total.toFixed(2)}
                    </button>
                  </Link>

                  {/* Security Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-[#0F0F0F] px-4 py-2 rounded-lg">
                      <FaLock className="h-3 w-3" />
                      <span>SSL Secured • Safe Payment</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">Promo Code</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter code"
                          className="flex-1 bg-[#0F0F0F] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060] transition-all"
                        />
                        <button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-700 hover:border-gray-600">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-sm font-semibold text-white mb-4">Why shop with us?</h3>
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Free shipping on orders over $50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-3">
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
  )
}
