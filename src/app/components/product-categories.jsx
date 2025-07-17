"use client";

import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import Link from "next/link"; // Import Link for navigation
import { MdArrowForward } from "react-icons/md";

export default function ProductCategoriesSection({ categories }) {
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);
  }, []);

  return (
    <section className="bg-[#1F1F1F] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Heading with Animation */}
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
    ${
      animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }
    hover:text-[#E6C16A]
    hover:scale-105
    hover:drop-shadow-lg
  `}
            >
              {category.name}
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center mt-12">
              <Link href={`/shop/${category.id}`}>
                <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-4 py-1 rounded-md text-md font-medium transition-colors flex items-center gap-2">
                  More <MdArrowForward size={18} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
