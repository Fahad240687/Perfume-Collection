import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

// Helper function to validate category data
const validateCategory = (data) => {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: "Invalid request body" }
  }
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
    return { valid: false, error: "Category name is required and must be a string" }
  }

  return { valid: true }
}

// GET - Fetch all categories
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    const categories = await db.collection("categories")
      .find({})
      .sort({ name: 1 }) // Sort alphabetically by name
      .toArray()

    return NextResponse.json({ 
      success: true, 
      data: categories || [],
      count: categories?.length || 0
    })

  } catch (error) {
    console.error("GET /api/categories error:", error)
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch categories",
      details: error.message 
    }, { status: 500 })
  }
}

// POST - Add new category
export async function POST(request) {
  try {
    const body = await request.json()
    const validation = validateCategory(body)
    
    if (!validation.valid) {
      return NextResponse.json({
        success: false,
        error: validation.error
      }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("fragrance_store")

    // Check if category already exists
    const existingCategory = await db.collection("categories")
      .findOne({ name: body.name.trim() })
    
    if (existingCategory) {
      return NextResponse.json({
        success: false,
        error: "Category already exists"
      }, { status: 409 })
    }

    const newCategory = {
      name: body.name.trim(),
      description: body.description?.trim() || "",
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const result = await db.collection("categories").insertOne(newCategory)

    return NextResponse.json({
      success: true,
      message: "Category created successfully",
      data: {
        ...newCategory,
        _id: result.insertedId
      }
    }, { status: 201 })

  } catch (error) {
    console.error("POST /api/categories error:", error)
    return NextResponse.json({ 
      success: false, 
      error: "Failed to create category",
      details: error.message 
    }, { status: 500 })
  }
}