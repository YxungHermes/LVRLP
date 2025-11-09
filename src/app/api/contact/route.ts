import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, packageInterest, message, website } = body;

    // Honeypot check - if 'website' field is filled, it's likely a bot
    if (website) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Love Violeta Rose <contact@lovevioletarose.com>",
      to: [process.env.CONTACT_EMAIL || "your-email@example.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #ec4899;
              }
              .label {
                font-weight: 600;
                color: #9d174d;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #ec4899; text-decoration: none;">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}

              ${eventDate ? `
              <div class="field">
                <div class="label">Event Date</div>
                <div class="value">${new Date(eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
              ` : ''}

              ${packageInterest ? `
              <div class="field">
                <div class="label">Package Interest</div>
                <div class="value">${packageInterest.charAt(0).toUpperCase() + packageInterest.slice(1)}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>

            <div class="footer">
              <p>This email was sent from the contact form on lovevioletarose.com</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
