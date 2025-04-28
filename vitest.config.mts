/// <reference types="vitest" />
import {getViteConfig} from "astro/config";

export default getViteConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      reporter: ["html"],
      include: ["src/**/*.{ts,tsx,astro}"]
    }
  }
});
