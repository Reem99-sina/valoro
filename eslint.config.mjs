import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
    js.configs.recommended,
  
  // Add TypeScript support
  ...tseslint.configs.recommended,
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:@tanstack/eslint-plugin-query/recommended",
    ],
    plugins: ["import", "@tanstack/eslint-plugin-query", "@tanstack/query"],
    rules: {
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-var-requires": "off",
      "lines-around-comment": [
        "off",
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],
      "newline-before-return": "error",
      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],
      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/prefer-query-object-syntax": "error",
      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"],
        },
      },
    },
  }),

  // Add specific configurations for different file types
  {
    files: ["src/**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  // Add TanStack Query plugin configuration
  tanstackQueryPlugin.configs.recommended,
];

export default eslintConfig;
