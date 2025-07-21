"use client";

import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import Link from "next/link";

export default function ProductCategoriesSection({
  categories: staticCategories,
  showLimit = false,
}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    // If static categories are provided, use them (for backward compatibility)
    if (staticCategories && staticCategories.length > 0) {
      let processedCategories = staticCategories;

      // If showLimit is true, limit to 6 products per category
      if (showLimit) {
        processedCategories = staticCategories.map((category) => ({
          ...category,
          products: category.products.slice(0, 6),
        }));
      }

      setCategories(processedCategories);
      setLoading(false);
      setAnimateHeading(true);
      return;
    }

    // Otherwise, fetch from API
    fetchProductsByCategory();
  }, [staticCategories, showLimit]);

  const fetchProductsByCategory = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();

      if (data.success) {
        // Group products by category
        const groupedProducts = data.products.reduce((acc, product) => {
          const categoryName = product.category;
          if (!acc[categoryName]) {
            acc[categoryName] = {
              id: categoryName,
              name:
                categoryName.charAt(0).toUpperCase() +
                categoryName.slice(1).replace("-", " "),
              products: [],
            };
          }
          acc[categoryName].products.push(product);
          return acc;
        }, {});

        let categoriesArray = Object.values(groupedProducts);

        // If showLimit is true, limit to 6 products per category
        if (showLimit) {
          categoriesArray = categoriesArray.map((category) => ({
            ...category,
            products: category.products.slice(0, 6),
          }));
        }

        setCategories(categoriesArray);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
      setAnimateHeading(true);
    }
  };

  if (loading) {
    return (
      <section className="bg-[#1F1F1F] py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white text-xl">
            Loading products...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`bg-[#1F1F1F] ${
        showLimit ? "py-8 md:py-12" : "py-16 md:py-24"
      } relative z-10 overflow-hidden`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
        {categories.map((category) => {
          // Custom display names for homepage sections
          const getDisplayName = (categoryId) => {
            switch (categoryId) {
              case "perfume":
                return "Shop by Perfume";
              case "attar":
                return "Discover Premium Attars";
              case "costumize-gift-box":
                return "Luxury Gift Collections";
                 case "arabic-collection":
                return "Arabic Collection";
              default:
                return category.name;
            }
          };

          return (
            <div
              key={category.id}
              className="mb-16 w-full max-w-full overflow-hidden"
            >
              {/* Category Heading with Animation */}
              <h2
                className={`
    max-w-3xl mx-auto
    text-4xl sm:text-5xl
    font-serif font-extrabold
    text-center text-[#DAB060]
    tracking-wide
    mb-10 md:mb-14
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
                {showLimit ? getDisplayName(category.id) : category.name}
              </h2>

              {/* Products Grid */}
              <div
                className={`
    ${
      showLimit
        ? // Homepage layout - 6 products in full width grid
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        : // Category page layout - responsive grid
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
    }
    w-full max-w-full overflow-hidden
  `}
              >
                {category.products.map((product) => (
                  <ProductCard
                    key={product._id || product.id}
                    product={product}
                  />
                ))}
              </div>

              {/* More Button */}
              <div
                className={`flex justify-center ${
                  showLimit ? "mt-8" : "mt-12"
                }`}
              >
                <Link href={`/shop/${category.id}`}>
                  <button className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-4 py-2 rounded-md text-lg font-medium transition-colors">
                    More {category.name}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
