import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "AI Developer Assistant",
    timestamp: new Date().toISOString(),
  });
}