import { NextResponse } from "next/server";

// Contact form POST handler.
// For production, wire this up to a transactional email provider (Resend, Postmark, SES)
// or a CRM endpoint (HubSpot, Salesforce) by setting CONTACT_FORWARD_URL or RESEND_API_KEY.
//
// Current behavior: validates payload, logs to server console, returns 200.
// The form UI already handles success/error states from this response.

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  stage?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const { name, email, company, stage, message } = data;

  if (!name || !email || !company || !stage) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 },
    );
  }

  // --- Delivery -----------------------------------------------------
  // Option A: forward to a webhook (Zapier / Make / custom endpoint)
  const forwardUrl = process.env.CONTACT_FORWARD_URL;
  if (forwardUrl) {
    try {
      await fetch(forwardUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "startpointagency.com/contact",
          ...data,
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("[contact] forward failed", err);
      // fall through — we don't want to leak provider failure to the user
    }
  }

  // Option B: Resend email (uncomment after `npm i resend` and set RESEND_API_KEY)
  // const resendKey = process.env.RESEND_API_KEY;
  // if (resendKey) {
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(resendKey);
  //   await resend.emails.send({
  //     from: "contact@startpointagency.com",
  //     to: "contact@startpoint.ai",
  //     subject: `[StartPoint] ${name} · ${company}`,
  //     text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nStage: ${stage}\n\n${message ?? ""}`,
  //   });
  // }

  // Always log in dev/staging so the founder can see submissions locally
  console.log("[contact] new submission", {
    name,
    email,
    company,
    stage,
    message,
  });

  return NextResponse.json({ ok: true });
}
