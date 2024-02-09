import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

//autenticator
import vercelServerless from '@astrojs/vercel/serverless';
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), auth()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocales: false //es --> / ca --> /ca
    },
    fallback: {
      'ca': 'es'
    }
  },
  output: 'server',
  adapter: vercelServerless(),

});