import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  integrations: [
    react(),
    tailwind()
  ],
  vite: {
    // Add any Vite config here
  },
  image: {
    domains: ["static.wixstatic.com"],
  }
});
