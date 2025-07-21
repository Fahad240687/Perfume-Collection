"use client"

import Image from "next/image"
import Link from "next/link"
import { FaStar, FaRegStar } from "react-icons/fa"

export default function ProductCard({ product }) {
  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-500" />)
      }
    }
    return stars
  }

  // Use MongoDB _id if available, otherwise fallback to id
  const productId = product._id || product.id

  return (
    <div className="w-full min-h-[380px] sm:min-h-[420px] bg-[#1F1F1F] rounded-sm overflow-hidden flex flex-col group relative z-20 max-w-full">
      {/* Image Box with border */}
      <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] border border-[#CE9F56] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw"
          priority={true}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-gray-300 text-xs sm:text-sm mb-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3">
            {product.description}
          </p>
          <Link
            href={`/products/${productId}`}
            className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
          >
            <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 py-1.5 rounded-sm text-xs sm:text-sm font-medium transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 gap-1 flex-grow">
        <h3 className="text-[#DAB060] text-sm sm:text-base font-semibold line-clamp-2 leading-tight">{product.name}</h3>
        <div className="flex items-center justify-center">
          <div className="flex text-xs sm:text-sm gap-1">{renderStars(product.rating)}</div>
          <span className="text-[#E6C16A] text-xs ml-2">({product.reviews})</span>
        </div>
        <p className="text-[#E6C16A] text-xs sm:text-sm">
          <span className="text-[#C28E4D] font-bold">${product.price.toFixed(2)}</span> {product.volume}
        </p>
        <Link href={`/products/${productId}`} className="mt-2">
          <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 sm:px-4 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  )
}
