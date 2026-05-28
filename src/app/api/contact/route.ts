import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formatContactEmail } from "@/lib/contact/format";
import type { ContactFormPayload } from "@/lib/contact/types";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const adminEmail = process.env.CONTACT_ADMIN_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "노린스 문의 <onboarding@resend.dev>";

  if (!adminEmail || !resendApiKey) {
    return NextResponse.json(
      { error: "문의 메일 설정이 완료되지 않았습니다." },
      { status: 503 }
    );
  }

  let body: ContactFormPayload;
  try {
    body = (await request.json()) as ContactFormPayload;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "이름과 유효한 이메일을 입력해 주세요." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);
  const text = formatContactEmail(body);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: adminEmail,
    replyTo: email,
    subject: `[노린스 문의] ${name}`,
    text,
  });

  if (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json(
      { error: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
