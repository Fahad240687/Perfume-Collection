"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";
import { FaTimes, FaShoppingBag, FaPlus, FaMinus } from "react-icons/fa";

export default function CartPopup() {
  const {
    cartItems,
    cartTotal,
    isCartPopupOpen,
    closeCartPopup,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isCartPopupOpen) return null;

  // Helper function to get product ID
  const getProductId = (product) => {
    return product._id || product.id;
  };

  const handleQuantityChange = (product, newQuantity) => {
    const productId = getProductId(product);
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={closeCartPopup}
      />

      {/* Cart Popup */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#DAB060] hover:bg-[#C28E4D] transition-colors">
          <div className="flex items-center gap-2 text-white">
            <FaShoppingBag className="h-5 w-5" />
            <h2 className="text-lg font-semibold">
              Shopping Cart ({cartItems.length})
            </h2>
          </div>
          <button
            onClick={closeCartPopup}
            className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-black hover:bg-opacity-20"
            aria-label="Close cart"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-500">
              <FaShoppingBag className="h-16 w-16 mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-sm text-center mb-4">
                Add some products to get started!
              </p>
              <button
                onClick={closeCartPopup}
                className="bg-[#DAB060] hover:bg-[#C28E4D] text-white px-6 py-2 rounded-md transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.map((item) => {
                  const productId = getProductId(item.product);
                  return (
                    <div
                      key={productId}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 truncate text-sm">
                          {item.product.name}
                        </h3>
                        <p className="text-sm font-semibold text-amber-600 mb-2">
                          ${item.product.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product,
                                item.quantity - 1
                              )
                            }
                            className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <FaMinus className="h-3 w-3 text-gray-600" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product,
                                item.quantity + 1
                              )
                            }
                            className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <FaPlus className="h-3 w-3 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <p className="text-sm font-bold text-gray-800">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(productId)}
                          className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-50"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <FaTimes className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cart Summary */}
              <div className="border-t border-gray-200 p-4 space-y-4 bg-gray-50">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">
                      ${cartTotal.subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                    <span>Total:</span>
                    <span className="text-amber-600">
                      ${cartTotal.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Link href="/cart" onClick={closeCartPopup}>
                    <button className="w-full flex items-center justify-center gap-2  text-gray-800 font-medium py-3 rounded-md transition-colors">
                      <FaShoppingBag />
                      View Your Cart
                    </button>
                  </Link>

                  <Link href="/checkout" onClick={closeCartPopup}>
                    <button className="w-full bg-[#CE9F56] hover:bg-[#DAB060] text-white font-medium py-2  rounded-md transition-colors">
                      Proceed to Checkout
                    </button>
                  </Link>

                  <button
                    onClick={closeCartPopup}
                    className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-md transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
