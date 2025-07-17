"use client"

import Image from "next/image"
import Link from "next/link"
import { productCategories } from "@/app/data/products"

export default function ProductCarouselSection() {
  // Get all products from the "perfume" category for the carousel
  const perfumeCategory = productCategories.find((cat) => cat.id === "luxury-fragrance")
  const carouselProducts = perfumeCategory ? perfumeCategory.products : []

  // Add a generic white perfume bottle if needed, as seen in the screenshot
  const allCarouselItems = [
    ...carouselProducts,
    {
      id: "luxury-fragrance",
      name: "White Perfume",
      image: "/images/Luxury-Fragnance",
      link: "/shop/perfume", // Link to the general perfume shop page
    },
  ]

  // Duplicate items to create a seamless loop effect
  const duplicatedItems = [...allCarouselItems, ...allCarouselItems]

  return (
    <section className="bg-[#1F1F1F] py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
<h2
              className={`
    max-w-4xl mx-auto
    text-5xl sm:text-6xl
    font-serif font-extrabold
    text-center text-[#DAB060]
    tracking-wide
    mb-12 md:mb-16
    transition-all duration-700 ease-out
    cursor-default
    select-none
    
    hover:text-[#E6C16A]
    hover:scale-105
    hover:drop-shadow-lg
  `}
            >
             Explore our Products
            </h2>      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {duplicatedItems.map((product, index) => (
            <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[200px] mx-4 text-center">
              <div className="relative w-[150px] h-[200px] mx-auto mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
              <p className="text-amber-600 text-sm font-semibold">{product.name.split(" ")[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-16">
        <Link href="/shop">
          <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-4 py-2 rounded-md text-lg font-medium transition-colors">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  )
}
