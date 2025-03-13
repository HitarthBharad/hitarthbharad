import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "Hitarth-Bharad.pdf")
    const fileBuffer = fs.readFileSync(filePath)
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Hitarth-Bharad.pdf"',
      },
    })
  } catch (error) {
    console.error("Error serving resume:", error)
    return new NextResponse("Resume not found", { status: 404 })
  }
}

