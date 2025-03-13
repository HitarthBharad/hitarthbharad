import sgMail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.SENDGRID_APIKEY || "";

sgMail.setApiKey(apiKey);

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { name, from, message } = body;

    const msg = {
        to: "hitarth.bharad@gmail.com",
        from: 'hbbharad@gmail.com',
        subject: `${name} wants to connect on website`,
        text: message + `\n Their email ID: ${from}`,
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(JSON.stringify(error))
        })

    return NextResponse.json({success: true}, { status: 201 });
}
