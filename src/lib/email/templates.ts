import { site } from "@/lib/site";
import { escapeHtml } from "@/lib/email/escape-html";

const BRAND_PRIMARY = "#17788e";
const BRAND_DEEP = "#264653";
const BRAND_MUTED = "#6c7a7c";
const BRAND_BG = "#f7f9fa";

function brandedShell(inner: string, preheader: string): string {
  const safePre = escapeHtml(preheader);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safePre}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND_BG};font-family:Georgia,'Times New Roman',serif;">
  <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;">${safePre}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND_BG};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid rgba(23,120,142,0.18);">
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND_PRIMARY} 0%,${BRAND_DEEP} 100%);padding:20px 24px;">
              <p style="margin:0;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.9);">${escapeHtml(site.shortName)}</p>
              <p style="margin:6px 0 0;font-family:Georgia,serif;font-size:22px;font-weight:600;color:#ffffff;line-height:1.25;">${escapeHtml(site.name)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px 32px;font-size:16px;line-height:1.55;color:${BRAND_DEEP};">
              ${inner}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 22px;background:${BRAND_BG};border-top:1px solid rgba(38,70,83,0.08);">
              <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:${BRAND_MUTED};text-align:center;">
                ${escapeHtml(site.url)}<br />
                Questions? Reply to this message or write to ${escapeHtml(site.email)}.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function contactInquiryOwnerHtml(input: {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
  sourcePage: string;
}): string {
  const inner = `
    <p style="margin:0 0 8px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND_PRIMARY};">Website inquiry</p>
    <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:22px;font-weight:600;color:${BRAND_DEEP};line-height:1.3;">New message</h1>
    <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:${BRAND_DEEP};"><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p style="margin:8px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:${BRAND_DEEP};"><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p style="margin:8px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:${BRAND_DEEP};"><strong>Company:</strong> ${escapeHtml(input.company || "N/A")}</p>
    <p style="margin:8px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:${BRAND_DEEP};"><strong>Industry:</strong> ${escapeHtml(input.industry || "N/A")}</p>
    <p style="margin:8px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:${BRAND_DEEP};"><strong>Source page:</strong> ${escapeHtml(input.sourcePage)}</p>
    <hr style="margin:18px 0;border:none;border-top:1px solid rgba(108,122,124,0.25);" />
    <p style="margin:0 0 6px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;color:${BRAND_DEEP};">Message</p>
    <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:${BRAND_MUTED};">${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
  `;
  return brandedShell(inner, `Inquiry from ${input.name}`);
}
