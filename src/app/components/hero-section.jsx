"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [currentPerfume, setCurrentPerfume] = useState(0);
  const [particles, setParticles] = useState([]);

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
  }, [perfumes.length]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative h-[40vh] sm:h-[65vh] overflow-hidden flex items-center justify-center mt-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1F1F1F]" />

      {/* Water Splashes Desktop */}
      <div className="absolute left-0 bottom-[-120px] w-[25%] h-[60%] hidden md:block">
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
      <div className="absolute right-0 bottom-[-120px] w-[25%] h-[60%] hidden md:block">
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

      {/* Water Splashes Mobile */}
      <div className="absolute left-0 bottom-0 translate-x-[-30%] translate-y-[10%] z-10 md:hidden">
        <div className="relative w-20 h-28 rotate-[-20deg] top-4">
          <Image
            src="/images/waterfell.png"
            alt="Water Splash Left Mobile"
            fill
            className="object-contain opacity-70"
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 translate-x-[30%] translate-y-[10%] z-10 md:hidden">
        <div className="relative w-20 h-28 rotate-[20deg] top-4">
          <Image
            src="/images/waterfell.png"
            alt="Water Splash Right Mobile"
            fill
            className="object-contain opacity-70 scale-x-[-1]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-between w-full h-full px-4 sm:px-8 max-w-5xl mx-auto py-2 sm:py-4">
        {/* Text */}
        <div className="text-center mb-2 sm:mb-4">
          <h1 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 leading-tight">
            {perfumes[currentPerfume].heading}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-light px-2 sm:px-6">
            {perfumes[currentPerfume].description}
          </p>
        </div>

        {/* Perfume Image */}
        <div className="relative w-20 h-28 sm:w-32 sm:h-44 md:w-40 md:h-56 flex items-center justify-center mb-2 sm:mb-6">
          {perfumes.map((perfume, index) => (
            <div
              key={perfume.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                index === currentPerfume
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 rotate-3"
              }`}
            >
              <Image
                src={perfume.image || "/placeholder.svg"}
                alt={perfume.alt}
                width={200}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-2 sm:mt-4">
          <Link href="/shop/perfume" className="group">
            <button className="bg-[#B67D43] hover:bg-[#DAB060] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Explore Perfumes
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={style}
          />
        ))}
      </div>
    </section>
  );
}
