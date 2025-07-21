import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

// GET - Fetch all categories
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    const categories = await db.collection("categories").find({}).toArray()

    return NextResponse.json({ success: true, categories })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST - Add new category
export async function POST(request) {
  try {
    const client = await clientPromise
    const db = client.db("fragrance_store")

    const body = await request.json()
    const category = {
      ...body,
      createdAt: new Date(),
    }

    const result = await db.collection("categories").insertOne(category)

    return NextResponse.json({
      success: true,
      message: "Category added successfully",
      categoryId: result.insertedId,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
