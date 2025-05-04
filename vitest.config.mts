/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import {getViteConfig} from "astro/config";

export default getViteConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./vitest.setup.ts",
    environment: "jsdom",
    coverage: {
      reporter: ["html"],
      include: ["src/**/*.{ts,tsx,astro}"]
    }
  }
});
