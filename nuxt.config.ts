export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: "vercel", externals: { inline: ["resend"] } },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  srcDir: "app",
  css: ["@/assets/css/variables.css", "@/assets/css/base.css"],
});
