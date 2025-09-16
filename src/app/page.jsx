"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

import HeroSection from "@/app/components/hero-section";
import OurCollections from "@/app/components/our-collections";
import Reviews from "@/app/components/reviews";
import ProductCategoriesSection from "@/app/components/product-categories";
import ProductCarouselSection from "@/app/components/product-carousel-section";
import Contact from "@/app/components/contact";
import FAQ from "@/app/components/faq";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();

      if (data.success) {
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

        const categoriesArray = Object.values(groupedProducts);
        setProducts(categoriesArray);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const perfumeCategory = products.find((cat) => cat.id === "perfume");
  const attarCategory = products.find((cat) => cat.id === "attar");
  const giftBoxCategory = products.find(
    (cat) => cat.id === "costumize-gift-box"
  );
  const arabicCollectionCategory = products.find(
    (cat) => cat.id === "arabic-collection"
  );

  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Scentmire | Luxury Perfume, Authentic Attars, Arabic Fragrances & Gift
          Boxes
        </title>
        <meta
          name="description"
          content="Scentmire offers a premium range of luxury perfumes, natural attars, Arabic fragrances, and customizable gift boxes. Discover elegant scents for men and women."
        />
        <meta
          name="keywords"
          content="luxury perfumes, attars, Arabic perfumes, oud, musk, perfume gifts, premium fragrances, scentmire, perfume for men, perfume for women, customize gift box"
        />
        <meta name="author" content="Scentmire" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="vyFecmJWsxcqLhyu_lQR97u05bdYf_JNwWEMIhG2uAI"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Scentmire | Luxury Perfumes & Authentic Fragrance Collection"
        />
        <meta
          property="og:description"
          content="Discover high-end perfumes, attars, Arabic scents & custom gift boxes. Scentmire brings elegance and exclusivity to fragrance lovers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scentmire.vercel.app/" />
        <meta
          property="og:image"
          content="https://scentmire.vercel.app/_next/image?url=%2Fuploads%2F1753171803769-883b3e6f33d87c83226418b1488f5a20b83fb9fc.png&w=1920&q=75"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Scentmire | Premium Perfume & Fragrance Collection"
        />
        <meta
          name="twitter:description"
          content="Explore our curated luxury perfumes, Arabic attars, and elegant gift boxes. Only at Scentmire."
        />
        <meta
          name="twitter:image"
          content="https://scentmire.vercel.app/_next/image?url=%2Fuploads%2F1753171803769-883b3e6f33d87c83226418b1488f5a20b83fb9fc.png&w=1920&q=75"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Logo Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Scentmire",
              url: "https://scentmire.vercel.app",
              logo: "https://scentmire.vercel.app/_next/image?url=%2Fuploads%2F1753171803769-883b3e6f33d87c83226418b1488f5a20b83fb9fc.png&w=1920&q=75g",
            }),
          }}
        />
      </Head>

      {/* Sections */}
      <HeroSection />

      <div className="mt-12">
        {perfumeCategory && (
          <ProductCategoriesSection
            categories={[perfumeCategory]}
            showLimit={true}
          />
        )}
      </div>

      <div className="-mt-8 md:-mt-2">
        {attarCategory && (
          <ProductCategoriesSection
            categories={[attarCategory]}
            showLimit={true}
          />
        )}
      </div>

      <ProductCarouselSection />

      {arabicCollectionCategory && (
        <>
          {/* Internal SEO link just above the section */}
          <div className="text-center my-8">
            <a
              href="/shop/arabic-collection"
              className="text-lg font-medium text-[#DAB060] hover:underline"
            >
              Explore our Arabic Perfume Collection
            </a>
          </div>

          {/* Arabic Collection section */}
          <ProductCategoriesSection
            categories={[arabicCollectionCategory]}
            showLimit={true}
          />
        </>
      )}

      <OurCollections />

      {giftBoxCategory && (
        <ProductCategoriesSection
          categories={[giftBoxCategory]}
          showLimit={true}
        />
      )}

      <Reviews />
      <FAQ />
      <Contact />
    </div>
  );
}
