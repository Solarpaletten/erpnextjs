// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// конвертер для legacy-конфигов (extends: "next/core-web-vitals")
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // 1) игнорим сборку и кеши
  { ignores: [".next/**", "node_modules/**", "dist/**", "out/**", ".turbo/**"] },

  // 2) next/core-web-vitals как flat-конфиг
  ...compat.extends("next/core-web-vitals"),

  // 3) наши доп. правила
  {
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "react-hooks/exhaustive-deps": "warn",
      // Временный костыль, если не хочешь править апострофы руками:
      // "react/no-unescaped-entities": "off",
    },
  },
];
