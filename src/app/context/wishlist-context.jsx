"use client"
import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever wishlistItems change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Get consistent product ID
      const productId = product._id || product.id
      const existingItem = prevItems.find((item) => {
        const itemId = item._id || item.id
        return itemId === productId
      })

      if (existingItem) {
        // If item already exists, don't add again
        console.log("Product already in wishlist:", productId)
        return prevItems
      } else {
        // Add new item
        console.log("Adding product to wishlist:", productId)
        return [...prevItems, product]
      }
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => {
        const itemId = item._id || item.id
        return itemId !== productId
      }),
    )
  }

  const clearWishlist = () => {
    setWishlistItems([])
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => {
      const itemId = item._id || item.id
      return itemId === productId
    })
  }

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    wishlistCount: wishlistItems.length,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
