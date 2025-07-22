"use client"
import { useRouter } from "next/navigation"
import { FaArrowLeft, FaFileContract, FaGavel, FaExclamationTriangle, FaHandshake } from "react-icons/fa"

export default function TermsConditionsPage() {
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
              <FaFileContract className="h-6 w-6 text-[#DAB060]" />
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Effective Date:</strong> January 1, 2024
            </p>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Fragrance Boutique. These Terms and Conditions ("Terms") govern your use of our website and
              services. By accessing our website or making a purchase, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaHandshake className="h-6 w-6" />
              Acceptance of Terms
            </h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  By using our website, creating an account, or making a purchase, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="leading-relaxed">
                  If you do not agree with any part of these Terms, you must not use our website or services.
                </p>
              </div>
            </div>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Use of Website</h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Permitted Use</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Browse and purchase products for personal use</li>
                  <li>• Create an account to manage orders and preferences</li>
                  <li>• Leave reviews and ratings for purchased products</li>
                  <li>• Contact customer service for support</li>
                  <li>• Subscribe to newsletters and promotional communications</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Prohibited Use</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Using the website for any unlawful purpose</li>
                  <li>• Attempting to gain unauthorized access to our systems</li>
                  <li>• Reproducing, distributing, or modifying website content</li>
                  <li>• Using automated systems to access the website</li>
                  <li>• Interfering with website functionality or security</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Product Information & Availability</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Accuracy:</strong> We strive to provide accurate product descriptions,
                  images, and pricing. However, we do not warrant that all information is completely accurate or
                  current.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Availability:</strong> All products are subject to availability. Prices
                  and availability may change without notice.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Fragrance Notes:</strong> Fragrance descriptions are provided for
                  guidance. Individual perception of scents may vary.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Age Restrictions:</strong> You must be 18 years or older to purchase
                  from our website.
                </p>
              </div>
            </div>
          </section>

          {/* Orders and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Orders & Payment</h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Order Acceptance</h3>
                <p className="text-gray-300 leading-relaxed">
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any
                  order for any reason, including suspected fraud or unauthorized transactions.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Payment is required at the time of order</li>
                  <li>• We accept major credit cards, PayPal, and other listed payment methods</li>
                  <li>• All prices are in USD unless otherwise specified</li>
                  <li>• Taxes and shipping costs are calculated at checkout</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Pricing Errors</h3>
                <p className="text-gray-300 leading-relaxed">
                  In the event of a pricing error, we reserve the right to cancel the order and refund any payment
                  received, even if the order has been confirmed.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Shipping & Delivery</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Delivery Times:</strong> Estimated delivery times are provided for
                  guidance only and are not guaranteed.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Risk of Loss:</strong> Risk of loss and title for products pass to you
                  upon delivery to the carrier.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Shipping Restrictions:</strong> Some products may have shipping
                  restrictions based on destination or local regulations.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Intellectual Property</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Website Content:</strong> All content on our website, including text,
                  images, logos, and design, is protected by copyright and trademark laws.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Brand Names:</strong> All fragrance brand names and trademarks are the
                  property of their respective owners.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">User Content:</strong> By submitting reviews or other content, you
                  grant us a non-exclusive right to use, modify, and display such content.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaExclamationTriangle className="h-6 w-6" />
              Limitation of Liability
            </h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Disclaimer:</strong> Our website and products are provided "as is"
                  without warranties of any kind, either express or implied.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Liability Limit:</strong> Our total liability for any claim shall not
                  exceed the amount you paid for the specific product or service.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Allergic Reactions:</strong> We are not responsible for allergic
                  reactions or sensitivities to fragrance products. Please test products carefully.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaGavel className="h-6 w-6" />
              Governing Law
            </h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  These Terms are governed by the laws of the State of California, United States, without regard to
                  conflict of law principles.
                </p>
                <p className="leading-relaxed">
                  Any disputes arising from these Terms or your use of our website shall be resolved through binding
                  arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Changes to Terms</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting on our website. Your continued use of our website after changes are posted constitutes
                acceptance of the modified Terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Contact Information</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📧 Email: legal@fragranceboutique.com</p>
                <p>📞 Phone: 1-800-PERFUME (1-800-737-3863)</p>
                <p>📍 Address: 123 Fragrance Lane, Scent City, SC 12345</p>
                <p>🕒 Hours: Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
