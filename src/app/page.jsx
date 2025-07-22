"use client"

import { useState, useEffect } from "react"

import HeroSection from "@/app/components/hero-section";
import OurCollections from "@/app/components/our-collections";
import Reviews from "@/app/components/reviews";
import ProductCategoriesSection from "@/app/components/product-categories";
import ProductCarouselSection from "@/app/components/product-carousel-section";
import Contact from "@/app/components/contact";
import FAQ from '@/app/components/faq'

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()

      if (data.success) {
        const groupedProducts = data.products.reduce((acc, product) => {
          const categoryName = product.category
          if (!acc[categoryName]) {
            acc[categoryName] = {
              id: categoryName,
              name: categoryName.charAt(0).toUpperCase() + categoryName.slice(1).replace("-", " "),
              products: [],
            }
          }
          acc[categoryName].products.push(product)
          return acc
        }, {})

        const categoriesArray = Object.values(groupedProducts)
        setProducts(categoriesArray)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

 

  const perfumeCategory = products.find((cat) => cat.id === "perfume")
  const attarCategory = products.find((cat) => cat.id === "attar")
  const giftBoxCategory = products.find((cat) => cat.id === "costumize-gift-box")
  const arabicCollectionCategory = products.find((cat) => cat.id === "arabic-collection")

  return (
    <div>
      <HeroSection />

      <div className="mt-12">
        {perfumeCategory && <ProductCategoriesSection categories={[perfumeCategory]} showLimit={true} />}
      </div>
      <div className="-mt-8 md:-mt-2">
        {attarCategory && <ProductCategoriesSection categories={[attarCategory]} showLimit={true} />}
      </div>
      <ProductCarouselSection />
      {arabicCollectionCategory && (
        <ProductCategoriesSection categories={[arabicCollectionCategory]} showLimit={true} />
      )}
      <OurCollections />
      {giftBoxCategory && <ProductCategoriesSection categories={[giftBoxCategory]} showLimit={true} />}
      <Reviews />
      <FAQ />
      <Contact />
    </div>
  )
}
