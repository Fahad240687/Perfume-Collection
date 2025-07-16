export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Development</h3>
            <p className="text-gray-600">Modern, responsive websites built with Next.js and React.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
            <p className="text-gray-600">Beautiful, user-friendly interfaces designed with Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
