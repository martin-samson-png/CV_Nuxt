import { Resend } from "resend";

type SendArgs = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  tags?: { name: string; value: string }[];
};

export const sendEmail = async ({
  to,
  subject,
  html,
  text,
  replyTo,
  tags,
}: SendArgs) => {
  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);
  try {
    const { data, error } = await resend.emails.send({
      from: config.resendFrom,
      to: to,
      subject: subject,
      html: html,
      text: text,
      replyTo: replyTo,
      tags: tags,
      headers: { "Idempotency-Key": crypto.randomUUID() },
    });

    if (error) {
      console.error(error);
      throw createError({
        statusCode: 502,
        message: "Envoi email impossible",
      });
    }

    return data;
  } catch (error) {
    throw createError({ statusCode: 500, message: "Erreur interne email" });
  }
};
