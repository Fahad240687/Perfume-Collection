"use client"

import Image from "next/image"
import { useCart } from "@/app/context/cart-context"
import { useState } from "react"

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("bank") // Default to 'bank'

  return (
    <div className="bg-[#1F1F1F] text-white min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12">Billing Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Billing Details Form */}
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-300 text-sm font-medium mb-2">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-gray-300 text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>

            {/* Street Address */}
            <div>
              <label htmlFor="streetAddress" className="block text-gray-300 text-sm font-medium mb-2">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                required
              />
            </div>

            {/* Apartment, floor, etc. (optional) */}
            <div>
              <label htmlFor="apartment" className="block text-gray-300 text-sm font-medium mb-2">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>

            {/* Town/City */}
            <div>
              <label htmlFor="townCity" className="block text-gray-300 text-sm font-medium mb-2">
                Town/City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="townCity"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-300 text-sm font-medium mb-2">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="emailAddress" className="block text-gray-300 text-sm font-medium mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                required
              />
            </div>

            {/* Save Information Checkbox */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="saveInfo"
                className="h-4 w-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500"
              />
              <label htmlFor="saveInfo" className="ml-2 text-gray-300 text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className=" rounded-md shadow-lg p-6 md:p-8 text-gray-100">
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>

            {/* Order Items */}
            <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">
                      {item.product.name} x {item.quantity}
                    </span>
                  </div>
                  <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">${cartTotal.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t border-gray-100 pt-3">
                <span>Total:</span>
                <span>${cartTotal.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4 mb-8">
              {/* Bank Transfer */}
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="h-4 w-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                />
                <span className="ml-3 text-gray-100">Bank</span>
                <div className="ml-auto flex gap-2">
                  <Image
                    src="/images/Payment Method/visa.png"
                    alt="Visa"
                    width={30}
                    height={20}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Payment Method/jazzcash.png"
                    alt="Mastercard"
                    width={30}
                    height={20}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Payment Method/paypal.png"
                    alt="JazzCash"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                   <Image
                    src="/images/Payment Method/payoneer.png"
                    alt="JazzCash"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </label>

              {/* Cash on Delivery */}
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentMethod === "cashOnDelivery"}
                  onChange={() => setPaymentMethod("cashOnDelivery")}
                  className="h-4 w-4 text-gray-100 border-gray-300 "
                />
                <span className="ml-3 text-gray-100">Cash on delivery</span>
              </label>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-[#DAB060] hover:bg-[#C28E4D] text-black font-semibold py-3 rounded-md transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
