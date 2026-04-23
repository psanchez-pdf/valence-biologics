import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Valence Biologics <onboarding@resend.dev>",
      to: ["support@valencebiologics.com"],
      replyTo: email,
      subject: `New Contact Inquiry: ${subject}`,
      text: `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending the inquiry." },
      { status: 500 }
    );
  }
}