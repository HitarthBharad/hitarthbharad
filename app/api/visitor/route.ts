import { NextRequest, NextResponse } from "next/server";
import { mongodb } from "@/lib/db.server";
import { headers } from "next/headers";
import { UAParser } from 'ua-parser-js';

export async function POST(req: NextRequest) {

    const headersList = await headers();

    const uaString = headersList.get("user-agent") || "";
    const parser = new UAParser(uaString);
    const userAgentParsed = parser.getResult();

    const ip = headersList.get("x-forwarded-for");

    const allHeaders: Record<string, string> = {};

    for (const [key, value] of headersList.entries()) {
        allHeaders[key] = value;
    }

    let geo = null;
    if (ip) {
        try {
            const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
            geo = await geoResponse.json();
        } catch (err) {
            console.error('Geolocation fetch failed', err);
        }
    }
    const body = await req.json();

    const { timezone, locale, screenWidth, screenHeight, colorScheme, route } = body;

    const db = await mongodb();

    await db
        .collection("hitarthbharad")
        .insertOne({ ip, geo, userAgent: userAgentParsed, timezone, locale, screenWidth, screenHeight, colorScheme, route, allHeaders, createdAt: new Date() });

    return NextResponse.json({msg: "OK"}, {status: 201});
};