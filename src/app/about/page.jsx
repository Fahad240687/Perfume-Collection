import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="bg-[#1F1F1F] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section for About */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  text-white mb-4">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            At Fragrance, we believe that perfumes are more than just scents; they are expressions of one's
            individuality and style.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Our Story */}
          <div className="space-y-8">
            <div className=" p-8 rounded-lg shadow-lg border border-gray-700">
              <h2 className="text-3xl font-semibold text-[#DAB060] mb-4">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Local Face Perfumes was founded by a group of perfume enthusiasts with a shared vision to create a haven
                for perfume lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and
                richness of cultures around the world, we set out on a journey to curate a collection of scents that
                capture the essence of each region.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our aim is to bring you closer to the heart and soul of different cultures through the art of perfumery.
              </p>
            </div>

            {/* Image for Our Story (Optional, can be added if you have one) */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden hidden md:block">
  <Image
    src="/images/perfume8.png"
    alt="Our Story"
    fill
    className="object-cover object-center"
  />
</div>


          </div>

          {/* Right Column: What Makes Us Unique */}
          <div className="space-y-8">
            <div className=" p-8 rounded-lg shadow-lg border border-gray-700">
              <h2 className="text-3xl font-semibold text-[#DAB060] mb-4">What Makes Us Unique</h2>

              {/* Unique Selling Points */}
              <div className="space-y-6">
                {/* Locally Inspired */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Locally Inspired</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes
                    of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of
                    Kyoto, each fragrance tells a unique story that resonates with its origin.
                  </p>
                </div>

                {/* High-Quality Ingredients */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">High-Quality Ingredients</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We believe that the key to an extraordinary scent lies in the quality of ingredients. That's why we
                    collaborate with expert perfumers who source the finest and ethically-sourced materials from around
                    the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious
                    experience.
                  </p>
                </div>

                {/* Personalized Service */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personalized Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance
                    experts is always ready to assist you in finding a fragrance that complements your personality and
                    style. Whether you're exploring new scents or seeking to rediscover an old favorite, we're here to
                    guide you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action / Closing Statement */}
        <div className="mt-16 text-center  p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto">
            Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world.
            Discover the captivating aromas that embrace the essence of local cultures and connect with the beauty of
            our shared humanity.
          </p>
          <p className="text-lg font-semibold text-[#DAB060]">Thank you for being a part of our journey.</p>
          <p className="text-md text-gray-400 mt-2">With love and gratitude, Fragrance Perfumes Team</p>
        </div>
      </div>
    </section>
  )
}
