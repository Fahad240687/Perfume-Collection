import ProductCategoriesSection from "@/app/components/product-categories"
import { productCategories } from "@/app/data/products"
import { notFound } from "next/navigation"
import CategoryHeroSection from "@/app/components/category-hero-section"
import Review from "@/app/components/reviews"
import Contact from "@/app/components/contact"

export default function ShopCategoryPage({ params }) {
  const { categoryId } = params

  const category = productCategories.find((cat) => cat.id === categoryId)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      <CategoryHeroSection/>
      <ProductCategoriesSection categories={[category]} />
      <Review/>
      <Contact/>
    </div>
  )
}
