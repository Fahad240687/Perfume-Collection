import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const searchQuery = searchParams.get("search") // Get search query

    const query = {}
    if (category && category !== "all") {
      // Filter by category if provided and not "all"
      query.category = category
    }

    if (searchQuery) {
      // Filter by product name if search query is provided
      query.name = { $regex: searchQuery, $options: "i" } // Case-insensitive partial match
    }

    const products = await db.collection("products").find(query).toArray()

    return NextResponse.json({ success: true, products })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST - Add new product
export async function POST(request) {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    const body = await request.json()
    const product = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("products").insertOne(product)

    return NextResponse.json({
      success: true,
      message: "Product added successfully",
      productId: result.insertedId,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
