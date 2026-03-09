export const INQUIRY_RECIPIENTS = ["hello@judygaliciajr.com", "jaygaliciajr@gmail.com"] as const;
export const INQUIRY_SENDER = "hello@judygaliciajr.com";

export type InquiryPayload =
  | {
      type: "contact";
      name: string;
      email: string;
      company?: string;
      service?: string;
      message: string;
    }
  | {
      type: "quote";
      service: string;
      answers: Array<{ label: string; value: string }>;
      name: string;
      email: string;
      company?: string;
      details?: string;
    };

export function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildInquiryEmail(payload: InquiryPayload) {
  if (payload.type === "contact") {
    const subject = `New Contact Inquiry · ${payload.name}`;
    const lines = [
      `Inquiry Type: Contact`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Business / Company: ${payload.company || "-"}`,
      `Service Needed: ${payload.service || "-"}`,
      `Message: ${payload.message}`
    ];

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#0f172a">
        <h2 style="margin:0 0 16px;font-size:22px;">New Contact Inquiry</h2>
        <p style="margin:0 0 16px;">A new inquiry was submitted through the contact page.</p>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          <tbody>
            ${[
              ["Name", payload.name],
              ["Email", payload.email],
              ["Business / Company", payload.company || "-"],
              ["Service Needed", payload.service || "-"],
              ["Message", payload.message]
            ]
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;font-weight:600;width:190px;">${escapeHtml(label)}</td>
                    <td style="padding:10px 0;vertical-align:top;">${escapeHtml(value)}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    return { subject, text: lines.join("\n"), html };
  }

  const subject = `New Quote Request · ${payload.service} · ${payload.name}`;
  const lines = [
    `Inquiry Type: Quote Request`,
    `Service: ${payload.service}`,
    ...payload.answers.map((item) => `${item.label}: ${item.value}`),
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Business / Company: ${payload.company || "-"}`,
    `Project Details: ${payload.details || "-"}`
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#0f172a">
      <h2 style="margin:0 0 16px;font-size:22px;">New Quote Request</h2>
      <p style="margin:0 0 16px;">A new quote request was submitted through the guided quote flow.</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        <tbody>
          ${[
            ["Service", payload.service],
            ...payload.answers.map((item) => [item.label, item.value] as const),
            ["Name", payload.name],
            ["Email", payload.email],
            ["Business / Company", payload.company || "-"],
            ["Project Details", payload.details || "-"]
          ]
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:10px 0;vertical-align:top;font-weight:600;width:190px;">${escapeHtml(label)}</td>
                  <td style="padding:10px 0;vertical-align:top;">${escapeHtml(value)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  return { subject, text: lines.join("\n"), html };
}
