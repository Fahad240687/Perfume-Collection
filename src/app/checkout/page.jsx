"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/cart-context";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaUniversity, FaMobile } from "react-icons/fa";

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

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      router.push("/order-success");
    }, 2000);
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
    <div className="bg-[#1F1F1F] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
          {/* Left Side - Checkout Form */}
          <div className="bg-[#1F1F1F] p-4 md:p-6 lg:p-12 order-2 lg:order-1">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl font-bold text-white italic">
                Frangnance Store
              </h1>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact & Shipping Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      className="p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street address"
                    className="w-full p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                    required
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="ZIP / Postal code"
                      className="p-4 bg-[#2A2A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Payment Method
                </h3>

                {/* Payment Method Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-1 bg-[#2A2A2A] rounded-lg">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 rounded-md transition-all duration-200 flex items-center justify-center gap-2 ${
                      paymentMethod === "card"
                        ? "bg-[#DAB060] text-black shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-[#3A3A3A]"
                    }`}
                  >
                    <FaCreditCard className="h-4 w-4" />
                    <span className="text-sm font-medium">Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`p-3 rounded-md transition-all duration-200 flex items-center justify-center gap-2 ${
                      paymentMethod === "bank"
                        ? "bg-[#DAB060] text-black shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-[#3A3A3A]"
                    }`}
                  >
                    <FaUniversity className="h-4 w-4" />
                    <span className="text-sm font-medium">Bank</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mobile")}
                    className={`p-3 rounded-md transition-all duration-200 flex items-center justify-center gap-2 ${
                      paymentMethod === "mobile"
                        ? "bg-[#DAB060] text-black shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-[#3A3A3A]"
                    }`}
                  >
                    <FaMobile className="h-4 w-4" />
                    <span className="text-sm font-medium">Mobile</span>
                  </button>
                </div>

                {/* Payment Fields */}
                <div className="bg-[#2A2A2A] p-6 rounded-lg">
                  {/* Card Payment Fields */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-4 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                        required
                      />
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="Name on card"
                        className="w-full p-4 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="p-4 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                          required
                        />
                        <input
                          type="text"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          placeholder="CVC"
                          className="p-4 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Bank Payment Fields */}
                  {paymentMethod === "bank" && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h4 className="text-white font-medium mb-2">
                          Bank Transfer Details
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Enter your bank account information
                        </p>
                      </div>
                      <input
                        type="text"
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleInputChange}
                        placeholder="Account number"
                        className="w-full p-4 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                        required
                      />
                      <input
                        type="text"
                        name="routingNumber"
                        value={formData.routingNumber}
                        onChange={handleInputChange}
                        placeholder="Routing number / IBAN"
                        className="w-full p-4 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                        required
                      />
                    </div>
                  )}

                  {/* Mobile Payment Options */}
                  {paymentMethod === "mobile" && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h4 className="text-white font-medium mb-2">
                          Mobile Payment
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Choose your preferred mobile payment method
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          className="p-4 bg-[#1F1F1F] border-2 border-gray-600 rounded-lg text-white hover:border-[#DAB060] hover:bg-[#2A2A2A] transition-all duration-200 text-center"
                        >
                          <div className="font-medium">JazzCash</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Mobile Wallet
                          </div>
                        </button>
                        <button
                          type="button"
                          className="p-4 bg-[#1F1F1F] border-2 border-gray-600 rounded-lg text-white hover:border-[#DAB060] hover:bg-[#2A2A2A] transition-all duration-200 text-center"
                        >
                          <div className="font-medium">EasyPaisa</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Mobile Wallet
                          </div>
                        </button>
                        <button
                          type="button"
                          className="p-4 bg-[#0070BA] border-2 border-[#0070BA] rounded-lg text-white hover:bg-[#005EA6] transition-all duration-200 text-center"
                        >
                          <div className="font-medium">PayPal</div>
                          <div className="text-xs text-blue-200 mt-1">
                            Digital Wallet
                          </div>
                        </button>
                        <button
                          type="button"
                          className="p-4 bg-[#1F1F1F] border-2 border-gray-600 rounded-lg text-white hover:border-[#DAB060] hover:bg-[#2A2A2A] transition-all duration-200 text-center"
                        >
                          <div className="font-medium">SadaPay</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Digital Bank
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#DAB060] hover:bg-[#C28E4D] disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Processing Order...
                  </div>
                ) : (
                  `PLACE ORDER - $${cartTotal.total.toFixed(2)}`
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-[#2A2A2A] p-4 md:p-6 lg:p-12 border-b lg:border-b-0 lg:border-l border-gray-700 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product._id || item.product.id}
                    className="flex items-center gap-4 p-4 bg-[#1F1F1F] rounded-lg"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="absolute -top-2 -right-2 bg-[#DAB060] text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-white font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Discount code"
                  className="w-full sm:flex-1 p-3 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAB060] focus:ring-2 focus:ring-[#DAB060] focus:ring-opacity-50 transition-all"
                />
                <button
                  type="button"
                  onClick={handleApplyDiscount}
                  className="w-full sm:w-auto bg-[#DAB060] hover:bg-[#C28E4D] text-black px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  APPLY
                </button>
              </div>

              {/* Order Summary */}
              <div className="space-y-4 pt-4 border-t border-gray-600">
                <div className="flex justify-between text-white">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    ${cartTotal.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-white">
                  <span>Shipping</span>
                  <span className="text-green-400 font-medium">Free</span>
                </div>

                <div className="flex justify-between items-center text-white text-xl font-bold pt-4 border-t border-gray-600">
                  <span>Total</span>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 font-normal">USD</div>
                    <div className="text-[#DAB060]">
                      ${cartTotal.total.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
