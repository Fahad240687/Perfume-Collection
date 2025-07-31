"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Redirect if already logged in by checking cookie on client
  useEffect(() => {
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admin-token="));

    if (tokenCookie) {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Login success - redirect to dashboard
        router.push("/admin/dashboard");
      } else {
        // Show error message from server or generic
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 bg-white">
        <div className="w-full max-w-md mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center mb-2">
              <div className="grid grid-cols-2 gap-1 mr-3">
                <div className="w-3 h-3 bg-amber-600 rounded-sm"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-amber-600 rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">FRAGRANCE</span>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Please enter your admin password</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B67D43] hover:bg-[#DAB060] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Perfume Image */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#B67D43] via-[#B67D43] to-[#DAB060] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-8 border-2 border-white rounded-lg"></div>
          <div className="absolute bottom-1/3 right-1/4 w-10 h-6 border-2 border-white rounded-lg"></div>
          <div className="absolute top-1/2 right-10 w-8 h-8 border-2 border-white rounded-full"></div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full relative z-10">
          <div className="text-center">
            <div className="w-80 h-80 mx-auto mb-8 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/images/perfume1.png"
                  alt="Perfume Bottle"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Admin Portal</h2>
              <p className="text-white/90">Manage your fragrance store</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
    </div>
  );
}
