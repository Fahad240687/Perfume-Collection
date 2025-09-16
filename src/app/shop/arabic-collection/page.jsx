"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import ProductCard from "@/app/components/product-card"
import CategoryHeroSection from "@/app/components/category-hero-section"
import Contact from "@/app/components/contact"

export default function ArabicCollectionPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [animateHeading, setAnimateHeading] = useState(false)

  useEffect(() => {
    setAnimateHeading(true)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products?category=arabic-collection")
      const data = await response.json()

      if (data.success) {
        setProducts(data.products)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1F1F1F] flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#CE9F56] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#CE9F56] text-lg font-medium">
          Loading Arabic Collection...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Arabic Collection Perfumes | Scentmire</title>
        <meta
          name="description"
          content="Discover Scentmire's Arabic Collection – luxurious oud perfumes, Arabian attars, and oriental fragrances. Elegant, long-lasting, and premium quality."
        />
        <meta
          name="keywords"
          content="Arabic perfumes, Oud fragrance, Arabian attars, oriental scents, Scentmire Arabic Collection"
        />
        <meta name="author" content="Scentmire" />
        <meta property="og:title" content="Arabic Collection Perfumes | Scentmire" />
        <meta
          property="og:description"
          content="Explore authentic Arabic perfumes and attars from Scentmire. Premium oriental fragrances crafted for elegance."
        />
        <meta
          property="og:url"
          content="https://scentmire.vercel.app/shop/arabic-collection"
        />
        <meta
          property="og:image"
          content="https://scentmire.vercel.app/uploads/arabic-perfume-banner.jpg"
        />
        <link
          rel="canonical"
          href="https://scentmire.vercel.app/shop/arabic-collection"
        />
        <meta name="robots" content="index, follow" />

        {/* Optional Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Arabic Collection Perfumes",
              description:
                "Explore Scentmire's Arabic Collection – luxurious Arabian fragrances including oud, musk, and attars.",
              url: "https://scentmire.vercel.app/shop/arabic-collection",
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <CategoryHeroSection categoryName="Arabic Collection" />

      {/* Products Section */}
      <section className="bg-[#1F1F1F] py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
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
                animateHeading
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }
              hover:text-[#E6C16A]
              hover:scale-105
              hover:drop-shadow-lg
            `}
          >
            Our Arabic Collection ({products.length})
          </h2>

          {products.length === 0 ? (
            <div className="text-center text-gray-400 text-lg">
              No Arabic collection products found. Add some products from admin panel.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Contact />
    </div>
  )
}
