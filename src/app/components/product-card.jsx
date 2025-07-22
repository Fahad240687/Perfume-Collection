"use client"
import Image from "next/image"
import Link from "next/link"
import { FaStar, FaRegStar } from "react-icons/fa"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating
          ? <FaStar key={i} className="text-amber-400 text-[10px] sm:text-xs" />
          : <FaRegStar key={i} className="text-gray-500 text-[10px] sm:text-xs" />
      )
    }
    return stars
  }

  const productId = product._id || product.id

  return (
    <div className="w-full min-h-[320px] sm:min-h-[400px] bg-[#1F1F1F] rounded-sm overflow-hidden flex flex-col group relative z-20 max-w-full">
      {/* Image Box */}
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] border border-[#CE9F56] overflow-hidden">
        {/* Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer"></div>
        )}

        {/* Product Image */}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-contain transition-all duration-500 ${
            imageLoaded ? "opacity-100 group-hover:scale-105 group-hover:blur-sm" : "opacity-0"
          }`}
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
          priority={true}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true)
            setImageLoaded(true)
          }}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-gray-300 text-[11px] sm:text-sm mb-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3">
            {product.description}
          </p>
          <Link
            href={`/products/${productId}`}
            className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
          >
            <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 py-1 rounded-sm text-[11px] sm:text-sm font-medium transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center px-2 py-2 sm:p-3 gap-1 flex-grow">
        <h3 className="text-[#DAB060] text-sm sm:text-base font-semibold line-clamp-2 leading-tight">{product.name}</h3>

        <div className="flex items-center justify-center">
          <div className="flex gap-0.5">{renderStars(product.rating)}</div>
          <span className="text-[#E6C16A] text-[10px] sm:text-xs ml-1">({product.reviews})</span>
        </div>

        <p className="text-[#E6C16A] text-[11px] sm:text-sm">
          <span className="text-[#C28E4D] font-bold text-sm sm:text-base">${product.price.toFixed(2)}</span> {product.volume}
        </p>

        <Link href={`/products/${productId}`} className="mt-2">
          <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-md text-[11px] sm:text-sm font-medium transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  )
}
