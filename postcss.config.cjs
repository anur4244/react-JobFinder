module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ✅ Correct for Tailwind v4
    require('autoprefixer'),
  ],
};
