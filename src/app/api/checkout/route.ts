import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";
import { cleanString } from "@/lib/api-route-helpers";
import { getPaymentPackage } from "@/lib/pricing";
import { getStripeClient } from "@/lib/stripe";

type CheckoutPayload = {
  packageId?: string;
};

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 4_000) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let payload: CheckoutPayload;
  try {
    payload = (await req.json()) as CheckoutPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const packageId = cleanString(payload.packageId, 80);
  // Resolve the price server-side — never trust an amount from the client.
  const pkg = packageId ? getPaymentPackage(packageId) : undefined;
  if (!pkg) {
    return NextResponse.json({ error: "Unknown package." }, { status: 400 });
  }

  // Return to wherever the request came from (localhost in dev, the live
  // domain in prod), falling back to the canonical site URL.
  const origin = req.headers.get("origin") || site.url;

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: pkg.currency,
            unit_amount: pkg.priceCents,
            product_data: {
              name: pkg.name,
              description: pkg.description,
            },
          },
        },
      ],
      // Collect an email so Stripe can send its built-in receipt.
      billing_address_collection: "auto",
      metadata: { packageId: pkg.id },
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment?canceled=1`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch {
    // Avoid leaking Stripe error details / config state to the client.
    return NextResponse.json({ error: "Unable to start checkout right now." }, { status: 500 });
  }
}
