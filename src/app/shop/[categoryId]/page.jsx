import ProductCategoriesSection from "@/app/components/product-categories"
import { productCategories } from "@/app/data/products"
import { notFound } from "next/navigation"
import CategoryHeroSection from "@/app/components/category-hero-section"
import Review from "@/app/components/reviews"
import Contact from "@/app/components/contact"

export default function ShopCategoryPage({ params }) {
  const { categoryId } = params

  // Find the category based on the categoryId from the URL
  const category = productCategories.find((cat) => cat.id === categoryId)

  // If category is not found, render a 404 page
  if (!category) {
    notFound()
  }

  // Render the CategoryHeroSection with the found category name
  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      <CategoryHeroSection categoryName={category.name} />
      <ProductCategoriesSection categories={[category]} />
    </div>
  )
}
