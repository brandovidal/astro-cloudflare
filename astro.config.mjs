import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  output: 'server',
  adapter: cloudflare(),
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: []
    }
  }
})
