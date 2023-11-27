export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
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
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
});
