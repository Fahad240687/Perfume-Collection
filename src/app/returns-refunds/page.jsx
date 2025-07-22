"use client"
import { useRouter } from "next/navigation"
import { FaArrowLeft, FaUndo, FaShieldAlt, FaClock } from "react-icons/fa"

export default function ReturnsRefundsPage() {
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
              <FaUndo className="h-6 w-6 text-[#DAB060]" />
              Returns & Refunds
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              At our fragrance boutique, we want you to be completely satisfied with your purchase. We understand that
              choosing the perfect scent is a personal journey, and we're here to make sure you find your signature
              fragrance with confidence.
            </p>
          </div>

          {/* Return Policy */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaShieldAlt className="h-6 w-6" />
              Return Policy
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">30-Day Return Window</h3>
                <p className="leading-relaxed">
                  You may return unopened items within 30 days of purchase for a full refund. Items must be in their
                  original packaging and condition.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Opened Fragrances</h3>
                <p className="leading-relaxed">
                  For opened perfumes and attars, we offer a 14-day return window if you're not satisfied with the
                  scent. The bottle must be at least 80% full to qualify for return.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Gift Sets & Collections</h3>
                <p className="leading-relaxed">
                  Customized gift boxes and special collections can be returned within 30 days if unopened. Once opened,
                  individual items follow our standard return policy.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaClock className="h-6 w-6" />
              Refund Process
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">How to Initiate a Return</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Contact our customer service team within the return window</li>
                  <li>Provide your order number and reason for return</li>
                  <li>Receive a return authorization number and shipping label</li>
                  <li>Package the item securely and ship it back to us</li>
                </ol>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Refund Timeline</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Processing: 2-3 business days after we receive your return</li>
                  <li>• Credit card refunds: 5-7 business days</li>
                  <li>• PayPal refunds: 1-2 business days</li>
                  <li>• Bank transfers: 3-5 business days</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exceptions */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Non-Returnable Items</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <ul className="space-y-2 text-gray-300">
                <li>• Personalized or engraved items</li>
                <li>• Items damaged by misuse or normal wear</li>
                <li>• Products returned after the specified return window</li>
                <li>• Items without original packaging or proof of purchase</li>
                <li>• Sample vials and travel-size testers</li>
              </ul>
            </div>
          </section>

          {/* Exchange Policy */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Exchange Policy</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                We offer exchanges for the same item in different sizes or for items of equal or lesser value. Price
                differences will be refunded or charged accordingly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For fragrance exchanges, we recommend trying our sample program first to ensure you love your new
                choice.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Need Help?</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                Our customer service team is here to help with any questions about returns or refunds.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📧 Email: returns@fragranceboutique.com</p>
                <p>📞 Phone: 1-800-PERFUME (1-800-737-3863)</p>
                <p>🕒 Hours: Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
