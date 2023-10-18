// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
