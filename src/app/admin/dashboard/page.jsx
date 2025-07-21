"use client";

import { useState, useEffect, useCallback } from "react"; // Import useCallback
import Link from "next/link";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all"); // State for category filter
  const [searchQuery, setSearchQuery] = useState(""); // State for search query input
  const [currentSearchTerm, setCurrentSearchTerm] = useState(""); // State to trigger actual search

  // Memoize fetchProducts to prevent unnecessary re-renders and re-fetches
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== "all") {
        params.append("category", selectedCategory);
      }
      if (currentSearchTerm) {
        // Use currentSearchTerm for API call
        params.append("search", currentSearchTerm);
      }

      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, currentSearchTerm]); // Dependencies for useCallback

  // Fetch products whenever selectedCategory or currentSearchTerm changes
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // Dependency on memoized fetchProducts

  // Fetch categories once on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        if (data.success) {
          const formattedCategories = data.categories.map((cat) => ({
            ...cat,
            name:
              cat.name.charAt(0).toUpperCase() +
              cat.name.slice(1).replace(/-/g, " "),
          }));
          setCategories(formattedCategories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // Update input value immediately
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission or Enter key
    setCurrentSearchTerm(searchQuery); // Trigger actual search
  };

  const deleteProduct = async (id) => {
    if (
      confirm(
        "Are you sure you want to delete this product? This action cannot be undone."
      )
    ) {
      try {
        console.log("Deleting product with ID:", id);
        const response = await fetch(`/api/products/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log("Delete response:", data);

        if (data.success) {
          fetchProducts(); // Refresh the list after deletion
          alert("Product deleted successfully");
        } else {
          alert("Error deleting product: " + data.error);
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product: " + error.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-center sm:text-left text-gray-800">
            Admin Dashboard
          </h1>
          <Link href="/admin/add-product">
            <button className="bg-[#B67D43] hover:bg-[#DAB060] text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto">
              Add New Product
            </button>
          </Link>
        </div>

        {/* Filter and Search Section */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Category Filter */}

          {/* Search Input */}
          <div className="flex items-end gap-2 w-80">
            {" "}
            {/* Set fixed smaller width */}
            <div className="flex-1">
              <label
                htmlFor="search-input"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search by Name
              </label>
              <input
                type="text"
                id="search-input"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search products by name..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="bg-[#B67D43] hover:bg-[#DAB060] text-white px-4 py-3 rounded-md font-medium h-[48px] mt-auto"
            >
              Search
            </button>
          </div>
        </form>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              Products ({products.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volume
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">
                        {product.category?.replace("-", " ")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${product.price.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {product.volume}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {product.rating}/5
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <Link href={`/admin/edit-product/${product._id}`}>
                        <button className="text-amber-600 hover:text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-md transition-colors">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-md transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {products.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No products found matching your criteria.{" "}
              <Link
                href="/admin/add-product"
                className="text-amber-600 hover:text-amber-700"
              >
                Add your first product
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
