/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

function getFormattedDate(date = new Date()) {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });

  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const ordinal = getOrdinal(day);
  return `${day}${ordinal} ${month}`;
}

function formatData(data: any) {
  let html_string = '<html><body>';

  for (let i = 0; i < data.data.length; i++) {
    html_string += data.data[i]?.titleHTML + '<br/>' + data.data[i]?.descriptionHTML + '<br/><br/>';
  }

  html_string += '</body></html>';

  return html_string;
}

async function sendEmail(content: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  } as SMTPTransport.Options);

  const subject = `WOD: ` + getFormattedDate();

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: 'hbbharad@gmail.com',
    subject,
    html: content
  });
}

async function wod_process() {
  try {

    const base_api_url = 'https://app.sugarwod.com/public/api/v1/affiliates/gemKmiroji/workouts/';

    const today_date = new Date();

    const date_string = today_date.getDate().toString().padStart(2, '0');
    const month_string = (today_date.getMonth() + 1).toString().padStart(2, '0');
    const year_string = today_date.getFullYear().toString();
    const api_url = base_api_url + year_string + month_string + date_string;
    // Step 1: Fetch data
    const { data } = await axios.get(api_url);

    // Step 2: Format the response
    const formatted = formatData(data);

    // Step 3: Send email
    await sendEmail(formatted);
    console.log('Email sent successfully.');
  } catch (err) {
    console.error('Error during scheduled job:', err);
  }
}

export default wod_process;