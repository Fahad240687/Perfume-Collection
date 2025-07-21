import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"

// GET - Fetch single product by ID
export async function GET(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    console.log("Fetching product with ID:", params.id)

    // Validate ObjectId
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid product ID" }, { status: 400 })
    }

    const product = await db.collection("products").findOne({
      _id: new ObjectId(params.id),
    })

    if (!product) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    console.log("Product found:", product)

    return NextResponse.json({ success: true, product })
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// PUT - Update product
export async function PUT(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    console.log("Updating product with ID:", params.id)

    // Validate ObjectId
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid product ID" }, { status: 400 })
    }

    const body = await request.json()
    console.log("Update data received:", body)

    const updateData = {
      ...body,
      updatedAt: new Date(),
    }

    const result = await db.collection("products").updateOne({ _id: new ObjectId(params.id) }, { $set: updateData })

    console.log("Update result:", result)

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: true, message: "No changes made to product" })
    }

    return NextResponse.json({ success: true, message: "Product updated successfully" })
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// DELETE - Delete product
export async function DELETE(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    console.log("Deleting product with ID:", params.id)

    // Validate ObjectId
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid product ID" }, { status: 400 })
    }

    const result = await db.collection("products").deleteOne({
      _id: new ObjectId(params.id),
    })

    console.log("Delete result:", result)

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Product deleted successfully" })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
