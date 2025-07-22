"use client"

import Image from "next/image"
import Link from "next/link"
import { productCategories } from "@/app/data/products"

export default function ProductCarouselSection() {
  const perfumeCategory = productCategories.find((cat) => cat.id === "luxury-fragrance")
  const carouselProducts = perfumeCategory ? perfumeCategory.products : []

  const allCarouselItems = [
    ...carouselProducts,
    {
      id: "luxury-fragrance",
      name: "White Perfume",
      image: "/images/Luxury-Fragnance",
      link: "/shop/perfume",
    },
  ]

  const duplicatedItems = [...allCarouselItems, ...allCarouselItems]

  return (
    <section className="bg-[#1F1F1F] py-10 sm:py-14 md:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          className={`
            max-w-4xl mx-auto
            text-3xl sm:text-5xl
            font-serif font-extrabold
            text-center text-[#DAB060]
            tracking-wide
            mb-10 sm:mb-12 md:mb-16
            transition-all duration-700 ease-out
            cursor-default
            select-none
            hover:text-[#E6C16A]
            hover:scale-105
            hover:drop-shadow-lg
          `}
        >
          Explore our Products
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {duplicatedItems.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-[140px] sm:w-[200px] mx-3 sm:mx-4 text-center"
            >
              <div className="relative w-[110px] h-[150px] sm:w-[150px] sm:h-[200px] mx-auto mb-3 sm:mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
              <p className="text-amber-600 text-xs sm:text-sm font-semibold truncate">
                {product.name.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <Link href="/shop/perfume" className="group">
          <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-lg font-medium transition-colors">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  )
}
