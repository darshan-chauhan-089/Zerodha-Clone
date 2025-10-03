import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

// eslint/config is not exported by some eslint versions; exporting the flat config
// array directly avoids importing that internal entrypoint and prevents
// ERR_PACKAGE_PATH_NOT_EXPORTED errors.
export default [
  // include the @eslint/js recommended flat config if available, otherwise the
  // non-flat recommended config. This replaces the old "extends: ['js/recommended']"
  // which is not supported by the flat config system.
  js?.configs?.flat?.recommended ?? js?.configs?.recommended ?? {},
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      // "react/prop-types": "off",
      // "react/react-in-jsx-scope": "off",
      // "react/jsx-uses-react": "off",
      // "react/no-unescaped-entities": "off",
    },
  },
  // include recommended flat config from eslint-plugin-react if available
  pluginReact?.configs?.flat?.recommended ?? {},
];
