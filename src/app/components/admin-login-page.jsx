// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function AdminLoginPage() {
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")
//   const router = useRouter()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ password }),
//       })

//       const data = await response.json()

//       if (data.success) {
//         router.push("/admin/dashboard")
//       } else {
//         setError(data.error || "Login failed")
//       }
//     } catch (error) {
//       setError("Something went wrong")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Login Form */}
//       <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 bg-white">
//         <div className="w-full max-w-md mx-auto">
//           {/* Logo Section */}
//           <div className="mb-12">
//             <div className="flex items-center mb-2">
//               <div className="grid grid-cols-2 gap-1 mr-3">
//                 <div className="w-3 h-3 bg-amber-600 rounded-sm"></div>
//                 <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
//                 <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
//                 <div className="w-3 h-3 bg-amber-600 rounded-sm"></div>
//               </div>
//               <span className="text-xl font-bold text-gray-900">FRAGRANCE</span>
//             </div>
//           </div>

//           {/* Welcome Section */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
//             <p className="text-gray-600">Please enter your admin password</p>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             {/* Error Message */}
//             {error && <div className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">{error}</div>}

//             {/* Sign In Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Signing in...
//                 </div>
//               ) : (
//                 "Sign in"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Image/Illustration */}
//       <div className="hidden lg:flex flex-1 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white rounded-full"></div>
//           <div className="absolute top-20 right-20 w-6 h-6 border-2 border-white rounded-full"></div>
//           <div className="absolute bottom-20 left-20 w-4 h-4 border-2 border-white rounded-full"></div>
//           <div className="absolute top-1/3 left-1/4 w-12 h-8 border-2 border-white rounded-lg"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-10 h-6 border-2 border-white rounded-lg"></div>
//           <div className="absolute top-1/2 right-10 w-8 h-8 border-2 border-white rounded-full"></div>

//           {/* Perfume bottle icons */}
//           <div className="absolute top-1/4 right-1/3">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 21V10a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v11"
//               />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h10" />
//             </svg>
//           </div>

//           {/* Star icons */}
//           <div className="absolute bottom-1/4 left-1/3">
//             <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//           </div>
//         </div>

//         {/* Main Image Container */}
//         <div className="flex items-center justify-center w-full relative z-10">
//           <div className="text-center">
//             {/* Placeholder for custom image */}
//             <div className="w-80 h-80 mx-auto mb-8 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
//               <div className="text-center">
//                 <svg
//                   className="w-20 h-20 text-white mx-auto mb-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <p className="text-white text-lg font-medium">Custom Image</p>
//                 <p className="text-white/80 text-sm">Add your image here</p>
//               </div>
//             </div>

//             {/* Welcome Text */}
//             <div className="text-white">
//               <h2 className="text-2xl font-bold mb-2">Admin Portal</h2>
//               <p className="text-white/90">Manage your fragrance store</p>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
//       </div>
//     </div>
//   )
// }
