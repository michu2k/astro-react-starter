/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  bracketSameLine: true,
  bracketSpacing: true,
  trailingComma: "none",
  quoteProps: "consistent",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};
