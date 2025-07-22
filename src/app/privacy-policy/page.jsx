"use client"
import { useRouter } from "next/navigation"
import { FaArrowLeft, FaShieldAlt, FaUserShield, FaLock, FaCookieBite } from "react-icons/fa"

export default function PrivacyPolicyPage() {
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
              <FaShieldAlt className="h-6 w-6 text-[#DAB060]" />
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Effective Date:</strong> January 1, 2024
            </p>
            <p className="text-gray-300 leading-relaxed">
              At Fragrance Boutique, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our
              website or make a purchase.
            </p>
          </div>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaUserShield className="h-6 w-6" />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Name and contact information (email, phone, address)</li>
                  <li>• Payment information (processed securely through encrypted channels)</li>
                  <li>• Order history and preferences</li>
                  <li>• Account credentials and profile information</li>
                  <li>• Communication preferences and marketing consent</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IP address and browser information</li>
                  <li>• Device type and operating system</li>
                  <li>• Website usage patterns and page views</li>
                  <li>• Referral sources and search terms</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">How We Use Your Information</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Order Processing:</strong> To process your orders, arrange shipping,
                  and provide customer service.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Account Management:</strong> To create and maintain your account,
                  including order history and preferences.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Communication:</strong> To send order confirmations, shipping updates,
                  and respond to your inquiries.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Marketing:</strong> To send promotional emails and personalized
                  recommendations (with your consent).
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Website Improvement:</strong> To analyze usage patterns and improve our
                  website functionality and user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Information Sharing</h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">We Share Information With:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Shipping carriers (UPS, FedEx, USPS) for order delivery</li>
                  <li>• Payment processors for secure transaction processing</li>
                  <li>• Email service providers for marketing communications</li>
                  <li>• Analytics services to improve website performance</li>
                  <li>• Legal authorities when required by law</li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">We Never:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sell your personal information to third parties</li>
                  <li>• Share your information for others' marketing purposes</li>
                  <li>• Store your complete payment card information</li>
                  <li>• Share your fragrance preferences without consent</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaLock className="h-6 w-6" />
              Data Security
            </h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Encryption:</strong> All sensitive data is encrypted using SSL/TLS
                  technology during transmission.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Secure Storage:</strong> Personal information is stored on secure
                  servers with restricted access.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Regular Updates:</strong> We regularly update our security measures and
                  conduct security audits.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Staff Training:</strong> Our team is trained on privacy and security
                  best practices.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6 flex items-center gap-3">
              <FaCookieBite className="h-6 w-6" />
              Cookies & Tracking
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Types of Cookies We Use:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • <strong className="text-white">Essential Cookies:</strong> Required for website functionality
                  </li>
                  <li>
                    • <strong className="text-white">Analytics Cookies:</strong> Help us understand website usage
                  </li>
                  <li>
                    • <strong className="text-white">Marketing Cookies:</strong> Enable personalized advertising
                  </li>
                  <li>
                    • <strong className="text-white">Preference Cookies:</strong> Remember your settings and choices
                  </li>
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Managing Cookies</h3>
                <p className="text-gray-300 leading-relaxed">
                  You can control cookies through your browser settings. However, disabling certain cookies may affect
                  website functionality and your shopping experience.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Your Privacy Rights</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Access:</strong> Request a copy of the personal information we have
                  about you.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Correction:</strong> Request corrections to inaccurate or incomplete
                  information.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Deletion:</strong> Request deletion of your personal information
                  (subject to legal requirements).
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications at any
                  time.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Portability:</strong> Request your data in a portable format.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Contact Us</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact
                us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📧 Email: privacy@fragranceboutique.com</p>
                <p>📞 Phone: 1-800-PERFUME (1-800-737-3863)</p>
                <p>📍 Address: 123 Fragrance Lane, Scent City, SC 12345</p>
                <p>🕒 Hours: Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-[#DAB060] mb-6">Policy Updates</h2>
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by
                email or by posting a notice on our website. Your continued use of our services after such changes
                constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
