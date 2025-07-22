"use client"
import Image from "next/image"
import Link from "next/link"
import { useWishlist } from "@/app/context/wishlist-context"
import { useCart } from "@/app/context/cart-context"
import { FaHeart, FaShoppingCart, FaArrowLeft, FaTrash } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const router = useRouter()

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    removeFromWishlist(product.id || product._id)
  }

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId)
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
              <FaHeart className="h-6 w-6 text-red-500" />
              My Wishlist
            </h1>
            <div className="text-sm text-gray-400">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"}
            </div>
          </div>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <FaHeart className="h-12 w-12 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Save your favorite products to your wishlist and never lose track of them!
            </p>
            <Link href="/shop">
              <button className="bg-[#DAB060] hover:bg-[#C28E4D] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Clear All Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-white">Your Favorite Products</h2>
            <button
              onClick={clearWishlist}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <FaTrash className="h-4 w-4" />
              Clear All
            </button>
          </div>

          {/* Wishlist Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {wishlistItems.map((product) => {
              const productId = product._id || product.id
              return (
                <div
                  key={`wishlist-${productId}`}
                  className="bg-[#1A1A1A] rounded-2xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-200 group"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-48 bg-white rounded-xl overflow-hidden mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                    />
                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => {
                        console.log("Removing from wishlist:", productId)
                        handleRemoveFromWishlist(productId)
                      }}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors shadow-lg"
                    >
                      <FaHeart className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-sm line-clamp-2 leading-tight">{product.name}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-[#DAB060] font-bold text-lg">${product.price.toFixed(2)}</span>
                      {product.rating && (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-400 text-sm">{product.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          console.log("Adding to cart from wishlist:", productId)
                          handleAddToCart(product)
                        }}
                        className="w-full bg-[#DAB060] hover:bg-[#C28E4D] text-black font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <FaShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>

                      <Link href={`/products/${productId}`} className="block">
                        <button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white font-medium py-2 rounded-lg transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Continue Shopping */}
          <div className="flex justify-center mt-12">
            <Link href="/shop">
              <button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-gray-700 hover:border-gray-600 px-8 py-4 rounded-lg font-medium transition-all duration-200">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
