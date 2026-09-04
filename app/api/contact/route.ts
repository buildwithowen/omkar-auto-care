import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "info@omkarautocare.com.au";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const fullName = String(body.fullName || "").trim();
    const contactNumber = String(
      body.contactNumber || ""
    ).trim();
    const email = String(body.email || "").trim();
    const rego = String(body.rego || "").trim();
    const address = String(body.address || "").trim();
    const submittedFrom = String(
      body.submittedFrom || ""
    ).trim();

    const services = Array.isArray(body.services)
      ? body.services
          .map((service: unknown) =>
            String(service).trim()
          )
          .filter(Boolean)
      : [];

    if (
      !fullName ||
      !contactNumber ||
      !email ||
      !address
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(fullName);
    const safePhone = escapeHtml(contactNumber);
    const safeEmail = escapeHtml(email);
    const safeRego = escapeHtml(
      rego || "Not provided"
    );
    const safeAddress = escapeHtml(address);
    const safeSubmittedFrom = escapeHtml(
      submittedFrom || "Website"
    );

    const safeServices =
      services.length > 0
        ? services.map(escapeHtml).join(", ")
        : "Not specified";

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from:
        "Omkar Autocare Website <website@omkarautocare.com.au>",

      to: [TO_EMAIL],

      replyTo: email,

      subject: `New Omkar Autocare Enquiry — ${fullName}`,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#242424;">
          <div style="background:#111111;padding:24px 28px;">
            <h1 style="margin:0;color:#ffffff;font-size:22px;">
              New Omkar Autocare Enquiry
            </h1>
          </div>

          <div style="padding:28px;border:1px solid #e5e5e5;">
            <table
              cellpadding="0"
              cellspacing="0"
              style="width:100%;border-collapse:collapse;"
            >
              <tr>
                <td style="padding:10px 0;font-weight:bold;width:180px;">
                  Full Name
                </td>
                <td style="padding:10px 0;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Contact Number
                </td>
                <td style="padding:10px 0;">
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Email Address
                </td>
                <td style="padding:10px 0;">
                  ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Vehicle Rego
                </td>
                <td style="padding:10px 0;">
                  ${safeRego}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Home Address
                </td>
                <td style="padding:10px 0;">
                  ${safeAddress}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Services Required
                </td>
                <td style="padding:10px 0;">
                  ${safeServices}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Submitted From
                </td>
                <td style="padding:10px 0;">
                  ${safeSubmittedFrom}
                </td>
              </tr>
            </table>

            <p style="margin:24px 0 0;color:#666;font-size:13px;">
              This enquiry was submitted through the Omkar Autocare website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Your enquiry could not be sent. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Omkar contact submission error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}