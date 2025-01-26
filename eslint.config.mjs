import stylisticTsPlugin from "@stylistic/eslint-plugin-ts";
import eslintAstro from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import eslintTs from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  ...eslintTs.configs.recommended,
  ...eslintAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    name: "Common config",
    plugins: {
      "@stylistic/ts": stylisticTsPlugin,
      "unused-imports": unusedImportsPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "import": importPlugin
    },
    rules: {
      "@stylistic/ts/indent": ["error", 2, {offsetTernaryExpressions: true}],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "import/newline-after-import": "error",
      "import/no-mutable-exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["server-only"],
            // Node.js builtins prefixed with `node:`.
            ["^node:"],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ["^react", "^@/layouts/\\w", "^@?\\w"],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ["^"],
            // Relative imports.
            // Anything that starts with a dot.
            ["^\\."],
            // Side effect imports.
            ["^\\u0000"]
          ]
        }
      ]
    }
  },
  {
    name: "Astro config",
    files: ["**/*.{astro}"],
    rules: {}
  },
  {
    name: "React config",
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    rules: {}
  },
  {
    ignores: ["dist", ".astro"]
  }
];
