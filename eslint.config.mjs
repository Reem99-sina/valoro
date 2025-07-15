import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
// import tanstackQueryPlugin from "@tanstack/eslint-plugin-query";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Next.js + TypeScript + Prettier + TanStack
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:@tanstack/eslint-plugin-query/recommended",
    ],

    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/ban-ts-comment": "error",

      "@typescript-eslint/no-non-null-assertion": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-var-requires": "off",
      "lines-around-comment": "off",
      "newline-before-return": "error",
      "import/newline-after-import": ["error", { count: 1 }],

      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unsafe-function-type": "off",
      
      "@typescript-eslint/no-empty-object-type": "warn",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  }),
];
