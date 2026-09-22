import { NextResponse } from "next/server";
import { getAllLinkClicks } from "@/lib/linkClicks";

export async function GET() {
  const clicks = await getAllLinkClicks();
  return NextResponse.json(clicks);
}
