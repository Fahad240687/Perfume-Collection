"use client"
import { useRouter } from "next/navigation"
import { FaArrowLeft, FaShippingFast, FaGlobe, FaBox, FaClock } from "react-icons/fa"

export default function ShippingInfoPage() {
  const router = useRouter()

  return (
    <div className="bg-[#1F1F1F] text-white min-h-screen">
      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <FaShippingFast className="h-6 w-6 text-[#DAB060]" />
              Shipping Information
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              We take great care in packaging and shipping your precious fragrances. Every order is handled with
              attention to detail to ensure your perfumes arrive safely and in perfect condition.
            </p>
          </div>

          {/* Shipping Options */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaBox className="h-6 w-6" />
              Shipping Options
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Standard Shipping (Free)</h3>
                <p className="text-gray-300 leading-relaxed mb-2">Free standard shipping on all orders over $50</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Delivery time: 5-7 business days</li>
                  <li>• Tracking included</li>
                  <li>• Signature not required</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Express Shipping ($9.99)</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Fast delivery for when you need your fragrance quickly
                </p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Delivery time: 2-3 business days</li>
                  <li>• Priority handling</li>
                  <li>• Full tracking and insurance</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Overnight Shipping ($24.99)</h3>
                <p className="text-gray-300 leading-relaxed mb-2">Next business day delivery for urgent orders</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Delivery time: Next business day</li>
                  <li>• Orders must be placed before 2 PM EST</li>
                  <li>• Signature required</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaClock className="h-6 w-6" />
              Processing Time
            </h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Standard Orders:</strong> 1-2 business days processing time
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Custom Gift Sets:</strong> 2-3 business days processing time
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Personalized Items:</strong> 3-5 business days processing time
                </p>
                <p className="leading-relaxed text-sm">
                  * Processing time does not include shipping time. Orders placed on weekends or holidays will be
                  processed on the next business day.
                </p>
              </div>
            </div>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaGlobe className="h-6 w-6" />
              International Shipping
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Available Countries</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We ship to most countries worldwide. Please note that some restrictions may apply for certain
                  fragrance products due to international shipping regulations.
                </p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Canada: 7-10 business days ($15.99)</li>
                  <li>• Europe: 10-14 business days ($19.99)</li>
                  <li>• Asia Pacific: 12-16 business days ($24.99)</li>
                  <li>• Other regions: 14-21 business days ($29.99)</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Customs & Duties</h3>
                <p className="text-gray-300 leading-relaxed">
                  International customers are responsible for any customs duties, taxes, or fees imposed by their
                  country. These charges are not included in our shipping costs and will be collected upon delivery.
                </p>
              </div>
            </div>
          </section>

          {/* Packaging */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Packaging & Care</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Secure Packaging:</strong> All fragrances are wrapped in protective
                  bubble wrap and placed in sturdy boxes to prevent damage during transit.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Temperature Control:</strong> We avoid shipping during extreme weather
                  conditions to protect the integrity of your fragrances.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Discrete Packaging:</strong> All packages are shipped in plain boxes
                  with no indication of contents for your privacy.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Gift Wrapping:</strong> Complimentary gift wrapping available upon
                  request with elegant packaging and ribbon.
                </p>
              </div>
            </div>
          </section>

          {/* Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Order Tracking</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Once your order ships, you'll receive a confirmation email with tracking information. You can track
                  your package using:
                </p>
                <ul className="space-y-1">
                  <li>• Your order confirmation email</li>
                  <li>• Our website's order tracking page</li>
                  <li>• Direct carrier tracking (UPS, FedEx, USPS)</li>
                  <li>• SMS notifications (optional)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Shipping Questions?</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                Have questions about shipping or need to make changes to your order? Contact us before your order ships.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📧 Email: shipping@fragranceboutique.com</p>
                <p>📞 Phone: 1-800-PERFUME (1-800-737-3863)</p>
                <p>💬 Live Chat: Available on our website</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
