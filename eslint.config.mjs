import next from "eslint-config-next";

const config = [
  ...next,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "jsx-a11y/alt-text": "warn", // override or add rules
    },
  },
];

export default config;
