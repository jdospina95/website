// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/website/',
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
});
