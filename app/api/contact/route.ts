import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SCORE_THRESHOLD = 0.5;

function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || null;
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return null;
}

async function lookupCountry(
  ip: string | null
): Promise<{ leadCountry: string | null; leadCountryCode: string | null }> {
  if (!ip) return { leadCountry: null, leadCountryCode: null };
  try {
    const res = await fetch(
      `http://ip-api.com/json/${encodeURIComponent(
        ip
      )}?fields=status,country,countryCode`,
      { signal: AbortSignal.timeout(2000) }
    );
    if (!res.ok) return { leadCountry: null, leadCountryCode: null };
    const data = (await res.json()) as {
      status?: string;
      country?: string;
      countryCode?: string;
    };
    if (data.status !== "success") {
      return { leadCountry: null, leadCountryCode: null };
    }
    return {
      leadCountry: data.country ?? null,
      leadCountryCode: data.countryCode ?? null,
    };
  } catch {
    return { leadCountry: null, leadCountryCode: null };
  }
}

export async function POST(request: Request) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;

  if (!secret || !webhookUrl) {
    return NextResponse.json(
      { error: "Server misconfiguration." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const token = typeof body.recaptchaToken === "string" ? body.recaptchaToken : "";
  if (!token) {
    return NextResponse.json(
      { error: "Missing captcha token." },
      { status: 400 }
    );
  }

  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    }
  );

  const verifyData = (await verifyRes.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
  };

  if (
    !verifyData.success ||
    typeof verifyData.score !== "number" ||
    verifyData.score < SCORE_THRESHOLD ||
    verifyData.action !== "contact"
  ) {
    return NextResponse.json(
      { error: "Captcha verification failed." },
      { status: 403 }
    );
  }

  const { recaptchaToken: _t, ...forwardedPayload } = body;
  void _t;

  const ip = getClientIp(request);
  const { leadCountry, leadCountryCode } = await lookupCountry(ip);

  const forwardPayload = {
    ...forwardedPayload,
    leadCountry,
    leadCountryCode,
    leadIp: ip,
    recaptchaScore: verifyData.score,
  };

  const forwardRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(forwardPayload),
  });

  if (!forwardRes.ok) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
