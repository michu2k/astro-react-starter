import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "astro/config";

export default defineConfig({
  trailingSlash: "never",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
