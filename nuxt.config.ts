import { preset } from "process";

export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: "vercel" },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    resendFrom: process.env.RESEND_FROM,
    ownerEmail: process.env.OWNER_EMAIL,
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  srcDir: "app",
  css: ["@/assets/css/variables.css", "@/assets/css/base.css"],
});
