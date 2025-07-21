"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/app/components/product-card"
import CategoryHeroSection from "@/app/components/category-hero-section"
import Contact from "@/app/components/contact"

export default function AttarPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products?category=attar")
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
      <div className="min-h-screen bg-[#1F1F1F] flex items-center justify-center">
        <div className="text-white text-xl">Loading attars...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      <CategoryHeroSection categoryName="Attar" />

      <section className="bg-[#1F1F1F] py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 md:mb-16">
            Our Attar Collection ({products.length})
          </h2>

          {products.length === 0 ? (
            <div className="text-center text-gray-400 text-lg">
              No attars found. Add some products from admin panel.
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
      <Contact/>
    </div>
  )
}
