import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In a real app you would store the lead in a database or send an email.
    // Here we just return a success response after a short delay.
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Lead received successfully", lead: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}