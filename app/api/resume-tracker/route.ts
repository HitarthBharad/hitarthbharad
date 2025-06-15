import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import resumeAnalyticsTracker from "@/lib/resume-tracker";

export async function POST(req: NextRequest) {

    const headersList = await headers();

    const body = await req.json();
    const { timezone, locale } = body;
    
    resumeAnalyticsTracker(headersList, timezone, locale);

    return NextResponse.json({msg:'OK'});
};