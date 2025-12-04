import { d as defineEventHandler, g as getHeader, a as getRequestIP, r as readBody, c as createError, s as sendEmail, b as useRuntimeConfig } from '../../_/nitro.mjs';
import 'resend';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const RECENT_BY_IP = /* @__PURE__ */ new Map();
const form_post = defineEventHandler(async (event) => {
  var _a, _b;
  const ip = ((_b = (_a = getHeader(event, "x-forwarded-for")) == null ? void 0 : _a.split(",")[0]) == null ? void 0 : _b.trim()) || getRequestIP(event) || "unknown";
  const body = await readBody(event);
  if (body == null ? void 0 : body.website) {
    throw createError({ statusCode: 400, message: "Spam d\xE9tect\xE9" });
  }
  const now = Date.now();
  const last = RECENT_BY_IP.get(ip) || 0;
  if (now - last < 2e4) {
    throw createError({
      statusCode: 429,
      message: "Trop de requ\xEAtes, r\xE9essaie dans un instant."
    });
  }
  RECENT_BY_IP.set(ip, now);
  const config = useRuntimeConfig();
  const firstname = ((body == null ? void 0 : body.firstname) || "").trim();
  const email = ((body == null ? void 0 : body.email) || "").trim();
  const phone = ((body == null ? void 0 : body.phone) || "").trim();
  const found = ((body == null ? void 0 : body.found) || "").trim();
  const message = ((body == null ? void 0 : body.message) || "").trim();
  if (!firstname || !email || !found || !message) {
    throw createError({
      statusCode: 400,
      message: "Champs obligatoire manquant"
    });
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    throw createError({ statusCode: 400, statusMessage: "Email invalide." });
  }
  const visitorHtml = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
      <h2>Merci ${firstname} !</h2>
      <p>Votre demande a bien \xE9t\xE9 prise en compte. Je reviens vers vous rapidement.</p>
      <hr/>
      <p><strong>Copie de votre message :</strong></p>
      <blockquote style="white-space:pre-wrap">${escapeHtml(
    message
  )}</blockquote>
      <p style="color:#667085;font-size:12px">Cet email a \xE9t\xE9 envoy\xE9 automatiquement depuis mon portfolio.</p>
    </div>
  `;
  const ownerHtml = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
      <h2>Nouveau message via le portfolio</h2>
      <ul>
        <li><strong>Nom:</strong> ${escapeHtml(firstname)}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>T\xE9l\xE9phone:</strong>${escapeHtml(phone)}</li>
        <li><strong>IP:</strong> ${escapeHtml(ip)}</li>
        <li><strong>Date:</strong> ${(/* @__PURE__ */ new Date()).toISOString()}</li>
      </ul>
      <hr/>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    </div>
  `;
  try {
    await sendEmail({
      to: email,
      subject: "Demande re\xE7u - Merci pour votre message",
      html: visitorHtml,
      text: `Merci ${firstname} ! Votre demande a bien \xE9t\xE9 prise en compte.

\u2014 Copie de votre message \u2014
${message}`,
      replyTo: config.ownerEmail,
      tags: [{ name: "type", value: "auto-ack" }]
    });
    await sendEmail({
      to: config.ownerEmail,
      subject: `Nouveau contact : ${firstname} <${email}>`,
      html: ownerHtml,
      text: `Nom: ${firstname}
Email: ${email}
IP: ${ip}

Message:
${message}`
    });
    return { ok: true };
  } catch (e) {
    console.error("Contact form error:", e);
    throw createError({
      statusCode: 502,
      message: "Envoie impossible pour le moment"
    });
  }
});
const escapeHtml = (s) => {
  return s.replace(
    /[&<>"']/g,
    (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]
  );
};

export { form_post as default };
//# sourceMappingURL=form.post.mjs.map
