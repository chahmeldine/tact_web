export default defineNuxtConfig({
  compatibilityDate: '2026-05-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tokens.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001/api/v1',
      androidAppUrl: process.env.NUXT_PUBLIC_ANDROID_APP_URL,
      appGalleryUrl: process.env.NUXT_PUBLIC_APP_GALLERY_URL,
      iosAppUrl: process.env.NUXT_PUBLIC_IOS_APP_URL,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s · TACT',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: 'Carte de visite digitale TACT.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/brand/tact-logo-white.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&family=Syne:wght@700;800&display=swap',
        },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
