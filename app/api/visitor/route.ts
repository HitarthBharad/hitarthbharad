import { NextRequest, NextResponse } from "next/server";
import { mongodb } from "@/lib/db.server";
import { headers } from "next/headers";
import { UAParser } from 'ua-parser-js';
import jwt from "jsonwebtoken";

function validateAndDecodeJWT(authHeader: string | null) {
    if (!authHeader?.startsWith("Bearer ")) {
        return null;
    }
    const token = authHeader.split(" ")[1];
    try {
        return jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
        console.error('JWT verification failed', err);
    }
}

export async function POST(req: NextRequest,) {

    if (req.method === 'OPTIONS') {
        return new NextResponse('', {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
    }


    const headersList = await headers();

    const decoded = validateAndDecodeJWT(headersList.get("Authorization"));
    if (!decoded) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  
    const service = (decoded as jwt.JwtPayload).service;

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
        .insertOne({ appName: service, ip, geo, userAgent: userAgentParsed, timezone, locale, screenWidth, screenHeight, colorScheme, route, allHeaders, createdAt: new Date() });

    return NextResponse.json({msg: "OK"}, {status: 201});
};