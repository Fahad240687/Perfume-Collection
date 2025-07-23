"use client"
import Image from "next/image"
import { notFound, useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { FaStar, FaRegStar, FaHeart, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa"
import { useCart } from "@/app/context/cart-context"
import { useWishlist } from "@/app/context/wishlist-context"
import Contact from "@/app/components/contact"
import Review from "@/app/components/reviews"

export default function ProductDetailPage() {
  const router = useRouter()
  const { productId } = useParams()
  const { addToCart, openCartPopup } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [discoverProducts, setDiscoverProducts] = useState([])
  const [loadingDiscover, setLoadingDiscover] = useState(true)
  const [animateHeading, setAnimateHeading] = useState(false)
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    setAnimateHeading(true)
  }, [])

  useEffect(() => {
    fetchProduct()
    fetchDiscoverProducts()
  }, [productId])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`)
      const data = await response.json()
      console.log("Product data:", data) // Debug log
      if (data.success) {
        setProduct(data.product)
      } else {
        notFound()
      }
    } catch (error) {
      console.error("Error fetching product:", error)
      notFound()
    } finally {
      setLoading(false)
    }
  }

  const fetchDiscoverProducts = async () => {
    try {
      const res = await fetch(`/api/products?limit=6`)
      const data = await res.json()
      console.log("Discover products data:", data)
      if (data.success) {
        setDiscoverProducts(data.products.slice(0, 10))
      } else {
        setDiscoverProducts([])
      }
    } catch (error) {
      console.error("Error fetching discover products:", error)
      setDiscoverProducts([])
    } finally {
      setLoadingDiscover(false)
    }
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-amber-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-500" />)
      }
    }
    return stars
  }

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1)
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      console.log("Adding product to cart:", product) // Debug log
      addToCart(product, quantity)
    }
  }

  const handleWishlistToggle = () => {
    if (product) {
      const currentProductId = product._id || product.id
      console.log("Toggling wishlist for product:", currentProductId)
      console.log("Current product:", product)

      if (isInWishlist(currentProductId)) {
        console.log("Removing from wishlist")
        removeFromWishlist(currentProductId)
      } else {
        console.log("Adding to wishlist")
        addToWishlist(product)
      }
    }
  }

  const handleOrderNow = () => {
    if (product) {
      console.log("Order now - adding product:", product)
      addToCart(product, quantity)
      setTimeout(() => {
        router.push("/checkout")
      }, 500)
    }
  }

  const handleCheckOut = () => {
    if (product) {
      addToCart(product, quantity)
      setTimeout(() => {
        router.push("/checkout")
      }, 500)
    }
  }

  if (loading) {
    return (
      <div className="bg-[#1F1F1F] text-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#CE9F56] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg tracking-wide text-[#C28E4D]">Preparing your fragrance...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const currentProductId = product._id || product.id
  const isProductInWishlist = isInWishlist(currentProductId)
  const keyNotes = [
    {
      title: "Top Note",
      description: "Citrus Accord, Sun-kissed fruits",
      image: "/images/Key-Notes/1.png",
    },
    {
      title: "Heart Note",
      description: "Golden Roses, Rare Blooms",
      image: "/images/Key-Notes/2.jpg",
    },
    {
      title: "Base Note",
      description: "Amber, Vanilla, Sandalwood",
      image: "/images/Key-Notes/3.jpg",
    },
  ]

return (
  <div className="bg-[#1F1F1F] text-white min-h-screen pb-16 text-sm sm:text-base">
    <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
    <button
      onClick={() => router.back()}
      className="absolute top-4 left-4 z-10 p-2 rounded-full bg-gray-800 text-amber-600 border border-amber-600 hover:bg-gray-700 transition-colors duration-200"
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </button>

    <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-20 md:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
          <div className="absolute bottom-2 flex space-x-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          <h1 className={`
            max-w-3xl mx-auto
            text-3xl sm:text-4xl
            font-serif font-extrabold
            text-left text-[#DAB060]
            tracking-wide mb-10
            transition-all duration-700 ease-out
            cursor-default select-none
            ${animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
            hover:text-[#E6C16A] hover:scale-105 hover:drop-shadow-lg
          `}>{product.name}</h1>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-1">
            <div className="flex text-sm gap-1">{renderStars(product.rating)}</div>
            <span className="text-gray-400 text-xs">({product.reviews})</span>
          </div>
          <p className="text-white text-xl font-bold">${product.price.toFixed(2)}</p>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">Qty</span>
              <div className="flex items-center border border-gray-600 rounded-md">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="p-1 text-gray-300 hover:bg-gray-700 rounded-l-md"
                >
                  <FaMinus className="h-3 w-3" />
                </button>
                <span className="px-2 py-1 text-white text-sm">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="p-1 text-gray-300 hover:bg-gray-700 rounded-r-md"
                >
                  <FaPlus className="h-3 w-3" />
                </button>
              </div>
            </div>
            <button
              onClick={handleWishlistToggle}
              className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition-all duration-200 ${
                isProductInWishlist
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "text-gray-300 hover:text-red-400 hover:bg-gray-800"
              }`}
            >
              <FaHeart className="h-4 w-4" />
              {isProductInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCheckOut}
              className="flex-1 bg-[#CE9F56] hover:bg-[#DAB060] text-black font-semibold py-2 rounded-md text-sm"
            >
              Check Out
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-md flex items-center justify-center gap-1 text-sm"
            >
              <FaShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Details and Key Notes */}
      <div className="mt-12 sm:mt-16 md:mt-24 space-y-10 sm:space-y-12">
        <div>
          <h2 className={`
            max-w-3xl mx-auto
            text-3xl sm:text-4xl
            font-serif font-extrabold
            text-center text-[#DAB060]
            tracking-wide mb-10
            transition-all duration-700 ease-out
            cursor-default select-none
            ${animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
            hover:text-[#E6C16A] hover:scale-105 hover:drop-shadow-lg
          `}>Product Details</h2>
          <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">Key Notes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {keyNotes.map((note, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-2">
                  <Image src={note.image || "/placeholder.svg"} alt={note.title} fill className="object-cover" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{note.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discover More */}
      <section className="mt-20 w-full">
        <h2 className={`
            max-w-3xl mx-auto
            text-3xl sm:text-4xl
            font-serif font-extrabold
            text-center text-[#DAB060]
            tracking-wide mb-10
            transition-all duration-700 ease-out
            cursor-default select-none
            ${animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
            hover:text-[#E6C16A] hover:scale-105 hover:drop-shadow-lg
          `}
        >
          Discover More
        </h2>

        {loadingDiscover ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="w-full px-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full max-w-[1600px] mx-auto px-3">
              {discoverProducts.map((item) => (
                <div key={item._id || item.id} className="relative flex flex-col w-full">
                  <div
                    className="border border-[#CE9F56] rounded-t-xl overflow-hidden cursor-pointer h-48"
                    onClick={() => router.push(`/products/${item._id || item.id}`)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
                        priority
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-b-xl flex-grow">
                    <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">{item.name}</h3>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[#DAB060] font-semibold text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-start gap-1 text-[#DAB060] mb-2 text-sm">{renderStars(item.rating)}</div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      router.push(`/products/${item._id || item.id}`)
                    }}
                    className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 py-1 rounded text-xs font-medium"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
    <Review />
    <Contact />
  </div>
)

}