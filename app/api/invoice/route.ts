import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: NextRequest) {
  try {
    const { clientName, clientEmail, description, amount } = await req.json();

    if (!clientName || !clientEmail || !description || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create or retrieve a Stripe customer
    const existingCustomers = await stripe.customers.list({ email: clientEmail, limit: 1 });
    let customer;

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        name: clientName,
        email: clientEmail,
      });
    }

    // Create a Payment Link via a one-time price
    const price = await stripe.prices.create({
      unit_amount: Math.round(amount * 100), // convert to cents
      currency: "usd",
      product_data: {
        name: description,
      },
    });

    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: price.id, quantity: 1 }],
      customer_creation: "always",
      after_completion: {
        type: "hosted_confirmation",
        hosted_confirmation: {
          custom_message: `Thank you, ${clientName}! Payment received. Romero & Locksley will be in touch shortly.`,
        },
      },
    });

    // Send invoice email via Stripe
    await stripe.invoices.create({
      customer: customer.id,
      auto_advance: true, // auto-finalize
      collection_method: "send_invoice",
      days_until_due: 7,
      description: description,
    }).then(async (invoice) => {
      await stripe.invoiceItems.create({
        customer: customer.id,
        invoice: invoice.id,
        amount: Math.round(amount * 100),
        currency: "usd",
        description: description,
      });
      await stripe.invoices.finalizeInvoice(invoice.id);
      await stripe.invoices.sendInvoice(invoice.id);
    });

    return NextResponse.json({ url: paymentLink.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Failed to create payment link" }, { status: 500 });
  }
}