"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [currentPerfume, setCurrentPerfume] = useState(0);

  const perfumes = [
    {
      id: 1,
      image: "/images/perfume6.png",
      alt: "A Symphony of Fragrance in Every Drop",
      heading: "A Symphony of Fragrance",
      description: "Every drop sings a story of elegance and charm.",
    },
    {
      id: 2,
      image: "/images/perfume1.png",
      alt: "Elegance Bottled for the Modern Soul",
      heading: "Elegance in a Bottle",
      description: "Crafted for the modern soul who appreciates grace.",
    },
    {
      id: 3,
      image: "/images/Arabic-Collection/2.png",
      alt: "Where Scent Meets Sophistication",
      heading: "Scent Meets Sophistication",
      description: "Refined aromas that define your unique style.",
    },
    {
      id: 4,
      image: "/images/Perfume/3.png",
      alt: "Unveil the Art of Fine Perfumery",
      heading: "The Art of Perfumery",
      description: "Unveil timeless fragrance artistry in every bottle.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPerfume((prev) => (prev + 1) % perfumes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
 <section className="relative h-[55vh] sm:h-[80vh] overflow-hidden flex items-center justify-center mt-4">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-[#1F1F1F]" />

  {/* Water Splash - Left (Desktop Only) */}
  <div className="absolute left-0 bottom-[-120px] w-[30%] h-[70%] hidden md:block">
    <div className="relative w-full h-full rotate-[25deg]">
      <Image
        src="/images/waterfell.png"
        alt="Water Splash Left"
        fill
        className="object-contain object-left-bottom opacity-80"
        priority
      />
    </div>
  </div>

  {/* Water Splash - Right (Desktop Only) */}
  <div className="absolute right-0 bottom-[-120px] w-[30%] h-[70%] hidden md:block">
    <div className="relative w-full h-full rotate-[-25deg]">
      <Image
        src="/images/waterfell.png"
        alt="Water Splash Right"
        fill
        className="object-contain object-right-bottom opacity-80 scale-x-[-1]"
        priority
      />
    </div>
  </div>

  {/* Mobile Water Splashes */}
  <div className="absolute left-0 bottom-0 translate-x-[-30%] translate-y-[10%] z-10 md:hidden">
    <div className="relative w-40 h-52 rotate-[-20deg] top-8">
      <Image
        src="/images/waterfell.png"
        alt="Water Splash Left Mobile"
        fill
        className="object-contain opacity-70"
      />
    </div>
  </div>
  <div className="absolute right-0 bottom-0 translate-x-[30%] translate-y-[10%] z-10 md:hidden">
    <div className="relative w-40 h-52 rotate-[20deg] top-8">
      <Image
        src="/images/waterfell.png"
        alt="Water Splash Right Mobile"
        fill
        className="object-contain opacity-70 scale-x-[-1]"
      />
    </div>
  </div>

  {/* Content Wrapper */}
  <div className="relative z-20 flex flex-col items-center justify-between w-full h-full px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto py-8">
    
    {/* Heading */}
    <div className="text-center">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 leading-snug break-words">
        {perfumes[currentPerfume].heading}
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light px-2 sm:px-6 md:px-12">
        {perfumes[currentPerfume].description}
      </p>
    </div>

    {/* Perfume Bottle */}
    <div className="relative w-52 h-72 sm:w-72 sm:h-96 md:w-96 md:h-[500px] flex items-center justify-center mt-6 mb-6 sm:mb-10">
      {perfumes.map((perfume, index) => (
        <div
          key={perfume.id}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
            index === currentPerfume
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-95 rotate-3"
          }`}
        >
          <Image
            src={perfume.image || "/placeholder.svg"}
            alt={perfume.alt}
            width={384}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority={index === 0}
          />
        </div>
      ))}
    </div>

    {/* CTA Button */}
    {/* CTA Button - Centered */}
<div className="mt-4 flex justify-center">
  <Link href="/shop/perfume" className="group">
    <button className="bg-[#B67D43] hover:bg-[#DAB060] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      Explore Collection
    </button>
  </Link>
</div>

  </div>

  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
</section>

  );
}
