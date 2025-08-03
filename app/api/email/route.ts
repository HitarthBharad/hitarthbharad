import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

async function sendEmail(subject: string, content: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  } as SMTPTransport.Options);


  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: 'hbbharad@gmail.com',
    subject,
    text: content
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, from, message } = body;

  const subject = `${name} wants to connect on website`;
  const content = message + `\nTheir email ID: ${from}`;

  await sendEmail(subject, content);

  // sgMail
  //     .send(msg)
  //     .then(() => {
  //         console.log('Email sent')
  //     })
  //     .catch((error) => {
  //         console.error(JSON.stringify(error))
  //     })

  return NextResponse.json({ success: true }, { status: 201 });
}
