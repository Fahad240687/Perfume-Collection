"use client"
import Image from "next/image"
import { notFound, useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { FaStar, FaRegStar, FaHeart, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa"
import { useCart } from "@/app/context/cart-context"

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

  const handleOrderNow = () => {
    if (product) {
      console.log("Order now - adding product:", product) // Debug log
      addToCart(product, quantity)
      // Redirect to checkout after adding to cart
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
    <div className="bg-[#1F1F1F] text-white min-h-screen pb-16">
      <div className="absolute top-0 left-0 w-full h-2 bg-amber-600"></div>
      <button
        onClick={() => router.back()}
        className="absolute top-8 left-8 z-10 p-3 rounded-full bg-gray-800 text-amber-600 border border-amber-600 hover:bg-gray-700 transition-colors duration-200"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 flex space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-2">
              <div className="flex text-base gap-1">{renderStars(product.rating)}</div>
              <span className="text-gray-400 text-sm">({product.reviews})</span>
            </div>
            <p className="text-white text-3xl font-bold">${product.price.toFixed(2)}</p>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-300">Qty</span>
                <div className="flex items-center border border-gray-600 rounded-md">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="p-2 text-gray-300 hover:bg-gray-700 rounded-l-md"
                  >
                    <FaMinus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-white">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="p-2 text-gray-300 hover:bg-gray-700 rounded-r-md"
                  >
                    <FaPlus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors">
                Wish list <FaHeart className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCheckOut}
                className="flex-1 bg-[#CE9F56] hover:bg-[#DAB060] text-black font-semibold py-3 rounded-md transition-colors"
              >
                Check Out
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <FaShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Sections */}
        <div className="mt-16 md:mt-24 space-y-12">
          {/* Product Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Product Details</h2>
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
          </div>

          {/* Key Notes */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Notes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {keyNotes.map((note, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image src={note.image || "/placeholder.svg"} alt={note.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{note.title}</h3>
                  <p className="text-gray-300 text-sm">{note.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discover More Section */}
        <section className="mt-32 w-full">
          <h2
            className={`
                max-w-3xl mx-auto
                text-4xl sm:text-5xl
                font-serif font-extrabold
                text-center text-[#DAB060]
                tracking-wide
                mb-10 md:mb-16
                transition-all duration-700 ease-out
                cursor-default
                select-none
                ${animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
                hover:text-[#E6C16A]
                hover:scale-105
                hover:drop-shadow-lg
              `}
          >
            Discover More
          </h2>

          {loadingDiscover ? (
            <div className="flex justify-center">
              <div className="w-12 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="w-full px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full max-w-[1800px] mx-auto px-4 sm:px-6">
                {discoverProducts.map((item) => (
                  <div key={item._id || item.id} className="relative flex flex-col w-full h-full">
                    {/* Image with Border - Increased Height */}
                    <div
                      className="border border-[#CE9F56] rounded-t-xl overflow-hidden cursor-pointer h-64"
                      onClick={() => router.push(`/products/${item._id || item.id}`)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") router.push(`/products/${item._id || item.id}`)
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                          priority
                        />
                      </div>
                    </div>

                    {/* Content Below Border */}
                    <div className="p-4 rounded-b-xl flex-grow">
                      <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">{item.name}</h3>

                      {/* Price and Rating in one line */}
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[#DAB060] font-bold text-md">${item.price.toFixed(2)}</p>
                      </div>

                      {/* Rating moved to next line */}
                      <div className="flex justify-start gap-1 text-[#DAB060] mb-3">{renderStars(item.rating)}</div>
                    </div>

                    {/* Smaller Buy Now Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push(`/products/${item._id || item.id}`)
                      }}
                      className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 sm:px-4 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors"
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
    </div>
  )
}
