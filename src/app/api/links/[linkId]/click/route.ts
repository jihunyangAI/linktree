import { NextRequest, NextResponse } from "next/server";
import { incrementLinkClick } from "@/lib/linkClicks";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ linkId: string }> }
) {
  const { linkId } = await params;

  if (!linkId) {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  const clicks = await incrementLinkClick(linkId);
  return NextResponse.json({ linkId, clicks });
}
