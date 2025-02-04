import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.plugins("simple-import-sort"),
  ...compat.extends("@rocketseat/eslint-config/next", "next/core-web-vitals", "next/typescript"),
  ...compat.config({
    "rules": {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": "latest"
    }
  })
];

export default eslintConfig;
