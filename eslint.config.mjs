// eslint.config.mjs
import js from "@eslint/js";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const config = [
  // Ignore paths
  {
    ignores: ["components/ui/**/*"],
  },

  // Base recommended configs
  js.configs.recommended,

  // Next.js config
  ...next,

  // Prettier
  prettier,

  // Custom rules
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@app/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "comma-dangle": "off",
    },
  },

  // TypeScript overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off",
    },
  },
];

export default config;
