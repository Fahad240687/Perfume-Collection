"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OurCollections() {
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);
  }, []);

  const collections = [
    {
      id: 1,
      image: "/images/Collection/collection6.png",
      title: "Designer Delights Collection",
      description:
        "Exquisite fragrances crafted for the discerning individual.",
      link: "/shop/designer-delights",
      specialClass: "object-contain",
    },
    {
      id: 2,
      image: "/images/Collection/collection2.png",
      title: "Travel Essentials Collection",
      description: "Compact and captivating scents perfect for your journeys.",
      link: "/shop/travel-essentials",
    },
    {
      id: 3,
      image: "/images/Collection/collection4.png",
      title: "Special Occasions Collection",
      description: "Unique aromas to make every moment unforgettable.",
      link: "/shop/special-occasions",
      reduceWidth: true, // add flag to handle width
    },
    {
      id: 4,
      image: "/images/Collection/perfume.png",
      title: "Seasonal Sensations Collection",
      description: "Embrace the spirit of each season with our curated scents.",
      link: "/shop/seasonal-sensations",
    },
  ];

  return (
    <section className="bg-[#1F1F1F] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
    ${
      animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }
    hover:text-[#E6C16A]
    hover:scale-105
    hover:drop-shadow-lg
  `}
        >
          Our Collections
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={collection.link}
              className={`group relative w-full h-[240px] sm:h-[300px] overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl ${
                collection.reduceWidth ? "md:w-[90%] md:mx-auto" : ""
              }`}
              style={{
                animation: `fadeInUp 0.5s ease ${index * 0.2}s both`,
              }}
            >
              {/* Image */}
              <div className={`relative w-full h-full`}>
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className={`transition duration-500 ${
                    collection.specialClass
                      ? collection.specialClass
                      : "object-cover"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <h3 className="text-white text-lg sm:text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {collection.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Animation Keyframe */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
