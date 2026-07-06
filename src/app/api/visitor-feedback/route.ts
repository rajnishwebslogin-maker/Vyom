import { NextRequest, NextResponse } from "next/server";

// Temporary storage - use database in production
let visitorFeedbacks: any[] = [];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newFeedback = {
    id: Date.now(),
    ...body,
    status: "pending", // Admin needs to approve
    created_at: new Date().toISOString()
  };
  visitorFeedbacks.push(newFeedback);
  
  // Optional: Send email notification to admin
  return NextResponse.json({ success: true, id: newFeedback.id });
}

export async function GET() {
  return NextResponse.json(visitorFeedbacks);
}