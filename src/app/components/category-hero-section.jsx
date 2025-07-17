"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CategoryHeroSection({ categoryName }) {
  const router = useRouter()

  const images = [
    { src: "/images/perfume8.png", alt: "Chanel Perfume Bottle" },
    { src: "/images/perfume9.png", alt: "L'Eau Laurissi Perfume Bottle" },
    { src: "/images/perfume7.png", alt: "Crystal Perfume Bottles" },
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#1f1f1f]">
      {/* Top Golden Border */}
      <div className="absolute top-0 left-0 w-full h-2" />

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-4 z-10 p-3 rounded-full bg-gray-800 text-[#CE9F56] border border-[#CE9F56] hover:bg-gray-700 transition-colors duration-200"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Mobile layout */}
        <div className="w-full flex flex-col gap-6 md:hidden">
          {/* First image - full width rectangle, smaller height */}
          <div className="relative w-full h-[150px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Second row with 2 images side by side */}
          <div className="flex gap-4">
            <div className="relative w-1/2 h-[140px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-[140px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop layout (md and above) */}
        <div className="hidden md:flex justify-center items-end gap-6 md:gap-12 w-full mb-16">
          {/* Left Image */}
          <div className="relative w-[28%] h-[280px] -rotate-[8deg] translate-x-[-6%] translate-y-6 shadow-[0_20px_50px_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Center Image */}
          <div className="relative w-[38%] h-[300px] z-10 shadow-[0_25px_80px_rgba(255,255,255,0.15)] rounded-3xl overflow-hidden">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover scale-110 hover:scale-115 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-[28%] h-[280px] rotate-[8deg] translate-x-[6%] translate-y-6 shadow-[0_20px_50px_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
