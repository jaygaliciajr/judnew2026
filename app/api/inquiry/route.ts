import { NextResponse } from "next/server";

import {
  buildInquiryEmail,
  INQUIRY_RECIPIENTS,
  INQUIRY_SENDER,
  type InquiryPayload
} from "@/lib/inquiry";

function isContactPayload(payload: unknown): payload is Extract<InquiryPayload, { type: "contact" }> {
  if (!payload || typeof payload !== "object") return false;
  const value = payload as Record<string, unknown>;
  return (
    value.type === "contact" &&
    typeof value.name === "string" &&
    typeof value.email === "string" &&
    typeof value.message === "string"
  );
}

function isQuotePayload(payload: unknown): payload is Extract<InquiryPayload, { type: "quote" }> {
  if (!payload || typeof payload !== "object") return false;
  const value = payload as Record<string, unknown>;
  return (
    value.type === "quote" &&
    typeof value.service === "string" &&
    typeof value.name === "string" &&
    typeof value.email === "string" &&
    Array.isArray(value.answers)
  );
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Add RESEND_API_KEY to the environment." },
      { status: 500 }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isContactPayload(payload) && !isQuotePayload(payload)) {
    return NextResponse.json({ error: "Invalid inquiry payload." }, { status: 400 });
  }

  const email = buildInquiryEmail(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: `judygaliciajr.com <${INQUIRY_SENDER}>`,
      to: [...INQUIRY_RECIPIENTS],
      reply_to: payload.email,
      subject: email.subject,
      html: email.html,
      text: email.text
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();

    return NextResponse.json(
      { error: "Failed to send inquiry email.", details: errorBody },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
