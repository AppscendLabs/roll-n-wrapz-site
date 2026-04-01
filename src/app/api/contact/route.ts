import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const vehicle = formData.get("vehicle") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;
  const fileEntries = formData.getAll("files") as File[];

  // Convert attached files to Resend attachment format
  const attachments = await Promise.all(
    fileEntries
      .filter((f) => f.size > 0)
      .map(async (f) => ({
        filename: f.name,
        content: Buffer.from(await f.arrayBuffer()),
      }))
  );

  const { error } = await resend.emails.send({
    from: "Roll N Wrapz <onboarding@resend.dev>",
    to: ["admin@rollnwrapz.com"],
    replyTo: email,
    subject: `New Quote Request from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8dc63f;">New Quote Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Vehicle</strong></td><td style="padding: 8px 0;">${vehicle}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Service</strong></td><td style="padding: 8px 0;">${service}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Message</strong></td><td style="padding: 8px 0;">${message || "—"}</td></tr>
        </table>
        ${attachments.length > 0 ? `<p style="color: #666; margin-top: 16px;">${attachments.length} file(s) attached.</p>` : ""}
      </div>
    `,
    attachments,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
