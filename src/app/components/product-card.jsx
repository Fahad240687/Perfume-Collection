"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-500" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="w-full min-h-[420px] bg-[#1F1F1F] rounded-sm overflow-hidden flex flex-col group"
      data-aos="fade-up"
    >
      {/* Image Box with border */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] border border-[#CE9F56] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16.66vw, 16.66vw"
          priority={true}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-gray-300 text-sm mb-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {product.description}
          </p>
          <Link
            href={`/products/${product.id}`}
            className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
          >
            <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-2 py-1 rounded-sm text-sm font-medium transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col items-center justify-center text-center p-3 gap-1 flex-grow">
        <h3 className="text-[#DAB060] text-base font-semibold">{product.name}</h3>
        <div className="flex items-center justify-center">
          <div className="flex text-sm gap-1">{renderStars(product.rating)}</div>
          <span className="text-[#E6C16A] text-xs ml-2">({product.reviews})</span>
        </div>
        <p className="text-[#E6C16A] text-sm">
          <span className="text-[#C28E4D] font-bold">${product.price.toFixed(2)}</span>{" "}
          {product.volume}
        </p>
        <Link href={`/products/${product.id}`} className="mt-2">
          <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-4 py-1 rounded-md text-sm font-medium transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
