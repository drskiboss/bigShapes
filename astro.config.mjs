import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// Remove the Cloudflare adapter import
// import cloudflare from '@astrojs/cloudflare'; // Remove this line

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  // Use the default static site deployment instead
  // adapter: cloudflare({ platformProxy: { enabled: true } }), // Remove this line
});

