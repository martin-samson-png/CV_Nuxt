/* import { sendEmail } from "../utils/email";

const RECENT_BY_IP = new Map<string, number>();

export default defineEventHandler(async (event) => {
  const ip =
    getHeader(event, "x-forwarded-for")?.split(",")[0]?.trim() ||
    getRequestIP(event) ||
    "unknown";
  const body = await readBody(event);

  if (body?.website) {
    throw createError({ statusCode: 400, message: "Spam détecté" });
  }

  const now = Date.now();
  const last = RECENT_BY_IP.get(ip) || 0;
  if (now - last < 20_000) {
    throw createError({
      statusCode: 429,
      message: "Trop de requêtes, réessaie dans un instant.",
    });
  }

  RECENT_BY_IP.set(ip, now);

  const config = useRuntimeConfig();

  const firstname = (body?.firstname || "").trim();
  const email = (body?.email || "").trim();
  const phone = (body?.phone || "").trim();
  const found = (body?.found || "").trim();
  const message = (body?.message || "").trim();

  if (!firstname || !email || !found || !message) {
    throw createError({
      statusCode: 400,
      message: "Champs obligatoire manquant",
    });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    throw createError({ statusCode: 400, statusMessage: "Email invalide." });
  }

  const visitorHtml = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
      <h2>Merci ${firstname} !</h2>
      <p>Votre demande a bien été prise en compte. Je reviens vers vous rapidement.</p>
      <hr/>
      <p><strong>Copie de votre message :</strong></p>
      <blockquote style="white-space:pre-wrap">${escapeHtml(
        message
      )}</blockquote>
      <p style="color:#667085;font-size:12px">Cet email a été envoyé automatiquement depuis mon portfolio.</p>
    </div>
  `;

  const ownerHtml = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
      <h2>Nouveau message via le portfolio</h2>
      <ul>
        <li><strong>Nom:</strong> ${escapeHtml(firstname)}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>Téléphone:</strong>${escapeHtml(phone)}</li>
        <li><strong>IP:</strong> ${escapeHtml(ip)}</li>
        <li><strong>Date:</strong> ${new Date().toISOString()}</li>
      </ul>
      <hr/>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    </div>
  `;

  try {
    await sendEmail({
      to: email,
      subject: "Demande reçu - Merci pour votre message",
      html: visitorHtml,
      text: `Merci ${firstname} ! Votre demande a bien été prise en compte.\n\n— Copie de votre message —\n${message}`,
      replyTo: config.ownerEmail,
      tags: [{ name: "type", value: "auto-ack" }],
    });

    await sendEmail({
      to: config.ownerEmail,
      subject: `Nouveau contact : ${firstname} <${email}>`,
      html: ownerHtml,
      text: `Nom: ${firstname}\nEmail: ${email}\nIP: ${ip}\n\nMessage:\n${message}`,
    });
    return { ok: true };
  } catch (e) {
    console.error("Contact form error:", e);
    throw createError({
      statusCode: 502,
      message: "Envoie impossible pour le moment",
    });
  }
});

const escapeHtml = (s: string) => {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c] as string)
  );
};
 */
