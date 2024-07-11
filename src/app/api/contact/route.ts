import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  // Compose email
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: process.env.NEXT_PUBLIC_Recipient, // Recipient's email address
    subject: "Contact Form Submission",
    html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${message}</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return NextResponse.json(
        { message: "Message received!" },
        { status: 200 }
      );
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // Return response
  return NextResponse.json({ message: "Message received!" }, { status: 200 });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
