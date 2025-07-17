import HeroSection from "@/app/components/hero-section";
import OurCollections from "@/app/components/our-collections";
import Reviews from "@/app/components/reviews";
import ProductCategoriesSection from "@/app/components/product-categories";
import { productCategories } from "@/app/data/products";
import ProductCarouselSection from "@/app/components/product-carousel-section";
import Contact from "@/app/components/contact";

export default function HomePage() {
  const homepageCategories = productCategories.filter(
    (category) => category.id !== "arabic-collection"
  );

  const firstTwoCategories = homepageCategories.slice(0, 2).map((category) => ({
    ...category,
    products: category.products.slice(0, 6), 
  }));

  const remainingCategories = homepageCategories.slice(2).map((category) => ({
    ...category,
    products: category.products.slice(0, 6), 
  }));

  return (
    <div>
      <HeroSection />
      {firstTwoCategories.length > 0 && (
        <ProductCategoriesSection categories={firstTwoCategories} />
      )}
      <ProductCarouselSection />
      <OurCollections />

      {remainingCategories.length > 0 && (
        <ProductCategoriesSection categories={remainingCategories} />
      )}

      <Reviews />
      <Contact />
    </div>
  );
}
