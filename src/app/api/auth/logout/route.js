import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ success: true, message: "Logged out" });

  // Clear the token cookie
  response.cookies.set("admin-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0), // Expire immediately
  });

  return response;
}
