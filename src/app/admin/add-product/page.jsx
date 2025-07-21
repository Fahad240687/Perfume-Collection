"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AddProduct() {
  const router = useRouter()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    volume: "",
    image: "",
    rating: "",
    reviews: "",
    category: "",
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories")
      const data = await response.json()
      if (data.success) {
        setCategories(data.categories)
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    console.log("File selected:", file.name, file.size, file.type)

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB")
      return
    }

    setImageUploading(true)

    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)

      console.log("Uploading file...")

      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      })

      console.log("Upload response status:", response.status)

      const data = await response.json()
      console.log("Upload response data:", data)

      if (data.success) {
        setFormData((prev) => ({
          ...prev,
          image: data.imageUrl,
        }))
        setImagePreview(data.imageUrl)
        console.log("Image uploaded successfully:", data.imageUrl)
      } else {
        console.error("Upload failed:", data.error)
        alert("Image upload failed: " + data.error)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Error uploading image: " + error.message)
    } finally {
      setImageUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.image) {
      alert("Please upload an image first")
      return
    }

    setLoading(true)

    try {
      console.log("Submitting product data:", formData)

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number.parseFloat(formData.price),
          rating: Number.parseFloat(formData.rating),
          reviews: Number.parseInt(formData.reviews),
        }),
      })

      const data = await response.json()
      console.log("Product creation response:", data)

      if (data.success) {
        alert("Product added successfully!")
        router.push("/admin/dashboard")
      } else {
        alert("Error adding product: " + data.error)
      }
    } catch (error) {
      console.error("Error adding product:", error)
      alert("Error adding product: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-gray-800 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Product Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div>
              <label htmlFor="volume" className="block text-sm font-medium mb-2">
                Volume *
              </label>
              <input
                type="text"
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                placeholder="e.g., 100ml"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium mb-2">
              Product Image * (Max 5MB)
            </label>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
                  </div>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={imageUploading}
                  />
                </label>
              </div>

              {imageUploading && (
                <div className="text-center text-amber-600">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600"></div>
                  <span className="ml-2">Uploading image...</span>
                </div>
              )}

              {imagePreview && (
                <div className="text-center">
                  <p className="text-sm text-green-600 mb-2">✅ Image uploaded successfully!</p>
                  <div className="relative w-32 h-32 mx-auto border border-gray-300 rounded-md overflow-hidden">
                    <Image
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{formData.image}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium mb-2">
                Rating (1-5) *
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div>
              <label htmlFor="reviews" className="block text-sm font-medium mb-2">
                Number of Reviews *
              </label>
              <input
                type="number"
                id="reviews"
                name="reviews"
                value={formData.reviews}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            >
              <option value="">Select a category</option>
              <option value="perfume">Perfume</option>
              <option value="attar">Attar</option>
              <option value="tester">Tester</option>
              <option value="luxury-fragrance">Luxury Fragrance</option>
              <option value="gift-set">Gift Set</option>
              <option value="costumize-gift-box">Customize Gift Box</option>
              <option value="arabic-collection">Arabic Collection</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading || imageUploading || !formData.image}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding Product..." : "Add Product"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/dashboard")}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 rounded-md transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
