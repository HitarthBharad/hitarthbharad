import { mongodb } from "./db.server";
import { UAParser } from 'ua-parser-js';

const resumeAnalyticsTracker = async (headersList: any, timezone: any, locale: any ) => {

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

    const db = await mongodb();

    await db
        .collection("resume")
        .insertOne({ ip, geo, userAgent: userAgentParsed, timezone, locale, allHeaders, createdAt: new Date() });

}

export default resumeAnalyticsTracker;