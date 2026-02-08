export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'entry'
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        path: '/hmr',
      },
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locale',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'de', file: 'de.json' },
      { code: 'es', file: 'es.json' }
    ],
    defaultLocale: 'en',
  },
});
