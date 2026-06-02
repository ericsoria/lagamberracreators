export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  experimental: {
    appManifest: false
  },
  runtimeConfig: {
    brevoApiKey: process.env.BREVO_API_KEY,
    mailFromEmail: process.env.MAIL_FROM_EMAIL,
    mailFromName: process.env.MAIL_FROM_NAME,
    mailTo: process.env.MAIL_TO
  },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "es"
      },
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        }
      ]
    }
  }
})
