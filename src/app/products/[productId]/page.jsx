"use client";

import { useRouter, notFound } from "next/navigation";
import { useState, use } from "react";
import Image from "next/image";
import { FaStar, FaRegStar, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { productCategories } from "@/app/data/products";
import { useCart } from "@/app/context/cart-context" // Import useCart
import Link from "next/link";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa" // <-- Import at top


export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const { productId } = use(params);
  const { addToCart } = useCart() // Use the addToCart function

  const [quantity, setQuantity] = useState(1);

  // Find product
    // Find the product across all categories
  let product = null
  for (const category of productCategories) {
    product = category.products.find((p) => p.id === productId)
    if (product) break
  }

  if (!product) {
    notFound()
  }

  const totalPrice = product.price * quantity;

   const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1)
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleOrderNow = () => {
    addToCart(product, quantity)
   
  }
  const renderStars = (rating) =>
    [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-amber-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-500" />
      )
    );

  
  const keyNotes = [
    {
      title: "Top Note",
      description: "Citrus Accord, Sun-kissed fruits",
      image: "/images/Key-Notes/1.png",
    },
    {
      title: "Heart Note",
      description: "Golden Roses, Rare Blooms",
      image: "/images/Key-Notes/2.jpg",
    },
    {
      title: "Base Note",
      description: "Amber, Vanilla, Sandalwood",
      image: "/images/Key-Notes/3.jpg",
    },
  ]

  return (
    <div className="bg-[#1F1F1F] text-white min-h-screen pb-16 ">
      {/* Top Golden Border */}
      <div className="absolute top-0 left-0 w-full h-2 "></div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-8 left-8 z-10 p-3 rounded-full bg-gray-800 text-amber-600 border border-amber-600 hover:bg-gray-700 transition-colors duration-200"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Product Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            {/* Image Indicators */}
            <div className="absolute bottom-4 flex space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className=" p-6 md:p-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-base gap-1">{renderStars(product.rating)}</div>
              <span className="text-gray-400 text-sm">({product.reviews})</span>
            </div>

          
            {/* Price */}
            <p className="text-white text-3xl font-bold">${product.price.toFixed(2)}</p>

            {/* Quantity & Wishlist */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-300">Qty</span>
                <div className="flex items-center border border-gray-600 rounded-md">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="p-2 text-gray-300 hover:bg-gray-700 rounded-l-md"
                  >
                    <FaMinus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-white">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="p-2 text-gray-300 hover:bg-gray-700 rounded-r-md"
                  >
                    <FaPlus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors">
                Wish list <FaHeart className="h-5 w-5" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#DAB060] hover:bg-[#C28E4D] text-black font-semibold py-3 rounded-md transition-colors">
                Check Out
              </button>
              <button
                onClick={handleOrderNow}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-md transition-colors"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Sections */}
        <div className="mt-16 md:mt-24 space-y-12">
          {/* Product Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Product Details</h2>
            <p className="text-gray-300 leading-relaxed">
              Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an
              enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted
              with the finest essences and imbued with the allure of precious golden hues. From the first spritz to the
              lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of
              lavish indulgence.
            </p>
          </div>

          {/* The Golden Overture */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Golden Overture</h2>
            <p className="text-gray-300 leading-relaxed">
              Luxurious Elixir opens with a grand flourish of radiant citrus and sun-kissed fruits, reminiscent of
              golden rays caressing your senses. The opulent heart unfolds with a bouquet of velvety roses and rare
              blooms, their essence radiating with the allure of gilded petals. As the fragrance settles, a sumptuous
              blend of warm amber, creamy vanilla, and smooth sandalwood evokes a sense of ultimate luxury and
              refinement.
            </p>
          </div>

          {/* Key Notes */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Notes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {keyNotes.map((note, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image src={note.image || "/placeholder.svg"} alt={note.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{note.title}</h3>
                  <p className="text-gray-300 text-sm">{note.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Heart of Elegance */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Heart of Elegance</h2>
            <p className="text-gray-300 leading-relaxed">
              Luxurious Elixir is the embodiment of elegance, drawing you into a world where glamour and prestige unite.
              With every spritz, the fragrance weaves a tapestry of glistening gold around you, enhancing your allure
              and capturing the admiration of those around.
            </p>
          </div>

          {/* The Ultimate Expression of Luxury */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Ultimate Expression of Luxury</h2>
            <p className="text-gray-300 leading-relaxed">
              Luxurious Elixir makes an extraordinary gift, an expression of your discerning taste and admiration for
              the extraordinary. Delight your loved ones with this lavish elixir, a symbol of admiration and adoration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
