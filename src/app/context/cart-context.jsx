"use client"
import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
        setCartItems([])
      }
    }
  }, [])

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  // Helper function to get product ID (handles both _id and id)
  const getProductId = (product) => {
    return product._id || product.id
  }

  const addToCart = (product, quantity = 1) => {
    console.log("Adding to cart:", product, "Quantity:", quantity) // Debug log

    setCartItems((prevItems) => {
      const productId = getProductId(product)
      const existingItem = prevItems.find((item) => getProductId(item.product) === productId)

      if (existingItem) {
        // Update quantity if item already exists
        console.log("Item exists, updating quantity") // Debug log
        return prevItems.map((item) =>
          getProductId(item.product) === productId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        // Add new item
        console.log("Adding new item to cart") // Debug log
        return [...prevItems, { product, quantity }]
      }
    })

    // Show cart popup when item is added
    setIsCartPopupOpen(true)
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => getProductId(item.product) !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (getProductId(item.product) === productId ? { ...item, quantity: newQuantity } : item)),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const openCartPopup = () => setIsCartPopupOpen(true)
  const closeCartPopup = () => setIsCartPopupOpen(false)

  const cartTotal = {
    subtotal: cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
    total: cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    isCartPopupOpen,
    openCartPopup,
    closeCartPopup,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
