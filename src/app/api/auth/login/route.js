import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(request) {
  try {
    const { password } = await request.json()

    // Simple admin password check (you can make this more secure)
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123"

    if (password !== adminPassword) {
      return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 })
    }

    // Create JWT token
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET || "your-secret-key", { expiresIn: "24h" })

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    })

    // Set HTTP-only cookie
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 24 hours
    })

    return response
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
