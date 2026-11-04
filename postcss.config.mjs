// Tailwind CSS v4 is applied through its PostCSS plugin.
// Without this file, `@import "tailwindcss"` in globals.css is never processed
// and none of the utility classes (fixed, flex, text-white, ...) take effect.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
