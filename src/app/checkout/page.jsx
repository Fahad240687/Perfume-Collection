"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/cart-context";
import { useRouter } from "next/navigation";
import {
  FaCreditCard,
  FaUniversity,
  FaMobile,
  FaMobileAlt,
  FaMoneyBillWaveAlt,
  FaRegCreditCard,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    // Card details
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardName: "",
    // Bank details
    bankAccount: "",
    routingNumber: "",
  });

  const [discountCode, setDiscountCode] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      alert("Discount code applied!");
    }
  };

 const handlePlaceOrder = async (e) => {
  e.preventDefault();
  setIsProcessing(true);

  if (paymentMethod === "jazzcash") {
    try {
      const res = await fetch("/api/jazzcash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: cartTotal.total }),
      });

      const html = await res.text();

      const win = window.open("", "_self");
      win.document.open();
      win.document.write(html);
      win.document.close();
    } catch (error) {
      console.error("JazzCash error:", error);
      alert("Something went wrong with JazzCash payment.");
      setIsProcessing(false);
    }
  } else {
    // Handle other methods like COD, Card etc.
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      router.push("/payment-success"); // or /payment-success if shared
    }, 2000);
  }



    // Simulate processing
    
  };

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="bg-[#1F1F1F] text-white min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-400 mb-6">
            Add some products to proceed with checkout
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="bg-[#DAB060] hover:bg-[#C28E4D] text-black px-6 py-3 rounded-md font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1F1F1F] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#2A2A2A] rounded-lg shadow-lg overflow-hidden">
        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6"
        >
          {/* Left: Customer Details & Payment */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-white mb-4">Checkout</h2>

            {/* Customer Details */}
            <section>
              <h3 className="text-lg font-medium text-white mb-4">
                Customer Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address"
                  className="sm:col-span-2 p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="ZIP / Postal code"
                  className="p-3 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                  required
                />
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h3 className="text-lg font-medium text-white mb-4">
                Payment Method
              </h3>
              <div className="flex gap-3 flex-wrap">
                {/* COD */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={` text-sm flex-1 min-w-[120px] flex items-center justify-center gap-2 p-3 rounded-md border  transition-colors duration-200  ${
                    paymentMethod === "cod"
                      ? "bg-[#DAB060] border-[#DAB060] text-black shadow-md"
                      : "bg-[#1F1F1F] border-gray-600 text-gray-300 hover:border-[#DAB060] hover:text-white"
                  }`}
                >
                  <FaMoneyBillWave className="w-5 h-5" />
                  Cash on Delivery
                </button>

                {/* Card */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={` text-sm flex-1 min-w-[120px] flex items-center justify-center gap-2 p-3 rounded-md border  transition-colors duration-200  ${
                    paymentMethod === "card"
                      ? "bg-[#DAB060] border-[#DAB060] text-black shadow-md"
                      : "bg-[#1F1F1F] border-gray-600 text-gray-300 hover:border-[#DAB060] hover:text-white"
                  }`}
                >
                  <FaRegCreditCard className="w-5 h-5" />
                  Card Payment
                </button>

                {/* JazzCash */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("jazzcash")}
                  className={`text-sm flex-1 min-w-[120px] flex items-center justify-center gap-2 p-3 rounded-md border  transition-colors duration-200  ${
                    paymentMethod === "jazzcash"
                      ? "bg-[#DAB060] border-[#DAB060] text-black shadow-md"
                      : "bg-[#1F1F1F] border-gray-600 text-gray-300 hover:border-[#DAB060] hover:text-white"
                  }`}
                >
                  <FaMoneyBillWaveAlt className="w-5 h-5" />
                  JazzCash
                </button>

                {/* EasyPaisa */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("easypaisa")}
                  className={` text-sm flex-1 min-w-[120px] flex items-center justify-center gap-2 p-3 rounded-md border  transition-colors duration-200  ${
                    paymentMethod === "easypaisa"
                      ? "bg-[#DAB060] border-[#DAB060] text-black shadow-md"
                      : "bg-[#1F1F1F] border-gray-600 text-gray-300 hover:border-[#DAB060] hover:text-white"
                  }`}
                >
                  <FaMobileAlt className="w-5 h-5" />
                  EasyPaisa
                </button>
              </div>

              {/* Payment Details */}
              <div className="mt-6 bg-[#1F1F1F] p-4 rounded-md">
                {/* COD - no extra inputs */}
                {paymentMethod === "cod" && (
                  <p className="text-gray-400 text-sm">
                    You will pay when your order is delivered.
                  </p>
                )}

                {/* Card Payment Inputs */}
                {paymentMethod === "card" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Card Number"
                      className="p-3 bg-[#2A2A2A] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                      required
                    />
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="Name on Card"
                      className="p-3 bg-[#2A2A2A] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                      required
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="p-3 bg-[#2A2A2A] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                      required
                    />
                    <input
                      type="text"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      placeholder="CVC"
                      className="p-3 bg-[#2A2A2A] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                      required
                    />
                  </div>
                )}

                {/* JazzCash & EasyPaisa */}
                {(paymentMethod === "jazzcash" ||
                  paymentMethod === "easypaisa") && (
                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      You will be redirected to{" "}
                      {paymentMethod === "jazzcash" ? "JazzCash" : "EasyPaisa"}{" "}
                      payment gateway after placing the order.
                    </p>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Mobile Number linked to wallet"
                      className="p-3 bg-[#2A2A2A] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                      required
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Discount Code */}
            <section className="pt-2">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Discount code"
                  className="w-full md:flex-1 p-2 bg-[#1F1F1F] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-1 focus:ring-[#DAB060]"
                />
                <button
                  type="button"
                  onClick={handleApplyDiscount}
                  className="bg-[#DAB060] hover:bg-[#C28E4D] text-black px-4 py-1 rounded-md transition-colors duration-200 w-full md:w-auto"
                >
                  Apply
                </button>
              </div>
            </section>

            {/* Place Order */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full mt-6 bg-[#DAB060] hover:bg-[#C28E4D] disabled:bg-gray-600 disabled:cursor-not-allowed text-black  py-2 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Processing Order...
                </div>
              ) : (
                `Place Order - $${cartTotal.total.toFixed(2)}`
              )}
            </button>
          </div>

          {/* Right: Order Summary */}
       <aside className="bg-[#1F1F1F] p-4 sm:p-6 rounded-lg">
  <h3 className="text-xl font-semibold text-white mb-4 sm:mb-6">
    Order Summary
  </h3>

  <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
    {cartItems.map((item) => (
      <div
        key={item.product._id || item.product.id}
        className="flex items-start sm:items-center gap-3 bg-[#2A2A2A] p-3 rounded-md"
      >
        <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-700 flex-shrink-0">
          <Image
            src={item.product.image || "/placeholder.svg"}
            alt={item.product.name}
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
          <span className="absolute -top-1 -right-1 bg-[#DAB060] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            {item.quantity}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium text-sm whitespace-normal break-words">
            {item.product.name}
          </h4>
          <p className="text-gray-400 text-xs mt-0.5">
            Qty: {item.quantity}
          </p>
        </div>

        <div className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
          ${(item.product.price * item.quantity).toFixed(2)}
        </div>
      </div>
    ))}
  </div>

  <div className="border-t border-gray-700 mt-6 pt-4 space-y-2 text-white">
    <div className="flex justify-between text-sm">
      <span>Subtotal</span>
      <span>${cartTotal.subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-sm">
      <span>Shipping</span>
      <span className="text-green-400 font-medium">Free</span>
    </div>
    <div className="flex justify-between items-center text-lg font-bold pt-3 border-t border-gray-700">
      <span>Total</span>
      <span className="text-[#DAB060]">${cartTotal.total.toFixed(2)}</span>
    </div>
  </div>
</aside>

        </form>
      </div>
    </div>
  );
}
