import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  province?: string;
  farmType?: string;
  birdCount?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as Payload;

  if (!data.name || !data.company || !data.email || !data.message) {
    return NextResponse.json({ ok: false, error: "Missing fields." }, { status: 400 });
  }

  // TODO: Connect to your email provider or CRM.
  // Example: SendGrid, Postmark, Resend, or a webhook endpoint.

  return NextResponse.json({ ok: true });
}
