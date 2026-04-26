import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, shippingState, shippingZip, cartItems, notes } = body;

    if (!name || !email || !cartItems || cartItems.length === 0) {
      return Response.json(
        { error: "Missing required order information." },
        { status: 400 }
      );
    }

    const orderList = cartItems
      .map(
        (item: any) =>
          `${item.name} - ${item.size || ""} - Qty: ${item.quantity} - $${item.price}`
      )
      .join("\n");

    await resend.emails.send({
      from: "Valence Biologics <onboarding@resend.dev>",
      to: process.env.ORDER_EMAIL!,
      subject: "New Order Request",
      replyTo: email,
      text: `
New order request:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
State: ${shippingState}
Zip Code: ${shippingZip}

Order:
${orderList}

Notes:
${notes || "None"}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to send order request." },
      { status: 500 }
    );
  }
}