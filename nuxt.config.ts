import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/var.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
  ],
  googleFonts: {
    families: {
      Roboto: [400, 700],
      "Open+Sans": true,
    },
    display: "swap",
  },
});
