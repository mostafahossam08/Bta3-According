import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const interest = typeof body.interest === "string" ? body.interest.trim() : "general";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const locale = body.locale === "ar" ? "ar" : "en";

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
    }

    const [created] = await db
      .insert(leads)
      .values({
        name: name.slice(0, 160),
        phone: phone.slice(0, 60),
        email: email ? email.slice(0, 160) : undefined,
        interest: interest.slice(0, 80),
        message: message ? message.slice(0, 2000) : undefined,
        locale,
      })
      .returning({ id: leads.id });

    return NextResponse.json({ ok: true, id: created?.id });
  } catch (error) {
    console.error("Failed to create lead", error);
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}

