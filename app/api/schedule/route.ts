import { NextRequest, NextResponse } from "next/server";
import wod_process from "@/lib/wod-process";

export async function GET() {
  await wod_process();
  return NextResponse.json({ msg: 'OK' });
};
