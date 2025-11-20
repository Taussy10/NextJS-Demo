import dbConnect from "@/lib/mongodb";
import User from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, gender } = (await request.json()) as {
      name?: string;
      gender?: string;
    };

    if (!name || !gender) {
      return NextResponse.json(
        { error: "Both name and gender are required." },
        { status: 400 }
      );
    }

    await dbConnect();

    const user = await User.create({ name, gender });

    return NextResponse.json(user, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Unable to create user.",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 }
    );
  }
}
